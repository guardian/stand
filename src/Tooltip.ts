/**
 * Tooltip component entry point
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
 * If you only need the built CSS (./component/tooltip.css),
 * you don't need to install these.
 */
export { Tooltip } from './components/Tooltip/Tooltip';
export type { TooltipProps } from './components/Tooltip/types';
export type { PartialTooltipTheme as TooltipTheme } from './components/Tooltip/styles';
export { componentTooltip } from './styleD/build/typescript/component/tooltip';
export type { ComponentTooltip } from './styleD/build/typescript/component/tooltip';
