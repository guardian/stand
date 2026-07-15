import { css } from '@emotion/react';
import { useState } from 'react';
import { mergeDeep } from '../../util/mergeDeep';
import { AlertBanner } from '../AlertBanner/AlertBanner';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { Radio, RadioGroup } from '../RadioGroup/RadioGroup';
import { Typography } from '../Typography/Typography';
import {
	alertBannerContentsStyle,
	centeredStyle,
	defaultHtmlPreviewLoaderTheme,
	headerStyles,
	htmlPreviewLoaderStyles,
	iframeStyle,
	loadingIconStyle,
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
			<header css={headerStyles()}>
				{typeof title === 'string' ? (
					<Typography variant="titleMd">{title}</Typography>
				) : (
					title
				)}
				{widthOptions.length > 0 && (
					<RadioGroup
						size="sm"
						label="width"
						orientation="horizontal"
						formInputContainerTheme={{
							shared: {
								container: {
									width: 'unset',
									flexDirection: 'row',
								},
							},
						}}
						cssOverrides={css({
							alignItems: 'center',
						})}
						value={String(frameWidth)}
						onChange={(value) => setFrameWidth(Number(value))}
					>
						{widthOptions.map((width, index) => (
							<Radio key={index} value={String(width)}>
								{width}px
							</Radio>
						))}
					</RadioGroup>
				)}
			</header>

			<div
				css={[
					previewFrameStyle(mergedTheme),
					{
						minHeight: minHeight,
					},
				]}
			>
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
