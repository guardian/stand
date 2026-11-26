import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { component } from '../../terrazzo/build/stand';
import type { Prettify } from '../../util/types';
import { convertTypographyToCssString } from '../../utils';
import type { RadioGroupProps } from './types';

export type RadioGroupTheme = Prettify<typeof component.radioGroup>;

export const defaultRadioGroupTheme: RadioGroupTheme = component.radioGroup;

export const radioGroupStyles = (
	theme: RadioGroupTheme,
	{
		size,
		orientation,
	}: Required<Pick<RadioGroupProps, 'size' | 'orientation'>>,
): SerializedStyles => {
	return css`
		display: flex;
		flex-direction: column;
		gap: ${theme[size].gap};
		margin-top: ${theme.shared.marginTop};
		margin-bottom: ${theme.shared.marginBottom};

		${
			orientation === 'horizontal' &&
			css`
				flex-direction: row;
			`
		}
	`;
};

export const radioStyles = (
	theme: RadioGroupTheme,
	{ size, isInvalid }: Required<Pick<RadioGroupProps, 'size' | 'isInvalid'>>,
): SerializedStyles => {
	return css`
		display: flex;
		align-items: center;
		gap: ${theme.shared.radio.gap};
		${convertTypographyToCssString(theme[size].typography)}
		color: ${theme.shared.radio.color};

		&[data-disabled] {
			color: ${theme.shared.radio.disabled.color};
		}

		&[data-disabled] :first-of-type {
			border: ${theme.shared.indicator.disabled.border};
		}

		&[data-disabled]&[data-selected] :first-of-type {
			border: ${theme.shared.indicator.selected.disabled.border};

			::after {
				background-color: ${
					theme.shared.indicator.selected.disabled.after.backgroundColor
				};
				scale: ${theme.shared.indicator.selected.after.scale};
			}
		}

		&[data-focus-visible] :first-of-type {
			outline: ${theme.shared.indicator.focused.outline};
			outline-offset: ${theme.shared.indicator.focused.outlineOffset};
		}

		&[data-selected] :first-of-type {
			border: ${
				isInvalid
					? theme.shared.indicator.selected.invalid.border
					: theme.shared.indicator.selected.border
			};

			::after {
				background-color: ${
					isInvalid
						? theme.shared.indicator.invalid.after.backgroundColor
						: theme.shared.indicator.selected.after.backgroundColor
				};
				scale: ${theme.shared.indicator.selected.after.scale};
			}
		}
	`;
};

export const radioIndicatorStyles = (
	theme: RadioGroupTheme,
	{ size, isInvalid }: Required<Pick<RadioGroupProps, 'size' | 'isInvalid'>>,
): SerializedStyles => {
	return css`
		position: relative;
		width: ${theme[size].indicator.width};
		height: ${theme[size].indicator.height};
		border-radius: ${theme.shared.indicator.borderRadius};
		border: ${
			isInvalid
				? theme.shared.indicator.invalid.border
				: theme.shared.indicator.border
		};

		&::after {
			content: '';
			position: absolute;
			border-radius: inherit;
			inset: 0px;
			scale: 0;
		}
	`;
};
