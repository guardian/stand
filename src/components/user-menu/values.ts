import { css } from '@emotion/react';
import type { Option } from './model';

const textSizes: Option[] = [
	{
		label: 'Small',
		description: 'Compact reading',
		labelCss: css({
			fontSize: 10,
		}),
	},
	{
		label: 'Medium',
		description: 'Standard reading',
		labelCss: css({
			fontSize: 16,
		}),
	},
	{
		label: 'Large',
		description: 'Comfortable reading',
		labelCss: css({
			fontSize: 20,
		}),
	},
];

const fontFamilies: Option[] = [
	{
		label: 'Guardian Text Egyptian',
		description: 'Classic Guardian Serif',
		labelCss: css({
			fontFamily: 'serif',
			fontSize: 20,
		}),
	},
	{
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
		label: 'white',
		buttonCss: css({
			backgroundColor: 'white',
			padding: 10,
		}),
	},
	{
		label: 'cream',
		buttonCss: css({
			backgroundColor: 'antiquewhite',
			padding: 10,
		}),
	},
	{
		label: 'green',
		buttonCss: css({
			backgroundColor: 'lightgreen',
			padding: 10,
		}),
	},
	{
		label: 'pink',
		buttonCss: css({
			backgroundColor: 'pink',
			padding: 10,
		}),
	},
	{
		label: 'blue',
		buttonCss: css({
			backgroundColor: 'skyblue',
			padding: 10,
		}),
	},
	{
		label: 'orange',
		buttonCss: css({
			backgroundColor: 'orange',
			padding: 10,
		}),
	},
];

export { textSizes, fontFamilies, colorSchemes };
