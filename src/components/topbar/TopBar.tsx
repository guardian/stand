import React from 'react';
import {
	Button as ReactAriaButton,
	DialogTrigger as ReactAriaDialogTrigger,
	Popover as ReactAriaPopover,
} from 'react-aria-components';
import { AvatarButton } from '../../avatar-button';
import { AvatarLink } from '../../avatar-link';
import type { TopBarToolNameProps } from '../../TopBar';
import { mergeDeep } from '../../util/mergeDeep';
import { useResize } from '../../util/useRezise';
import { Avatar } from '../avatar/Avatar';
import { Icon } from '../icon/Icon';
import type { TopBarTheme } from './styles';
import {
	defaultTopBarTheme,
	topBarCollapsedNavMenuButtonStyles,
	topBarCollapsedNavMenuPopoverStyles,
	topBarContainerStyles,
	topBarSpacerStyles,
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
	collapseBelow = {
		toolName: 'lg',
		containerLeft: 'lg',
	},
	theme = {},
	cssOverrides,
	className,
	...props
}: TopBarProps) {
	const [menuOpen, setMenuOpen] = React.useState(false);
	const buttonRef = React.useRef<HTMLButtonElement>(null);
	const mergedTheme = mergeDeep(defaultTopBarTheme, theme);

	let leftSide: React.ReactElement | null | undefined;
	let rightSide: React.ReactElement | null | undefined;
	let toolName: React.ReactElement | null | undefined;
	let avatar: React.ReactElement | null | undefined;

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
				{ theme: mergedTheme.ToolName, collapseBelow: collapseBelow.toolName },
			);
		}

		/**
		 * Accepts an avatar that will always be rendered on the right hand side, within an item for styling
		 */
		if (
			child.type === Avatar ||
			child.type === AvatarLink ||
			child.type === AvatarButton
		) {
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

	const leftSideMenuItems: React.ReactElement[] = [];

	React.Children.forEach(
		(leftSide as React.ReactElement<{ children?: React.ReactNode }>).props
			.children as React.ReactElement[],
		(child) => {
			if (!React.isValidElement(child)) {
				return;
			}

			if (child.type === TopBarNavigation) {
				leftSideMenuItems.push(
					React.cloneElement(
						child as React.ReactElement<TopBarNavigationProps>,
						{
							theme: mergedTheme.Navigation,
							alignment: 'left',
							_menuOpen: menuOpen,
						},
					),
				);
			}

			if (child.type === TopBarItem) {
				leftSideMenuItems.push(
					React.cloneElement(child as React.ReactElement<TopBarItemProps>, {
						theme: mergedTheme.Item,
						alignment: 'left',
						_menuOpen: menuOpen,
					}),
				);
			}
		},
	);

	useResize(() => {
		if (menuOpen) {
			setMenuOpen(false);
		}
	});

	return (
		<div
			css={[topBarStyles(mergedTheme), cssOverrides]}
			className={className}
			{...props}
		>
			{/* LHS */}
			<div
				css={topBarContainerStyles(mergedTheme, {
					showUntil: collapseBelow.containerLeft,
				})}
			>
				<ReactAriaDialogTrigger
					isOpen={menuOpen}
					onOpenChange={(isOpen) => {
						setMenuOpen(isOpen);
					}}
				>
					<ReactAriaButton
						aria-label="Navigation Menu"
						ref={buttonRef}
						css={topBarCollapsedNavMenuButtonStyles(mergedTheme, menuOpen)}
					>
						<TopBarItem
							alignment="left"
							size="sm"
							theme={mergedTheme.Item}
							aria-label="Navigation Menu"
						>
							<Icon size="lg">{menuOpen ? 'close' : 'menu'}</Icon>
						</TopBarItem>
					</ReactAriaButton>
					<ReactAriaPopover
						css={topBarCollapsedNavMenuPopoverStyles(mergedTheme)}
						offset={12}
					>
						{leftSideMenuItems}
					</ReactAriaPopover>
				</ReactAriaDialogTrigger>
			</div>
			<div css={topBarContainerStyles(mergedTheme)}>{toolName}</div>
			<div
				css={topBarContainerStyles(mergedTheme, {
					collapseBelow: collapseBelow.containerLeft,
				})}
			>
				{leftSide}
			</div>
			{/* RHS - topBarSpacerStyles pushes content to the right */}
			<div
				css={[
					topBarSpacerStyles(mergedTheme),
					topBarContainerStyles(mergedTheme),
				]}
			>
				{rightSide}
			</div>
			<div css={topBarContainerStyles(mergedTheme)}>{avatar}</div>
		</div>
	);
}
