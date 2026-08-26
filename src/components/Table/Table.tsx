import { createContext, useContext } from 'react';
import {
	Cell as RACCell,
	Column as RACColumn,
	Row as RACRow,
	Table as RACTable,
	TableBody as RACTableBody,
	TableHeader as RACTableHeader,
} from 'react-aria-components';
import { mergeDeep } from '../../util/mergeDeep';
import {
	compactLabelStyles,
	defaultTableTheme,
	tableBodyStyles,
	tableCellStyles,
	tableColumnHeaderStyles,
	tableHeaderStyles,
	tableRowStyles,
	tableStyles,
} from './styles';
import type { TableTheme } from './styles';
import type {
	TableBodyProps,
	TableCellProps,
	TableColumnHeaderProps,
	TableHeaderProps,
	TableProps,
	TableRowProps,
} from './types';

interface TableContextValue {
	columns: TableProps['columns'];
	headerVisibleFrom: NonNullable<TableProps['headerVisibleFrom']>;
	theme: TableTheme;
}

const TableContext = createContext<TableContextValue>({
	columns: { sm: 'minmax(0, 1fr)' },
	headerVisibleFrom: 'lg',
	theme: defaultTableTheme,
});

export function Table({
	columns,
	headerVisibleFrom = 'lg',
	theme = {},
	cssOverrides,
	children,
	...props
}: TableProps) {
	const mergedTheme = mergeDeep(defaultTableTheme, theme);

	return (
		<TableContext.Provider
			value={{ columns, headerVisibleFrom, theme: mergedTheme }}
		>
			<RACTable css={[tableStyles(mergedTheme), cssOverrides]} {...props}>
				{children}
			</RACTable>
		</TableContext.Provider>
	);
}

export function TableHeader<T extends object = object>({
	theme = {},
	cssOverrides,
	children,
	...props
}: TableHeaderProps<T>) {
	const context = useContext(TableContext);
	const mergedTheme = mergeDeep(context.theme, theme);

	return (
		<RACTableHeader
			css={[
				tableHeaderStyles(
					mergedTheme,
					context.columns,
					context.headerVisibleFrom,
				),
				cssOverrides,
			]}
			{...props}
		>
			{children}
		</RACTableHeader>
	);
}

export function TableBody<T extends object = object>({
	cssOverrides,
	children,
	...props
}: TableBodyProps<T>) {
	return (
		<RACTableBody css={[tableBodyStyles, cssOverrides]} {...props}>
			{children}
		</RACTableBody>
	);
}

export function TableRow<T extends object = object>({
	theme = {},
	cssOverrides,
	children,
	...props
}: TableRowProps<T>) {
	const context = useContext(TableContext);
	const mergedTheme = mergeDeep(context.theme, theme);

	return (
		<RACRow
			css={[tableRowStyles(mergedTheme, context.columns), cssOverrides]}
			{...props}
		>
			{children}
		</RACRow>
	);
}

export function TableColumnHeader({
	theme = {},
	cssOverrides,
	children,
	...props
}: TableColumnHeaderProps) {
	const context = useContext(TableContext);
	const mergedTheme = mergeDeep(context.theme, theme);

	return (
		<RACColumn
			css={[tableColumnHeaderStyles(mergedTheme), cssOverrides]}
			{...props}
		>
			{children}
		</RACColumn>
	);
}

export function TableCell({
	compactLabel,
	gridColumn,
	gridRow,
	theme = {},
	cssOverrides,
	children,
	...props
}: TableCellProps) {
	const context = useContext(TableContext);
	const mergedTheme = mergeDeep(context.theme, theme);

	return (
		<RACCell
			css={[tableCellStyles(mergedTheme, gridColumn, gridRow), cssOverrides]}
			{...props}
		>
			{compactLabel && (
				<span
					css={compactLabelStyles(mergedTheme, context.headerVisibleFrom)}
					aria-hidden="true"
				>
					{compactLabel}
				</span>
			)}
			{children}
		</RACCell>
	);
}
