import { useFocusRing } from '@react-aria/focus';
import React from 'react';
import {
	Header,
	Menu as ReactAriaMenu,
	MenuItem as ReactAriaMenuItem,
	MenuSection as ReactAriaMenuSection,
	MenuTrigger as ReactAriaMenuTrigger,
	Popover as ReactAriaPopover,
} from 'react-aria-components';
import { Icon } from '../../icon';
import { mergeDeep } from '../../util/mergeDeep';
import type { DefaultPropsWithChildren } from '../../util/types';
import {
	defaultMenuItemTheme,
	defaultMenuSectionTheme,
	defaultMenuTheme,
	defaultPopoverTheme,
	menuItemAsideStyles,
	menuItemDescriptionStyles,
	menuItemIconStyles,
	menuItemLabelStyles,
	menuItemStyles,
	menuSectionHeaderStyles,
	menuStyles,
	popoverStyles,
} from './styles';
import type {
	MenuItemProps,
	MenuProps,
	MenuSectionProps,
	PopoverProps,
} from './types';

function Popover({
	size = 'md',
	children,
	theme = {},
	cssOverrides,
	...props
}: PopoverProps) {
	const mergedTheme = mergeDeep(defaultPopoverTheme, theme);

	return (
		<ReactAriaPopover
			css={[popoverStyles(mergedTheme, { size }), cssOverrides]}
			{...props}
		>
			{children}
		</ReactAriaPopover>
	);
}

export function MenuToggle({ children }: DefaultPropsWithChildren<unknown>) {
	return <>{children}</>;
}

export function MenuSection({
	name,
	size = 'md',
	theme = {},
	cssOverrides,
	children,
	...props
}: MenuSectionProps) {
	const mergedTheme = mergeDeep(defaultMenuSectionTheme, theme);

	const items: React.ReactElement[] = [];

	// Only MenuItem components are allowed as direct children of MenuSection
	// so we iterate through the children and clone only the MenuItem components to pass down the size prop.
	// We also add a key to each cloned child for React's reconciliation.
	React.Children.forEach(children, (child, i) => {
		if (!React.isValidElement(child)) {
			return;
		}

		if (child.type === MenuItem) {
			items.push(
				React.cloneElement(child as React.ReactElement<MenuItemProps>, {
					size,
					key: `${child.key}-${i}`,
				}),
			);
		}
	});

	return (
		<ReactAriaMenuSection css={[cssOverrides]} {...props}>
			{name && (
				<Header css={menuSectionHeaderStyles(mergedTheme, { size })}>
					<span>{name}</span>
				</Header>
			)}
			{items}
		</ReactAriaMenuSection>
	);
}

export function MenuItem({
	label,
	description,
	aside,
	icon,
	size = 'md',
	theme = {},
	cssOverrides,
	...props
}: MenuItemProps) {
	const mergedTheme = mergeDeep(defaultMenuItemTheme, theme);

	const textValue =
		props.textValue ?? (typeof label === 'string' ? label : undefined);

	const { isFocusVisible, focusProps } = useFocusRing();

	return (
		<ReactAriaMenuItem
			// fixes focus ring issues, i.e don't show focus ring on hover, but show it when navigating with keyboard,
			// previously the focus ring was showing on hover as well which is not desired
			// the type assertion is required for compatibility with higher versions of react-aria-components
			{...(focusProps as object)}
			css={[
				menuItemStyles(mergedTheme, { description }, isFocusVisible),
				cssOverrides,
			]}
			{...props}
			textValue={textValue}
		>
			{({ isSelected, selectionMode }) => (
				<>
					{/* ICON */}
					{icon && selectionMode === 'none' ? (
						<Icon
							size={size}
							cssOverrides={menuItemIconStyles(mergedTheme, { size })}
						>
							{icon}
						</Icon>
					) : null}
					{isSelected && selectionMode === 'multiple' ? (
						<Icon
							size={size}
							symbol="check_box"
							cssOverrides={menuItemIconStyles(mergedTheme, { size })}
						/>
					) : null}
					{!isSelected && selectionMode === 'multiple' ? (
						<Icon
							size={size}
							symbol="check_box_outline_blank"
							cssOverrides={menuItemIconStyles(mergedTheme, { size })}
						/>
					) : null}
					{isSelected && selectionMode === 'single' ? (
						<Icon
							size={size}
							symbol="radio_button_checked"
							cssOverrides={menuItemIconStyles(mergedTheme, { size })}
						/>
					) : null}
					{!isSelected && selectionMode === 'single' ? (
						<Icon
							size={size}
							symbol="radio_button_unchecked"
							cssOverrides={menuItemIconStyles(mergedTheme, { size })}
						/>
					) : null}
					{/* Label */}
					<div css={menuItemLabelStyles(mergedTheme, { size })}>{label}</div>
					{/* Description */}
					{description && (
						<div css={menuItemDescriptionStyles(mergedTheme, { size })}>
							{description}
						</div>
					)}
					{/* Aside */}
					{aside && (
						<div css={menuItemAsideStyles(mergedTheme, { size })}>{aside}</div>
					)}
				</>
			)}
		</ReactAriaMenuItem>
	);
}

export function Menu({
	theme = {},
	size = 'md',
	popoverProps,
	menuTriggerProps,
	children,
	cssOverrides,
	...props
}: MenuProps) {
	const mergedTheme = mergeDeep(defaultMenuTheme, theme);

	let trigger: React.ReactElement | null = null;
	const menu: React.ReactElement[] = [];

	// Iterate through the children of Menu and separate out the MenuToggle (trigger) and the MenuItem/MenuSection (menu) components.
	// We also clone the MenuItem and MenuSection components to pass down the size prop, and add a key for React's reconciliation.
	// Only MenuToggle, MenuItem and MenuSection components are allowed as direct children of Menu.
	React.Children.forEach(children, (child, i) => {
		if (!React.isValidElement(child)) {
			return;
		}

		if (child.type === MenuToggle) {
			trigger ??= child;
		} else if (child.type === MenuItem) {
			menu.push(
				React.cloneElement(child as React.ReactElement<MenuItemProps>, {
					size,
					key: `${child.key}-${i}`,
				}),
			);
		} else if (child.type === MenuSection) {
			menu.push(
				React.cloneElement(child as React.ReactElement<MenuSectionProps>, {
					size,
					key: `${child.key}-${i}`,
				}),
			);
		}
	});

	return (
		<ReactAriaMenuTrigger {...menuTriggerProps}>
			{trigger}
			<Popover offset={0} containerPadding={0} size={size} {...popoverProps}>
				<ReactAriaMenu css={[menuStyles(mergedTheme), cssOverrides]} {...props}>
					{menu}
				</ReactAriaMenu>
			</Popover>
		</ReactAriaMenuTrigger>
	);
}
