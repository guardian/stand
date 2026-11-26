import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { component } from '../../terrazzo/build/stand';
import { type Breakpoint, from, until } from '../../terrazzo/utils/mq';
import type { DeepPartial, Prettify } from '../../util/types';

type TerrazzoTopBarTheme = typeof component.topBar;

export type TopBarTheme = Prettify<
	Omit<TerrazzoTopBarTheme, 'collapsedNavMenu'> & {
		collapsedNavMenu: Omit<
			TerrazzoTopBarTheme['collapsedNavMenu'],
			'popover'
		> & {
			popover: Omit<
				TerrazzoTopBarTheme['collapsedNavMenu']['popover'],
				'offset' | 'containerPadding'
			>;
		};
	}
>;
export type PartialTopBarTheme = Prettify<DeepPartial<TopBarTheme>>;
export const defaultTopBarTheme: TopBarTheme = component.topBar;

export const topBarStyles = (theme: TopBarTheme): SerializedStyles => {
	return css`
		background-color: ${theme.backgroundColor};
		height: ${theme.height};
		border-top: ${theme.borderTop};
		border-right: ${theme.borderRight};
		border-bottom: ${theme.borderBottom};
		border-left: ${theme.borderLeft};
		display: flex;
		justify-content: flex-start;
	`;
};

export const topBarContainerStyles = ({
	collapseBelow,
	showUntil,
}: {
	collapseBelow?: Breakpoint;
	showUntil?: Breakpoint;
} = {}): SerializedStyles => {
	return css`
		display: flex;

		${
			collapseBelow &&
			css`
				${until[collapseBelow]} {
					display: none;
				}
			`
		}

		${
			showUntil &&
			css`
				${from[showUntil]} {
					display: none;
				}
			`
		}
	`;
};

export const topBarSpacerStyles = (): SerializedStyles => {
	return css`
		margin-left: auto;
	`;
};

export const topBarCollapsedNavMenuButtonStyles = (
	theme: TopBarTheme,
	menuOpen?: boolean,
): SerializedStyles => {
	return css`
		margin: ${theme.collapsedNavMenu.button.margin};
		padding: ${theme.collapsedNavMenu.button.padding};
		background: ${theme.collapsedNavMenu.button.background};
		border: ${theme.collapsedNavMenu.button.border};
		cursor: pointer;

		&[data-hovered] {
			background-color: ${
				theme.collapsedNavMenu.button.hovered.backgroundColor
			};
		}

		${
			menuOpen &&
			css`
				background-color: ${theme.collapsedNavMenu.button.active.backgroundColor};
			`
		}
	`;
};

export const topBarCollapsedNavMenuPopoverStyles = (
	theme: TopBarTheme,
): SerializedStyles => {
	return css`
		background-color: ${theme.collapsedNavMenu.popover.backgroundColor};
		border-left: ${theme.collapsedNavMenu.popover.border};
		border-right: ${theme.collapsedNavMenu.popover.border};
	`;
};
