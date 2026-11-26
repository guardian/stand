import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import {
	componentNumberInput,
	type ComponentNumberInput,
} from '../../styleD/build/typescript/component/numberInput';
import type { DeepPartial, Prettify } from '../../util/types';
import { convertTypographyToEmotionStringStyle } from '../../utils';
import type { NumberInputProps } from './types';

export type NumberInputTheme = Prettify<ComponentNumberInput>;
export type PartialNumberInputTheme = Prettify<
	DeepPartial<ComponentNumberInput>
>;
export const defaultNumberInputTheme: NumberInputTheme = componentNumberInput;

export const numberInputStyles = (
	theme: NumberInputTheme,
	{ size }: Required<Pick<NumberInputProps, 'size'>>,
): SerializedStyles => {
	return css`
		box-sizing: border-box;
		display: flex;
		align-items: center;
		height: ${theme[size].height};
		min-width: 0;
		margin-top: ${theme.shared.marginTop};
		background-color: ${theme.shared.backgroundColor};
		border: ${theme.shared.border};
		border-radius: ${theme.shared.borderRadius};
		color: ${theme.shared.color};

		&[data-focus-within] {
			outline: ${theme.shared.focused.outline};
		}

		&[data-invalid] {
			border: ${theme.shared.error.border};
		}

		&[data-disabled] {
			border: ${theme.shared.disabled.border};
			color: ${theme.shared.disabled.color};
			cursor: not-allowed;
		}

		& input {
			${convertTypographyToEmotionStringStyle(theme[size].typography)}
			box-sizing: border-box;
			flex: 1;
			width: 100%;
			min-width: 0;
			height: 100%;
			padding: 0 ${theme.shared.paddingInline};
			background: transparent;
			border: 0;
			border-radius: inherit;
			color: inherit;
			outline: none;

			&::placeholder {
				color: ${theme.shared.placeholderColor};
			}

			&[data-disabled] {
				cursor: not-allowed;

				&::placeholder {
					color: ${theme.shared.disabled.color};
				}
			}
		}

		& button {
			display: inline-flex;
			flex: 0 0 ${theme[size].buttonWidth};
			align-items: center;
			justify-content: center;
			align-self: stretch;
			margin: 0;
			padding: 0;
			background: transparent;
			border: 0;
			border-radius: inherit;
			color: ${theme.shared.button.color};
			cursor: pointer;

			&[data-hovered]:not([data-disabled]) {
				background-color: ${theme.shared.button.hovered.backgroundColor};
			}

			&[data-pressed]:not([data-disabled]) {
				background-color: ${theme.shared.button.pressed.backgroundColor};
			}

			&[data-focus-visible] {
				outline: ${theme.shared.focused.outline};
				outline-offset: -${theme.shared.focused.offset};
			}

			&[data-disabled] {
				color: ${theme.shared.disabled.color};
				cursor: not-allowed;
			}
		}

		& .number-input-divider {
			flex: 0 0 ${theme.shared.divider.width};
			height: ${theme[size].dividerHeight};
			background-color: ${theme.shared.divider.color};
		}

		&[data-disabled] .number-input-divider {
			background-color: ${theme.shared.disabled.dividerColor};
		}

		@media (forced-colors: active) {
			&[data-disabled],
			& button[data-disabled] {
				color: GrayText;
				border-color: GrayText;
			}

			& .number-input-divider {
				background-color: ButtonBorder;
			}
		}
	`;
};
