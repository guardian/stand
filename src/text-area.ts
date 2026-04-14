/**
 * TextArea component entry point
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
 * If you only need the built CSS (./component/textArea.css),
 * you don't need to install these.
 */
export { TextArea } from './components/text-area/TextArea';
export type { TextAreaProps } from './components/text-area/types';
export type { TextAreaTheme } from './components/text-area/styles';
export { componentTextArea } from './styleD/build/typescript/component/textArea';
export type { ComponentTextArea } from './styleD/build/typescript/component/textArea';
