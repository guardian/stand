import { css, type SerializedStyles } from '@emotion/react';
import {
	componentPagination,
	type ComponentPagination,
} from '../../styleD/build/typescript/component/pagination';
import { type Breakpoint, until } from '../../styleD/utils/semantic/mq';
import { convertTypographyToEmotionStringStyle } from '../../styleD/utils/semantic/typography';
import type { DeepPartial, Prettify } from '../../util/types';

export type PaginationTheme = Prettify<ComponentPagination>;
export type PartialPaginationTheme = Prettify<DeepPartial<PaginationTheme>>;
export const defaultPaginationTheme: PaginationTheme = componentPagination;

export const paginationStyles = (
	theme: PaginationTheme,
): SerializedStyles => css`
	display: ${theme.shared.display};
	align-items: ${theme.shared.alignItems};
	gap: ${theme.shared.gap};
`;

export const listStyles = (
	theme: PaginationTheme,
	collapseBelow: Breakpoint,
): SerializedStyles => css`
	display: ${theme.shared.display};
	align-items: ${theme.shared.alignItems};
	gap: ${theme.shared.gap};
	margin: 0;
	padding: 0;
	list-style: none;

	${until[collapseBelow]} {
		display: none;
	}
`;

export const itemStyles = (
	theme: PaginationTheme,
	isCurrent: boolean,
): SerializedStyles => {
	const item = theme.item;
	const typography = isCurrent ? item.current.typography : item.typography;

	return css`
		display: inline-flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		width: ${item.minWidth};
		min-width: ${item.minWidth};
		height: ${item.height};
		padding: 0;
		border-radius: ${item.borderRadius};
		border: ${item.borderWidth} ${item.borderStyle}
			${isCurrent ? item.current.borderColor : item.borderColor};
		background-color: ${
			isCurrent ? item.current.backgroundColor : item.backgroundColor
		};
		color: ${isCurrent ? item.current.color : item.color};
		cursor: ${isCurrent ? 'default' : item.cursor};
		${convertTypographyToEmotionStringStyle(typography)}

		&[data-hovered]:not([aria-current='page']) {
			background-color: ${item.hover.backgroundColor};
			border-color: ${item.hover.borderColor};
		}

		&[data-pressed]:not([aria-current='page']) {
			background-color: ${item.active.backgroundColor};
		}

		&[data-focus-visible] {
			outline: ${item.focusVisible.outlineWidth} solid
				${item.focusVisible.outlineColor};
			outline-offset: ${item.focusVisible.outlineOffset};
		}

		&[data-disabled] {
			color: ${item.disabled.color};
			background-color: ${item.disabled.backgroundColor};
			border-color: ${item.disabled.borderColor};
			cursor: ${item.disabled.cursor};
		}
	`;
};

export const ellipsisStyles = (theme: PaginationTheme): SerializedStyles => css`
	box-sizing: border-box;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: ${theme.ellipsis.minWidth};
	min-width: ${theme.ellipsis.minWidth};
	height: ${theme.item.height};
	color: ${theme.ellipsis.color};
`;

// Keeps the prev/next arrows square and in step with the page-button item sizing.
export const arrowStyles = (theme: PaginationTheme): SerializedStyles => css`
	box-sizing: border-box;
	width: ${theme.item.height};
	min-width: ${theme.item.height};
	height: ${theme.item.height};
`;

export const summaryStyles = (
	theme: PaginationTheme,
	collapseBelow: Breakpoint,
): SerializedStyles => css`
	margin-left: ${theme.summary.marginLeft};
	color: ${theme.summary.color};
	white-space: nowrap;
	${convertTypographyToEmotionStringStyle(theme.summary.typography)}

	${until[collapseBelow]} {
		display: none;
	}
`;

// Compact "Page X of Y" status shown only below the collapse breakpoint.
export const compactStatusStyles = (
	theme: PaginationTheme,
	collapseBelow: Breakpoint,
): SerializedStyles => css`
	display: none;
	flex: 1;
	text-align: center;
	white-space: nowrap;
	color: ${theme.summary.color};
	${convertTypographyToEmotionStringStyle(theme.summary.typography)}

	${until[collapseBelow]} {
		display: block;
	}
`;
