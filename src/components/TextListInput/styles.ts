import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { component } from '../../terrazzo/build/stand';
import type { DeepPartial, Prettify } from '../../util/types';
import { convertTypographyToCssString } from '../../utils';

export type TextListInputTheme = Prettify<typeof component.textListInput>;
export type PartialTextListInputTheme = Prettify<
	DeepPartial<TextListInputTheme>
>;
export const defaultTextListInputTheme: TextListInputTheme =
	component.textListInput;

export const labelStyles = (theme: TextListInputTheme): SerializedStyles => css`
	display: flex;
	align-items: center;
	gap: ${theme.label.gap};
	color: ${theme.label.color};
	${convertTypographyToCssString(theme.label.typography)}
`;

export const columnStyles = (
	theme: TextListInputTheme,
): SerializedStyles => css`
	display: flex;
	flex-direction: column;
	gap: ${theme.column.gap};
	margin-top: ${theme.column.marginTop};
`;

export const rowStyles = (theme: TextListInputTheme): SerializedStyles => css`
	display: flex;
	align-items: flex-start;
	gap: ${theme.row.gap};
`;
