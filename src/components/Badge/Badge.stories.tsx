// import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';

const meta = {
	title: 'Stand/Tools Design System/Components/Badge',
	component: Badge,
	parameters: {},
} satisfies Meta<typeof Badge>;

type Story = StoryObj<typeof Badge>;

export const Default = {
	args: {
		size: 'md',
		color: 'green',
	},
} satisfies Story;

export const CustomMessage = {
	args: {
		size: 'md',
		color: 'green',
	},
} satisfies Story;

export const CustomTheme = {
	args: {
		size: 'md',
		color: 'green',
	},
} satisfies Story;

export const CssOverrides = {
	args: {
		size: 'md',
		color: 'green',
	},
} satisfies Story;

export default meta;
