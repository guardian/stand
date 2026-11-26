import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { component } from '../../terrazzo/build/stand';
import type { DeepPartial, Prettify } from '../../util/types';
import { convertTypographyToCssString } from '../../utils';
import type {
	MenuItemProps,
	MenuPopoverProps,
	MenuSectionProps,
} from './types';

/* Menu */
export type MenuTheme = Prettify<typeof component.menu.menu>;
export type PartialMenuTheme = Prettify<DeepPartial<MenuTheme>>;
export const defaultMenuTheme: MenuTheme = component.menu.menu;
export const menuStyles = (theme: MenuTheme): SerializedStyles => css`
	display: flex;
	flex-direction: column;
	border: ${theme.shared.border};
	background: ${theme.shared.backgroundColor};
`;

/* MenuSection */
export type MenuSectionTheme = Prettify<typeof component.menu.menuSection>;
export type PartialMenuSectionTheme = Prettify<DeepPartial<MenuSectionTheme>>;
export const defaultMenuSectionTheme: MenuSectionTheme =
	component.menu.menuSection;
export const menuSectionHeaderStyles = (
	theme: MenuSectionTheme,
	{ size }: Required<Pick<MenuSectionProps, 'size'>>,
): SerializedStyles => css`
	display: flex;
	align-items: center;
	padding: ${theme.header.shared.padding.top}
		${theme.header.shared.padding.right} ${theme.header.shared.padding.bottom}
		${theme.header.shared.padding.left};
	height: ${theme.header[size].height};
	background: ${theme.header.shared.backgroundColor};
	color: ${theme.header.shared.color};
	${convertTypographyToCssString(theme.header[size].typography)}
`;

/* MenuItem */
export type MenuItemTheme = Prettify<typeof component.menu.menuItem>;
export type PartialMenuItemTheme = Prettify<DeepPartial<MenuItemTheme>>;
export const defaultMenuItemTheme: MenuItemTheme = component.menu.menuItem;
export const menuItemStyles = (
	theme: MenuItemTheme,
	{ description }: Pick<MenuItemProps, 'description'>,
): SerializedStyles => css`
	display: grid;
	grid-template-columns: ${theme.shared.gridTemplateColumns};
	grid-template-areas: ${
		description ? "'icon label aside' '. description .'" : "'icon label aside'"
	};
	gap: ${theme.shared.gap};
	align-items: center;
	padding: ${theme.shared.padding.top} ${theme.shared.padding.right}
		${theme.shared.padding.bottom} ${theme.shared.padding.left};
	border-bottom: ${theme.shared.borderBottom};
	background: ${theme.shared.backgroundColor};
	&:last-child {
		border-bottom: ${theme.shared.lastChild.borderBottom};
	}

	/* Hovering adds data-focused and the item stays focused after hovering away */
	&[data-focused] {
		background-color: ${theme.shared.hover.backgroundColor};
	}
	&[data-hovered] {
		outline: none;
	}

	/* Override default browser focus behaviour */
	:focus-visible {
		outline: none;
	}

	/* focus visible used for keyboard focus */
	&[data-focus-visible] {
		outline: ${theme.shared.focusVisible.outline};
		outline-offset: ${theme.shared.focusVisible.outlineOffset};
		background-color: ${theme.shared.hover.backgroundColor};
	}

	/* Must be last to take precedence */
	&[data-pressed] {
		background-color: ${theme.shared.pressed.backgroundColor};
	}
`;

export const menuItemIconStyles = (
	theme: MenuItemTheme,
	{ size }: Required<Pick<MenuItemProps, 'size'>>,
): SerializedStyles => css`
	grid-area: icon;
	align-self: start;
	color: ${theme.shared.icon.color};
	/* Ensure the line-height matches the font line-height of the label for alignment */
	line-height: ${theme[size].icon.lineHeight};
`;
export const menuItemLabelStyles = (
	theme: MenuItemTheme,
): SerializedStyles => css`
	grid-area: label;
	color: ${theme.shared.label.color};
	${convertTypographyToCssString(theme.shared.label.typography)}
`;
export const menuItemDescriptionStyles = (
	theme: MenuItemTheme,
): SerializedStyles => css`
	grid-area: description;
	color: ${theme.shared.description.color};
	${convertTypographyToCssString(theme.shared.description.typography)}
`;
export const menuItemAsideStyles = (
	theme: MenuItemTheme,
): SerializedStyles => css`
	grid-area: aside;
	justify-self: end;
	align-self: start;
	color: ${theme.shared.aside.color};
	${convertTypographyToCssString(theme.shared.aside.typography)}
`;

/* MenuSeparator */
export type MenuSeparatorTheme = Prettify<typeof component.menu.menuSeparator>;
export type PartialMenuSeparatorTheme = Prettify<
	DeepPartial<MenuSeparatorTheme>
>;
export const defaultMenuSeparatorTheme: MenuSeparatorTheme =
	component.menu.menuSeparator;
export const menuSeparatorStyles = (
	theme: MenuSeparatorTheme,
): SerializedStyles => css`
	background-color: ${theme.shared.backgroundColor};
	height: ${theme.shared.height};
	width: ${theme.shared.width};
`;

/* Popover */
export type MenuPopoverTheme = Prettify<typeof component.menu.menuPopover>;
export type PartialMenuPopoverTheme = Prettify<DeepPartial<MenuPopoverTheme>>;
export const defaultMenuPopoverTheme: MenuPopoverTheme =
	component.menu.menuPopover;
export const menuPopoverStyles = (
	theme: MenuPopoverTheme,
	{ size }: Required<Pick<MenuPopoverProps, 'size'>>,
): SerializedStyles => css`
	overflow: auto;
	max-width: ${theme[size].maxWidth};
	width: ${theme[size].width};
	box-shadow: ${theme.shared.shadow};
`;
