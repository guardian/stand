import type { ReactNode } from 'react';
import type {
	CellProps as RACCellProps,
	ColumnProps as RACColumnProps,
	RowProps as RACRowProps,
	TableBodyProps as RACTableBodyProps,
	TableHeaderProps as RACTableHeaderProps,
	TableProps as RACTableProps,
} from 'react-aria-components';
import type { Breakpoint } from '../../styleD/utils/semantic/mq';
import type { DefaultPropsWithChildren } from '../../util/types';
import type { TableTheme } from './styles';

export type ResponsiveTableValue<T> = Partial<Record<Breakpoint, T>>;

export interface TableProps
	extends
		DefaultPropsWithChildren<TableTheme>,
		Omit<RACTableProps, 'children' | 'className'> {
	/** CSS grid tracks for each responsive breakpoint. Values cascade upward. */
	columns: ResponsiveTableValue<string>;
	/** Breakpoint at which the visible column header is restored. */
	headerVisibleFrom?: Breakpoint;
}

export interface TableContextValue {
	columns: TableProps['columns'];
	headerVisibleFrom: NonNullable<TableProps['headerVisibleFrom']>;
	theme: TableTheme;
}

export interface TableHeaderProps<T extends object = object>
	extends
		DefaultPropsWithChildren<
			TableTheme,
			undefined,
			RACTableHeaderProps<T>['children']
		>,
		Omit<RACTableHeaderProps<T>, 'children' | 'className'> {}

export interface TableBodyProps<T extends object = object>
	extends
		Omit<
			DefaultPropsWithChildren<
				TableTheme,
				undefined,
				RACTableBodyProps<T>['children']
			>,
			'theme'
		>,
		Omit<RACTableBodyProps<T>, 'children' | 'className'> {}

export interface TableRowProps<T extends object = object>
	extends
		DefaultPropsWithChildren<TableTheme, undefined, RACRowProps<T>['children']>,
		Omit<RACRowProps<T>, 'children' | 'className'> {}

export interface TableColumnHeaderProps
	extends
		DefaultPropsWithChildren<TableTheme, undefined, RACColumnProps['children']>,
		Omit<RACColumnProps, 'children' | 'className'> {}

export interface TableCellProps
	extends
		DefaultPropsWithChildren<TableTheme, undefined, RACCellProps['children']>,
		Omit<RACCellProps, 'children' | 'className'> {
	/** Visual label shown while the column header is visually hidden. */
	compactLabel?: ReactNode;
	/** Responsive CSS `grid-column` placement. */
	gridColumn?: ResponsiveTableValue<string>;
	/** Responsive CSS `grid-row` placement. */
	gridRow?: ResponsiveTableValue<string>;
}
