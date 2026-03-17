import React from 'react';
import { mergeDeep } from '../../util/mergeDeep';
import { Avatar } from '../avatar/Avatar';
import { TopBarNavigation } from './navigation/TopBarNavigation';
import type { TopBarNavigationProps } from './navigation/types';
import {
	defaultTopBarTheme,
	topBarLHSStyles,
	topBarRHSStyles,
	topBarStyles,
} from './styles';
import { TopBarToolName } from './toolName/TopBarToolName';
import { TopBarItem } from './topbarItem/TopBarItem';
import type { TopBarItemProps } from './topbarItem/types';
import type { TopBarProps } from './types';

function TopBarSide({
	children,
	alignment,
}: {
	children: TopBarProps['children'];
	alignment: 'left' | 'right';
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
					alignment,
				}),
			);
		}

		if (child.type === TopBarNavigation) {
			items.push(
				React.cloneElement(child as React.ReactElement<TopBarNavigationProps>, {
					key: `${child.key}-${i}`,
					topBarItemProps: { alignment },
				}),
			);
		}
	});

	return <>{items}</>;
}

export function TopBarRHS({ children }: { children: TopBarProps['children'] }) {
	return <TopBarSide alignment="right">{children}</TopBarSide>;
}

export function TopBarLHS({ children }: { children: TopBarProps['children'] }) {
	return <TopBarSide alignment="left">{children}</TopBarSide>;
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

		if (child.type === TopBarToolName) {
			toolName ??= child;
		}

		if (child.type === Avatar) {
			avatar ??= child;
		}

		if (child.type === TopBarLHS) {
			leftSide ??= child;
		}

		if (child.type === TopBarRHS) {
			rightSide ??= child;
		}
	});

	return (
		<div
			css={[topBarStyles(mergedTheme), cssOverrides]}
			className={className}
			{...props}
		>
			{/* LHS */}
			<div css={topBarLHSStyles(mergedTheme)}>
				{toolName}
				{leftSide}
			</div>
			{/* RHS */}
			<div css={topBarRHSStyles(mergedTheme)}>
				{rightSide}
				<TopBarItem alignment="right">{avatar}</TopBarItem>
			</div>
		</div>
	);
}
