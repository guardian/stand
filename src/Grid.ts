/**
 * Grid component entry point
 *
 * Peer dependencies required to use these components:
 * - `@emotion/react`
 * - `react`
 * - `react-dom`
 * - `typescript`
 *
 * See the `peerDependencies` section of package.json for compatible versions.
 *
 * If you only need the built CSS (./component/grid.css),
 * you don't need to install these.
 */
export { Grid } from './components/Grid/Grid';
export { Item } from './components/Grid/Grid';
export type { GridProps, ItemProps } from './components/Grid/types';
export type { PartialGridTheme as GridTheme } from './components/Grid/styles';
export { componentGrid } from './styleD/build/typescript/component/grid';
export type { ComponentGrid } from './styleD/build/typescript/component/grid';
