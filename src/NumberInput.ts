/**
 * NumberInput component entry point
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
 * If you only need the built CSS (./component/numberInput.css),
 * you don't need to install these.
 */
export { NumberInput } from './components/NumberInput/NumberInput';
export type { NumberInputProps } from './components/NumberInput/types';
export type { PartialNumberInputTheme as NumberInputTheme } from './components/NumberInput/styles';
export { componentNumberInput } from './styleD/build/typescript/component/numberInput';
export type { ComponentNumberInput } from './styleD/build/typescript/component/numberInput';
