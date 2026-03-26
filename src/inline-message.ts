/**
 * InlineMessage component entry point
 *
 * Peer dependencies required to use these components:
 * - `@emotion/react`
 * - `react`
 * - `react-dom`
 * - `typescript`
 *
 * See the `peerDependencies` section of package.json for compatible versions.
 *
 * If you only need the built CSS (./component/inlineMessage.css),
 * you don't need to install these.
 */
export { InlineMessage } from './components/inline-message/InlineMessage';
export type { InlineMessageProps } from './components/inline-message/types';
export type { InlineMessageTheme } from './components/inline-message/styles';
export { componentInlineMessage } from './styleD/build/typescript/component/inlineMessage';
export type { ComponentInlineMessage } from './styleD/build/typescript/component/inlineMessage';
