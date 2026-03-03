import type { Meta, StoryObj } from '@storybook/react-vite';
import { Menu } from './Menu';

const meta = {
	title: 'Stand/Tools Design System/Components/Menu',
	component: Menu,
	parameters: {},
	args: {},
} satisfies Meta<typeof Menu>;

type Story = StoryObj<typeof Menu>;

export default meta;

export const Default = {
	name: 'Default',
	args: {
		children: 'Menu',
	},
} satisfies Story;
