/**
 * Badge component entry point
 *
 * Peer dependencies required to use these components:
 * - `@emotion/react`
 * - `react`
 * - `react-dom`
 * - `typescript`
 *
 * See the `peerDependencies` section of package.json for compatible versions.
 *
 * If you only need the built CSS (./component/badge.css),
 * you don't need to install these.
 */
export { Badge } from './components/Badge/Badge';
export type { BadgeProps } from './components/Badge/types';
export type { PartialBadgeTheme as BadgeTheme } from './components/Badge/styles';
export { componentBadge } from './styleD/build/typescript/component/badge';
export type { ComponentBadge } from './styleD/build/typescript/component/badge';
