import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import {
	componentTextListInput,
	type ComponentTextListInput,
} from '../../styleD/build/typescript/component/textListInput';
import type { DeepPartial, Prettify } from '../../util/types';
import { convertTypographyToEmotionStringStyle } from '../../utils';

export type TextListInputTheme = Prettify<ComponentTextListInput>;
export type PartialTextListInputTheme = Prettify<
	DeepPartial<TextListInputTheme>
>;
export const defaultTextListInputTheme: TextListInputTheme =
	componentTextListInput;

export const labelStyles = (theme: TextListInputTheme): SerializedStyles => {
	return css`
		display: flex;
		align-items: center;
		gap: ${theme.label.gap};
		color: ${theme.label.color};
		${convertTypographyToEmotionStringStyle(theme.label.typography)}
	`;
};

export const columnStyles = (theme: TextListInputTheme): SerializedStyles => {
	return css`
		display: flex;
		flex-direction: column;
		gap: ${theme.column.gap};
		margin-top: ${theme.column.marginTop};
	`;
};

export const rowStyles = (theme: TextListInputTheme): SerializedStyles => {
	return css`
		display: flex;
		align-items: center;
		gap: ${theme.row.gap};
	`;
};
