/**
 * Select component entry point
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
 * If you only need the built CSS (./component/select.css),
 * you don't need to install these.
 */
export { Option, Select } from './components/select/Select';
export type { OptionProps, SelectProps } from './components/select/types';
export type { PartialSelectTheme as SelectTheme } from './components/select/styles';
export { componentSelect } from './styleD/build/typescript/component/select';
export type { ComponentSelect } from './styleD/build/typescript/component/select';
