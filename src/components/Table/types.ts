import type { SerializedStyles } from '@emotion/react';
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
import type { DeepPartial } from '../../util/types';
import type { TableTheme } from './styles';

export type ResponsiveTableValue<T> = Partial<Record<Breakpoint, T>>;

interface TableStyleProps {
	theme?: DeepPartial<TableTheme>;
	cssOverrides?: SerializedStyles | SerializedStyles[];
}

interface TableCssOverridesProps {
	cssOverrides?: SerializedStyles | SerializedStyles[];
}

export interface TableProps
	extends Omit<RACTableProps, 'children' | 'className'>, TableStyleProps {
	/** CSS grid tracks for each responsive breakpoint. Values cascade upward. */
	columns: ResponsiveTableValue<string>;
	/** Breakpoint at which the visible column header is restored. */
	headerVisibleFrom?: Breakpoint;
	children?: ReactNode;
	className?: RACTableProps['className'];
}

export interface TableHeaderProps<T extends object = object>
	extends
		Omit<RACTableHeaderProps<T>, 'children' | 'className'>,
		TableStyleProps {
	children?: RACTableHeaderProps<T>['children'];
	className?: RACTableHeaderProps<T>['className'];
}

export interface TableBodyProps<T extends object = object>
	extends
		Omit<RACTableBodyProps<T>, 'children' | 'className'>,
		TableCssOverridesProps {
	children?: RACTableBodyProps<T>['children'];
	className?: RACTableBodyProps<T>['className'];
}

export interface TableRowProps<T extends object = object>
	extends Omit<RACRowProps<T>, 'children' | 'className'>, TableStyleProps {
	children?: RACRowProps<T>['children'];
	className?: RACRowProps<T>['className'];
}

export interface TableColumnHeaderProps
	extends Omit<RACColumnProps, 'children' | 'className'>, TableStyleProps {
	children?: RACColumnProps['children'];
	className?: RACColumnProps['className'];
}

export interface TableCellProps
	extends Omit<RACCellProps, 'children' | 'className'>, TableStyleProps {
	children?: RACCellProps['children'];
	/** Visual label shown while the column header is visually hidden. */
	compactLabel?: ReactNode;
	/** Responsive CSS `grid-column` placement. */
	gridColumn?: ResponsiveTableValue<string>;
	/** Responsive CSS `grid-row` placement. */
	gridRow?: ResponsiveTableValue<string>;
	className?: RACCellProps['className'];
}
