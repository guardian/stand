import { createContext, useContext } from 'react';
import {
	composeRenderProps,
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
import type {
	TableBodyProps,
	TableCellProps,
	TableColumnHeaderProps,
	TableContextValue,
	TableHeaderProps,
	TableProps,
	TableRowProps,
} from './types';

const TableContext = createContext<TableContextValue>({
	columns: { sm: 'minmax(0, 1fr)' },
	headerVisibleFrom: 'lg',
	theme: defaultTableTheme,
});

export function Table({
	columns,
	headerVisibleFrom = 'lg',
	theme = {},
	dangerouslyOverrideCss,
	children,
	...props
}: TableProps) {
	const mergedTheme = mergeDeep(defaultTableTheme, theme);

	return (
		<TableContext.Provider
			value={{ columns, headerVisibleFrom, theme: mergedTheme }}
		>
			<RACTable
				css={[tableStyles(mergedTheme), dangerouslyOverrideCss]}
				{...props}
			>
				{children}
			</RACTable>
		</TableContext.Provider>
	);
}

export function TableHeader<T extends object = object>({
	theme = {},
	dangerouslyOverrideCss,
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
				dangerouslyOverrideCss,
			]}
			{...props}
		>
			{children}
		</RACTableHeader>
	);
}

export function TableBody<T extends object = object>({
	dangerouslyOverrideCss,
	children,
	...props
}: TableBodyProps<T>) {
	return (
		<RACTableBody css={[tableBodyStyles, dangerouslyOverrideCss]} {...props}>
			{children}
		</RACTableBody>
	);
}

export function TableRow<T extends object = object>({
	theme = {},
	dangerouslyOverrideCss,
	children,
	...props
}: TableRowProps<T>) {
	const context = useContext(TableContext);
	const mergedTheme = mergeDeep(context.theme, theme);

	return (
		<RACRow
			css={[
				tableRowStyles(mergedTheme, context.columns),
				dangerouslyOverrideCss,
			]}
			{...props}
		>
			{children}
		</RACRow>
	);
}

export function TableColumnHeader({
	theme = {},
	dangerouslyOverrideCss,
	children,
	...props
}: TableColumnHeaderProps) {
	const context = useContext(TableContext);
	const mergedTheme = mergeDeep(context.theme, theme);

	return (
		<RACColumn
			css={[tableColumnHeaderStyles(mergedTheme), dangerouslyOverrideCss]}
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
	dangerouslyOverrideCss,
	children,
	...props
}: TableCellProps) {
	const context = useContext(TableContext);
	const mergedTheme = mergeDeep(context.theme, theme);

	return (
		<RACCell
			css={[
				tableCellStyles(mergedTheme, gridColumn, gridRow),
				dangerouslyOverrideCss,
			]}
			{...props}
		>
			{composeRenderProps(children, (children) => (
				<>
					{compactLabel && (
						<span
							css={compactLabelStyles(mergedTheme, context.headerVisibleFrom)}
							aria-hidden="true"
						>
							{compactLabel}
						</span>
					)}
					{children}
				</>
			))}
		</RACCell>
	);
}
