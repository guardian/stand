import type {
	TabListProps as RACTabListProps,
	TabPanelProps as RACTabPanelProps,
	TabPanelsProps as RACTabPanelsProps,
	TabProps as RACTabProps,
	TabsProps as RACTabsProps,
} from 'react-aria-components';
import type { DefaultPropsWithChildren } from '../../util/types';
import type { IconProps } from '../Icon/types';
import type {
	TabListTheme,
	TabPanelsTheme,
	TabPanelTheme,
	TabsTheme,
	TabTheme,
} from './styles';

export interface TabsProps
	extends
		DefaultPropsWithChildren<TabsTheme, RACTabsProps['className']>,
		Omit<RACTabsProps, 'children'> {}

export interface TabListProps
	extends
		DefaultPropsWithChildren<
			TabListTheme,
			RACTabListProps<object>['className']
		>,
		Omit<RACTabListProps<object>, 'children'> {
	/**
	 * Orientation of the tabs. Can be either 'horizontal' or 'vertical'.
	 * Shouldn't need to set this manually, as it will be inherited from the parent `Tabs`.
	 * @default 'horizontal'
	 */
	orientation?: TabsProps['orientation'];
}

export interface TabProps
	extends
		DefaultPropsWithChildren<TabTheme, RACTabProps['className']>,
		Omit<RACTabProps, 'children'> {
	/**
	 * Orientation of the tabs. Can be either 'horizontal' or 'vertical'.
	 * Shouldn't need to set this manually, as it will be inherited from the parent `TabList`.
	 * @default 'horizontal'
	 */
	orientation?: TabsProps['orientation'];
	/**
	 * Size of the tab. Can be either 'sm', 'md'.
	 * @default 'md'
	 */
	size?: keyof Omit<TabTheme, 'shared'>;
	/**
	 * Icon to display in the tab. Can be either a symbol from the Icon component or a custom ReactNode.
	 */
	icon?: IconProps['symbol'] | Exclude<IconProps['children'], string>;
}

export interface TabPanelsProps
	extends
		DefaultPropsWithChildren<
			TabPanelsTheme,
			RACTabPanelsProps<object>['className']
		>,
		Omit<RACTabPanelsProps<object>, 'children'> {
	/**
	 * Orientation of the tabs. Can be either 'horizontal' or 'vertical'.
	 * Shouldn't need to set this manually, as it will be inherited from the parent `TabList`.
	 * @default 'horizontal'
	 */
	orientation?: TabsProps['orientation'];
}

export interface TabPanelProps
	extends
		DefaultPropsWithChildren<TabPanelTheme, RACTabPanelProps['className']>,
		Omit<RACTabPanelProps, 'children'> {}
