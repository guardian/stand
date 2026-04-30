import type {
	DateValue,
	CalendarProps as RACCalendarProps,
	DatePickerProps as RACDatePickerProps,
} from 'react-aria-components';
import type { DefaultProps } from '../../util/types';
import type { FormInputContainerDefaultProps } from '../form/types';
import type { DatePickerTheme } from './styles';

// See https://react-aria.adobe.com/DatePicker#datepicker for full underlying props and documentation
export interface DatePickerProps extends FormInputContainerDefaultProps<
	Omit<RACDatePickerProps<DateValue>, 'granularity' | 'hideTimeZone'>,
	DatePickerTheme
> {
	/**
	 * When true (default), the month segment displays full month names (e.g. "April") and
	 * supports typing the first letters of a month name to select it.
	 * Set to false to revert to React Aria's default numeric month behaviour.
	 */
	useMonthTextInput?: boolean;
	/**
	 * Locale to use for formatting the date. By default, it uses en-GB,
	 * you shouldn't need to set this prop in most scenarios,
	 * if you need low level control use this along with useMonthTextInput prop
	 *
	 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale for more details on supported locales and formatting options.
	 */
	locale?: string;
}

export type CalendarProps = DefaultProps<
	DatePickerTheme,
	RACCalendarProps<DateValue>['className']
> &
	Omit<RACCalendarProps<DateValue>, 'className'>;
