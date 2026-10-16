import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentCheckbox } from '../../styleD/build/typescript/component/checkbox';
import { componentCheckbox } from '../../styleD/build/typescript/component/checkbox';
import type { DeepPartial, Prettify } from '../../util/types';
import type { CheckboxGroupProps, CheckboxProps } from './types';

export type CheckboxTheme = Prettify<ComponentCheckbox>;
export type PartialCheckboxTheme = Prettify<DeepPartial<CheckboxTheme>>;

export const defaultCheckboxTheme: CheckboxTheme = componentCheckbox;

export const checkboxStyles = ({
	size,
	isIndeterminate,
}: Required<
	Pick<CheckboxProps, 'size' | 'isIndeterminate'>
>): SerializedStyles => {
	return css`
		display: flex;
		position: relative;
		align-items: flex-start;
		gap: var(--component-checkbox-input-shared-gap);
		cursor: pointer;
		color: var(--component-checkbox-input-shared-color);
		font: var(--component-checkbox-input-${size}-typography-font);
		letter-spacing: var(
			--component-checkbox-input-${size}-typography-letter-spacing
		);
		font-variation-settings: 'wdth'
			var(--component-checkbox-input-${size}-typography-font-width);

		.checkbox-indicator {
			width: var(--component-checkbox-input-${size}-indicator-size);
			height: var(--component-checkbox-input-${size}-indicator-size);
			border: var(--component-checkbox-input-shared-indicator-border);
			border-radius: var(
				--component-checkbox-input-shared-indicator-border-radius
			);
			display: flex;
			align-items: center;
			justify-content: center;
			flex-shrink: 0;
			transition: all 200ms;
		}

		svg {
			width: ${isIndeterminate ? '12px' : '20px'};
			height: ${isIndeterminate ? '2px' : '20px'};
			fill: none;
			transition: all 200ms;
		}

		&[data-focus-visible] {
			.checkbox-indicator {
				outline: var(
					--component-checkbox-input-shared-indicator-focus-visible-outline
				);
				outline-offset: var(
					--component-checkbox-input-shared-indicator-focus-visible-outline-offset
				);
			}
		}

		&[data-selected],
		&[data-indeterminate] {
			.checkbox-indicator {
				border: var(
					--component-checkbox-input-shared-indicator-selected-border
				);
				background-color: var(
					--component-checkbox-input-shared-indicator-selected-background-color
				);
			}

			& svg {
				fill: var(
					--component-checkbox-input-shared-indicator-selected-svg-fill
				);
			}
		}

		&[data-disabled] {
			color: var(--component-checkbox-input-shared-disabled-color);
			cursor: var(--component-checkbox-input-shared-disabled-cursor);

			.checkbox-indicator {
				border: var(
					--component-checkbox-input-shared-disabled-indicator-border
				);
			}

			&[data-selected],
			&[data-indeterminate] {
				.checkbox-indicator {
					background-color: var(
						--component-checkbox-input-shared-disabled-indicator-selected-background-color
					);
				}
			}
		}

		&[data-invalid] {
			.checkbox-indicator {
				border: var(--component-checkbox-input-shared-indicator-error-border);
			}
		}

		&[data-invalid][data-selected],
		&[data-invalid][data-indeterminate] {
			.checkbox-indicator {
				background-color: var(
					--component-checkbox-input-shared-indicator-error-background-color
				);
			}
		}
	`;
};

export const checkboxLabelStyles = css`
	align-self: center;
`;

export const checkboxGroupStyles = (
	{ size }: Required<Pick<CheckboxGroupProps, 'size'>>,
	hasError?: boolean,
): SerializedStyles => {
	return css`
		display: flex;
		flex-direction: column;
		gap: var(--component-checkbox-group-${size}-gap);
		margin-top: var(--component-checkbox-group-${size}-margin-top);
		${
			hasError &&
			css`
				margin-bottom: var(--component-checkbox-group-${size}-margin-bottom);
			`
		}
	`;
};
