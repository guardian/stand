/**
 * Icon component entry point
 *
 * Peer dependencies required to use these components:
 * - `@emotion/react`
 * - `react`
 * - `react-dom`
 * - `typescript`
 *
 * See the `peerDependencies` section of package.json for compatible versions.
 *
 * If you only need the built CSS (./component/icon.css),
 * you don't need to install these.
 *
 * You'll also need to install a set of icons to use the Icon component.
 *
 * The Icon component supports two types of icons:
 * 1. Material Symbols
 * 2. SVG icons (e.g. Material Icons or custom SVG icon components)
 *
 * See the documentation for the Icon component for instructions on how to use it with both types of icons.
 */
export { Icon } from './components/icon/Icon';
export type { IconProps } from './components/icon/types';
export type { IconTheme } from './components/icon/styles';
export { componentIcon } from './styleD/build/typescript/component/icon';
export type { ComponentIcon } from './styleD/build/typescript/component/icon';
