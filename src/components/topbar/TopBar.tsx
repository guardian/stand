import React from 'react';
import type { TopBarToolNameProps } from '../../TopBar';
import { mergeDeep } from '../../util/mergeDeep';
import { Avatar } from '../avatar/Avatar';
import type { TopBarTheme } from './styles';
import {
	defaultTopBarTheme,
	topBarContainerLeftStyles,
	topBarContainerRightStyles,
	topBarStyles,
} from './styles';
import { TopBarItem } from './topBarItem/TopBarItem';
import type { TopBarItemProps } from './topBarItem/types';
import { TopBarNavigation } from './topBarNavigation/TopBarNavigation';
import type { TopBarNavigationProps } from './topBarNavigation/types';
import { TopBarToolName } from './topBarToolName/TopBarToolName';
import type { TopBarProps } from './types';

function TopBarSide({
	children,
	alignment,
	theme,
}: {
	children: TopBarProps['children'];
	alignment: 'left' | 'right';
	theme?: TopBarTheme;
}) {
	const items: React.ReactElement[] = [];

	React.Children.forEach(children, (child, i) => {
		if (!React.isValidElement(child)) {
			return;
		}

		if (child.type === TopBarItem) {
			items.push(
				React.cloneElement(child as React.ReactElement<TopBarItemProps>, {
					key: `${child.key}-${i}`,
					theme: theme?.Item,
					alignment,
				}),
			);
		}

		if (child.type === TopBarNavigation) {
			items.push(
				React.cloneElement(child as React.ReactElement<TopBarNavigationProps>, {
					key: `${child.key}-${i}`,
					theme: theme?.Navigation,
					alignment,
				}),
			);
		}
	});

	return <>{items}</>;
}

export function TopBarContainerRight({
	children,
	theme,
}: {
	children: TopBarProps['children'];
	theme?: TopBarTheme;
}) {
	return (
		<TopBarSide alignment="right" theme={theme}>
			{children}
		</TopBarSide>
	);
}

export function TopBarContainerLeft({
	children,
	theme,
}: {
	children: TopBarProps['children'];
	theme?: TopBarTheme;
}) {
	return (
		<TopBarSide alignment="left" theme={theme}>
			{children}
		</TopBarSide>
	);
}

export function TopBar({
	children,
	theme = {},
	cssOverrides,
	className,
	...props
}: TopBarProps) {
	const mergedTheme = mergeDeep(defaultTopBarTheme, theme);

	let leftSide: React.ReactElement | null = null;
	let rightSide: React.ReactElement | null = null;
	let toolName: React.ReactElement | null = null;
	let avatar: React.ReactElement | null = null;

	React.Children.forEach(children, (child) => {
		if (!React.isValidElement(child)) {
			return;
		}

		/**
		 * Accepts a tool name that will always be rendered on the left hand side
		 */
		if (child.type === TopBarToolName) {
			toolName ??= React.cloneElement(
				child as React.ReactElement<TopBarToolNameProps>,
				{ theme: mergedTheme.ToolName },
			);
		}

		/**
		 * Accepts an avatar that will always be rendered on the right hand side, within an item for styling
		 */
		if (child.type === Avatar) {
			avatar ??= (
				<TopBarItem theme={mergedTheme.Item} alignment="right">
					{child}
				</TopBarItem>
			);
		}

		/**
		 * Other items must be defined as part of the LHS or RHS
		 */
		if (child.type === TopBarContainerLeft) {
			leftSide ??= React.cloneElement(
				child as React.ReactElement<{ theme?: TopBarTheme }>,
				{ theme: mergedTheme },
			);
		}
		if (child.type === TopBarContainerRight) {
			rightSide ??= React.cloneElement(
				child as React.ReactElement<{ theme?: TopBarTheme }>,
				{ theme: mergedTheme },
			);
		}
	});

	return (
		<div
			css={[topBarStyles(mergedTheme), cssOverrides]}
			className={className}
			{...props}
		>
			{/* LHS */}
			<div css={topBarContainerLeftStyles(mergedTheme)}>
				{toolName}
				{leftSide}
			</div>
			{/* RHS */}
			<div css={topBarContainerRightStyles(mergedTheme)}>
				{rightSide}
				{avatar}
			</div>
		</div>
	);
}
