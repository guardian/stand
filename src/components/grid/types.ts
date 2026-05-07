import type { HTMLAttributes } from 'react';
import type { Breakpoint } from '../../styleD/utils/semantic/mq';
import type { DefaultPropsWithChildren } from '../../util/types';
import type { GridTheme } from './styles';

export type ResponsiveGridValue<T> = Partial<Record<Breakpoint, T>>;
export type GridSizeValue = number | 'auto' | 'grow';
export type GridOffsetValue = number | 'auto';

export interface GridProps
	extends
		DefaultPropsWithChildren<GridTheme>,
		Omit<HTMLAttributes<HTMLDivElement>, 'children'> {}

export interface ItemProps
	extends
		DefaultPropsWithChildren<GridTheme>,
		Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
	/**
	 * Number of columns the item should span, or responsive values keyed by breakpoint.
	 */
	size?: GridSizeValue | ResponsiveGridValue<GridSizeValue>;
	/**
	 * Columns to offset the item from the left. Numbers push the item that many columns
	 * to the right. 'auto' pushes it to the far right of the row.
	 * Responsive values keyed by breakpoint are also accepted.
	 */
	offset?: GridOffsetValue | ResponsiveGridValue<GridOffsetValue>;
}
