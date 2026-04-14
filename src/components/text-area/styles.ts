import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentTextArea } from '../../styleD/build/typescript/component/textArea';
import { componentTextArea } from '../../styleD/build/typescript/component/textArea';
import type { Prettify } from '../../util/types';
import { convertTypographyToEmotionStringStyle } from '../../utils';
import type { TextAreaProps } from './types';

export type TextAreaTheme = Prettify<ComponentTextArea>;

export const defaultTextAreaTheme: TextAreaTheme = componentTextArea;

export const textAreaStyles = (
	theme: TextAreaTheme,
	{ size, isInvalid }: Required<Pick<TextAreaProps, 'size' | 'isInvalid'>>,
): SerializedStyles => {
	return css`
		${convertTypographyToEmotionStringStyle(theme[size].typography)}
		background-color: ${theme.shared['background-color']};
		border-radius: ${theme.shared['border-radius']};
		border: ${theme.shared.border};
		color: ${theme.shared.color};
		cursor: ${theme.shared.cursor};
		height: ${theme.shared.height};
		margin-top: ${theme.shared['margin-top']};
		padding: ${theme.shared.padding.top} ${theme.shared.padding.right}
			${theme.shared.padding.bottom} ${theme.shared.padding.left};

		&[data-disabled] {
			background-color: ${theme.shared.disabled.backgroundColor};
			border: ${theme.shared.disabled.border};
			color: ${theme.shared.disabled.color};
			cursor: ${theme.shared.disabled.cursor};
		}

		&[data-focused] {
			outline: ${theme.shared.focused.outline};
		}

		${isInvalid &&
		css`
			border: ${theme.shared.error.border};
		`}
	`;
};
