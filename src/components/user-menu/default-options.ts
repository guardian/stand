import { baseSpacing } from '../../styleD/build/typescript/base/spacing';
import { baseTypography } from '../../styleD/build/typescript/base/typography';
import type { Option } from './model';

const textSizes: Option[] = [
	{
		id: 'font-preference-small',
		label: 'Small',
		description: 'Compact reading',
		labelStyle: {
			fontSize: baseTypography.size['12Rem'],
		},
	},
	{
		id: 'font-preference-medium',
		label: 'Medium',
		description: 'Standard reading',
		labelStyle: {
			fontSize: baseTypography.size['16Rem'],
		},
	},
	{
		id: 'font-preference-large',
		label: 'Large',
		description: 'Comfortable reading',
		labelStyle: {
			fontSize: baseTypography.size['20Rem'],
		},
	},
];

const fontFamilies: Option[] = [
	{
		id: 'font-serif',
		label: 'Guardian Text Egyptian',
		description: 'Classic Guardian Serif',
		labelStyle: {
			fontFamily: baseTypography.family.guardianTextEgyptian,
			fontSize: baseTypography.size['20Rem'],
		},
	},
	{
		id: 'open-sans-compact',
		label: 'Open Sans Compact',
		description: 'Compact Sans-Serif',
		labelStyle: {
			fontFamily: baseTypography.family.openSansCompact,
			fontSize: baseTypography.size['20Rem'],
		},
	},
	{
		id: 'open-sans',
		label: 'Open Sans',
		description: 'Sans-Serif',
		labelStyle: {
			fontFamily: baseTypography.family.openSans,
			fontSize: baseTypography.size['20Rem'],
		},
	},
];

const colorSchemes: Option[] = [
	{
		id: 'white',
		buttonStyle: {
			backgroundColor: 'white',
			padding: baseSpacing['10Rem'],
		},
		isDefault: true,
	},
	{
		id: 'cream',
		buttonStyle: {
			backgroundColor: 'antiquewhite',
			padding: baseSpacing['10Rem'],
		},
	},
	{
		id: 'green',
		buttonStyle: {
			backgroundColor: 'lightgreen',
			padding: baseSpacing['10Rem'],
		},
	},
	{
		id: 'pink',
		buttonStyle: {
			backgroundColor: 'pink',
			padding: baseSpacing['10Rem'],
		},
	},
	{
		id: 'blue',
		buttonStyle: {
			backgroundColor: 'skyblue',
			padding: baseSpacing['10Rem'],
		},
	},
	{
		id: 'orange',
		buttonStyle: {
			backgroundColor: 'orange',
			padding: baseSpacing['10Rem'],
		},
	},
];

export { colorSchemes, fontFamilies, textSizes };
