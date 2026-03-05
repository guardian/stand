import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentMenu } from '../../styleD/build/typescript/component/menu';
import { componentMenu } from '../../styleD/build/typescript/component/menu';
import type { Prettify } from '../../util/types';
import { convertTypographyToEmotionStringStyle } from '../../utils';
import type { MenuItemProps, MenuSectionProps, PopoverProps } from './types';

/* Menu */
export type MenuTheme = Prettify<ComponentMenu['menu']>;
export const defaultMenuTheme: MenuTheme = componentMenu.menu;
export const menuStyles = (theme: MenuTheme): SerializedStyles => css`
	display: ${theme.shared.display};
	flex-direction: ${theme.shared['flex-direction']};
	border: ${theme.shared.border};
	background: ${theme.shared['background-color']};
`;

/* MenuSection */
export type MenuSectionTheme = Prettify<ComponentMenu['menuSection']>;
export const defaultMenuSectionTheme: MenuSectionTheme =
	componentMenu.menuSection;
export const menuSectionHeaderStyles = (
	theme: MenuSectionTheme,
	{ size }: Required<Pick<MenuSectionProps, 'size'>>,
): SerializedStyles => css`
	display: ${theme.header.shared.display};
	align-items: ${theme.header.shared['align-items']};
	padding: ${theme.header.shared.padding.top}
		${theme.header.shared.padding.right} ${theme.header.shared.padding.bottom}
		${theme.header.shared.padding.left};
	height: ${theme.header[size].height};
	background: ${theme.header.shared['background-color']};
	${convertTypographyToEmotionStringStyle(theme.header[size].typography)}
`;

/* MenuItem */
export type MenuItemTheme = Prettify<ComponentMenu['menuItem']>;
export const defaultMenuItemTheme: MenuItemTheme = componentMenu.menuItem;
export const menuItemStyles = (
	theme: MenuItemTheme,
	{ description }: Pick<MenuItemProps, 'description'>,
	isFocusVisible = false,
): SerializedStyles => css`
	display: ${theme.shared.display};
	grid-template-columns: ${theme.shared['grid-template-columns']};
	grid-template-areas: ${description
		? theme.shared['grid-template-areas-with-description']
		: theme.shared['grid-template-areas']};
	gap: ${theme.shared.gap};
	align-items: ${theme.shared['align-items']};
	padding: ${theme.shared.padding.top} ${theme.shared.padding.right}
		${theme.shared.padding.bottom} ${theme.shared.padding.left};
	border-bottom: ${theme.shared['border-bottom']};
	&:last-child {
		border-bottom: ${theme.shared[':last-child']['border-bottom']};
	}
	&[data-hovered],
	&:hover {
		background: ${theme.shared[':hover']['background-color']};
	}
	${isFocusVisible
		? css`
				outline: ${theme.shared[':focus-visible']['outline']};
				outline-offset: ${theme.shared[':focus-visible']['outline-offset']};
				background: ${theme.shared[':hover']['background-color']};
			`
		: css`
				outline: none;
			`}
`;
export const menuItemIconStyles = (
	theme: MenuItemTheme,
	{ size }: Required<Pick<MenuItemProps, 'size'>>,
): SerializedStyles => css`
	grid-area: ${theme.shared.icon['grid-area']};
	justify-self: ${theme.shared.icon['justify-self']};
	align-self: ${theme.shared.icon['align-self']};
	/* Ensure the line-height matches the font line-height of the label for alignment */
	line-height: ${theme[size].icon['line-height']};
`;
export const menuItemLabelStyles = (
	theme: MenuItemTheme,
	{ size }: Required<Pick<MenuItemProps, 'size'>>,
): SerializedStyles => css`
	grid-area: ${theme.shared.label['grid-area']};
	color: ${theme.shared.label.color};
	${convertTypographyToEmotionStringStyle(theme[size].typography)}
`;
export const menuItemDescriptionStyles = (
	theme: MenuItemTheme,
	{ size }: Required<Pick<MenuItemProps, 'size'>>,
): SerializedStyles => css`
	grid-area: ${theme.shared.description['grid-area']};
	color: ${theme.shared.description.color};
	${convertTypographyToEmotionStringStyle(theme[size].typography)}
`;
export const menuItemAsideStyles = (
	theme: MenuItemTheme,
	{ size }: Required<Pick<MenuItemProps, 'size'>>,
): SerializedStyles => css`
	grid-area: ${theme.shared.aside['grid-area']};
	justify-self: ${theme.shared.aside['justify-self']};
	align-self: ${theme.shared.aside['align-self']};
	color: ${theme.shared.aside.color};
	${convertTypographyToEmotionStringStyle(theme[size].typography)}
`;

/* MenuSeparator */
export type MenuSeparatorTheme = Prettify<ComponentMenu['menuSeparator']>;
export const defaultMenuSeparatorTheme: MenuSeparatorTheme =
	componentMenu.menuSeparator;
export const menuSeparatorStyles = (
	theme: MenuSeparatorTheme,
): SerializedStyles => css`
	background-color: ${theme.shared['background-color']};
	height: ${theme.shared.height};
	width: ${theme.shared.width};
`;

/* Popover */
export type PopoverTheme = Prettify<ComponentMenu['popover']>;
export const defaultPopoverTheme: PopoverTheme = componentMenu.popover;
export const popoverStyles = (
	theme: PopoverTheme,
	{ size }: Required<Pick<PopoverProps, 'size'>>,
): SerializedStyles => css`
	overflow: ${theme.shared.overflow};
	max-width: ${theme[size]['max-width']};
	width: ${theme[size].width};
	box-shadow: ${theme.shared.shadow};
`;
