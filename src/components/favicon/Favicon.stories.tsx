import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { baseColors, baseRadius, baseSizing } from '../..';
import { Favicon } from './Favicon';

const meta = {
	title: 'Stand/Editorial Design System/Components/Favicon',
	component: Favicon,
	parameters: {},
} satisfies Meta<typeof Favicon>;

type Story = StoryObj<typeof Favicon>;

export const Letter = {
	args: {
		type: 'letter',
		letter: 'C',
	},
} satisfies Story;

export const Icon = {
	args: {
		type: 'icon',
		icon: 'email',
	},
} satisfies Story;

export const Image = {
	args: {
		type: 'image',
		src: 'https://uploads.guimcode.co.uk/2026/01/27/f85e2e477ce54f4c3b671faa5cd21673aa9f8072fddb5d70a73e6038dc812eec.jpg',
		alt: 'Mahesh Makani',
	},
} satisfies Story;

export const CustomTheme = {
	args: {
		type: 'letter',
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
		type: 'letter',
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
