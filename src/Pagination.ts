/**
 * Pagination component entry point
 *
 * Peer dependencies required to use this component:
 * - `@emotion/react`
 * - `react`
 * - `react-dom`
 * - `react-aria-components`
 * - `typescript`
 *
 * See the `peerDependencies` section of package.json for compatible versions.
 *
 * If you only need the built CSS (./component/pagination.css),
 * you don't need to install these.
 */
export { Pagination } from './components/Pagination/Pagination';
export type {
	PaginationProps,
	PaginationLabels,
	PaginationSummaryInfo,
} from './components/Pagination/types';
export type { PartialPaginationTheme as PaginationTheme } from './components/Pagination/styles';
export { componentPagination } from './styleD/build/typescript/component/pagination';
export type { ComponentPagination } from './styleD/build/typescript/component/pagination';
