/**
 * IntendedAudienceSignifier component entry point
 *
 * Peer dependencies required to use these components:
 * - `@emotion/react`
 * - `react`
 * - `react-dom`
 * - `typescript`
 *
 * See the `peerDependencies` section of package.json for compatible versions.
 *
 * If you only need the built CSS (./component/intendedAudienceSiginifier.css),
 * you don't need to install these.
 */
export { IntendedAudienceSignifier } from './components/IntendedAudienceSignifier/IntendedAudienceSignifier';
export type { IntendedAudienceSignifierProps } from './components/IntendedAudienceSignifier/types';
export type { IntendedAudienceSignifierTheme } from './components/IntendedAudienceSignifier/styles';
export { componentIntendedAudienceSignifier } from './styleD/build/typescript/component/intendedAudienceSignifier';
export type { ComponentIntendedAudienceSignifier } from './styleD/build/typescript/component/intendedAudienceSignifier';
export { mapTagsToSourceAndTarget } from './components/IntendedAudienceSignifier/utils';
