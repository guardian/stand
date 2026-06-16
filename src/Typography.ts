/**
 * Typography component entry point
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
 * If you only need the built CSS (./component/typography.css),
 * you don't need to install these.
 */
export { Typography } from './components/Typography/Typography';
export type { TypographyProps } from './components/Typography/types';
export type { PartialTypographyTheme as TypographyTheme } from './components/Typography/styles';
export { componentTypography } from './styleD/build/typescript/component/typography';
export type { ComponentTypography } from './styleD/build/typescript/component/typography';
