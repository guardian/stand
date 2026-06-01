import type { SerializedStyles } from '@emotion/react';
import type React from 'react';
import type { DefaultPropsWithChildren } from '../../util/types';
import type { LayoutTheme, MainTheme, SidebarTheme } from './styles';

export type LayoutProps = DefaultPropsWithChildren<LayoutTheme>;

export interface MainProps
	extends
		DefaultPropsWithChildren<MainTheme>,
		React.HTMLAttributes<HTMLElement> {
	/**
	 * When `true`, the layout will take up the full width of its container, enabled by default.
	 * When `false`, the layout will have a max-width of 1584px and be centered within its container.
	 * This can be used to prevent the layout from becoming too stretched on very wide screens.
	 */
	fluid?: boolean;
	/**
	 * When `true`, applies vertical padding to the main content area.
	 * This is enabled by default and can be disabled when the consumer wants to handle vertical spacing themselves
	 */
	paddingTop?: boolean;
	/**
	 * When `true`, applies bottom padding to the main content area.
	 * This is enabled by default, and can be disabled when the consumer wants to handle vertical spacing themselves
	 */
	paddingBottom?: boolean;

	as?: React.ElementType;
}

export interface SidebarProps
	extends
		DefaultPropsWithChildren<SidebarTheme>,
		React.HTMLAttributes<HTMLElement> {
	/**
	 * Defines the layout behavior of the sidebar at the sm breakpoint.
	 *
	 * - 'above-grid' will place the sidebar above the grid content, effectively making it a horizontal bar at the top of the page, consumers may want to adjust the sidebar content styling for this breakpoint to make it look good in a horizontal layout.
	 * - 'hidden' will hide the sidebar entirely at the sm breakpoint, the consumer can choose how to make the sidebar content accessible through other means (e.g. a collapsible menu in the TopBar).
	 *
	 */
	layoutSmBreakpoint?: 'above-grid' | 'hidden';
	as?: React.ElementType;
}

export interface LayoutSlotProps extends React.HTMLAttributes<HTMLElement> {
	children?: React.ReactNode;
	cssOverrides?: SerializedStyles | SerializedStyles[];
	as?: React.ElementType;
}
