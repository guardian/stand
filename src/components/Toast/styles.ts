import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentToast } from '../../styleD/build/typescript/component/toast';
import { componentToast } from '../../styleD/build/typescript/component/toast';
import type { DeepPartial, Prettify } from '../../util/types';
import { convertTypographyToEmotionStringStyle } from '../../utils';

export type ToastTheme = Prettify<ComponentToast>;
export type PartialToastTheme = Prettify<DeepPartial<ToastTheme>>;
export type ToastLevel = keyof Omit<ToastTheme, 'region' | 'shared'>;
export const defaultToastTheme: ToastTheme = componentToast;

export const toastRegionStyles = (theme: ToastTheme): SerializedStyles => css`
	position: ${theme.region.position};
	right: ${theme.region.right};
	top: ${theme.region.top};
	width: calc(100vw - ${theme.region.right} - ${theme.region.right});
	max-width: ${theme.shared.maxWidth};
	z-index: ${theme.region.zIndex};
	display: ${theme.region.display};
	flex-direction: ${theme.region.flexDirection};
	gap: ${theme.region.gap};
	outline: ${theme.region.outline};
`;

export const toastStyles = (
	theme: ToastTheme,
	{ hasLeadingVisual, level }: { hasLeadingVisual: boolean; level: ToastLevel },
): SerializedStyles => css`
	display: ${theme.shared.display};
	grid-template-columns: ${
		hasLeadingVisual ? 'auto minmax(0, 1fr) auto' : 'minmax(0, 1fr) auto'
	};
	align-items: ${theme.shared.alignItems};
	gap: ${theme.shared.gap};
	width: ${theme.shared.width};
	max-width: ${theme.shared.maxWidth};
	padding: ${theme.shared.padding.top} ${theme.shared.padding.right}
		${theme.shared.padding.bottom} ${theme.shared.padding.left};
	border: ${theme.shared.borderWidth} ${theme.shared.borderStyle} transparent;
	border-left: ${theme.shared.accentBorderWidth} ${theme.shared.borderStyle}
		${theme[level].accentColor};
	border-radius: ${theme.shared.borderRadius};
	background-color: ${theme[level].backgroundColor};
	box-shadow: ${theme.shared.shadow};
	box-sizing: border-box;
	color: ${theme.shared.color};
`;

export const toastContentStyles = (theme: ToastTheme): SerializedStyles => css`
	display: ${theme.shared.content.display};
	flex-direction: ${theme.shared.content.flexDirection};
	gap: ${theme.shared.content.gap};
	min-width: 0;
	overflow-wrap: anywhere;
`;

export const toastTitleStyles = (theme: ToastTheme): SerializedStyles => css`
	${convertTypographyToEmotionStringStyle(theme.shared.content.titleTypography)}
`;

export const toastSubjectStyles = (theme: ToastTheme): SerializedStyles => css`
	${convertTypographyToEmotionStringStyle(
		theme.shared.content.subjectTypography,
	)}
`;

export const toastAdditionalInfoStyles = (
	theme: ToastTheme,
): SerializedStyles => css`
	${convertTypographyToEmotionStringStyle(
		theme.shared.content.additionalInfoTypography,
	)}
`;

export const toastIconStyles = (
	theme: ToastTheme,
	{ level }: { level: ToastLevel },
): SerializedStyles => css`
	color: ${theme[level].accentColor};
`;

export const toastMediaStyles = (theme: ToastTheme): SerializedStyles => css`
	width: ${theme.shared.media.size};
	height: ${theme.shared.media.size};
	border-radius: ${theme.shared.media.borderRadius};
	overflow: hidden;
	flex-shrink: 0;

	& > img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export const toastDismissStyles = (): SerializedStyles => css`
	grid-row: 1;
	grid-column: -2 / -1;
	align-self: start;
	justify-self: end;
	border: 0;

	&[data-hovered],
	&:hover,
	&[data-pressed],
	&:active,
	&[data-disabled],
	&:disabled {
		border: 0;
	}
`;
