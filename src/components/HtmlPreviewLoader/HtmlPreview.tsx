import { css, keyframes } from '@emotion/react';
import type { CSSProperties, ReactNode } from 'react';
import { useState } from 'react';
import { Icon } from '../Icon/Icon';
import { InlineMessage } from '../InlineMessage/InlineMessage';
import { Radio, RadioGroup } from '../RadioGroup/RadioGroup';
import { Typography } from '../Typography/Typography';
import {
	headerStyles,
	type HtmlPreviewLoaderTheme,
	loadingIconStyle,
	previewFrameStyle,
} from './styles';

interface Props {
	title: ReactNode;
	html?: string;
	minHeight: number;
	isLoading?: boolean;
	errorMessage?: string;
	theme: HtmlPreviewLoaderTheme;
	frameBackground?: CSSProperties['background'];
	widthOptions?: number[];
	defaultWidth?: number;
}

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
	minHeight,
	isLoading = false,
	errorMessage,
	theme,
	frameBackground = 'white',
	defaultWidth = 425,
	widthOptions = defaultWidthOptions,
}: Props) => {
	const [frameWidth, setFrameWidth] = useState(defaultWidth);

	return (
		<div
			css={{
				position: 'relative',
			}}
		>
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
					previewFrameStyle(theme, isLoading),
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
						}}
						title="preview"
						srcDoc={html}
					/>
				)}
			</div>

			{isLoading && (
				<div css={styles.centre}>
					<Icon
						css={loadingIconStyle(theme)}
						symbol="progress_activity"
						cssOverrides={styles.spinAnimation}
					/>
				</div>
			)}

			{errorMessage && (
				<div css={styles.centre}>
					<InlineMessage level="error">{errorMessage}</InlineMessage>
				</div>
			)}
		</div>
	);
};
