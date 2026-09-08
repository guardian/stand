import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentTile } from '../../styleD/build/typescript/component/tile';
import { componentTile } from '../../styleD/build/typescript/component/tile';
import { semanticColors } from '../../styleD/build/typescript/semantic/colors';
import type { DeepPartial, Prettify } from '../../util/types';

export type TileTheme = Prettify<ComponentTile>;
export type PartialTileTheme = Prettify<DeepPartial<TileTheme>>;

export const defaultTileTheme: TileTheme = componentTile;

type TileSize = keyof Omit<TileTheme, 'shared'>;

export const tileStyles = (
	theme: TileTheme,
	{ size }: { size: TileSize },
): SerializedStyles => css`
	display: ${theme.shared.display};
	flex-direction: column;
	align-items: stretch;
	justify-content: flex-start;
	gap: calc(${theme[size].gap} / 2);
	min-height: ${theme[size].minHeight};
	padding: ${theme[size].paddingY} ${theme[size].paddingX};
	border: ${theme.shared.borderWidth} ${theme.shared.borderStyle}
		${theme.shared.borderColor};
	border-radius: ${theme.shared.borderRadius};
	background-color: ${theme.shared.backgroundColor};
	color: ${theme.shared.color};
	text-decoration: ${theme.shared.textDecoration};
	cursor: ${theme.shared.cursor};
	width: ${theme[size].width};
	max-width: ${theme.shared.maxWidth};
	box-sizing: border-box;
	font: inherit;
	text-align: left;

	&[data-hovered] {
		background-color: ${theme.shared.hover.backgroundColor};
		border-color: ${theme.shared.hover.borderColor};
	}

	&[data-pressed] {
		background-color: ${theme.shared.pressed.backgroundColor};
		border-color: ${theme.shared.pressed.borderColor};
	}

	&[data-selected] {
		background-color: ${theme.shared.pressed.backgroundColor};
		border-color: ${theme.shared.pressed.borderColor};
	}

	&[data-focus-visible] {
		outline: ${theme.shared.focusVisible.outline};
		outline-offset: ${theme.shared.focusVisible.outlineOffset};
	}

	&[data-disabled] {
		color: ${theme.shared.disabled.color};
		border-color: ${theme.shared.disabled.borderColor};
		background-color: ${theme.shared.disabled.backgroundColor};
		cursor: ${theme.shared.disabled.cursor};
	}
`;

export const selectableTileStyles = (
	theme: TileTheme,
	{ size }: { size: TileSize },
): SerializedStyles => css`
	${tileStyles(theme, { size })}

	&[data-hovered] {
		background-color: ${semanticColors.fill.unselectedHoverWeaker};
		border-color: ${theme.shared.hover.borderColor};
	}

	&[data-pressed] {
		background-color: ${semanticColors.fill.unselectedPressedWeaker};
		border-color: ${theme.shared.pressed.borderColor};
	}

	&[data-selected] {
		background-color: ${semanticColors.fill.selectedWeaker};
		border-color: ${theme.shared.pressed.borderColor};
	}

	&[data-focus-visible] {
		background-color: ${semanticColors.fill.unselectedWeaker};
		border-color: ${theme.shared.pressed.borderColor};
	}

	&[data-selected][data-hovered] {
		background-color: ${semanticColors.fill.selectedHoverWeaker};
		border-color: ${theme.shared.pressed.borderColor};
	}

	&[data-selected][data-pressed] {
		background-color: ${semanticColors.fill.selectedPressedWeaker};
		border-color: ${theme.shared.pressed.borderColor};
	}

	&[data-selected][data-focus-visible] {
		background-color: ${semanticColors.fill.selectedWeaker};
		border-color: ${theme.shared.pressed.borderColor};
	}

	&[data-disabled] {
		color: ${theme.shared.disabled.color};
		border-color: ${theme.shared.disabled.borderColor};
		background-color: ${theme.shared.disabled.backgroundColor};
		cursor: ${theme.shared.disabled.cursor};
	}
`;

export const tileContentStyles = (
	theme: TileTheme,
	{ size }: { size: TileSize },
): SerializedStyles => css`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	gap: ${theme[size].gap};
	min-width: 0;
	flex: 1;
`;

export const tileTextStyles = (theme: TileTheme): SerializedStyles => css`
	color: ${theme.shared.color};
	display: flex;
	align-items: center;
	min-width: 0;
	gap: 0.5rem;
`;

export const tileTitleStyles = (theme: TileTheme): SerializedStyles => css`
	display: block;
	line-height: 1.2;
	color: ${theme.shared.color};

	[data-disabled] & {
		color: ${theme.shared.disabled.color};
	}
`;

export const tileDescriptionStyles = (
	theme: TileTheme,
): SerializedStyles => css`
	color: ${theme.shared.descriptionColor};
	display: block;
	line-height: 1.2;
	min-width: 0;
	flex: 1;

	[data-disabled] & {
		color: ${theme.shared.disabled.color};
	}
`;

export const tileBottomRowStyles = (): SerializedStyles => css`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 0.5rem;
	min-width: 0;
`;

export const tileArrowStyles = (theme: TileTheme): SerializedStyles => css`
	color: ${theme.shared.arrowColor};
	flex-shrink: 0;
	margin-left: auto;

	[data-disabled] & {
		color: ${theme.shared.disabled.color};
	}
`;

export const tileIconStyles = (theme: TileTheme): SerializedStyles => css`
	color: ${theme.shared.color};
	flex-shrink: 0;
	margin-right: 0.25rem;

	[data-disabled] & {
		color: ${theme.shared.disabled.color};
	}
`;
