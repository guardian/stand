import { createContext, useContext } from 'react';
import {
	mobileLabelStyles,
	tableBodyStyles,
	tableCellStyles,
	tableColumnHeaderStyles,
	tableHeaderStyles,
	tableRowStyles,
	tableStyles,
} from './styles';
import type {
	TableCellProps,
	TableColumnHeaderProps,
	TableProps,
	TableRowProps,
	TableSectionProps,
} from './types';

const TableContext = createContext<TableProps['compactAt']>('md');

export function Table({
	columns,
	mobileColumns = 'minmax(0, 1fr) auto',
	compactAt = 'md',
	cssOverrides,
	children,
	...props
}: TableProps) {
	return (
		<TableContext.Provider value={compactAt}>
			<div
				{...props}
				role="table"
				css={[tableStyles(columns, mobileColumns, compactAt), cssOverrides]}
			>
				{children}
			</div>
		</TableContext.Provider>
	);
}

export function TableHeader({
	cssOverrides,
	children,
	...props
}: TableSectionProps) {
	const compactAt = useContext(TableContext) ?? 'md';

	return (
		<div
			{...props}
			role="row"
			css={[tableHeaderStyles(compactAt), cssOverrides]}
		>
			{children}
		</div>
	);
}

export function TableBody({
	cssOverrides,
	children,
	...props
}: TableSectionProps) {
	return (
		<div {...props} role="rowgroup" css={[tableBodyStyles, cssOverrides]}>
			{children}
		</div>
	);
}

export function TableRow({ cssOverrides, children, ...props }: TableRowProps) {
	return (
		<div {...props} role="row" css={[tableRowStyles, cssOverrides]}>
			{children}
		</div>
	);
}

export function TableColumnHeader({
	cssOverrides,
	children,
	...props
}: TableColumnHeaderProps) {
	return (
		<div
			{...props}
			role="columnheader"
			css={[tableColumnHeaderStyles, cssOverrides]}
		>
			{children}
		</div>
	);
}

export function TableCell({
	mobileLabel,
	mobileGridColumn,
	hideOnMobile,
	isRowHeader = false,
	cssOverrides,
	children,
	...props
}: TableCellProps) {
	const compactAt = useContext(TableContext) ?? 'md';

	return (
		<div
			{...props}
			role={isRowHeader ? 'rowheader' : 'cell'}
			css={[
				tableCellStyles(compactAt, mobileGridColumn, hideOnMobile),
				cssOverrides,
			]}
		>
			{mobileLabel && (
				<span css={mobileLabelStyles(compactAt)} aria-hidden="true">
					{mobileLabel}
				</span>
			)}
			{children}
		</div>
	);
}
