/**
 * Link component entry point
 *
 * Peer dependencies required to use these components:
 * - `@emotion/react`
 * - `react`
 * - `react-dom`
 * - `typescript`
 *
 * See the `peerDependencies` section of package.json for compatible versions.
 *
 * If you only need the built CSS (./component/link.css),
 * you don't need to install these.
 */
export { Link } from './components/Link/Link';
export type { LinkProps } from './components/Link/types';
export type { PartialLinkTheme as LinkTheme } from './components/Link/styles';
export { componentLink } from './styleD/build/typescript/component/link';
export type { ComponentLink } from './styleD/build/typescript/component/link';
