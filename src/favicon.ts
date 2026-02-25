/**
 * Favicon component entry point
 *
 * Peer dependencies required to use these components:
 * - `@emotion/react`
 * - `react`
 * - `react-dom`
 * - `typescript`
 *
 * See the `peerDependencies` section of package.json for compatible versions.
 *
 * If you only need the built CSS (./component/favicon.css),
 * you don't need to install these.
 */
export { Favicon } from './components/favicon/Favicon';
export type { FaviconProps } from './components/favicon/types';
export type { FaviconTheme } from './components/favicon/styles';
export { componentFavicon } from './styleD/build/typescript/component/favicon';
export type { ComponentFavicon } from './styleD/build/typescript/component/favicon';
