import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentTopBar } from '../../styleD/build/typescript/component/topBar';
import { componentTopBar } from '../../styleD/build/typescript/component/topBar';
import { type Breakpoint, from, until } from '../../styleD/utils/semantic/mq';
import type { DeepPartial, Prettify } from '../../util/types';

export type TopBarTheme = Prettify<ComponentTopBar>;
export type PartialTopBarTheme = Prettify<DeepPartial<TopBarTheme>>;
export const defaultTopBarTheme: TopBarTheme = componentTopBar;

export const topBarStyles = (theme: TopBarTheme): SerializedStyles => {
	return css`
		background-color: ${theme.backgroundColor};
		height: ${theme.height};
		border-top: ${theme.borderTop};
		border-right: ${theme.borderRight};
		border-bottom: ${theme.borderBottom};
		border-left: ${theme.borderLeft};
		display: ${theme.display};
		justify-content: ${theme.justifyContent};
	`;
};

export const topBarContainerStyles = (
	theme: TopBarTheme,
	{
		collapseBelow,
		showUntil,
	}: { collapseBelow?: Breakpoint; showUntil?: Breakpoint } = {},
): SerializedStyles => {
	return css`
		display: ${theme.display};

		${collapseBelow &&
		css`
			${until[collapseBelow]} {
				display: none;
			}
		`}

		${showUntil &&
		css`
			${from[showUntil]} {
				display: none;
			}
		`}
	`;
};

export const topBarSpacerStyles = (theme: TopBarTheme): SerializedStyles => {
	return css`
		margin-left: ${theme.spacer.marginLeft};
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
		cursor: ${theme.collapsedNavMenu.button.cursor};

		&[data-hovered] {
			background-color: ${theme.collapsedNavMenu.button.hovered
				.backgroundColor};
		}

		${menuOpen &&
		css`
			background-color: ${theme.collapsedNavMenu.button.active.backgroundColor};
		`}
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
