/**
 * Menu component entry point
 *
 * Peer dependencies required to use these components:
 * - `@emotion/react`
 * - `react`
 * - `react-dom`
 * - `typescript`
 *
 * See the `peerDependencies` section of package.json for compatible versions.
 *
 * If you only need the built CSS (./component/menu.css),
 * you don't need to install these.
 */
export {
	Menu,
	MenuItem,
	MenuSection,
	MenuSeparator,
	MenuToggle,
} from './components/menu/Menu';
export type {
	MenuProps,
	MenuItemProps,
	MenuSectionProps,
	MenuSeparatorProps,
	MenuTriggerProps,
	MenuPopoverProps as PopoverProps,
} from './components/menu/types';
export type {
	MenuTheme,
	MenuItemTheme,
	MenuSectionTheme,
	MenuSeparatorTheme,
	MenuPopoverTheme,
} from './components/menu/styles';
export { componentMenu } from './styleD/build/typescript/component/menu';
export type { ComponentMenu } from './styleD/build/typescript/component/menu';
