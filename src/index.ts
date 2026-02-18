/**
 * Main entry point - Design tokens only
 * Import components from their own entry points, this isolates components within their own peer dependencies.
 */

/**
 * editorial components tokens exports
 */
export { componentByline } from './styleD/build/typescript/component/byline';
export type { ComponentByline } from './styleD/build/typescript/component/byline';
export { componentTagAutocomplete } from './styleD/build/typescript/component/tagAutocomplete';
export type { ComponentTagAutocomplete } from './styleD/build/typescript/component/tagAutocomplete';
export { componentTagTable } from './styleD/build/typescript/component/tagTable';
export type { ComponentTagTable } from './styleD/build/typescript/component/tagTable';
export { componentUserMenu } from './styleD/build/typescript/component/userMenu';
export type { ComponentUserMenu } from './styleD/build/typescript/component/userMenu';

/**
 * design system components tokens exports
 */
export { componentAvatar } from './styleD/build/typescript/component/avatar';
export type { ComponentAvatar } from './styleD/build/typescript/component/avatar';
export { componentButton } from './styleD/build/typescript/component/button';
export type { ComponentButton } from './styleD/build/typescript/component/button';

/**
 * style dictionary exports - base
 */
export { baseColors } from './styleD/build/typescript/base/colors';
export type { BaseColors } from './styleD/build/typescript/base/colors';
export { baseTypography } from './styleD/build/typescript/base/typography';
export type { BaseTypography } from './styleD/build/typescript/base/typography';
export { baseSpacing } from './styleD/build/typescript/base/spacing';
export type { BaseSpacing } from './styleD/build/typescript/base/spacing';
export { baseSizing } from './styleD/build/typescript/base/sizing';
export type { BaseSizing } from './styleD/build/typescript/base/sizing';
export { baseRadius } from './styleD/build/typescript/base/radius';
export type { BaseRadius } from './styleD/build/typescript/base/radius';
/**
 * style dictionary exports - semantic
 */
export { semanticColors } from './styleD/build/typescript/semantic/colors';
export type { SemanticColors } from './styleD/build/typescript/semantic/colors';
export { semanticTypography } from './styleD/build/typescript/semantic/typography';
export type { SemanticTypography } from './styleD/build/typescript/semantic/typography';
export { semanticSizing } from './styleD/build/typescript/semantic/sizing';
export type { SemanticSizing } from './styleD/build/typescript/semantic/sizing';

/**
 * utils exports
 */
export { default as GlobalResetStyles } from './util/reset.css?inline';
