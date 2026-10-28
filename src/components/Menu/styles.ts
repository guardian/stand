import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentMenu } from '../../styleD/build/typescript/component/menu';
import { componentMenu } from '../../styleD/build/typescript/component/menu';
import type { DeepPartial, Prettify } from '../../util/types';
import { convertTypographyToEmotionStringStyle } from '../../utils';
import type {
	MenuItemProps,
	MenuPopoverProps,
	MenuSectionProps,
} from './types';

/* Menu */
export type MenuTheme = Prettify<ComponentMenu['menu']>;
export type PartialMenuTheme = Prettify<DeepPartial<MenuTheme>>;
export const defaultMenuTheme: MenuTheme = componentMenu.menu;
export const menuStyles = (theme: MenuTheme): SerializedStyles => css`
	display: flex;
	flex-direction: column;
	border: ${theme.shared.border};
	background: ${theme.shared.backgroundColor};
`;

/* MenuSection */
export type MenuSectionTheme = Prettify<ComponentMenu['menuSection']>;
export type PartialMenuSectionTheme = Prettify<DeepPartial<MenuSectionTheme>>;
export const defaultMenuSectionTheme: MenuSectionTheme =
	componentMenu.menuSection;
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
	${convertTypographyToEmotionStringStyle(theme.header[size].typography)}
`;

/* MenuItem */
export type MenuItemTheme = Prettify<ComponentMenu['menuItem']>;
export type PartialMenuItemTheme = Prettify<DeepPartial<MenuItemTheme>>;
export const defaultMenuItemTheme: MenuItemTheme = componentMenu.menuItem;
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
	${convertTypographyToEmotionStringStyle(theme.shared.label.typography)}
`;
export const menuItemDescriptionStyles = (
	theme: MenuItemTheme,
): SerializedStyles => css`
	grid-area: description;
	color: ${theme.shared.description.color};
	${convertTypographyToEmotionStringStyle(theme.shared.description.typography)}
`;
export const menuItemAsideStyles = (
	theme: MenuItemTheme,
): SerializedStyles => css`
	grid-area: aside;
	justify-self: end;
	align-self: start;
	color: ${theme.shared.aside.color};
	${convertTypographyToEmotionStringStyle(theme.shared.aside.typography)}
`;

/* MenuSeparator */
export type MenuSeparatorTheme = Prettify<ComponentMenu['menuSeparator']>;
export type PartialMenuSeparatorTheme = Prettify<
	DeepPartial<MenuSeparatorTheme>
>;
export const defaultMenuSeparatorTheme: MenuSeparatorTheme =
	componentMenu.menuSeparator;
export const menuSeparatorStyles = (
	theme: MenuSeparatorTheme,
): SerializedStyles => css`
	background-color: ${theme.shared.backgroundColor};
	height: ${theme.shared.height};
	width: ${theme.shared.width};
`;

/* Popover */
export type MenuPopoverTheme = Prettify<ComponentMenu['menuPopover']>;
export type PartialMenuPopoverTheme = Prettify<DeepPartial<MenuPopoverTheme>>;
export const defaultMenuPopoverTheme: MenuPopoverTheme =
	componentMenu.menuPopover;
export const menuPopoverStyles = (
	theme: MenuPopoverTheme,
	{ size }: Required<Pick<MenuPopoverProps, 'size'>>,
): SerializedStyles => css`
	overflow: auto;
	max-width: ${theme[size].maxWidth};
	width: ${theme[size].width};
	box-shadow: ${theme.shared.shadow};
`;
