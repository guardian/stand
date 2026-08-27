import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import {
	componentTable,
	type ComponentTable,
} from '../../styleD/build/typescript/component/table';
import { from, until } from '../../styleD/utils/semantic/mq';
import type { Breakpoint } from '../../styleD/utils/semantic/mq';
import type { DeepPartial, Prettify } from '../../util/types';

export type TableTheme = Prettify<ComponentTable>;
export type PartialTableTheme = Prettify<DeepPartial<TableTheme>>;
export type ResponsiveTableValue<T> = Partial<Record<Breakpoint, T>>;

export const defaultTableTheme: TableTheme = componentTable;

const responsiveValue = <T>(
	value: ResponsiveTableValue<T>,
	breakpoint: Breakpoint,
): T | undefined => {
	if (breakpoint === 'lg') {
		return value.lg ?? value.md ?? value.sm;
	}
	if (breakpoint === 'md') {
		return value.md ?? value.sm;
	}
	return value.sm;
};

const gridTemplateStyles = (
	columns: ResponsiveTableValue<string>,
): SerializedStyles => css`
	grid-template-columns: ${responsiveValue(columns, 'sm') ?? 'minmax(0, 1fr)'};

	${from.md} {
		grid-template-columns: ${
			responsiveValue(columns, 'md') ?? 'minmax(0, 1fr)'
		};
	}

	${from.lg} {
		grid-template-columns: ${
			responsiveValue(columns, 'lg') ?? 'minmax(0, 1fr)'
		};
	}
`;

const visuallyHiddenStyles = css`
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	margin: -1px;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	white-space: nowrap;
	border: 0;
`;

export const tableStyles = (theme: TableTheme): SerializedStyles => css`
	display: block;
	box-sizing: border-box;
	width: ${theme.table.width};
	border: ${theme.table.border};
	border-radius: ${theme.table.borderRadius};
	border-collapse: collapse;
	border-spacing: 0;
	overflow: hidden;
	background-color: ${theme.table.backgroundColor};
	color: ${theme.table.color};
	outline: none;

	&[data-focus-visible] {
		outline: ${theme.table.focusVisible.outline};
		outline-offset: ${theme.table.focusVisible.outlineOffset};
	}
`;

export const tableHeaderStyles = (
	theme: TableTheme,
	columns: ResponsiveTableValue<string>,
	headerVisibleFrom: Breakpoint,
): SerializedStyles => css`
	display: block;
	background-color: ${theme.header.backgroundColor};
	border-bottom: ${theme.header.border};

	& > tr {
		display: grid;
		${gridTemplateStyles(columns)}
	}

	${
		headerVisibleFrom === 'sm'
			? ''
			: css`
					${until[headerVisibleFrom]} {
						${visuallyHiddenStyles}
					}
				`
	}
`;

export const tableBodyStyles = css`
	display: block;
`;

export const tableRowStyles = (
	theme: TableTheme,
	columns: ResponsiveTableValue<string>,
): SerializedStyles => css`
	display: grid;
	${gridTemplateStyles(columns)}
	align-items: center;
	background-color: ${theme.row.backgroundColor};
	border-bottom: ${theme.row.border};

	&:last-child {
		border-bottom: 0;
	}

	&[data-hovered] {
		background-color: ${theme.row.hoverBackgroundColor};
	}
`;

export const tableColumnHeaderStyles = (
	theme: TableTheme,
): SerializedStyles => css`
	min-width: 0;
	padding: ${theme.cell.paddingBlock} ${theme.cell.paddingInline};
	font: ${theme.columnHeader.font};
	font-stretch: ${theme.columnHeader.fontWidth}%;
	letter-spacing: ${theme.columnHeader.letterSpacing};
	text-align: left;
`;

const responsivePlacementStyles = (
	gridColumn?: ResponsiveTableValue<string>,
	gridRow?: ResponsiveTableValue<string>,
): SerializedStyles => css`
	${gridColumn?.sm ? `grid-column: ${gridColumn.sm};` : ''}
	${gridRow?.sm ? `grid-row: ${gridRow.sm};` : ''}

	${from.md} {
		${
			responsiveValue(gridColumn ?? {}, 'md')
				? `grid-column: ${responsiveValue(gridColumn ?? {}, 'md')};`
				: ''
		}
		${
			responsiveValue(gridRow ?? {}, 'md')
				? `grid-row: ${responsiveValue(gridRow ?? {}, 'md')};`
				: ''
		}
	}

	${from.lg} {
		${
			responsiveValue(gridColumn ?? {}, 'lg')
				? `grid-column: ${responsiveValue(gridColumn ?? {}, 'lg')};`
				: ''
		}
		${
			responsiveValue(gridRow ?? {}, 'lg')
				? `grid-row: ${responsiveValue(gridRow ?? {}, 'lg')};`
				: ''
		}
	}
`;

export const tableCellStyles = (
	theme: TableTheme,
	gridColumn?: ResponsiveTableValue<string>,
	gridRow?: ResponsiveTableValue<string>,
): SerializedStyles => css`
	min-width: 0;
	box-sizing: border-box;
	overflow-wrap: anywhere;
	padding: ${theme.cell.paddingBlock} ${theme.cell.paddingInline};
	font: ${theme.cell.font};
	font-stretch: ${theme.cell.fontWidth}%;
	letter-spacing: ${theme.cell.letterSpacing};
	${responsivePlacementStyles(gridColumn, gridRow)}
`;

export const compactLabelStyles = (
	theme: TableTheme,
	headerVisibleFrom: Breakpoint,
): SerializedStyles => css`
	display: inline;
	margin-right: ${theme.compactLabel.gap};
	color: ${theme.compactLabel.color};
	font: ${theme.compactLabel.font};
	font-stretch: ${theme.compactLabel.fontWidth}%;
	letter-spacing: ${theme.compactLabel.letterSpacing};

	${from[headerVisibleFrom]} {
		display: none;
	}
`;
