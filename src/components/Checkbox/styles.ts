import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentCheckbox } from '../../styleD/build/typescript/component/checkbox';
import { componentCheckbox } from '../../styleD/build/typescript/component/checkbox';
import type { DeepPartial, Prettify } from '../../util/types';
import { convertTypographyToEmotionStringStyle } from '../../utils';
import type { CheckboxGroupProps, CheckboxProps } from './types';

export type CheckboxTheme = Prettify<ComponentCheckbox>;
export type PartialCheckboxTheme = Prettify<DeepPartial<CheckboxTheme>>;

export const defaultCheckboxTheme: CheckboxTheme = componentCheckbox;

export const checkboxStyles = (
	theme: CheckboxTheme,
	{
		size,
		isIndeterminate,
	}: Required<Pick<CheckboxProps, 'size' | 'isIndeterminate'>>,
): SerializedStyles => {
	return css`
		display: flex;
		position: relative;
		align-items: flex-start;
		gap: ${theme.input.shared.gap};
		cursor: pointer;
		${convertTypographyToEmotionStringStyle(theme.input[size].typography)}
		color: ${theme.input.shared.color};

		.checkbox-indicator {
			width: ${theme.input[size].indicator.size};
			height: ${theme.input[size].indicator.size};
			border: ${theme.input.shared.indicator.border};
			border-radius: ${theme.input.shared.indicator.borderRadius};
			display: flex;
			align-items: center;
			justify-content: center;
			flex-shrink: 0;
			transition: all 200ms;
		}

		svg {
			width: ${
				isIndeterminate
					? theme.input.shared.indicator.indeterminate.width
					: theme.input.shared.indicator.check.width
			};
			height: ${
				isIndeterminate
					? theme.input.shared.indicator.indeterminate.height
					: theme.input.shared.indicator.check.height
			};
			fill: ${theme.input.shared.indicator.svg.fill};
			transition: all 200ms;
		}

		&[data-focus-visible] {
			.checkbox-indicator {
				outline: ${theme.input.shared.indicator.focusVisible.outline};
				outline-offset: ${
					theme.input.shared.indicator.focusVisible.outlineOffset
				};
			}
		}

		&[data-selected],
		&[data-indeterminate] {
			.checkbox-indicator {
				border: ${theme.input.shared.indicator.selected.border};
				background-color: ${
					theme.input.shared.indicator.selected.backgroundColor
				};
			}

			& svg {
				fill: ${theme.input.shared.indicator.selected.svg.fill};
			}
		}

		&[data-disabled] {
			color: ${theme.input.shared.disabled.color};
			cursor: not-allowed;

			.checkbox-indicator {
				border: ${theme.input.shared.disabled.indicator.border};
			}

			&[data-selected],
			&[data-indeterminate] {
				.checkbox-indicator {
					background-color: ${
						theme.input.shared.disabled.indicator.selected.backgroundColor
					};
				}
			}
		}

		&[data-invalid] {
			.checkbox-indicator {
				border: ${theme.input.shared.indicator.error.border};
			}
		}

		&[data-invalid][data-selected],
		&[data-invalid][data-indeterminate] {
			.checkbox-indicator {
				background-color: ${theme.input.shared.indicator.error.backgroundColor};
			}
		}
	`;
};

export const checkboxLabelStyles = (): SerializedStyles => {
	return css`
		align-self: center;
	`;
};

export const checkboxGroupStyles = (
	theme: CheckboxTheme,
	{ size }: Required<Pick<CheckboxGroupProps, 'size'>>,
	hasError?: boolean,
): SerializedStyles => {
	return css`
		display: flex;
		flex-direction: column;
		gap: ${theme.group[size].gap};
		margin-top: ${theme.group[size].marginTop};
		${
			hasError &&
			css`
				margin-bottom: ${theme.group[size].marginBottom};
			`
		}
	`;
};
