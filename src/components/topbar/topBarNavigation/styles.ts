import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentTopBar } from '../../../styleD/build/typescript/component/TopBar';
import { componentTopBar } from '../../../styleD/build/typescript/component/TopBar';
import type { DeepPartial, Prettify } from '../../../util/types';
import { convertTypographyToEmotionStringStyle } from '../../../utils';
import type { TopBarNavigationProps } from './types';

export type TopBarNavigationTheme = Prettify<ComponentTopBar['Navigation']>;
export type PartialTopBarNavigationTheme = Prettify<
	DeepPartial<TopBarNavigationTheme>
>;

export const defaultTopBarNavigationTheme: TopBarNavigationTheme =
	componentTopBar.Navigation;

export const topBarNavigationStyles = (
	theme: TopBarNavigationTheme,
	selected: boolean,
	_menuOpen?: boolean,
): SerializedStyles => {
	return css`
		display: ${theme.shared.display};
		position: ${theme.shared.position};
		align-items: ${theme.shared['align-items']};
		height: ${theme.shared.height};
		padding: ${theme.shared.padding.top} ${theme.shared.padding.right}
			${theme.shared.padding.bottom} ${theme.shared.padding.left};
		color: ${selected
			? `${theme.selected.color}`
			: `${theme.unselected.color}`};

		&[data-hovered],
		&:hover {
			cursor: ${theme.shared.cursor};
		}

		&[data-focus-visible],
		&:focus-visible {
			outline: ${theme.shared[':focus-visible'].outline};
			outline-offset: ${theme.shared[':focus-visible']['outline-offset']};
		}

		&[data-disabled] {
			cursor: ${theme.shared[':disabled'].cursor};
			color: ${theme.shared[':disabled'].color};
		}

		${_menuOpen
			? css`
					border-right: ${theme.shared['border-top']};
					border-left: ${theme.unselected['border-bottom']};
					width: 100%;

					&[data-hovered],
					&:hover {
						border-left: ${theme.selected['border-bottom']};
					}

					&[data-focus-visible],
					&:focus-visible {
						border-left: ${theme.selected['border-bottom']};
					}

					${selected &&
					`
						border-left: ${theme.selected['border-bottom']};
						background-color: ${theme.shared._menuOpen.selected['background-color']};
					`}
				`
			: css`
					border-top: ${theme.shared['border-top']};
					border-bottom: ${theme.unselected['border-bottom']};

					&[data-hovered],
					&:hover {
						border-bottom: ${theme.selected['border-bottom']};
					}

					&[data-focus-visible],
					&:focus-visible {
						border-bottom: ${theme.selected['border-bottom']};
					}

					${selected &&
					`
						border-bottom: ${theme.selected['border-bottom']};
					`}
				`}

		text-decoration: ${theme.shared['text-decoration']};
	`;
};

export const topBarNavigationDividerStyles = (
	theme: TopBarNavigationTheme,
	{ alignment }: Required<Pick<TopBarNavigationProps, 'alignment'>>,
	_menuOpen?: boolean,
): SerializedStyles => css`
	${_menuOpen
		? css`
				height: ${theme.shared._menuOpen.height};
				border-bottom: ${theme.shared.divider};
			`
		: css`
				${alignment === 'left' ? 'border-right' : 'border-left'}: ${theme.shared
					.divider};
			`}
`;

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
