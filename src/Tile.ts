/**
 * Tile component entry point
 *
 * Peer dependencies required to use these components:
 * - `@emotion/react`
 * - `react`
 * - `react-dom`
 * - `typescript`
 *
 * See the `peerDependencies` section of package.json for compatible versions.
 *
 * If you only need the built CSS (./component/Tile.css),
 * you don't need to install these.
 */
export { Tile } from './components/Tile/Tile';
export type { TileProps } from './components/Tile/types';
export type { TileTheme } from './components/Tile/styles';
export { componentTile } from './styleD/build/typescript/component/tile';
export type { ComponentTile } from './styleD/build/typescript/component/tile';
