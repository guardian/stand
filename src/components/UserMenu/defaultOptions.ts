import { base } from '../../terrazzo/build/stand';
import type { Option } from './model';

const textSizes: Option[] = [
	{
		id: 'font-preference-small',
		label: 'Small',
		description: 'Compact reading',
		labelStyle: {
			fontSize: base.typography.size['12Rem'],
		},
	},
	{
		id: 'font-preference-medium',
		label: 'Medium',
		description: 'Standard reading',
		labelStyle: {
			fontSize: base.typography.size['16Rem'],
		},
	},
	{
		id: 'font-preference-large',
		label: 'Large',
		description: 'Comfortable reading',
		labelStyle: {
			fontSize: base.typography.size['20Rem'],
		},
	},
];

const fontFamilies: Option[] = [
	{
		id: 'font-serif',
		label: 'Guardian Text Egyptian',
		description: 'Classic Guardian Serif',
		labelStyle: {
			fontFamily: base.typography.family.guardianTextEgyptian,
			fontSize: base.typography.size['20Rem'],
		},
	},
	{
		id: 'open-sans-compact',
		label: 'Open Sans Compact',
		description: 'Compact Sans-Serif',
		labelStyle: {
			fontFamily: base.typography.family.openSansCompact,
			fontSize: base.typography.size['20Rem'],
		},
	},
	{
		id: 'open-sans',
		label: 'Open Sans',
		description: 'Sans-Serif',
		labelStyle: {
			fontFamily: base.typography.family.openSans,
			fontSize: base.typography.size['20Rem'],
		},
	},
];

const colorSchemes: Option[] = [
	{
		id: 'white',
		buttonStyle: {
			backgroundColor: 'white',
			padding: base.spacing['10Rem'],
		},
		isDefault: true,
	},
	{
		id: 'cream',
		buttonStyle: {
			backgroundColor: 'antiquewhite',
			padding: base.spacing['10Rem'],
		},
	},
	{
		id: 'green',
		buttonStyle: {
			backgroundColor: 'lightgreen',
			padding: base.spacing['10Rem'],
		},
	},
	{
		id: 'pink',
		buttonStyle: {
			backgroundColor: 'pink',
			padding: base.spacing['10Rem'],
		},
	},
	{
		id: 'blue',
		buttonStyle: {
			backgroundColor: 'skyblue',
			padding: base.spacing['10Rem'],
		},
	},
	{
		id: 'orange',
		buttonStyle: {
			backgroundColor: 'orange',
			padding: base.spacing['10Rem'],
		},
	},
];

export { colorSchemes, fontFamilies, textSizes };
