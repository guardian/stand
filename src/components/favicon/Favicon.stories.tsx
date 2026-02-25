import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { baseColors, baseRadius, baseSizing } from '../..';
import { Favicon } from './Favicon';

// from source: https://github.com/guardian/csnx/blob/main/libs/%40guardian/source/src/react-components/__generated__/icons/SvgHomeHouseOutlined.tsx
const HomeSvg = () => (
	<svg viewBox="-3 -3 30 30" xmlns="http://www.w3.org/2000/svg">
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M12.36 2.5h-.905l-7.6 7.69-.905.905v.453h.905v9.056l.904.896h5.872v-6.333h2.715V21.5h5.89l.904-.932v-9.02h.905v-.453l-1.357-1.357-.001.005zm5.97 8.447-6.412-6.34-6.254 6.326v8.758h3.158V13.81l.452-.453h5.438l.443.453v5.88h3.176z"
		/>
	</svg>
);
const meta = {
	title: 'Stand/Editorial Design System/Components/Favicon',
	component: Favicon,
	parameters: {},
} satisfies Meta<typeof Favicon>;

type Story = StoryObj<typeof Favicon>;

export const Letter = {
	args: {
		letter: 'C',
	},
} satisfies Story;

export const IconSymbol = {
	args: {
		icon: 'home',
	},
} satisfies Story;

export const IconSvg = {
	args: {
		icon: <HomeSvg />,
	},
} satisfies Story;

export const Image = {
	args: {
		src: 'https://uploads.guimcode.co.uk/2026/01/27/f85e2e477ce54f4c3b671faa5cd21673aa9f8072fddb5d70a73e6038dc812eec.jpg',
		alt: 'Mahesh Makani',
	},
} satisfies Story;

export const CustomTheme = {
	args: {
		letter: 'C',
		theme: {
			color: {
				background: baseColors['cool-purple'][700],
				text: baseColors.orange[300],
			},
		},
	},
} satisfies Story;

export const CssOverrides = {
	name: 'cssOverrides',
	args: {
		letter: 'O',
		cssOverrides: css`
			border: ${baseSizing['size-2-rem']} solid ${baseColors.red[500]};
			background-color: ${baseColors.orange[700]};
			color: ${baseColors['warm-purple'][300]};
			border-radius: ${baseRadius['corner-4-px']};
		`,
	},
};

export default meta;
