import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentTopBar } from '../../../styleD/build/typescript/component/TopBar';
import { componentTopBar } from '../../../styleD/build/typescript/component/TopBar';
import type { DeepPartial, Prettify } from '../../../util/types';
import { convertTypographyToEmotionStringStyle } from '../../../utils';

export type TopBarNavigationTheme = Prettify<ComponentTopBar['Navigation']>;
export type PartialTopBarNavigationTheme = DeepPartial<TopBarNavigationTheme>;

export const defaultTopBarNavigationTheme: TopBarNavigationTheme =
	componentTopBar.Navigation;

export const topBarNavigationStyles = (
	theme: TopBarNavigationTheme,
	selected: boolean,
): SerializedStyles => {
	return css`
		display: ${theme.shared.display};
		position: ${theme.shared.position};
		align-items: ${theme.shared['align-items']};
		color: ${selected
			? `${theme.selected.color}`
			: `${theme.unselected.color}`};
		border-bottom: ${theme.unselected['border-bottom']};

		&[data-hovered],
		:hover {
			border-bottom: ${theme.selected['border-bottom']};
		}

		&[data-focus-visible],
		:focus-visible {
			outline: ${theme.shared[':focus-visible'].outline};
			border-bottom: ${theme.selected['border-bottom']};
		}

		&[data-disabled] {
			cursor: ${theme.shared[':disabled'].cursor};
			color: ${theme.shared[':disabled'].color};
		}

		text-decoration: ${theme.shared['text-decoration']};
	`;
};

export const topBarNavigationTextStyles = (
	theme: TopBarNavigationTheme,
): SerializedStyles => css`
	margin-left: ${theme.text.margin.left};
`;

export const topBarNavigationTypographyStyles = (
	theme: TopBarNavigationTheme,
	size: 'md' | 'sm',
): SerializedStyles => {
	return size == 'md'
		? css`
				${convertTypographyToEmotionStringStyle(theme.md.typography)}
			`
		: css`
				${convertTypographyToEmotionStringStyle(theme.sm.typography)}
			`;
};

export const topBarMenuIndicatorStyles = (
	theme: TopBarNavigationTheme,
): SerializedStyles => {
	return css`
		margin-top: ${theme.menuIndicator.margin.top};
		margin-left: ${theme.menuIndicator.margin.left};
	`;
};

export const isSelectedStyles = (
	theme: TopBarNavigationTheme,
): SerializedStyles => {
	return css`
		border-bottom: ${theme.selected['border-bottom']};
	`;
};
