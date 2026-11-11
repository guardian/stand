import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentTopBar } from '../../../styleD/build/typescript/component/topBar';
import { componentTopBar } from '../../../styleD/build/typescript/component/topBar';
import type { DeepPartial, Prettify } from '../../../util/types';
import type { TopBarNavigationProps } from './types';

export type TopBarNavigationTheme = Prettify<ComponentTopBar['navigation']>;
export type PartialTopBarNavigationTheme = Prettify<
	DeepPartial<TopBarNavigationTheme>
>;

export const defaultTopBarNavigationTheme: TopBarNavigationTheme =
	componentTopBar.navigation;

export const topBarNavigationStyles = (
	selected: boolean,
	_menuOpen?: boolean,
): SerializedStyles => {
	return css`
		display: inline-flex;
		position: relative;
		align-items: center;
		height: var(--component-top-bar-navigation-shared-height);
		padding: var(--component-top-bar-navigation-shared-padding-top)
			var(--component-top-bar-navigation-shared-padding-right)
			var(--component-top-bar-navigation-shared-padding-bottom)
			var(--component-top-bar-navigation-shared-padding-left);
		color: ${
			selected
				? `var(--component-top-bar-navigation-selected-color)`
				: `var(--component-top-bar-navigation-unselected-color)`
		};

		&[data-hovered],
		&:hover {
			cursor: pointer;
		}

		&[data-focus-visible],
		&:focus-visible {
			outline: var(--component-top-bar-navigation-shared-focus-visible-outline);
			outline-offset: var(
				--component-top-bar-navigation-shared-focus-visible-outline-offset
			);
		}

		&[data-disabled] {
			cursor: not-allowed;
			color: var(--component-top-bar-navigation-shared-disabled-color);
		}

		${
			_menuOpen
				? css`
						border-right: var(--component-top-bar-navigation-shared-border-top);
						border-left: var(
							--component-top-bar-navigation-unselected-border-bottom
						);
						width: 100%;

						&[data-hovered],
						&:hover {
							border-left: var(
								--component-top-bar-navigation-selected-border-bottom
							);
						}

						&[data-focus-visible],
						&:focus-visible {
							border-left: var(
								--component-top-bar-navigation-selected-border-bottom
							);
						}

						${
							selected &&
							`
						border-left: var(--component-top-bar-navigation-selected-border-bottom);
						background-color: var(--component-top-bar-navigation-shared-_menuOpen-selected-background-color);
					`
						}
					`
				: css`
						border-top: var(--component-top-bar-navigation-shared-border-top);
						border-bottom: var(
							--component-top-bar-navigation-unselected-border-bottom
						);

						&[data-hovered],
						&:hover {
							border-bottom: var(
								--component-top-bar-navigation-selected-border-bottom
							);
						}

						&[data-focus-visible],
						&:focus-visible {
							border-bottom: var(
								--component-top-bar-navigation-selected-border-bottom
							);
						}

						${
							selected &&
							`
						border-bottom: var(--component-top-bar-navigation-selected-border-bottom);
					`
						}
					`
		}

		text-decoration: none;
	`;
};

export const topBarNavigationDividerStyles = (
	{ alignment }: Required<Pick<TopBarNavigationProps, 'alignment'>>,
	_menuOpen?: boolean,
): SerializedStyles => css`
	${
		_menuOpen
			? css`
					height: var(--component-top-bar-navigation-shared-menu-open-height);
					border-bottom: var(--component-top-bar-navigation-shared-divider);
				`
			: css`
					${alignment === 'left' ? 'border-right' : 'border-left'}: var(--component-top-bar-navigation-shared-divider);
				`
	}
`;

export const topBarNavigationTextStyles = ({
	hasIcon,
}: {
	hasIcon: boolean;
}): SerializedStyles => css`
	${hasIcon && `margin-left: var(--component-top-bar-navigation-text-margin-left);`}
`;

export const topBarNavigationTypographyStyles = (
	size: 'md' | 'sm',
): SerializedStyles => {
	return css`
		font: normal
			var(--component-top-bar-navigation-${size}-typography-font-font-weight)
			var(--component-top-bar-navigation-${size}-typography-font-font-size)/var(
				--component-top-bar-navigation-${size}-typography-font-line-height
			)
			var(--component-top-bar-navigation-${size}-typography-font-font-family);
		letter-spacing: var(
			--component-top-bar-navigation-${size}-typography-font-letter-spacing
		);
		font-variation-settings: 'wdth'
			var(--component-top-bar-navigation-${size}-typography-font-width);
	`;
};

export const topBarMenuIndicatorStyles = (): SerializedStyles => {
	return css`
		margin-top: var(--component-top-bar-navigation-menu-indicator-margin-top);
		margin-left: var(--component-top-bar-navigation-menu-indicator-margin-left);
	`;
};
