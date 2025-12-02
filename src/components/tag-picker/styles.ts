import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import {
	type Components,
	components as componentsTheme,
} from '../../styleD/build/typescript/components';
import { type DeepPartial, mergeDeep } from '../util';

export const tagAutocompleteInputStyles = (
	partialTheme: DeepPartial<Components['tagAutocomplete']> = {},
): SerializedStyles => {
	const theme = mergeDeep(componentsTheme['tagAutocomplete'], partialTheme);

	return css`
		width: 100%;
		box-sizing: border-box;
		padding: ${theme.input.padding};
		color: ${theme.input.color};
		background-color: ${theme.input.backgroundColor};
		border-color: ${theme.input.borderColor};
		border-width: ${theme.input.borderWidth};
		border-style: ${theme.input.borderStyle};
	`;
};

export const listboxStyles = (
	partialTheme: DeepPartial<Components['tagAutocomplete']> = {},
) => {
	const theme = mergeDeep(componentsTheme['tagAutocomplete'], partialTheme);

	return css`
		padding: ${theme.listbox.padding};
		max-height: 320px;
		overflow-y: auto;
		background-color: ${theme.listbox.backgroundColor};
		border-color: ${theme.listbox.borderColor};
		border-width: ${theme.listbox.borderWidth};
		border-style: ${theme.listbox.borderStyle};
	`;
};

export const listboxItemStyles = (
	partialTheme: DeepPartial<Components['tagAutocomplete']> = {},
): SerializedStyles => {
	const theme = mergeDeep(componentsTheme['tagAutocomplete'], partialTheme);

	return css`
		padding: ${theme.listbox.item.padding};
		cursor: pointer;
		&:hover {
			background-color: ${theme.listbox.item.backgroundHoverColor};
		}
		&[data-focused] {
			background-color: ${theme.listbox.item.backgroundFocusedColor};
		}
	`;
};

export const listboxInfoStyles = (
	partialTheme: DeepPartial<Components['tagAutocomplete']> = {},
): SerializedStyles => {
	const theme = mergeDeep(componentsTheme['tagAutocomplete'], partialTheme);

	return css`
		padding: ${theme.listbox.item.padding};
	`;
};

export const tagTableHeadingStyles = (
	partialTheme: DeepPartial<Components['tagTable']> = {},
): SerializedStyles => {
	const theme = mergeDeep(componentsTheme['tagTable'], partialTheme);

	return css`
		background-color: ${theme.heading.backgroundColor};
		font-weight: ${theme.heading.fontWeight};
		padding: ${theme.heading.padding};
	`;
};

export const tagTableCellStyles = (
	partialTheme: DeepPartial<Components['tagTable']> = {},
): SerializedStyles => {
	const theme = mergeDeep(componentsTheme['tagTable'], partialTheme);

	return css`
		padding: ${theme.cell.padding};

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
	partialTheme: DeepPartial<Components['tagTable']> = {},
): SerializedStyles => {
	const theme = mergeDeep(componentsTheme['tagTable'], partialTheme);

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
		${canDrag &&
		`:first-of-type {
                    background-color: ${theme.row.firstRowBackgroundColor};

                    :hover {
                        background-color: ${theme.row.firstRowBackgroundHoverColor};
                    }
                }`}
	`;
};

export const tagTableStyles = (
	canRemoveTag: boolean,
	partialTheme: DeepPartial<Components['tagTable']> = {},
): SerializedStyles => {
	const theme = mergeDeep(componentsTheme['tagTable'], partialTheme);

	return css`
		width: 100%;
		border-collapse: collapse;

		.react-aria-DropIndicator[data-drop-target] {
			height: ${theme.row.height};

			${canRemoveTag
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
	partialTheme: DeepPartial<Components['tagTable']> = {},
): SerializedStyles => {
	const theme = mergeDeep(componentsTheme['tagTable'], partialTheme);

	return css`
		:hover {
			cursor: pointer;
			background-color: ${theme.addButton.backgroundHoverColor};
		}

		color: ${theme.addButton.color};
		-webkit-text-decoration: none;
		text-decoration: none;
		padding: ${theme.addButton.padding};
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
	partialTheme: DeepPartial<Components['tagTable']> = {},
): SerializedStyles => {
	const theme = mergeDeep(componentsTheme['tagTable'], partialTheme);

	return css`
		white-space: nowrap;
		text-transform: uppercase;
		color: ${theme.typeBadge.color};
		background-color: ${theme.typeBadge.backgroundColor};
		padding: ${theme.typeBadge.padding};
		font-size: ${theme.typeBadge.fontSize};
		font-weight: ${theme.typeBadge.fontWeight};
	`;
};
