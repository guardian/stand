import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentCheckbox } from '../../styleD/build/typescript/component/checkbox';
import { componentCheckbox } from '../../styleD/build/typescript/component/checkbox';
import type { Prettify } from '../../util/types';
import { convertTypographyToEmotionStringStyle } from '../../utils';
import type { CheckboxProps } from './types';

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
		display: ${theme.shared.display};
		position: ${theme.shared.position};
		align-items: ${theme.shared['align-items']};
		gap: ${theme.shared.gap};
		cursor: ${theme.shared.cursor};
		${convertTypographyToEmotionStringStyle(theme[size].typography)}
		color: ${theme.shared.color};

		.checkbox-indicator {
			width: ${theme[size].indicator.size};
			height: ${theme[size].indicator.size};
			border: ${theme.shared.indicator.border};
			border-radius: ${theme.shared.indicator['border-radius']};
			display: ${theme.shared.indicator.display};
			align-items: ${theme.shared.indicator['align-items']};
			justify-content: ${theme.shared.indicator['justify-content']};
			flex-shrink: ${theme.shared.indicator['flex-shrink']};
			transition: ${theme.shared.indicator.transition};
		}

		svg {
			width: ${isIndeterminate
				? theme.shared.indicator.indeterminate.width
				: theme.shared.indicator.check.width};
			height: ${isIndeterminate
				? theme.shared.indicator.indeterminate.height
				: theme.shared.indicator.check.height};
			fill: ${theme.shared.indicator.svg.fill};
			transition: ${theme.shared.indicator.transition};
		}

		&[data-focus-visible] {
			.checkbox-indicator {
				outline: ${theme.shared.indicator[':focus-visible'].outline};
				outline-offset: ${theme.shared.indicator[':focus-visible'][
					'outline-offset'
				]};
			}
		}

		&[data-selected],
		&[data-indeterminate] {
			.checkbox-indicator {
				border: ${theme.shared.indicator.selected.border};
				background-color: ${theme.shared.indicator.selected[
					'background-color'
				]};
			}

			& svg {
				fill: ${theme.shared.indicator.selected.svg.fill};
			}
		}

		&[data-disabled] {
			color: ${theme.shared.disabled.color};
			cursor: ${theme.shared.disabled.cursor};

			.checkbox-indicator {
				border: ${theme.shared.disabled.indicator.border};
			}

			&[data-selected],
			&[data-indeterminate] {
				.checkbox-indicator {
					background-color: ${theme.shared.disabled.indicator.selected[
						'background-color'
					]};
				}
			}
		}

		&[data-invalid] {
			.checkbox-indicator {
				border: ${theme.shared.indicator.error.border};
			}
		}

		&[data-invalid][data-selected],
		&[data-invalid][data-indeterminate] {
			.checkbox-indicator {
				background-color: ${theme.shared.indicator.error['background-color']};
			}
		}
	`;
};
