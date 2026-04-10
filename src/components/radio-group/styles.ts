import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentRadioGroup } from '../../styleD/build/typescript/component/radioGroup';
import { componentRadioGroup } from '../../styleD/build/typescript/component/radioGroup';
import type { Prettify } from '../../util/types';
import { convertTypographyToEmotionStringStyle } from '../../utils';
import type { RadioGroupProps } from './types';

export type RadioGroupTheme = Prettify<ComponentRadioGroup>;

export const defaultRadioGroupTheme: RadioGroupTheme = componentRadioGroup;

export const radioGroupStyles = (
	theme: RadioGroupTheme,
	{ size }: Required<Pick<RadioGroupProps, 'size'>>,
): SerializedStyles => {
	return css`
		display: ${theme.shared.display};
		flex-direction: ${theme.shared.flexDirection};
		gap: ${theme[size].gap};
		margin-top: ${theme.shared.marginTop};
		margin-bottom: ${theme.shared.marginBottom};
	`;
};

export const radioStyles = (
	theme: RadioGroupTheme,
	{ size, isInvalid }: Required<Pick<RadioGroupProps, 'size' | 'isInvalid'>>,
): SerializedStyles => {
	return css`
		display: ${theme.shared.radio.display};
		align-items: ${theme.shared.radio.alignItems};
		gap: ${theme.shared.radio.gap};
		${convertTypographyToEmotionStringStyle(theme[size].typography)}
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
				background-color: ${theme.shared.indicator.selected.disabled.after
					.backgroundColor};
				scale: ${theme.shared.indicator.selected.after.scale};
			}
		}

		&[data-selected] :first-of-type {
			border: ${isInvalid
				? theme.shared.indicator.selected.invalid.border
				: theme.shared.indicator.selected.border};

			::after {
				background-color: ${isInvalid
					? theme.shared.indicator.invalid.after.backgroundColor
					: theme.shared.indicator.selected.after.backgroundColor};
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
		position: ${theme.shared.indicator.position};
		width: ${theme[size].indicator.width};
		height: ${theme[size].indicator.height};
		border-radius: ${theme.shared.indicator.borderRadius};
		border: ${isInvalid
			? theme.shared.indicator.invalid.border
			: theme.shared.indicator.border};

		&::after {
			content: '';
			position: ${theme.shared.indicator.after.position};
			border-radius: ${theme.shared.indicator.after.borderRadius};
			inset: ${theme.shared.indicator.after.inset};
			scale: ${theme.shared.indicator.after.scale};
		}
	`;
};
