import { useState } from 'react';
import { mergeDeep } from '../../util/mergeDeep';
import { Button } from '../Button/Button';
import { InlineMessage } from '../InlineMessage/InlineMessage';
import { LinkButton } from '../LinkButton/LinkButton';
import { PickerIframeModal } from '../PickerIframeModal/PickerIframeModal';
import { CopyTextButton } from './CopyTextButton';
import {
	checkCropHasAllowedAspectRatio,
	extractAsset,
	validateGridData,
} from './gridApi';
import { GridIcon } from './GridIcon';
import {
	getCropPageUrl,
	getCropSelectPage,
	getGridImageUrl,
	getImageOrCropPageUrl,
	getImageSearchPage,
} from './gridUri';
import {
	copyButtonStyles,
	cropButtonStyles,
	defaultGridImagePickerTheme,
	errorStyles,
	gridImagePickerStyles,
	imageButtonStyles,
	imagePreviewStyles,
	linkButtonStyles,
} from './styles';
import type { GridImagePickerProps, ImageAndCrop } from './types';

export const GridImagePicker = ({
	gridUri,
	gridImageSourceDomain,
	handleCropData,
	allowedAspectRatios,
	initialValues,
	noThumbnail,
	theme = {},
	hideDisabledButtons = false,
	noPageUrlButton = false,
	initialFailure,
}: GridImagePickerProps) => {
	const mergedTheme = mergeDeep(defaultGridImagePickerTheme, theme);
	const [gridPageOpen, seGridPageOpen] = useState<'search' | 'image'>();
	const [failureFeedback, setFailureFeedBack] = useState(initialFailure);

	const [assetUrl, setAssetUrl] = useState(initialValues?.assetUrl);
	const [imageId, setImageId] = useState(initialValues?.imageId);
	const [cropId, setCropId] = useState(initialValues?.cropId);
	const [imageSize, setImageSize] = useState(initialValues?.imageSize);

	const gridUiLink = imageId && getImageOrCropPageUrl(gridUri, imageId, cropId);

	const previewUrl =
		assetUrl ??
		(cropId && imageId && gridImageSourceDomain
			? getGridImageUrl(gridImageSourceDomain, imageId, cropId, imageSize)
			: undefined);

	const handleImageAndCrop = ({ crop, image }: ImageAndCrop) => {
		setImageId(image.id);
		if (!checkCropHasAllowedAspectRatio(crop, allowedAspectRatios)) {
			setCropId(undefined);
			setFailureFeedBack(
				`Please select crop with the right aspect rato (${allowedAspectRatios?.join(' or ')})`,
			);
			return;
		}
		setCropId(crop.id);
		const asset = extractAsset(crop);
		const imageAssetUrl = asset?.file;

		if (!imageAssetUrl) {
			setFailureFeedBack('Could not identify file to use');
			return;
		}
		setImageSize(asset.dimensions?.width);
		setAssetUrl(asset.file);

		handleCropData({
			crop,
			image,
			asset,
			cropPageUrl: getCropPageUrl(gridUri, image.id, crop.id),
			imageAssetUrl,
		});
	};

	const iframeHref = gridPageOpen
		? imageId && gridPageOpen === 'image'
			? getCropSelectPage(gridUri, imageId)
			: getImageSearchPage(gridUri)
		: undefined;

	const imageButtonLabel = imageId ? 'Change Image' : 'Pick Image';

	return (
		<section css={gridImagePickerStyles(mergedTheme)}>
			<Button
				cssOverrides={imageButtonStyles}
				icon={noThumbnail ? <GridIcon /> : undefined}
				theme={{
					shared: {},
					primary: {
						shared: {},
						md: {
							...(noThumbnail ? {} : { height: 'unseet' }),
						},
					},
				}}
				aria-label={imageButtonLabel}
				onClick={() => {
					seGridPageOpen('search');
					setFailureFeedBack(undefined);
				}}
			>
				{noThumbnail ? (
					<span>{imageButtonLabel}</span>
				) : (
					<div css={imagePreviewStyles(mergedTheme)}>
						{previewUrl ? (
							<img src={previewUrl} alt="image preview" />
						) : (
							<>
								<GridIcon />
								<span>{imageButtonLabel}</span>
							</>
						)}
					</div>
				)}
			</Button>

			{(imageId ?? !hideDisabledButtons) && (
				<Button
					isDisabled={!imageId}
					cssOverrides={cropButtonStyles}
					icon="crop"
					onClick={() => {
						seGridPageOpen('image');
						setFailureFeedBack(undefined);
					}}
				>
					Change crop
				</Button>
			)}

			{!noPageUrlButton && (gridUiLink ?? !hideDisabledButtons) && (
				<>
					<LinkButton
						isDisabled={!gridUiLink}
						variant="secondary"
						target="_blank"
						href={gridUiLink}
						cssOverrides={linkButtonStyles}
					>
						open {cropId ? 'crop' : 'image'} page
					</LinkButton>
					<div css={copyButtonStyles}>
						<CopyTextButton textToCopy={gridUiLink} label="copy link" />
					</div>
				</>
			)}

			{failureFeedback && (
				<InlineMessage cssOverrides={errorStyles} level="error">
					{failureFeedback}
				</InlineMessage>
			)}
			<PickerIframeModal
				showOpenInNewTabButton
				modalTheme={{
					overlay: { position: 'fixed' },
					modal: {
						position: 'absolute',
						width: '100%',
						maxWidth: '80vw',
						maxHeight: '80vh',
					},
				}}
				theme={{
					iframe: {
						height: '1000px',
						maxHeight: '70vh',
					},
				}}
				closeAfterHandling
				href={iframeHref}
				closeModal={() => seGridPageOpen(undefined)}
				title={'Pick an image'}
				validate={validateGridData}
				handleData={handleImageAndCrop}
			/>
		</section>
	);
};
