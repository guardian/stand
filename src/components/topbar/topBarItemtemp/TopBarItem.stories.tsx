import type { Meta, StoryObj } from '@storybook/react-vite';
import { TopBarItem } from './TopBarItem';

const meta = {
	title: 'Stand/Tools Design System/Components/TopBar/TopBarItem',
	component: TopBarItem,
	parameters: {},
	args: {},
} satisfies Meta<typeof TopBarItem>;

type Story = StoryObj<typeof TopBarItem>;

export default meta;

export const Default = {
	name: 'Default',
	args: {
		children: 'TopBarItem',
	},
} satisfies Story;
