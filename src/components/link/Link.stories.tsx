import type { Meta, StoryObj } from '@storybook/react-vite';
import { Link } from './Link';

const meta = {
	title: 'Stand/Tools Design System/Components/Link',
	component: Link,
	parameters: {},
	args: {},
} satisfies Meta<typeof Link>;

type Story = StoryObj<typeof Link>;

export default meta;

export const Default = {
	name: 'Default',
	args: {
		children: 'Link',
	},
} satisfies Story;
