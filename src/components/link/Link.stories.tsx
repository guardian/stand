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
		href: 'https://www.theguardian.com',
	},
} satisfies Story;

export const Disabled = {
	args: {
		children: 'Link',
		isDisabled: true,
		href: 'https://www.theguardian.com',
	},
} satisfies Story;

export const TitleMd = {
	args: {
		children: 'Link',
		href: 'https://www.theguardian.com',
		typography: 'title-md',
	},
} satisfies Story;
