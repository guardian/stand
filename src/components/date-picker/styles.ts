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
		display: ${theme.picker.shared.display};
		width: ${theme.picker.shared.width};
		justify-content: ${theme.picker.shared.justifyContent};
		align-items: ${theme.picker.shared.alignItems};
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
			flex: ${theme.picker.shared.button.flex};
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
			display: ${theme.picker.shared.button.display};
			align-items: ${theme.picker.shared.button.alignItems};
			justify-content: ${theme.picker.shared.button.justifyContent};
			color: ${theme.picker.shared.button.color};
			cursor: ${theme.picker.shared.button.cursor};

			&[data-disabled] {
				cursor: ${theme.picker.shared.button.disabled.cursor};
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
			cursor: ${theme.picker.shared.disabled.cursor};
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
		display: ${theme.calendar.header.shared.display};
		align-items: ${theme.calendar.header.shared.alignItems};
		justify-content: ${theme.calendar.header.shared.justifyContent};
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
			display: ${theme.calendar.header.shared.button.display};
			align-items: ${theme.calendar.header.shared.button.alignItems};
			justify-content: ${theme.calendar.header.shared.button.justifyContent};
			color: ${theme.calendar.header.shared.button.color};
			cursor: ${theme.calendar.header.shared.button.cursor};
			width: ${theme.calendar.header.shared.button.width};
			height: ${theme.calendar.header.shared.button.height};
			aspect-ratio: ${theme.calendar.header.shared.button.aspectRatio};

			&[data-hovered] {
				background-color: ${theme.calendar.header.shared.button.hovered
					.backgroundColor};
			}

			&[data-pressed] {
				background-color: ${theme.calendar.header.shared.button.pressed
					.backgroundColor};
			}

			&[data-selected] {
				background-color: ${theme.calendar.header.shared.button.selected
					.backgroundColor};
			}

			&[data-focus-visible] {
				outline: ${theme.calendar.header.shared.button.focusVisible.outline};
			}

			&[data-disabled] {
				cursor: ${theme.calendar.header.shared.button.disabled.cursor};
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

		border-collapse: ${theme.calendar.grid.shared.borderCollapse};
		border-spacing: ${theme.calendar.grid.shared.borderSpacing};

		th {
			width: ${theme.calendar.grid.shared.th.width};
			height: ${theme.calendar.grid.shared.th.height};
			vertical-align: ${theme.calendar.grid.shared.th.verticalAlign};
		}
	`;
};

export const calendarCellStyles = (
	theme: DatePickerTheme,
): SerializedStyles => {
	return css`
		width: ${theme.calendar.cell.shared.width};
		aspect-ratio: ${theme.calendar.cell.shared.aspectRatio};
		display: ${theme.calendar.cell.shared.display};
		align-items: ${theme.calendar.cell.shared.alignItems};
		justify-content: ${theme.calendar.cell.shared.justifyContent};
		cursor: ${theme.calendar.cell.shared.cursor};

		&[data-outside-month] {
			display: ${theme.calendar.cell.shared.outsideMonth.display};
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
			cursor: ${theme.calendar.cell.shared.disabled.cursor};
			color: ${theme.calendar.cell.shared.disabled.color};
		}
	`;
};
