/**
 * Layout component entry point
 *
 * Peer dependencies required to use these components:
 * - `@emotion/react`
 * - `react`
 * - `react-dom`
 * - `typescript`
 * - `react-aria-components` (for the `TopBar` components used in the example)
 *
 * See the `peerDependencies` section of package.json for compatible versions.
 *
 * If you only need the built CSS (./component/layout.css),
 * you don't need to install these.
 */
export { Layout } from './components/layout/Layout';
export type { LayoutProps, SidebarProps } from './components/layout/types';
export type {
	PartialLayoutTheme as LayoutTheme,
	PartialSidebarTheme as SidebarTheme,
} from './components/layout/styles';
export { componentLayout } from './styleD/build/typescript/component/layout';
export type { ComponentLayout } from './styleD/build/typescript/component/layout';
