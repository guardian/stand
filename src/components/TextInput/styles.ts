import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { component } from '../../terrazzo/build/stand';
import type { DeepPartial, Prettify } from '../../util/types';
import { convertTypographyToCssString } from '../../utils';
import type { TextInputProps } from './types';

export type TextInputTheme = Prettify<typeof component.textInput>;
export type PartialTextInputTheme = Prettify<
	DeepPartial<typeof component.textInput>
>;
export const defaultTextInputTheme: TextInputTheme = component.textInput;

export const textInputStyles = (
	theme: TextInputTheme,
	{ size, isInvalid }: Required<Pick<TextInputProps, 'size' | 'isInvalid'>>,
): SerializedStyles => {
	return css`
		${convertTypographyToCssString(theme[size].typography)}
		background-color: ${theme.shared.backgroundColor};
		border-radius: ${theme.shared.borderRadius};
		border: ${theme.shared.border};
		color: ${theme.shared.color};
		cursor: text;
		height: ${theme[size].height};
		margin-top: ${theme.shared.marginTop};
		padding: ${theme.shared.padding.top} ${theme.shared.padding.right}
			${theme.shared.padding.bottom} ${theme.shared.padding.left};

		::placeholder {
			color: ${theme.shared.placeholderColor};
		}

		&[data-disabled] {
			background-color: ${theme.shared.disabled.backgroundColor};
			border: ${theme.shared.disabled.border};
			color: ${theme.shared.disabled.color};
			cursor: not-allowed;

			::placeholder {
				color: ${theme.shared.disabled.color};
			}
		}

		&[data-focused] {
			outline: ${theme.shared.focused.outline};
		}

		${
			isInvalid &&
			css`
				border: ${theme.shared.error.border};
			`
		}
	`;
};
