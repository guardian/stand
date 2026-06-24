import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import {
	type ComponentTagTable,
	componentTagTable,
} from '../../styleD/build/typescript/component/tagTable';
import { mergeDeep } from '../../util/mergeDeep';
import type { DeepPartial } from '../../util/types';

export const tagTableHeaderStyles = (
	partialTheme: DeepPartial<ComponentTagTable> = {},
): SerializedStyles => {
	const theme = mergeDeep(componentTagTable, partialTheme);

	return css`
		background-color: ${theme.header.backgroundColor};
		padding: ${theme.header.paddingTop} ${theme.header.paddingRight}
			${theme.header.paddingBottom} ${theme.header.paddingLeft};
		display: flex;
		gap: ${theme.header.gap};
		justify-content: space-between;
		align-items: center;
	`;
};

export const tagTableHeaderTextStyles = (
	partialTheme: DeepPartial<ComponentTagTable> = {},
): SerializedStyles => {
	const theme = mergeDeep(componentTagTable, partialTheme);

	return css`
		display: flex;
		flex-direction: column;
		gap: ${theme.header.gap};
	`;
};

export const tagTableHeadingStyles = (
	partialTheme: DeepPartial<ComponentTagTable> = {},
): SerializedStyles => {
	const theme = mergeDeep(componentTagTable, partialTheme);

	return css`
		font-weight: ${theme.heading.fontWeight};
		font-size: ${theme.heading.fontSize};
	`;
};

export const tagTableSubHeadingStyles = (
	partialTheme: DeepPartial<ComponentTagTable> = {},
): SerializedStyles => {
	const theme = mergeDeep(componentTagTable, partialTheme);

	return css`
		font-weight: ${theme.subHeading.fontWeight};
		font-size: ${theme.subHeading.fontSize};
	`;
};

export const tagTableCellStyles = (
	partialTheme: DeepPartial<ComponentTagTable> = {},
): SerializedStyles => {
	const theme = mergeDeep(componentTagTable, partialTheme);

	return css`
		padding: ${theme.cell.paddingY} ${theme.cell.paddingX};
		vertical-align: middle;

		:first-of-type {
			padding-left: ${theme.cell.firstCellPaddingLeft};
		}

		:not(:last-child) {
			border-right-width: ${theme.cell.borderBetweenCells.borderWidth};
			border-right-style: ${theme.cell.borderBetweenCells.borderStyle};
			border-right-color: ${theme.cell.borderBetweenCells.borderColor};
		}
	`;
};

export const tagTableRowStyles = (
	canDrag: boolean,
	highlightFirstRow: boolean,
	partialTheme: DeepPartial<ComponentTagTable> = {},
): SerializedStyles => {
	const theme = mergeDeep(componentTagTable, partialTheme);

	return css`
		background-color: ${theme.row.backgroundColor};
		height: ${theme.row.height};
		&:not(:last-child) {
			border-bottom-color: ${theme.row.borderBottom.borderColor};
			border-bottom-style: ${theme.row.borderBottom.borderStyle};
			border-bottom-width: ${theme.row.borderBottom.borderWidth};
		}

		:hover {
			background-color: ${theme.row.backgroundHoverColor};
			${canDrag ? 'cursor: grab;' : null}
			button[slot='drag'] {
				opacity: 1;
			}
		}
		${highlightFirstRow &&
		`:first-of-type {
                    background-color: ${theme.row.firstRowBackgroundColor};

                    :hover {
                        background-color: ${theme.row.firstRowBackgroundHoverColor};
                    }
                }`}
	`;
};

export const tagTableStyles = (
	highlightFirstRow: boolean,
	partialTheme: DeepPartial<ComponentTagTable> = {},
): SerializedStyles => {
	const theme = mergeDeep(componentTagTable, partialTheme);

	return css`
		width: 100%;
		border-collapse: collapse;

		.react-aria-DropIndicator[data-drop-target] {
			height: ${theme.row.height};

			${highlightFirstRow
				? `&:first-child {
						background-color: ${theme.row.firstRowBackgroundColor};
					}`
				: ''}
		}
	`;
};

export const tagTableRemoveButtonStyles = css`
	background: none;
	border: none;
	padding: 0;
	:hover {
		cursor: pointer;
	}
`;

export const tagTableAddButtonStyles = (
	partialTheme: DeepPartial<ComponentTagTable> = {},
): SerializedStyles => {
	const theme = mergeDeep(componentTagTable, partialTheme);

	return css`
		:hover {
			cursor: pointer;
			background-color: ${theme.addButton.backgroundHoverColor};
		}

		color: ${theme.addButton.color};
		-webkit-text-decoration: none;
		text-decoration: none;
		padding: ${theme.addButton.paddingY} ${theme.addButton.paddingX};
		position: relative;
		border: 0;
		border-radius: 0;
		cursor: pointer;
		justify-content: center;
		align-items: center;
		font-weight: ${theme.addButton.fontWeight};
		font-size: ${theme.addButton.fontSize};
		height: 24px;
		width: fit-content;
		line-height: 1;
		flex-direction: row;
		gap: 8px;
		background-color: ${theme.addButton.backgroundColor};
		display: inline-flex;
	`;
};

export const tagTableDragButtonStyles = css`
	background: none;
	border: none;
	padding: 0;
	padding-left: 5px;
	margin: 0;
	display: flex;
	align-items: center;
	opacity: 0;

	&:focus {
		opacity: 1;
	}
`;

export const tagTableTypeBadgeStyles = (
	partialTheme: DeepPartial<ComponentTagTable> = {},
): SerializedStyles => {
	const theme = mergeDeep(componentTagTable, partialTheme);

	return css`
		white-space: nowrap;
		text-transform: uppercase;
		color: ${theme.typeBadge.color};
		background-color: ${theme.typeBadge.backgroundColor};
		padding: ${theme.typeBadge.paddingY} ${theme.typeBadge.paddingX};
		font-size: ${theme.typeBadge.fontSize};
		font-weight: ${theme.typeBadge.fontWeight};
	`;
};
