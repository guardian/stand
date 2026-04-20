/**
 * Tag picker components entry point
 *
 * Peer dependencies required to use these components:
 * - `@emotion/react`
 * - `react`
 * - `react-aria-components`
 * - `react-dom`
 * - `typescript`
 *
 * See the `peerDependencies` section of package.json for compatible versions.
 *
 * If you only need the built CSS (./component/tagTable.css, ./component/tagAutocomplete.css),
 * you don't need to install these.
 */
export { TagAutocomplete } from './components/tag-picker/TagAutocomplete';
export { TagTable } from './components/tag-picker/TagTable';
export { componentAutocomplete } from './styleD/build/typescript/component/autocomplete';
export type { ComponentAutocomplete } from './styleD/build/typescript/component/autocomplete';
export { componentTagTable } from './styleD/build/typescript/component/tagTable';
export type { ComponentTagTable } from './styleD/build/typescript/component/tagTable';
