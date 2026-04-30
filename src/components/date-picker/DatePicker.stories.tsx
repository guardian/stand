import { css } from '@emotion/react';
import { CalendarDate } from '@internationalized/date';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { baseColors } from '../../styleD/build/typescript/base/colors';
import { DatePicker } from './DatePicker';

const meta = {
	title: 'Stand/Tools Design System/Components/DatePicker',
	component: DatePicker,
	parameters: {},
	args: {},
} satisfies Meta<typeof DatePicker>;

type Story = StoryObj<typeof DatePicker>;

export default meta;

export const Default = {
	name: 'Default',
	args: {
		label: 'Select a date',
		description: 'Please select a date from the calendar',
		onChange: (value) => {
			console.log('Selected date:', value);
		},
	},
} satisfies Story;

export const UseMonthTextInputFalse = {
	name: 'useMonthTextInput - false',
	args: {
		label: 'Select a date',
		description: 'Please select a date from the calendar',
		useMonthTextInput: false,
		onChange: (value) => {
			console.log('Selected date:', value);
		},
	},
} satisfies Story;

export const Disabled = {
	name: 'Disabled',
	args: {
		label: 'Select a date',
		description: 'Please select a date from the calendar',
		isDisabled: true,
	},
} satisfies Story;

export const MinMaxDate = {
	name: 'Min and Max Date',
	args: {
		label: 'Select a date',
		description: 'Please select a date from the calendar',
		minValue: new CalendarDate(new Date().getFullYear(), 1, 12), // January 12, of current year
		maxValue: new CalendarDate(new Date().getFullYear(), 12, 12), // December 12, of current year
		onChange: (value) => {
			console.log('Selected date:', value);
		},
	},
} satisfies Story;

export const SelectedDate = {
	name: 'Selected Date',
	args: {
		label: 'Select a date',
		description: 'Please select a date from the calendar',
		value: new CalendarDate(2026, 4, 15), // April 15, 2026
		onChange: (value) => {
			console.log('Selected date:', value);
		},
	},
} satisfies Story;

export const Invalid = {
	name: 'Invalid',
	args: {
		label: 'Select a date',
		description: 'Please select a date from the calendar',
		isInvalid: true,
		error: 'The selected date is invalid. Please choose a valid date.',
		value: new CalendarDate(2026, 4, 15), // April 15, 2026
		onChange: (value) => {
			console.log('Selected date:', value);
		},
	},
} satisfies Story;

export const CustomTheme = {
	name: 'Custom Theme',
	args: {
		label: 'Select a date',
		description: 'Please select a date from the calendar',
		theme: {
			picker: {
				shared: {
					border: `0.0625rem solid ${baseColors['cool-purple'][500]}`,
					borderRadius: '0.5rem',
				},
			},
		},
	},
} satisfies Story;

export const CssOverrides = {
	name: 'CSS Overrides',
	args: {
		label: 'Select a date',
		description: 'Please select a date from the calendar',
		cssOverrides: css`
			border: 0.125rem solid ${baseColors.red[500]};
			border-radius: 0.5rem;
		`,
	},
} satisfies Story;
