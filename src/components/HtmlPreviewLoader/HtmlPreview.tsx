import { useState } from 'react';
import { mergeDeep } from '../../util/mergeDeep';
import { AlertBanner } from '../AlertBanner/AlertBanner';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import {
	SegmentedControl,
	SegmentedControlItem,
} from '../SegmentedControl/SegmentedControl';
import { Typography } from '../Typography/Typography';
import {
	alertBannerContentsStyle,
	centeredStyle,
	defaultHtmlPreviewLoaderTheme,
	htmlPreviewLoaderStyles,
	iframeStyle,
	loadingIconStyle,
	previewColumnStyle,
	previewFrameStyle,
	reloadButtonStyle,
	spinAnimationStyle,
} from './styles';
import type { HtmlPreviewProps } from './types';

const defaultWidthOptions = [320, 375, 425, 650];

export const HtmlPreview = ({
	html,
	isLoading = false,
	errorMessage,
	attemptLoad,
	minHeight = 600,
	title,
	widthOptions = defaultWidthOptions,
	defaultWidth = 425,
	frameBackground = 'white',
	allowReloading = false,
	cssOverrides,
	theme,
}: HtmlPreviewProps) => {
	const mergedTheme = mergeDeep(defaultHtmlPreviewLoaderTheme, theme ?? {});
	const [frameWidth, setFrameWidth] = useState(defaultWidth);
	const showReloadButton =
		allowReloading && !errorMessage && !isLoading && !!attemptLoad;

	return (
		<div css={[htmlPreviewLoaderStyles(mergedTheme), cssOverrides]}>
			{title ? (
				<header>
					{typeof title === 'string' ? (
						<Typography variant="heading2Xl">{title}</Typography>
					) : (
						title
					)}
				</header>
			) : null}

			<div
				css={[
					previewFrameStyle(mergedTheme),
					{
						minHeight: minHeight,
					},
				]}
			>
				<div
					css={previewColumnStyle(mergedTheme)}
					style={{ width: frameWidth }}
				>
					{widthOptions.length > 0 && (
						<SegmentedControl
							aria-label="Preview width"
							selectedKey={frameWidth}
							onSelectionChange={(key) => setFrameWidth(Number(key))}
						>
							{widthOptions.map((width) => (
								<SegmentedControlItem key={width} id={width}>
									{width}
								</SegmentedControlItem>
							))}
						</SegmentedControl>
					)}

					{html && (
						<iframe
							sandbox=""
							style={{
								minWidth: frameWidth,
								maxWidth: frameWidth,
								background: frameBackground,
							}}
							css={iframeStyle(isLoading || !!errorMessage)}
							title="preview"
							srcDoc={html}
						/>
					)}
				</div>

				{showReloadButton && (
					<div css={reloadButtonStyle(mergedTheme)}>
						<Button
							icon="refresh"
							size="md"
							variant="primary"
							onPress={attemptLoad}
						>
							reload
						</Button>
					</div>
				)}
			</div>

			{isLoading && (
				<div css={centeredStyle()}>
					<Icon
						css={loadingIconStyle(mergedTheme)}
						symbol="progress_activity"
						cssOverrides={spinAnimationStyle()}
					/>
				</div>
			)}

			{errorMessage && (
				<div css={centeredStyle()}>
					<AlertBanner showIcon={true} level="error">
						<div css={alertBannerContentsStyle()}>
							{errorMessage}
							{attemptLoad && (
								<Button
									icon="refresh"
									size="sm"
									variant="secondary"
									onPress={attemptLoad}
								>
									retry
								</Button>
							)}
						</div>
					</AlertBanner>
				</div>
			)}
		</div>
	);
};
