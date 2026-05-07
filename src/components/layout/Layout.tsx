import { css } from '@emotion/react';
import React from 'react';
import { mergeDeep } from '../../util/mergeDeep';
import { Grid } from '../grid/Grid';
import type { GridProps } from '../grid/types';
import { TopBar } from '../topbar/TopBar';
import type { TopBarProps } from '../topbar/types';
import {
	defaultLayoutTheme,
	defaultSidebarTheme,
	layoutStyles,
	sidebarStyles,
} from './styles';
import type { LayoutProps, SidebarProps } from './types';

/**
 * Currently a WIP sidebar that is hidden on smaller viewports. The intention is to have this be a collapsible sidebar that can be toggled via a button in the TopBar, but for now it's just a placeholder to show how the layout works with a sidebar.
 */
export function Sidebar({
	children,
	theme = {},
	cssOverrides,
	...props
}: SidebarProps) {
	const mergedTheme = mergeDeep(defaultSidebarTheme, theme);

	return (
		<aside css={[sidebarStyles(mergedTheme), cssOverrides]} {...props}>
			{children}
		</aside>
	);
}

export function Layout({
	children,
	theme = {},
	cssOverrides,
	...props
}: LayoutProps) {
	const mergedTheme = mergeDeep(defaultLayoutTheme, theme);

	let topBar: React.ReactElement | null = null;
	let sidebar: React.ReactElement | null = null;
	let grid: React.ReactElement | null = null;

	React.Children.forEach(children, (child) => {
		if (!React.isValidElement(child)) {
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
				cssOverrides: [
					css`
						grid-area: topbar;
					`,
					...topBarCssOverrides,
				],
			});
		}

		if (child.type === Sidebar) {
			const sidebarChild = child as React.ReactElement<SidebarProps>;
			const sidebarCssOverrides = Array.isArray(sidebarChild.props.cssOverrides)
				? sidebarChild.props.cssOverrides
				: sidebarChild.props.cssOverrides
					? [sidebarChild.props.cssOverrides]
					: [];
			sidebar ??= React.cloneElement(sidebarChild, {
				cssOverrides: [
					css`
						grid-area: sidebar;
					`,
					...sidebarCssOverrides,
				],
			});
		}

		if (child.type === Grid) {
			const gridChild = child as React.ReactElement<GridProps>;
			const gridCssOverrides = Array.isArray(gridChild.props.cssOverrides)
				? gridChild.props.cssOverrides
				: gridChild.props.cssOverrides
					? [gridChild.props.cssOverrides]
					: [];
			grid ??= React.cloneElement(gridChild, {
				cssOverrides: [
					css`
						grid-area: grid;
					`,
					...gridCssOverrides,
				],
			});
		}
	});

	return (
		<div css={[layoutStyles(mergedTheme), cssOverrides]} {...props}>
			{topBar}
			{sidebar}
			{grid}
		</div>
	);
}
