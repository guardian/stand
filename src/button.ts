/**
 * Button component entry point
 *
 * Peer dependencies required to use these components:
 * - `@emotion/react`
 * - `react`
 * - `react-dom`
 * - `react-aria-components`
 * - `typescript`
 *
 * See the `peerDependencies` section of package.json for compatible versions.
 *
 * If you only need the built CSS (./component/button.css),
 * you don't need to install these.
 */
export { Button } from './components/button/Button';
export type { ButtonProps } from './components/button/types';
export type { ButtonTheme } from './components/button/styles';
export { componentButton } from './styleD/build/typescript/component/button';
export type { ComponentButton } from './styleD/build/typescript/component/button';
