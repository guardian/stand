import { baseSpacing } from '../../styleD/build/typescript/base/spacing';
import { baseTypography } from '../../styleD/build/typescript/base/typography';
import type { Option } from './model';

const textSizes: Option[] = [
	{
		id: 'font-preference-small',
		label: 'Small',
		description: 'Compact reading',
		labelStyle: {
			fontSize: baseTypography.size['12-px'],
		},
	},
	{
		id: 'font-preference-medium',
		label: 'Medium',
		description: 'Standard reading',
		labelStyle: {
			fontSize: baseTypography.size['16-px'],
		},
	},
	{
		id: 'font-preference-large',
		label: 'Large',
		description: 'Comfortable reading',
		labelStyle: {
			fontSize: baseTypography.size['20-px'],
		},
	},
];

const fontFamilies: Option[] = [
	{
		id: 'font-serif',
		label: 'Guardian Text Egyptian',
		description: 'Classic Guardian Serif',
		labelStyle: {
			fontFamily: baseTypography.family['Guardian Text Egyptian'],
			fontSize: baseTypography.size['20-px'],
		},
	},
	{
		id: 'open-sans-compact',
		label: 'Open Sans Compact',
		description: 'compact sans-Serif',
		labelStyle: {
			fontFamily: baseTypography.family['Open Sans Compact'],
			fontSize: baseTypography.size['20-px'],
		},
	},
	{
		id: 'open-sans',
		label: 'Open Sans',
		description: 'Sans-Serif',
		labelStyle: {
			fontFamily: baseTypography.family['Open Sans'],
			fontSize: baseTypography.size['20-px'],
		},
	},
];

const colorSchemes: Option[] = [
	{
		id: 'white',
		buttonStyle: {
			backgroundColor: 'white',
			padding: baseSpacing['10-rem'],
		},
		isDefault: true,
	},
	{
		id: 'cream',
		buttonStyle: {
			backgroundColor: 'antiquewhite',
			padding: baseSpacing['10-rem'],
		},
	},
	{
		id: 'green',
		buttonStyle: {
			backgroundColor: 'lightgreen',
			padding: baseSpacing['10-rem'],
		},
	},
	{
		id: 'pink',
		buttonStyle: {
			backgroundColor: 'pink',
			padding: baseSpacing['10-rem'],
		},
	},
	{
		id: 'blue',
		buttonStyle: {
			backgroundColor: 'skyblue',
			padding: baseSpacing['10-rem'],
		},
	},
	{
		id: 'orange',
		buttonStyle: {
			backgroundColor: 'orange',
			padding: baseSpacing['10-rem'],
		},
	},
];

export { colorSchemes, fontFamilies, textSizes };
