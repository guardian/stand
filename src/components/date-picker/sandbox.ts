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

		{/* With min/max constraints and a pre-selected date */}
		<DatePicker
			label="Select a date"
			description="Choose a date within 2026"
			value={new CalendarDate(2026, 4, 15)}
			minValue={new CalendarDate(2026, 1, 1)}
			maxValue={new CalendarDate(2026, 12, 31)}
		/>
	</>
);
`;
