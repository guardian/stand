import type { DefaultPropsWithChildren } from '../../util/types';
import type { LayoutTheme, SidebarTheme } from './styles';

export type LayoutProps = DefaultPropsWithChildren<LayoutTheme>;

export interface SidebarProps extends DefaultPropsWithChildren<SidebarTheme> {
	/**
	 * Defines the layout behavior of the sidebar at the sm breakpoint.
	 *
	 * - 'above-grid' will place the sidebar above the grid content, effectively making it a horizontal bar at the top of the page, consumers may want to adjust the sidebar content styling for this breakpoint to make it look good in a horizontal layout.
	 * - 'hidden' will hide the sidebar entirely at the sm breakpoint, the consumer can choose how to make the sidebar content accessible through other means (e.g. a collapsible menu in the TopBar).
	 *
	 */
	layoutSmBreakpoint?: 'above-grid' | 'hidden';
}
