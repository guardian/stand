import type {
	MenuItemProps as RACMenuItemProps,
	MenuProps as RACMenuProps,
	MenuSectionProps as RACMenuSectionProps,
	MenuTriggerProps as RACMenuTriggerProps,
	PopoverProps as RACPopoverProps,
} from 'react-aria-components';
import type { DefaultProps, DefaultPropsWithChildren } from '../../util/types';
import type { IconProps } from '../icon/types';
import type {
	MenuItemTheme,
	MenuSectionTheme,
	MenuTheme,
	PopoverTheme,
} from './styles';

/* Menu */
export interface MenuProps
	extends
		DefaultPropsWithChildren<MenuTheme, RACMenuProps<object>['className']>,
		Omit<RACMenuProps<object>, 'children'> {
	/**
	 * Size variant of the Menu
	 */
	size?: PopoverProps['size'];
	/**
	 * Props to pass to the underlying React Aria Popover component
	 */
	popoverProps?: Omit<PopoverProps, 'children' | 'size'>;
	/**
	 * Props to pass to the underlying React Aria MenuTrigger component
	 */
	menuTriggerProps?: Omit<MenuTriggerProps, 'children'>;
}

export interface MenuSectionProps
	extends
		DefaultPropsWithChildren<
			MenuSectionTheme,
			RACMenuSectionProps<object>['className']
		>,
		Omit<RACMenuSectionProps<object>, 'children'> {
	/**
	 * The (optional) name of the section to be displayed in a header
	 */
	name?: string;
	/**
	 * Size variant of the MenuSection, this doesn't need to be passed if the MenuSection is a child of Menu, as it will inherit the size of the Menu.
	 */
	size?: PopoverProps['size'];
}

/* MenuItem */
export interface MenuItemProps
	extends
		DefaultProps<MenuItemTheme, RACMenuItemProps['className']>,
		Omit<RACMenuItemProps, 'children'> {
	/**
	 * The main label of the menu item, this can be a string or any React node if more complex layout is needed.
	 */
	label: React.ReactNode;
	/**
	 * Optional description text for the menu item, this can be a string or any React node if more complex layout is needed. The description will be rendered below the label in a smaller font size.
	 */
	description?: React.ReactNode;
	/**
	 * Optional content to be rendered on the right side of the menu item, this can be used for things like keyboard shortcuts or badges. This can be a string or any React node if more complex layout is needed.
	 */
	aside?: React.ReactNode;
	/**
	 * Icon to be rendered within the left side of the menu item. Passed to the Icon component, so can be either a string (for material symbols) or an SVG element.
	 */
	icon?: IconProps['symbol'] | Exclude<IconProps['children'], string>;
	/**
	 * Size variant of the MenuItem, this doesn't need to be passed if the MenuItem is a child of Menu, as it will inherit the size of the Menu.
	 */
	size?: PopoverProps['size'];
}

/* Popover */
export interface PopoverProps
	extends
		DefaultProps<PopoverTheme, RACPopoverProps['className']>,
		RACPopoverProps {
	/**
	 * Size variant of the Popover, this doesn't need to be passed if the Popover is a child of Menu, as it will inherit the size of the Menu.
	 */
	size?: keyof Omit<PopoverTheme, 'shared'>;
}

/* MenuTrigger */
export type MenuTriggerProps = RACMenuTriggerProps;
