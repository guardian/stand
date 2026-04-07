import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentTextInput } from '../../styleD/build/typescript/component/textInput';
import { componentTextInput } from '../../styleD/build/typescript/component/textInput';
import type { Prettify } from '../../util/types';
import { convertTypographyToEmotionStringStyle } from '../../utils';
import type { TextInputProps } from './types';

export type TextInputTheme = Prettify<ComponentTextInput>;

export const defaultTextInputTheme: TextInputTheme = componentTextInput;

export const textInputStyles = (
	theme: TextInputTheme,
	{ size, isInvalid }: Required<Pick<TextInputProps, 'size' | 'isInvalid'>>,
): SerializedStyles => {
	return css`
		${convertTypographyToEmotionStringStyle(theme[size].typography)}
		background-color: ${theme.shared['background-color']};
		border-radius: ${theme.shared['border-radius']};
		border: ${theme.shared.border};
		color: ${theme.shared.color};
		cursor: ${theme.shared.cursor};
		height: ${theme[size].height};
		margin-top: ${theme.shared['margin-top']};
		padding: ${theme.shared.padding.top} ${theme.shared.padding.right}
			${theme.shared.padding.bottom} ${theme.shared.padding.left};

		&[data-disabled] {
			background-color: ${theme.shared.disabled.backgroundColor};
			border: ${theme.shared.disabled.border};
			color: ${theme.shared.disabled.color};
			cursor: ${theme.shared.disabled.cursor};
		}

		${isInvalid &&
		css`
			border: ${theme.shared.error.border};
		`}
	`;
};
