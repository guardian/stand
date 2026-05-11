import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentGrid } from '../../styleD/build/typescript/component/grid';
import { componentGrid } from '../../styleD/build/typescript/component/grid';
import { from } from '../../styleD/utils/semantic/mq';
import type { Breakpoint } from '../../styleD/utils/semantic/mq';
import type { DeepPartial, Prettify } from '../../util/types';
import type { GridOffsetValue, GridSizeValue, ItemProps } from './types';

export type GridTheme = Prettify<ComponentGrid>;
export type PartialGridTheme = Prettify<DeepPartial<GridTheme>>;

export const defaultGridTheme: GridTheme = componentGrid;

type ResponsiveGridSize = Partial<Record<Breakpoint, GridSizeValue>>;
type ResponsiveGridOffset = Partial<Record<Breakpoint, GridOffsetValue>>;

type GridItemOwnerState = Pick<ItemProps, 'size' | 'offset'>;

const isResponsiveGridSize = (
	size: GridItemOwnerState['size'],
): size is ResponsiveGridSize => typeof size === 'object';

const isResponsiveOffset = (
	offset: GridItemOwnerState['offset'],
): offset is ResponsiveGridOffset => typeof offset === 'object';

const clampToColumns = (value: number, columns: number): number =>
	Math.min(value, columns);

/**
 * Computes the left margin needed to offset an item by a given number of grid columns.
 *
 * The calculation uses the themed column count and gap so offsets stay proportional
 * in fluid layouts:
 * - First term: width of `offset` columns from the total non-gap width
 * - Second term: horizontal gaps crossed when moving by `offset` columns
 *
 * Formula:
 * `((100% - (columns - 1) * gap) * offset / columns) + offset * gap`
 */
const numericOffsetMargin = (offset: number, theme: GridTheme): string =>
	`calc(((100% - (${theme.shared.columns} - 1) * ${theme.shared.gap}) * ${offset} / ${theme.shared.columns}) + ${offset} * ${theme.shared.gap})`;

/**
 * Computes the width for an item that spans a fixed number of grid columns.
 *
 * The calculation uses the themed column count and gap so item widths match the
 * container's gap model:
 * - First term: width of `size` columns from the total non-gap width
 * - Second term: internal gaps within the spanned columns (`size - 1`)
 *
 * Formula:
 * `((100% - (columns - 1) * gap) * size / columns) + (size - 1) * gap`
 */
const numericSizeWidth = (size: number, theme: GridTheme): string =>
	`calc(((100% - (${theme.shared.columns} - 1) * ${theme.shared.gap}) * ${size} / ${theme.shared.columns}) + (${size} - 1) * ${theme.shared.gap})`;

/**
 * Returns non-responsive item size styles for a single `size` value.
 *
 * Supported values:
 * - `'grow'`: item participates in flex growth and shares remaining space
 * - `'auto'`: item sizes to content width without growing
 * - `number`: item spans a fixed number of columns using `numericSizeWidth`
 */
const fixedSizeStyles = (
	size: GridSizeValue,
	theme: GridTheme,
): SerializedStyles => {
	if (size === 'grow') {
		return css`
			flex-basis: 0;
			flex-grow: 1;
			max-width: 100%;
		`;
	}

	if (size === 'auto') {
		return css`
			flex-basis: auto;
			flex-grow: 0;
			flex-shrink: 0;
			width: auto;
			max-width: none;
		`;
	}

	const clampedSize = clampToColumns(size, theme.shared.columns);
	const width = numericSizeWidth(clampedSize, theme);

	return css`
		flex-basis: ${width};
		flex-grow: 0;
		width: ${width};
		max-width: ${width};
	`;
};

/**
 * Returns non-responsive item offset styles for a single `offset` value.
 *
 * Supported values:
 * - `'auto'`: pushes the item to the far edge with `margin-left: auto`
 * - `number`: shifts the item right by a computed column offset margin
 */
const fixedOffsetStyles = (
	offset: GridOffsetValue,
	theme: GridTheme,
): SerializedStyles => {
	if (offset === 'auto') {
		return css`
			margin-left: auto;
		`;
	}

	const clampedOffset = clampToColumns(offset, theme.shared.columns);

	return css`
		margin-left: ${numericOffsetMargin(clampedOffset, theme)};
	`;
};

const offsetStyles = (
	offset: GridItemOwnerState['offset'],
	theme: GridTheme,
): SerializedStyles => {
	if (typeof offset === 'undefined') {
		return css``;
	}

	if (!isResponsiveOffset(offset)) {
		return fixedOffsetStyles(offset, theme);
	}

	return css`
		${(Object.entries(offset) as Array<[Breakpoint, GridOffsetValue]>).map(
			([breakpoint, breakpointOffset]) => css`
				${from[breakpoint]} {
					${fixedOffsetStyles(breakpointOffset, theme)}
				}
			`,
		)}
	`;
};

const sizeStyles = (
	size: GridItemOwnerState['size'],
	theme: GridTheme,
): SerializedStyles => {
	if (typeof size === 'undefined') {
		return fixedSizeStyles(theme.shared.columns, theme);
	}

	if (!isResponsiveGridSize(size)) {
		return fixedSizeStyles(size, theme);
	}

	return css`
		${(Object.entries(size) as Array<[Breakpoint, GridSizeValue]>).map(
			([breakpoint, breakpointSize]) => css`
				${from[breakpoint]} {
					${fixedSizeStyles(breakpointSize, theme)}
				}
			`,
		)}
	`;
};

export const gridStyles = (theme: GridTheme): SerializedStyles => {
	return css`
		display: ${theme.shared.display};
		width: ${theme.shared.width};
		flex-direction: ${theme.shared.direction};
		flex-wrap: ${theme.shared.wrap};
		padding: 0 ${theme.shared.gap};
		gap: ${theme.shared.gap};
		justify-content: ${theme.shared.justifyContent};
		align-items: ${theme.shared.alignItems};
	`;
};

export const itemStyles = (
	theme: GridTheme,
	{ size, offset }: GridItemOwnerState,
): SerializedStyles => {
	return css`
		min-width: 0;
		${sizeStyles(size, theme)}
		${offsetStyles(offset, theme)}
	`;
};
