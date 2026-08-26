import type { SerializedStyles } from '@emotion/react';
import type { HTMLAttributes, ReactNode } from 'react';
import type { Breakpoint } from '../../styleD/utils/semantic/mq';

export interface TableProps extends Omit<
	HTMLAttributes<HTMLDivElement>,
	'children'
> {
	/** Accessible name for the table. Use `aria-labelledby` instead when a visible heading exists. */
	'aria-label'?: string;
	/** CSS grid track definition shared by the header and rows. */
	columns: string;
	/** CSS grid track definition used below `compactAt`. */
	mobileColumns?: string;
	/** Breakpoint below which the table uses its compact layout. */
	compactAt?: Breakpoint;
	children: ReactNode;
	cssOverrides?: SerializedStyles;
}

export interface TableSectionProps extends Omit<
	HTMLAttributes<HTMLDivElement>,
	'children'
> {
	children: ReactNode;
	cssOverrides?: SerializedStyles;
}

export interface TableRowProps extends Omit<
	HTMLAttributes<HTMLDivElement>,
	'children'
> {
	children: ReactNode;
	cssOverrides?: SerializedStyles;
}

export interface TableColumnHeaderProps extends Omit<
	HTMLAttributes<HTMLDivElement>,
	'children'
> {
	children: ReactNode;
	cssOverrides?: SerializedStyles;
}

export interface TableCellProps extends Omit<
	HTMLAttributes<HTMLDivElement>,
	'children'
> {
	children: ReactNode;
	/** Visible label shown before the cell content in the compact layout. */
	mobileLabel?: ReactNode;
	/** CSS `grid-column` value applied in the compact layout. */
	mobileGridColumn?: string;
	/** Removes this cell visually and from the accessibility tree in compact layouts. */
	hideOnMobile?: boolean;
	/** Marks the cell as the identifying header for its row. */
	isRowHeader?: boolean;
	cssOverrides?: SerializedStyles;
}
