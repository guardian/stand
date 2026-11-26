import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentDatePicker } from '../../styleD/build/typescript/component/datePicker';
import { componentDatePicker } from '../../styleD/build/typescript/component/datePicker';
import type { Prettify } from '../../util/types';
import { convertTypographyToEmotionStringStyle } from '../../utils';

export type DatePickerTheme = Prettify<ComponentDatePicker>;

export const defaultDatePickerTheme: DatePickerTheme = componentDatePicker;

export const datePickerStyles = (theme: DatePickerTheme): SerializedStyles => {
	return css`
		display: flex;
		width: ${theme.picker.shared.width};
		justify-content: space-between;
		align-items: center;
		height: ${theme.picker.shared.height};
		border-radius: ${theme.picker.shared.borderRadius};
		border: ${theme.picker.shared.border};
		background-color: ${theme.picker.shared.backgroundColor};
		gap: ${theme.picker.shared.gap};
		padding-left: ${theme.picker.shared.padding.left};
		padding-right: ${theme.picker.shared.padding.right};
		padding-top: ${theme.picker.shared.padding.top};
		padding-bottom: ${theme.picker.shared.padding.bottom};

		button {
			flex: 1;
			background-color: ${theme.picker.shared.button.backgroundColor};
			border: ${theme.picker.shared.button.border};
			padding-left: ${theme.picker.shared.button.padding.left};
			padding-right: ${theme.picker.shared.button.padding.right};
			padding-top: ${theme.picker.shared.button.padding.top};
			padding-bottom: ${theme.picker.shared.button.padding.bottom};
			margin-left: ${theme.picker.shared.button.margin.left};
			margin-right: ${theme.picker.shared.button.margin.right};
			margin-top: ${theme.picker.shared.button.margin.top};
			margin-bottom: ${theme.picker.shared.button.margin.bottom};
			display: flex;
			align-items: center;
			justify-content: flex-end;
			color: ${theme.picker.shared.button.color};
			cursor: pointer;

			&[data-disabled] {
				cursor: not-allowed;
				color: ${theme.picker.shared.button.disabled.color};
			}

			&[data-focus-visible] {
				outline: ${theme.picker.shared.focusVisible.outline};
			}
		}

		&[data-invalid] {
			border: ${theme.picker.shared.invalid.border};
		}

		&[data-disabled] {
			cursor: not-allowed;
			color: ${theme.picker.shared.disabled.color};
			background-color: ${theme.picker.shared.disabled.backgroundColor};
		}
	`;
};

export const dateSegmentStyles = (theme: DatePickerTheme): SerializedStyles => {
	return css`
		&[data-placeholder] {
			color: ${theme.segment.shared.placeholder.color};
		}

		&[data-focus-visible],
		&[data-focused] {
			outline: ${theme.segment.shared.placeholder.focusVisible.outline};
		}
	`;
};

export const datePickerPopoverStyles = (
	theme: DatePickerTheme,
): SerializedStyles => {
	return css`
		background-color: ${theme.popover.shared.backgroundColor};
		padding: ${theme.popover.shared.padding.top}
			${theme.popover.shared.padding.right}
			${theme.popover.shared.padding.bottom}
			${theme.popover.shared.padding.left};
		box-shadow: ${theme.popover.shared.boxShadow};
	`;
};

export const calendarHeaderStyles = (
	theme: DatePickerTheme,
): SerializedStyles => {
	return css`
		display: flex;
		align-items: center;
		justify-content: space-between;
		${convertTypographyToEmotionStringStyle(
			theme.calendar.header.shared.typography,
		)}

		button {
			background-color: ${theme.calendar.header.shared.button.backgroundColor};
			border: ${theme.calendar.header.shared.button.border};
			padding: ${theme.calendar.header.shared.button.padding.top}
				${theme.calendar.header.shared.button.padding.right}
				${theme.calendar.header.shared.button.padding.bottom}
				${theme.calendar.header.shared.button.padding.left};
			margin: ${theme.calendar.header.shared.button.margin.top}
				${theme.calendar.header.shared.button.margin.right}
				${theme.calendar.header.shared.button.margin.bottom}
				${theme.calendar.header.shared.button.margin.left};
			display: flex;
			align-items: center;
			justify-content: center;
			color: ${theme.calendar.header.shared.button.color};
			cursor: pointer;
			width: ${theme.calendar.header.shared.button.width};
			height: ${theme.calendar.header.shared.button.height};
			aspect-ratio: 1;

			&[data-hovered] {
				background-color: ${
					theme.calendar.header.shared.button.hovered.backgroundColor
				};
			}

			&[data-pressed] {
				background-color: ${
					theme.calendar.header.shared.button.pressed.backgroundColor
				};
			}

			&[data-selected] {
				background-color: ${
					theme.calendar.header.shared.button.selected.backgroundColor
				};
			}

			&[data-focus-visible] {
				outline: ${theme.calendar.header.shared.button.focusVisible.outline};
			}

			&[data-disabled] {
				cursor: not-allowed;
				color: ${theme.calendar.header.shared.button.disabled.color};
			}
		}
	`;
};

export const calendarGridStyles = (
	theme: DatePickerTheme,
): SerializedStyles => {
	return css`
		${convertTypographyToEmotionStringStyle(
			theme.calendar.grid.shared.typography,
		)}

		border-collapse: collapse;
		border-spacing: ${theme.calendar.grid.shared.borderSpacing};

		th {
			width: ${theme.calendar.grid.shared.th.width};
			height: ${theme.calendar.grid.shared.th.height};
			vertical-align: middle;
		}
	`;
};

export const calendarCellStyles = (
	theme: DatePickerTheme,
): SerializedStyles => {
	return css`
		width: ${theme.calendar.cell.shared.width};
		aspect-ratio: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;

		&[data-outside-month] {
			display: none;
		}

		&[data-hovered] {
			background-color: ${theme.calendar.cell.shared.hovered.backgroundColor};
		}

		&[data-pressed] {
			background-color: ${theme.calendar.cell.shared.pressed.backgroundColor};
		}

		&[data-selected] {
			background-color: ${theme.calendar.cell.shared.selected.backgroundColor};
		}

		&[data-focus-visible] {
			outline: ${theme.calendar.cell.shared.focusVisible.outline};
		}

		&[data-today] {
			/* TODO: design for indicating today's date, not yet in figma */
		}

		&[data-disabled] {
			cursor: not-allowed;
			color: ${theme.calendar.cell.shared.disabled.color};
		}
	`;
};
