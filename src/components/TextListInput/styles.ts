import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import {
	componentTextListInput,
	type ComponentTextListInput,
} from '../../styleD/build/typescript/component/textListInput';
import type { DeepPartial, Prettify } from '../../util/types';

export type TextListInputTheme = Prettify<ComponentTextListInput>;
export type PartialTextListInputTheme = Prettify<
	DeepPartial<TextListInputTheme>
>;
export const defaultTextListInputTheme: TextListInputTheme =
	componentTextListInput;

export const textListInputStyles = (
	theme: TextListInputTheme,
): SerializedStyles => {
	return css`
		background-color: ${theme.color.background};
		color: ${theme.color.text};
	`;
};
