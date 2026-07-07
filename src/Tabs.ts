/**
 * Tabs component entry point
 *
 * Peer dependencies required to use these components:
 * - `@emotion/react`
 * - `react`
 * - `react-dom`
 * - `typescript`
 * - `react-aria-components`
 *
 * See the `peerDependencies` section of package.json for compatible versions.
 *
 * If you only need the built CSS (./component/tabs.css),
 * you don't need to install these.
 */
export { Tabs } from './components/Tabs/Tabs';
export type {
	TabsProps,
	TabListProps,
	TabProps,
	TabPanelsProps,
	TabPanelProps,
} from './components/Tabs/types';
export type {
	PartialTabsTheme as TabsTheme,
	PartialTabListTheme as TabListTheme,
	PartialTabTheme as TabTheme,
	PartialTabPanelsTheme as TabPanelsTheme,
	PartialTabPanelTheme as TabPanelTheme,
} from './components/Tabs/styles';
export { componentTabs } from './styleD/build/typescript/component/tabs';
export type { ComponentTabs } from './styleD/build/typescript/component/tabs';
