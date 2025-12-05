import type { Meta, StoryObj } from '@storybook/react-vite';
import { UserMenu } from './UserMenu';

const meta = {
	title: 'Stand/UserMenu',
	component: UserMenu,
	args: {
		feedBacklink: '/',
	}
} satisfies Meta<typeof UserMenu>;

type Story = StoryObj<typeof UserMenu>;

export const Default: Story = {};

export const Themed: Story = {
	args: {
		theme: {
			backgroundColor: 'pink',
			toggleButton: {
				selectedBorderColor: 'crimson'
			}
		},
	},
};

export default meta;
