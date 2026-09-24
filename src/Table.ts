/**
 * Table component entry point
 *
 * Peer dependencies required to use these components:
 * - `@emotion/react`
 * - `react`
 * - `react-dom`
 * - `react-aria-components`
 * - `typescript`
 *
 * See the `peerDependencies` section of package.json for compatible versions.
 */
export {
	Table,
	TableBody,
	TableCell,
	TableColumnHeader,
	TableHeader,
	TableRow,
} from './components/Table/Table';
export type {
	ResponsiveTableValue,
	TableBodyProps,
	TableCellProps,
	TableColumnHeaderProps,
	TableHeaderProps,
	TableProps,
	TableRowProps,
} from './components/Table/types';
export type { PartialTableTheme as TableTheme } from './components/Table/styles';
export { componentTable } from './styleD/build/typescript/component/table';
export type { ComponentTable } from './styleD/build/typescript/component/table';
