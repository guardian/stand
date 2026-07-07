import React from 'react';
import {
	Tab as ReactAriaTab,
	TabList as ReactAriaTabList,
	TabPanel as ReactAriaTabPanel,
	TabPanels as ReactAriaTabPanels,
	Tabs as ReactAriaTabs,
} from 'react-aria-components';
import { mergeDeep } from '../../util/mergeDeep';
import { Icon } from '../Icon/Icon';
import {
	defaultTabListTheme,
	defaultTabPanelsTheme,
	defaultTabPanelTheme,
	defaultTabsTheme,
	defaultTabTheme,
	tabListStyles,
	tabPanelsStyles,
	tabPanelStyles,
	tabsStyles,
	tabStyles,
} from './styles';
import type {
	TabListProps,
	TabPanelProps,
	TabPanelsProps,
	TabProps,
	TabsProps,
} from './types';

function TabsRoot({
	children,
	orientation = 'horizontal',
	size = 'md',
	theme = {},
	cssOverrides,
	...props
}: TabsProps) {
	const mergedTheme = mergeDeep(defaultTabsTheme, theme);

	const validChildren: React.ReactElement[] = [];

	// Only TabList and TabPanels are allowed as direct children of TabsRoot
	React.Children.forEach(children, (child, i) => {
		if (!React.isValidElement(child)) {
			return;
		}
		if (child.type === TabList || child.type === TabPanels) {
			validChildren.push(
				React.cloneElement(
					child as React.ReactElement<{
						orientation?: TabsProps['orientation'];
						size?: TabsProps['size'];
					}>,
					{
						key: `${child.key}-${i}`,
						orientation,
						size,
					},
				),
			);
		}
	});

	return (
		<ReactAriaTabs
			css={[tabsStyles(mergedTheme), cssOverrides]}
			orientation={orientation}
			{...props}
		>
			{validChildren}
		</ReactAriaTabs>
	);
}

function TabList({
	children,
	orientation = 'horizontal',
	size = 'md',
	theme = {},
	cssOverrides,
	...props
}: TabListProps) {
	const mergedTheme = mergeDeep(defaultTabListTheme, theme);

	const tabs: React.ReactElement[] = [];

	// Only Tab components are allowed as direct children of TabList
	React.Children.forEach(children, (child, i) => {
		if (!React.isValidElement(child)) {
			return;
		}
		if (child.type === Tab) {
			tabs.push(
				React.cloneElement(child as React.ReactElement<TabProps>, {
					key: `${child.key}-${i}`,
					orientation,
					size,
				}),
			);
		}
	});

	return (
		<ReactAriaTabList
			css={[tabListStyles(mergedTheme), cssOverrides]}
			{...props}
		>
			{tabs}
		</ReactAriaTabList>
	);
}

function Tab({
	children,
	orientation = 'horizontal',
	size = 'md',
	icon,
	theme = {},
	cssOverrides,
	...props
}: TabProps) {
	const mergedTheme = mergeDeep(defaultTabTheme, theme);

	const iconSize = size === 'md' ? 'lg' : 'sm';

	return (
		<ReactAriaTab
			css={[tabStyles(mergedTheme, { orientation, size, icon }), cssOverrides]}
			{...props}
		>
			{icon && <Icon size={iconSize}>{icon}</Icon>}
			{children}
		</ReactAriaTab>
	);
}

function TabPanels({
	children,
	theme = {},
	cssOverrides,
	...props
}: TabPanelsProps) {
	const mergedTheme = mergeDeep(defaultTabPanelsTheme, theme);

	const panels: React.ReactElement[] = [];

	// Only TabPanel components are allowed as direct children of TabPanels
	React.Children.forEach(children, (child, i) => {
		if (!React.isValidElement(child)) {
			return;
		}
		if (child.type === TabPanel) {
			panels.push(React.cloneElement(child, { key: `${child.key}-${i}` }));
		}
	});

	return (
		<ReactAriaTabPanels
			css={[tabPanelsStyles(mergedTheme), cssOverrides]}
			{...props}
		>
			{panels}
		</ReactAriaTabPanels>
	);
}

function TabPanel({
	children,
	theme = {},
	cssOverrides,
	...props
}: TabPanelProps) {
	const mergedTheme = mergeDeep(defaultTabPanelTheme, theme);

	return (
		<ReactAriaTabPanel
			css={[tabPanelStyles(mergedTheme), cssOverrides]}
			{...props}
		>
			{children}
		</ReactAriaTabPanel>
	);
}

interface TabsCompound {
	(props: TabsProps): React.ReactElement<TabsProps, typeof ReactAriaTabs>;
	TabList: (
		props: TabListProps,
	) => React.ReactElement<TabListProps, typeof ReactAriaTabList>;
	Tab: (props: TabProps) => React.ReactElement<TabProps, typeof ReactAriaTab>;
	TabPanels: (
		props: TabPanelsProps,
	) => React.ReactElement<TabPanelsProps, typeof ReactAriaTabPanels>;
	TabPanel: (
		props: TabPanelProps,
	) => React.ReactElement<TabPanelProps, typeof ReactAriaTabPanel>;
}

export const Tabs: TabsCompound = Object.assign(TabsRoot, {
	TabList,
	Tab,
	TabPanels,
	TabPanel,
});
