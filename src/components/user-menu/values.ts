import type { Option } from './model';

const textSizes: Option[] = [
	{
		id: 'font-preference-small',
		label: 'Small',
		description: 'Compact reading',
		labelStyle: {
			fontSize: 10,
		},
	},
	{
		id: 'font-preference-medium',
		label: 'Medium',
		description: 'Standard reading',
		labelStyle: {
			fontSize: 16,
		},
	},
	{
		id: 'font-preference-large',
		label: 'Large',
		description: 'Comfortable reading',
		labelStyle: {
			fontSize: 20,
		},
	},
];

const fontFamilies: Option[] = [
	{
		id: 'font-serif',
		label: 'Guardian Text Egyptian',
		description: 'Classic Guardian Serif',
		labelStyle: {
			fontFamily: 'serif',
			fontSize: 20,
		},
	},
	{
		id: 'font-sans',
		label: 'Guardian Text Sans',
		description: 'Sans-Serif',
		labelStyle: {
			fontFamily: 'sans-serif',
			fontSize: 20,
		},
	},
];

const colorSchemes: Option[] = [
	{
		id: 'white',
		buttonStyle: {
			backgroundColor: 'white',
			padding: 10,
		},
		isDefault: true,
	},
	{
		id: 'cream',
		buttonStyle: {
			backgroundColor: 'antiquewhite',
			padding: 10,
		},
	},
	{
		id: 'green',
		buttonStyle: {
			backgroundColor: 'lightgreen',
			padding: 10,
		},
	},
	{
		id: 'pink',
		buttonStyle: {
			backgroundColor: 'pink',
			padding: 10,
		},
	},
	{
		id: 'blue',
		buttonStyle: {
			backgroundColor: 'skyblue',
			padding: 10,
		},
	},
	{
		id: 'orange',
		buttonStyle: {
			backgroundColor: 'orange',
			padding: 10,
		},
	},
];

export { colorSchemes, fontFamilies, textSizes };
