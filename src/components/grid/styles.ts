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
	Math.max(0, Math.min(value, columns));

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
const numericOffsetMargin = (
	offset: number,
	columns: number,
	gap: string,
): string =>
	`calc(((100% - (${columns} - 1) * ${gap}) * ${offset} / ${columns}) + ${offset} * ${gap})`;

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
const numericSizeWidth = (size: number, columns: number, gap: string): string =>
	`calc(((100% - (${columns} - 1) * ${gap}) * ${size} / ${columns}) + (${size} - 1) * ${gap})`;

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
	breakpoint: Breakpoint,
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

	const width = numericSizeWidth(
		clampToColumns(size, theme[breakpoint].columns),
		theme[breakpoint].columns,
		theme[breakpoint].gap,
	);

	return css`
		flex-grow: 0;
		flex-basis: ${width};
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
	offset: GridOffsetValue | undefined,
	theme: GridTheme,
	breakpoint: Breakpoint,
): SerializedStyles => {
	if (typeof offset === 'undefined') {
		return css``;
	}

	if (offset === 'auto') {
		return css`
			margin-left: auto;
		`;
	}

	return css`
		margin-left: ${numericOffsetMargin(
			clampToColumns(offset, theme[breakpoint].columns),
			theme[breakpoint].columns,
			theme[breakpoint].gap,
		)};
	`;
};

const offsetStyles = (
	offset: GridItemOwnerState['offset'],
	theme: GridTheme,
	breakpoint: Breakpoint,
): SerializedStyles => {
	if (!isResponsiveOffset(offset)) {
		return fixedOffsetStyles(offset, theme, breakpoint);
	}

	return fixedOffsetStyles(offset[breakpoint], theme, breakpoint);
};

const sizeStyles = (
	size: GridItemOwnerState['size'],
	theme: GridTheme,
	breakpoint: Breakpoint,
): SerializedStyles => {
	if (typeof size === 'undefined') {
		size = theme[breakpoint].columns;
	}

	if (!isResponsiveGridSize(size)) {
		return fixedSizeStyles(size, theme, breakpoint);
	}

	return fixedSizeStyles(
		size[breakpoint] ?? theme[breakpoint].columns,
		theme,
		breakpoint,
	);
};

export const gridStyles = (theme: GridTheme): SerializedStyles => {
	return css`
		display: ${theme.shared.display};
		width: ${theme.shared.width};
		flex-direction: ${theme.shared.direction};
		flex-wrap: ${theme.shared.wrap};
		justify-content: ${theme.shared.justifyContent};
		align-items: ${theme.shared.alignItems};

		${from.sm} {
			gap: ${theme.sm.gap};
			padding: 0 ${theme.sm.padding};
		}

		${from.md} {
			gap: ${theme.md.gap};
			padding: 0 ${theme.md.padding};
		}

		${from.lg} {
			gap: ${theme.lg.gap};
			padding: 0 ${theme.lg.padding};
		}
	`;
};

export const itemStyles = (
	theme: GridTheme,
	{ size, offset }: GridItemOwnerState,
): SerializedStyles => {
	return css`
		min-width: 0;

		${from.sm} {
			${sizeStyles(size, theme, 'sm')}
			${offsetStyles(offset, theme, 'sm')}
		}

		${from.md} {
			${sizeStyles(size, theme, 'md')}
			${offsetStyles(offset, theme, 'md')}
		}

		${from.lg} {
			${sizeStyles(size, theme, 'lg')}
			${offsetStyles(offset, theme, 'lg')}
		}
	`;
};
