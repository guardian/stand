import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentTopBar } from '../../styleD/build/typescript/component/topBar';
import { componentTopBar } from '../../styleD/build/typescript/component/topBar';
import { type Breakpoint, from, until } from '../../styleD/utils/semantic/mq';
import type { DeepPartial, Prettify } from '../../util/types';

export type TopBarTheme = Prettify<ComponentTopBar>;
export type PartialTopBarTheme = Prettify<DeepPartial<TopBarTheme>>;
export const defaultTopBarTheme: TopBarTheme = componentTopBar;

export const topBarStyles = (): SerializedStyles => {
	return css`
		background-color: var(--component-top-bar-background-color);
		height: var(--component-top-bar-height);
		border-top: var(--component-top-bar-border-top);
		border-right: var(--component-top-bar-border-right);
		border-bottom: var(--component-top-bar-border-bottom);
		border-left: var(--component-top-bar-border-left);
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
	menuOpen?: boolean,
): SerializedStyles => {
	return css`
		margin: var(--component-top-bar-collapsed-nav-menu-button-margin);
		padding: var(--component-top-bar-collapsed-nav-menu-button-padding);
		background: var(--component-top-bar-collapsed-nav-menu-button-background);
		border: var(--component-top-bar-collapsed-nav-menu-button-border);
		cursor: pointer;

		&[data-hovered] {
			background-color: var(
				--component-top-bar-collapsed-nav-menu-button-hovered-background-color
			);
		}

		${
			menuOpen &&
			css`
				background-color: var(
					--component-top-bar-collapsed-nav-menu-button-active-background-color
				);
			`
		}
	`;
};

export const topBarCollapsedNavMenuPopoverStyles = (): SerializedStyles => {
	return css`
		background-color: var(
			--component-top-bar-collapsed-nav-menu-popover-background-color
		);
		border-left: var(--component-top-bar-collapsed-nav-menu-popover-border);
		border-right: var(--component-top-bar-collapsed-nav-menu-popover-border);
	`;
};
