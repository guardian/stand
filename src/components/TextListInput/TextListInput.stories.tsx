import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextListInput } from './TextListInput';

const meta = {
	title: 'Stand/Tools Design System/Components/TextListInput',
	component: TextListInput,
	parameters: {},
} satisfies Meta<typeof TextListInput>;

type Story = StoryObj<typeof TextListInput>;

export const Empty = {
	args: {
		label: 'Link list subheading',
		onChange: (values) => {
			console.log('Text list values: ', values);
		},
	},
} satisfies Story;

export const WithInitialData = {
	args: {
		label: 'Link list subheading',
		initialData: ['Item 1', 'Item 2', 'Item 3'],
		onChange: (values) => {
			console.log('Text list values: ', values);
		},
	},
} satisfies Story;

export default meta;
