import { css } from '@emotion/react';
import type { Option } from './model';

const textSizes: Option[] = [
	{
		id: 'font-preference-small',
		label: 'Small',
		description: 'Compact reading',
		labelCss: css({
			fontSize: 10,
		}),
	},
	{
		id: 'font-preference-medium',
		label: 'Medium',
		description: 'Standard reading',
		labelCss: css({
			fontSize: 16,
		}),
	},
	{
		id: 'font-preference-large',
		label: 'Large',
		description: 'Comfortable reading',
		labelCss: css({
			fontSize: 20,
		}),
	},
];

const fontFamilies: Option[] = [
	{
		id: 'font-serif',
		label: 'Guardian Text Egyptian',
		description: 'Classic Guardian Serif',
		labelCss: css({
			fontFamily: 'serif',
			fontSize: 20,
		}),
	},
	{
		id: 'font-sans',
		label: 'Guardian Text Sans',
		description: 'Sans-Serif',
		labelCss: css({
			fontFamily: 'sans-serif',
			fontSize: 20,
		}),
	},
];

const colorSchemes: Option[] = [
	{
		id: 'white',
		buttonCss: css({
			backgroundColor: 'white',
			padding: 10,
		}),
		isDefault: true,
	},
	{
		id: 'cream',
		buttonCss: css({
			backgroundColor: 'antiquewhite',
			padding: 10,
		}),
	},
	{
		id: 'green',
		buttonCss: css({
			backgroundColor: 'lightgreen',
			padding: 10,
		}),
	},
	{
		id: 'pink',
		buttonCss: css({
			backgroundColor: 'pink',
			padding: 10,
		}),
	},
	{
		id: 'blue',
		buttonCss: css({
			backgroundColor: 'skyblue',
			padding: 10,
		}),
	},
	{
		id: 'orange',
		buttonCss: css({
			backgroundColor: 'orange',
			padding: 10,
		}),
	},
];

export { textSizes, fontFamilies, colorSchemes };
