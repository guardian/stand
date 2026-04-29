import { createContext, useContext, useEffect, useRef } from 'react';
import type {
	CalendarCellProps as RACCalendarCellProps,
	CalendarGridProps as RACCalendarGridProps,
	DateInputProps as RACDateInputProps,
	DateSegmentProps as RACDateSegmentProps,
} from 'react-aria-components';
import {
	DateFieldStateContext,
	I18nProvider,
	Button as RACButton,
	Calendar as RACCalendar,
	CalendarCell as RACCalendarCell,
	CalendarGrid as RACCalendarGrid,
	DateInput as RACDateInput,
	DatePicker as RACDatePicker,
	DateSegment as RACDateSegment,
	Group as RACGroup,
	Heading as RACHeading,
	Popover as RACPopover,
} from 'react-aria-components';
import { mergeDeep } from '../../util/mergeDeep';
import { FormInputContainer } from '../form/Form';
import { Icon } from '../icon/Icon';
import {
	calendarCellStyles,
	calendarGridStyles,
	calendarHeaderStyles,
	datePickerPopoverStyles,
	datePickerStyles,
	dateSegmentStyles,
	defaultDatePickerTheme,
} from './styles';
import type { CalendarProps, DatePickerProps } from './types';

const MONTHS = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

const SEGMENT_PLACEHOLDERS: Partial<Record<string, string>> = {
	day: 'DD',
	month: 'MMMM',
	year: 'YYYY',
};

const CLEAR_BUFFER_DELAY_MS = 1000;

// Passed down from DatePicker to DateSegment to control whether the custom
// month text input behaviour is enabled
const MonthTextInputContext = createContext(true);

/**
 * Custom DateSegment component to handle showing full month names and keyboard navigation for month segment.
 * The default behavior of react-aria's DateSegment for month is to show numeric month and only allow numeric input,
 * so we need to implement our own logic to support showing full month names and allowing users to type the
 * first few letters of the month to select it.
 */
function DateSegment(props: RACDateSegmentProps) {
	const useMonthTextInput = useContext(MonthTextInputContext);
	const state = useContext(DateFieldStateContext);
	const stateRef = useRef(state);

	useEffect(() => {
		stateRef.current = state;
	});

	const bufferRef = useRef('');
	const clearTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const segmentRef = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		if (!useMonthTextInput || props.segment.type !== 'month') {
			return;
		}

		const el = segmentRef.current;
		if (!el) {
			return;
		}

		// Handler for keyboard navigation to allow users to type the first few letters of the month to select it
		const handleKeyDown = (e: KeyboardEvent) => {
			const currentState = stateRef.current;
			// Only intercept single letter keys — numeric keys and special keys
			// (arrows, backspace, etc.) are left for React Aria's default handling
			if (!currentState || !/^[a-zA-Z]$/.test(e.key)) {
				return;
			}

			// Prevent React Aria from treating the letter as a numeric input attempt
			e.preventDefault();
			e.stopPropagation();

			// Reset the inactivity timer so a partial match stays selected
			// until the user stops typing or 1s passes with no new keypress
			if (clearTimerRef.current) {
				clearTimeout(clearTimerRef.current);
			}
			bufferRef.current += e.key.toLowerCase();

			// Find the first month whose name starts with the accumulated buffer
			// (e.g. 'j' → January, 'ju' → June, 'jul' → July)
			const match = MONTHS.findIndex((m) =>
				m.toLowerCase().startsWith(bufferRef.current),
			);

			if (match !== -1) {
				currentState.setSegment('month', match + 1);

				// If the buffer now uniquely identifies one month, there's no point
				// waiting, clear immediately and advance focus to the year segment
				const uniqueMatch =
					MONTHS.filter((m) => m.toLowerCase().startsWith(bufferRef.current))
						.length === 1;

				if (uniqueMatch) {
					bufferRef.current = '';
					if (clearTimerRef.current) {
						clearTimeout(clearTimerRef.current);
					}
					// Move focus to the year segment so the user can continue
					// filling in the date without an extra tab/click
					const yearSegment =
						el.parentElement?.querySelector<HTMLElement>('[data-type="year"]');
					yearSegment?.focus();
				}
			}

			// Clear the buffer after inactivity so the next keypress starts fresh
			clearTimerRef.current = setTimeout(() => {
				bufferRef.current = '';
			}, CLEAR_BUFFER_DELAY_MS) as unknown as ReturnType<typeof setTimeout>;
		};

		// Use native listener in capture phase so it fires before React Aria's handlers
		// as React Aria's DateSegment does not support custom listeners
		// so we need to intercept the keydown event first
		el.addEventListener('keydown', handleKeyDown, true);
		return () => {
			el.removeEventListener('keydown', handleKeyDown, true);
			if (clearTimerRef.current) {
				clearTimeout(clearTimerRef.current);
			}
		};
	}, [props.segment.type, useMonthTextInput]);

	// For literal segments (e.g. the "/" in "MM/DD/YYYY"), we don't want to render anything or allow focus on them,
	// but we still need to render something to keep the layout correct.
	// So we render a space and set aria-hidden to true.
	if (useMonthTextInput && props.segment.type === 'literal') {
		return <span aria-hidden="true"> </span>;
	}

	return (
		<RACDateSegment {...props} ref={segmentRef}>
			{(renderProps) => {
				// For month segments, show the full month name instead of the default numeric month
				if (
					useMonthTextInput &&
					renderProps.type === 'month' &&
					renderProps.value != null
				) {
					return MONTHS[renderProps.value - 1];
				}
				// Show placeholders (e.g. "MM" for month) when the segment is empty to indicate the expected input
				if (
					useMonthTextInput &&
					renderProps.isPlaceholder &&
					renderProps.type in SEGMENT_PLACEHOLDERS
				) {
					return SEGMENT_PLACEHOLDERS[renderProps.type];
				}
				// For all other segments, use the default rendering (e.g. numeric day and year)
				return renderProps.text;
			}}
		</RACDateSegment>
	);
}

function DateInput(props: RACDateInputProps) {
	return <RACDateInput {...props} />;
}

function CalendarCell(props: RACCalendarCellProps) {
	return <RACCalendarCell {...props} />;
}

function CalendarGrid(props: RACCalendarGridProps) {
	return <RACCalendarGrid {...props} />;
}

function Calendar({ theme = {}, ...props }: CalendarProps) {
	const mergedTheme = mergeDeep(defaultDatePickerTheme, theme);

	return (
		<RACCalendar {...props}>
			<header css={calendarHeaderStyles(mergedTheme)}>
				<RACButton slot="previous">
					<Icon symbol="chevron_left" size="lg" />
				</RACButton>
				<RACHeading />
				<RACButton slot="next">
					<Icon symbol="chevron_right" size="lg" />
				</RACButton>
			</header>
			<CalendarGrid css={calendarGridStyles(mergedTheme)}>
				{(date) => (
					<CalendarCell css={calendarCellStyles(mergedTheme)} date={date} />
				)}
			</CalendarGrid>
		</RACCalendar>
	);
}

export function DatePicker({
	isInvalid,
	locale = 'en-GB',
	useMonthTextInput = true,
	theme = {},
	...props
}: DatePickerProps) {
	const mergedTheme = mergeDeep(defaultDatePickerTheme, theme);

	return (
		<FormInputContainer
			as={RACDatePicker}
			isInvalid={isInvalid}
			// set default values for specific props that shouldn't depend on users locale, and should only be explicity overridden if needed
			firstDayOfWeek="mon"
			shouldForceLeadingZeros={true}
			{...props}
			size="md" // DatePicker doesn't support size prop, so we set it to a default value to avoid passing it down
			granularity="day" // force granularity to day for datepicker, we'll build a separate timepicker component if there's a need for time selection
			hideTimeZone={true} // we don't want to show timezone in the datepicker, as it's meant for selecting calendar dates only, without time information
		>
			<RACGroup css={datePickerStyles(mergedTheme)}>
				<MonthTextInputContext.Provider value={useMonthTextInput}>
					<I18nProvider locale={locale}>
						<DateInput>
							{(segment) => (
								<DateSegment
									css={dateSegmentStyles(mergedTheme)}
									segment={segment}
								/>
							)}
						</DateInput>
					</I18nProvider>
				</MonthTextInputContext.Provider>
				<RACButton>
					<Icon symbol="calendar_month" size="lg" />
				</RACButton>
			</RACGroup>
			<RACPopover
				css={datePickerPopoverStyles(mergedTheme)}
				offset={8}
				containerPadding={0}
			>
				<Calendar theme={mergedTheme} />
			</RACPopover>
		</FormInputContainer>
	);
}
