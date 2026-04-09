import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentCheckbox } from '../../styleD/build/typescript/component/checkbox';
import { componentCheckbox } from '../../styleD/build/typescript/component/checkbox';
import type { Prettify } from '../../util/types';
import { convertTypographyToEmotionStringStyle } from '../../utils';
import type { CheckboxGroupProps, CheckboxProps } from './types';

export type CheckboxTheme = Prettify<ComponentCheckbox>;

export const defaultCheckboxTheme: CheckboxTheme = componentCheckbox;

export const checkboxStyles = (
	theme: CheckboxTheme,
	{
		size,
		isIndeterminate,
	}: Required<Pick<CheckboxProps, 'size' | 'isIndeterminate'>>,
): SerializedStyles => {
	return css`
		display: ${theme.input.shared.display};
		position: ${theme.input.shared.position};
		align-items: ${theme.input.shared['align-items']};
		gap: ${theme.input.shared.gap};
		cursor: ${theme.input.shared.cursor};
		${convertTypographyToEmotionStringStyle(theme.input[size].typography)}
		color: ${theme.input.shared.color};

		.checkbox-indicator {
			width: ${theme.input[size].indicator.size};
			height: ${theme.input[size].indicator.size};
			border: ${theme.input.shared.indicator.border};
			border-radius: ${theme.input.shared.indicator['border-radius']};
			display: ${theme.input.shared.indicator.display};
			align-items: ${theme.input.shared.indicator['align-items']};
			justify-content: ${theme.input.shared.indicator['justify-content']};
			flex-shrink: ${theme.input.shared.indicator['flex-shrink']};
			transition: ${theme.input.shared.indicator.transition};
		}

		svg {
			width: ${isIndeterminate
				? theme.input.shared.indicator.indeterminate.width
				: theme.input.shared.indicator.check.width};
			height: ${isIndeterminate
				? theme.input.shared.indicator.indeterminate.height
				: theme.input.shared.indicator.check.height};
			fill: ${theme.input.shared.indicator.svg.fill};
			transition: ${theme.input.shared.indicator.transition};
		}

		&[data-focus-visible] {
			.checkbox-indicator {
				outline: ${theme.input.shared.indicator[':focus-visible'].outline};
				outline-offset: ${theme.input.shared.indicator[':focus-visible'][
					'outline-offset'
				]};
			}
		}

		&[data-selected],
		&[data-indeterminate] {
			.checkbox-indicator {
				border: ${theme.input.shared.indicator.selected.border};
				background-color: ${theme.input.shared.indicator.selected[
					'background-color'
				]};
			}

			& svg {
				fill: ${theme.input.shared.indicator.selected.svg.fill};
			}
		}

		&[data-disabled] {
			color: ${theme.input.shared.disabled.color};
			cursor: ${theme.input.shared.disabled.cursor};

			.checkbox-indicator {
				border: ${theme.input.shared.disabled.indicator.border};
			}

			&[data-selected],
			&[data-indeterminate] {
				.checkbox-indicator {
					background-color: ${theme.input.shared.disabled.indicator.selected[
						'background-color'
					]};
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
				background-color: ${theme.input.shared.indicator.error[
					'background-color'
				]};
			}
		}
	`;
};

export const checkboxGroupStyles = (
	theme: CheckboxTheme,
	{ size }: Required<Pick<CheckboxGroupProps, 'size'>>,
	hasError?: boolean,
): SerializedStyles => {
	return css`
		display: ${theme.group.shared.display};
		flex-direction: ${theme.group.shared['flex-direction']};
		gap: ${theme.group[size].gap};
		margin-top: ${theme.group[size]['margin-top']};
		${hasError &&
		css`
			margin-bottom: ${theme.group[size]['margin-bottom']};
		`}
	`;
};
