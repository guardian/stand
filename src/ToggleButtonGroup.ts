/**
 * ToggleButtonGroup component entry point
 *
 * Peer dependencies required to use these components:
 * - `@emotion/react`
 * - `react`
 * - `react-dom`
 * - `react-aria-components`
 * - `typescript`
 *
 * See the `peerDependencies` section of package.json for compatible versions.
 *
 * If you only need the built CSS (./component/toggleButtonGroup.css),
 * you don't need to install these.
 */
export {
	ToggleButtonGroup,
	ToggleButton,
} from './components/ToggleButtonGroup/ToggleButtonGroup';
export type {
	ToggleButtonGroupProps,
	ToggleButtonProps,
} from './components/ToggleButtonGroup/types';
export type { PartialToggleButtonGroupTheme as ToggleButtonGroupTheme } from './components/ToggleButtonGroup/styles';
export { componentToggleButtonGroup } from './styleD/build/typescript/component/toggleButtonGroup';
export type { ComponentToggleButtonGroup } from './styleD/build/typescript/component/toggleButtonGroup';
