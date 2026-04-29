// Component Name
export const componentName = 'DatePicker';

// DatePicker - React sandbox example
export const componentTsx = /* javascript */ `import { CalendarDate } from '@internationalized/date';
import { DatePicker } from '@guardian/stand/date-picker';

export const Component = () => (
	<>
		{/* Basic usage */}
		<DatePicker
			label="Date of birth"
			description="Enter your date of birth (e.g. 15 April 1990)"
		/>

		{/* With a pre-selected date */}
		<DatePicker
			label="Select a date"
			value={new CalendarDate(2026, 4, 15)}
			onChange={(value) => console.log('Selected date:', value)}
		/>

		{/* With min/max constraints */}
		<DatePicker
			label="Select a date"
			description="Choose a date within 2026"
			minValue={new CalendarDate(2026, 1, 1)}
			maxValue={new CalendarDate(2026, 12, 31)}
		/>

		{/* Invalid state */}
		<DatePicker
			label="Select a date"
			isInvalid
			error="Please select a valid date."
			value={new CalendarDate(2026, 4, 15)}
		/>
	</>
);
`;
