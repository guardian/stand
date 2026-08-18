import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextListInput } from './TextListInput';

const meta = {
	title: 'Stand/Tools Design System/Components/TextListInput',
	component: TextListInput,
	parameters: {},
} satisfies Meta<typeof TextListInput>;

type Story = StoryObj<typeof TextListInput>;

export const Default = {
	args: {
		label: 'Link list subheading',
		onChange: (values) => {
			console.log('Text list values: ', values);
		},
	},
} satisfies Story;

export default meta;
