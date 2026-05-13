import type { SerializedStyles } from '@emotion/react';
import type React from 'react';
import { mergeDeep } from '../../util/mergeDeep';
import {
	alertBannerLayoutStyles,
	defaultLayoutTheme,
	defaultSidebarTheme,
	layoutStyles,
	mainLayoutStyles,
	sidebarLayoutStyles,
	sidebarStyles,
	topBarLayoutStyles,
} from './styles';
import type { LayoutProps, SidebarProps } from './types';

export interface LayoutSlotProps extends React.HTMLAttributes<HTMLElement> {
	children?: React.ReactNode;
	cssOverrides?: SerializedStyles | SerializedStyles[];
	as?: React.ElementType;
}

/**
 * Places children into the alert banner grid area of the Layout.
 */
const LayoutAlertBanner = ({
	as: Component = 'aside',
	children,
	cssOverrides,
	...props
}: LayoutSlotProps) => {
	return (
		<Component css={[alertBannerLayoutStyles(), cssOverrides]} {...props}>
			{children}
		</Component>
	);
};

/**
 * Places children into the top bar grid area of the Layout.
 */
const LayoutTopBar = ({
	as: Component = 'nav',
	children,
	cssOverrides,
	...props
}: LayoutSlotProps) => {
	return (
		<Component css={[topBarLayoutStyles(), cssOverrides]} {...props}>
			{children}
		</Component>
	);
};

/**
 * Places children into the sidebar grid area of the Layout.
 *
 * Supports two layout behaviors at the sm breakpoint:
 * - 'above-grid': places the sidebar above the grid content
 * - 'hidden': hides the sidebar entirely (default)
 */
function LayoutSidebar({
	as: Component = 'aside',
	children,
	layoutSmBreakpoint = 'hidden',
	theme = {},
	cssOverrides,
	...props
}: SidebarProps) {
	const mergedTheme = mergeDeep(defaultSidebarTheme, theme);

	return (
		<Component
			css={[
				sidebarLayoutStyles(),
				sidebarStyles(mergedTheme, { layoutSmBreakpoint }),
				cssOverrides,
			]}
			{...props}
		>
			{children}
		</Component>
	);
}

/**
 * Places children into the main grid area of the Layout.
 */
function LayoutMain({
	as: Component = 'main',
	children,
	fluid = true,
	theme = {},
	cssOverrides,
	...props
}: LayoutSlotProps & {
	fluid?: boolean;
	theme?: LayoutProps['theme'];
}) {
	const mergedTheme = mergeDeep(defaultLayoutTheme, theme);

	return (
		<Component
			css={[mainLayoutStyles(mergedTheme, { fluid }), cssOverrides]}
			{...props}
		>
			{children}
		</Component>
	);
}

/**
 * A layout component that defines a grid structure for the page.
 *
 * Use the compound components to place content in the correct grid areas:
 * - `Layout.AlertBanner` – alert banner area
 * - `Layout.TopBar` – top bar area
 * - `Layout.Sidebar` – sidebar area
 * - `Layout.Main` – main content area
 *
 * @example
 * ```tsx
 * <Layout>
 *   <Layout.TopBar>
 *     <TopBar>...</TopBar>
 *   </Layout.TopBar>
 *   <Layout.Sidebar layoutSmBreakpoint="above-grid">
 *     <nav>...</nav>
 *   </Layout.Sidebar>
 *   <Layout.Main>
 *     <Grid>...</Grid>
 *   </Layout.Main>
 * </Layout>
 * ```
 */
function LayoutRoot({
	children,
	theme = {},
	cssOverrides,
	...props
}: Omit<LayoutProps, 'fluid'>) {
	const mergedTheme = mergeDeep(defaultLayoutTheme, theme);

	return (
		<div css={[layoutStyles(mergedTheme), cssOverrides]} {...props}>
			{children}
		</div>
	);
}

type LayoutMainProps = LayoutSlotProps & {
	fluid?: boolean;
	theme?: LayoutProps['theme'];
};

interface LayoutCompound {
	(props: Omit<LayoutProps, 'fluid'>): React.JSX.Element;
	AlertBanner: React.FC<LayoutSlotProps>;
	TopBar: React.FC<LayoutSlotProps>;
	Sidebar: (props: SidebarProps) => React.JSX.Element;
	Main: React.FC<LayoutMainProps>;
}

export const Layout: LayoutCompound = Object.assign(LayoutRoot, {
	AlertBanner: LayoutAlertBanner,
	TopBar: LayoutTopBar,
	Sidebar: LayoutSidebar,
	Main: LayoutMain,
});
