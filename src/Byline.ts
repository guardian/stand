/**
 * Byline component entry point
 *
 * Peer dependencies required to use this component:
 * - `@emotion/react`
 * - `@guardian/prosemirror-invisibles`
 * - `prosemirror-dropcursor`
 * - `prosemirror-history`
 * - `prosemirror-keymap`
 * - `prosemirror-model`
 * - `prosemirror-state`
 * - `prosemirror-view`
 * - `react`
 * - `react-dom`
 * - `typescript`
 *
 * See the `peerDependencies` section of package.json for compatible versions.
 *
 * If you only need the built CSS (./component/byline.css), you don't need to install these.
 */
export { Byline } from './components/Byline/Byline';
export type { BylineModel } from './components/Byline/lib';
export type { PartialBylineTheme as BylineTheme } from './components/Byline/theme';
export { componentByline } from './styleD/build/typescript/component/byline';
export type { ComponentByline } from './styleD/build/typescript/component/byline';
