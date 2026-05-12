import React from 'react';
import { mergeDeep } from '../../util/mergeDeep';
import { AlertBanner } from '../alert-banner/AlertBanner';
import type { AlertBannerProps } from '../alert-banner/types';
import { Grid } from '../grid/Grid';
import type { GridProps } from '../grid/types';
import { TopBar } from '../topbar/TopBar';
import type { TopBarProps } from '../topbar/types';
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

/**
 * Currently a WIP (Subject to change, but usable) sidebar that can be used in the Layout, it supports two different layout behaviors at the sm breakpoint,
 * either 'above-grid' which will place the sidebar above the grid content effectively making it a horizontal bar at the top of the page,
 * or 'hidden' which will hide the sidebar entirely at the sm breakpoint.
 *
 * The consumer can choose how to make the sidebar content accessible through other means (e.g. a collapsible menu in the TopBar) when using the 'hidden' option.
 */
export function Sidebar({
	children,
	layoutSmBreakpoint = 'hidden',
	theme = {},
	cssOverrides,
	...props
}: SidebarProps) {
	const mergedTheme = mergeDeep(defaultSidebarTheme, theme);

	return (
		<aside
			css={[sidebarStyles(mergedTheme, { layoutSmBreakpoint }), cssOverrides]}
			{...props}
		>
			{children}
		</aside>
	);
}

/**
 * A layout component that defines a grid structure for the page, it has specific areas for an AlertBanner, TopBar, Sidebar and Grid content.
 *
 * The layout adjusts based on the defined breakpoints in the theme, allowing for responsive design.
 *
 * The Layout component will look through its children and place them in the correct grid area based on their type (AlertBanner, TopBar, Sidebar, Grid).
 *
 * It's also possible to manually specify the grid area for each child by passing cssOverrides to the child component, this allows for more flexibility in how the layout is structured, but requires more manual setup from the consumer.
 *
 * Consumers can customize the layout by providing their own themes and CSS overrides for each of the components.
 */
export function Layout({
	children,
	fluid = true,
	theme = {},
	cssOverrides,
	...props
}: LayoutProps) {
	const mergedTheme = mergeDeep(defaultLayoutTheme, theme);

	let alertBanner: React.ReactElement | null = null;
	let topBar: React.ReactElement | null = null;
	let sidebar: React.ReactElement | null = null;
	let main: React.ReactElement | null = null;
	const otherChildren: React.ReactElement[] = [];

	React.Children.forEach(children, (child) => {
		if (!React.isValidElement(child)) {
			return;
		}

		if (child.type === AlertBanner) {
			const alertBannerChild = child as React.ReactElement<AlertBannerProps>;
			const alertBannerCssOverrides = Array.isArray(
				alertBannerChild.props.cssOverrides,
			)
				? alertBannerChild.props.cssOverrides
				: alertBannerChild.props.cssOverrides
					? [alertBannerChild.props.cssOverrides]
					: [];
			alertBanner ??= React.cloneElement(alertBannerChild, {
				cssOverrides: [alertBannerLayoutStyles(), ...alertBannerCssOverrides],
			});
			return;
		}

		if (child.type === TopBar) {
			const topBarChild = child as React.ReactElement<TopBarProps>;
			const topBarCssOverrides = Array.isArray(topBarChild.props.cssOverrides)
				? topBarChild.props.cssOverrides
				: topBarChild.props.cssOverrides
					? [topBarChild.props.cssOverrides]
					: [];
			topBar ??= React.cloneElement(topBarChild, {
				cssOverrides: [topBarLayoutStyles(), ...topBarCssOverrides],
			});
			return;
		}

		if (child.type === Sidebar) {
			const sidebarChild = child as React.ReactElement<SidebarProps>;
			const sidebarCssOverrides = Array.isArray(sidebarChild.props.cssOverrides)
				? sidebarChild.props.cssOverrides
				: sidebarChild.props.cssOverrides
					? [sidebarChild.props.cssOverrides]
					: [];
			sidebar ??= React.cloneElement(sidebarChild, {
				cssOverrides: [sidebarLayoutStyles(), ...sidebarCssOverrides],
			});
			return;
		}

		if (child.type === Grid) {
			const gridChild = child as React.ReactElement<GridProps>;
			const gridCssOverrides = Array.isArray(gridChild.props.cssOverrides)
				? gridChild.props.cssOverrides
				: gridChild.props.cssOverrides
					? [gridChild.props.cssOverrides]
					: [];
			main ??= React.cloneElement(gridChild, {
				as: 'main',
				cssOverrides: [
					mainLayoutStyles(mergedTheme, { fluid }),
					...gridCssOverrides,
				],
			});
			return;
		}

		// if the child is not one of the supported types, add it to the otherChildren array
		// to be rendered in the layout without any modifications, which is useful for allowing
		// consumers to use their own custom components and place them in the layout as they see fit,
		// but they'll need to manually assign the `grid-area` for the child component
		otherChildren.push(child);
	});

	return (
		<div css={[layoutStyles(mergedTheme), cssOverrides]} {...props}>
			{alertBanner}
			{topBar}
			{sidebar}
			{main}
			{otherChildren}
		</div>
	);
}
