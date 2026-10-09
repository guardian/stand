import { useState } from 'react';
import { mergeDeep } from '../../util/mergeDeep';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { InlineMessage } from '../InlineMessage/InlineMessage';
import { Link } from '../Link/Link';
import { PickerIframeModal } from '../PickerIframeModal/PickerIframeModal';
import { CopyTextButton } from './CopyTextButton';
import {
	checkCropHasAllowedAspectRatio,
	extractAsset,
	validateGridData,
} from './gridApi';
import { GridIcon } from './GridIcon';
import {
	defaultGridImagePickerTheme,
	gridImagePickerStyles,
	imagePreviewStyles,
} from './styles';
import type { GridImagePickerProps, ImageAndCrop } from './types';

const getCropPageUrl = (gridUri: string, imageId: string, cropId: string) =>
	`${gridUri}/images/${imageId}?crop=${cropId}`;

const getImageOrCropPageUrl = (
	gridUri: string,
	imageId: string,
	cropId?: string,
) =>
	cropId
		? getCropPageUrl(gridUri, imageId, cropId)
		: `${gridUri}/images/${imageId}`;

export const GridImagePicker = ({
	gridUri,
	handleCropData,
	allowedAspectRatios,
	initialValues,
	noThumbnail,
	theme = {},
}: GridImagePickerProps) => {
	const mergedTheme = mergeDeep(defaultGridImagePickerTheme, theme);
	const [gridPageOpen, seGridPageOpen] = useState<'search' | 'image'>();
	const [lastImageId, setLastImageId] = useState(initialValues?.imageId);
	const [lastCropId, setLastCropId] = useState(initialValues?.cropId);
	const [imageAssetUrl, setImageAssetUrl] = useState(
		initialValues?.imageAssetUrl,
	);
	const [failureFeedback, setFailureFeedBack] = useState<string>();

	const gridUiLink =
		lastImageId && getImageOrCropPageUrl(gridUri, lastImageId, lastCropId);

	const handleImageAndCrop = ({ crop, image }: ImageAndCrop) => {
		setLastImageId(image.id);
		if (!checkCropHasAllowedAspectRatio(crop, allowedAspectRatios)) {
			setLastCropId(undefined);
			setFailureFeedBack(
				`Please select crop with the right aspect rato (${allowedAspectRatios?.join(' or ')})`,
			);
			return;
		}
		setLastCropId(crop.id);
		const asset = extractAsset(crop);
		const imageAssetUrl = asset?.file;

		if (!imageAssetUrl) {
			setFailureFeedBack('Could not identify file to use');
			return;
		}
		setImageAssetUrl(imageAssetUrl);

		handleCropData({
			crop,
			image,
			asset,
			cropPageUrl: getCropPageUrl(gridUri, image.id, crop.id),
			imageAssetUrl,
		});
	};

	const iframeHref = gridPageOpen
		? lastImageId && gridPageOpen === 'image'
			? `${gridUri}/images/${lastImageId}?cropType=all&defaultCropType=landscape`
			: `${gridUri}/search?cropType=all&defaultCropType=landscape`
		: undefined;

	return (
		<section css={gridImagePickerStyles(mergedTheme)}>
			{!noThumbnail && (
				<div css={imagePreviewStyles(mergedTheme)}>
					{imageAssetUrl ? (
						<img src={imageAssetUrl} alt="image preview" />
					) : (
						<Icon symbol="replace_image" size="lg" />
					)}
				</div>
			)}

			<Button
				icon={<GridIcon />}
				onClick={() => {
					seGridPageOpen('search');
					setFailureFeedBack(undefined);
				}}
			>
				Pick Image
			</Button>

			{lastImageId && (
				<Button
					icon="crop"
					onClick={() => {
						seGridPageOpen('image');
						setFailureFeedBack(undefined);
					}}
				>
					Change crop
				</Button>
			)}

			<div>
				{gridUiLink && (
					<>
						<Link target="_blank" href={gridUiLink}>
							open {lastCropId ? 'crop' : 'image'} page
						</Link>
						<CopyTextButton textToCopy={gridUiLink} label="copy link" />
					</>
				)}
			</div>

			{failureFeedback && (
				<InlineMessage level="error">{failureFeedback}</InlineMessage>
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
