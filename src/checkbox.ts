/**
 * Checkbox and CheckboxGroup components entry point
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
 * If you only need the built CSS (./component/checkbox.css),
 * you don't need to install these.
 */
export { Checkbox } from './components/checkbox/Checkbox';
export { CheckboxGroup } from './components/checkbox/CheckboxGroup';
export type {
	CheckboxProps,
	CheckboxGroupProps,
} from './components/checkbox/types';
export type { PartialCheckboxTheme as CheckboxTheme } from './components/checkbox/styles';
export { componentCheckbox } from './styleD/build/typescript/component/checkbox';
export type { ComponentCheckbox } from './styleD/build/typescript/component/checkbox';
