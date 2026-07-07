/**
 * ButtonGroup component entry point
 *
 * Peer dependencies required to use these components:
 * - `@emotion/react`
 * - `react`
 * - `react-dom`
 * - `typescript`
 *
 * See the `peerDependencies` section of package.json for compatible versions.
 *
 * If you only need the built CSS (./component/buttonGroup.css),
 * you don't need to install these.
 */
export { ButtonGroup } from './components/ButtonGroup/ButtonGroup';
export type { ButtonGroupProps } from './components/ButtonGroup/types';
export type { PartialButtonGroupTheme as ButtonGroupTheme } from './components/ButtonGroup/styles';
export { componentButtonGroup } from './styleD/build/typescript/component/buttonGroup';
export type { ComponentButtonGroup } from './styleD/build/typescript/component/buttonGroup';
