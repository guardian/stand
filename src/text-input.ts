/**
 * TextInput component entry point
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
 * If you only need the built CSS (./component/textInput.css),
 * you don't need to install these.
 */
export { TextInput } from './components/text-input/TextInput';
export type { TextInputProps } from './components/text-input/types';
export type { TextInputTheme } from './components/text-input/styles';
export { componentTextInput } from './styleD/build/typescript/component/textInput';
export type { ComponentTextInput } from './styleD/build/typescript/component/textInput';
