import { css, keyframes } from '@emotion/react';
import { useState } from 'react';
import { mergeDeep } from '../../util/mergeDeep';
import { AlertBanner } from '../AlertBanner/AlertBanner';
import { Icon } from '../Icon/Icon';
import { Radio, RadioGroup } from '../RadioGroup/RadioGroup';
import { Typography } from '../Typography/Typography';
import {
	defaultHtmlPreviewLoaderTheme,
	headerStyles,
	htmlPreviewLoaderStyles,
	loadingIconStyle,
	previewFrameStyle,
} from './styles';
import type { HtmlPreviewProps } from './types';

const spin = keyframes({
	from: { transform: 'rotate(0deg)' },
	to: { transform: 'rotate(360deg)' },
});

const styles = {
	centre: css({
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translateX(-50%)',
	}),
	spinAnimation: css({
		animation: `${spin} 1s linear infinite`,
	}),
};

const defaultWidthOptions = [320, 375, 425, 650];

export const HtmlPreview = ({
	html,
	title,
	minHeight = 600,
	isLoading = false,
	errorMessage,
	theme,
	frameBackground = 'white',
	defaultWidth = 425,
	widthOptions = defaultWidthOptions,
	cssOverrides,
}: HtmlPreviewProps) => {
	const mergedTheme = mergeDeep(defaultHtmlPreviewLoaderTheme, theme ?? {});

	const [frameWidth, setFrameWidth] = useState(defaultWidth);

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
						theme={{
							shared: {
								flexDirection: 'row',
							},
						}}
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
						style={{
							minWidth: frameWidth,
							maxWidth: frameWidth,
							border: 'none',
							background: frameBackground,
							filter: isLoading || errorMessage ? 'blur(3px)' : undefined,
							transition: 'filter 0.25s',
							pointerEvents: isLoading || errorMessage ? 'none' : undefined,
						}}
						title="preview"
						srcDoc={html}
					/>
				)}
			</div>

			{isLoading && (
				<div css={styles.centre}>
					<Icon
						css={loadingIconStyle(mergedTheme)}
						symbol="progress_activity"
						cssOverrides={styles.spinAnimation}
					/>
				</div>
			)}

			{errorMessage && (
				<div css={styles.centre}>
					<AlertBanner showIcon={true} level="error">
						{errorMessage}
					</AlertBanner>
				</div>
			)}
		</div>
	);
};
