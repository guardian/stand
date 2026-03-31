import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextInput } from './TextInput';

const meta = {
	title: 'Stand/Tools Design System/Components/TextInput',
	component: TextInput,
	parameters: {},
	args: {},
} satisfies Meta<typeof TextInput>;

type Story = StoryObj<typeof TextInput>;

export default meta;

export const Default = {
	name: 'Default - md size',
	args: {},
} satisfies Story;

export const WithLabelAndDescription = {
	name: 'With Label and Description - md size',
	args: {
		size: 'md',
		label: 'Label',
		description: 'This is a description for the text input.',
	},
} satisfies Story;

export const WithLabelValueAndDescription = {
	name: 'With Label, Value and Description - md size',
	args: {
		size: 'md',
		label: 'Label',
		description: 'This is a description for the text input.',
		value: 'Text input value',
	},
} satisfies Story;

export const WithLabelValueDescriptionAndError = {
	name: 'With Label, Value, Description and Error - md size',
	args: {
		size: 'md',
		label: 'Label',
		description: 'This is a description for the text input.',
		value: 'Text input value',
		isInvalid: true,
		error: 'This is an error message.',
	},
} satisfies Story;

export const WithLabelOnly = {
	name: 'With Label Only - md size',
	args: {
		size: 'md',
		label: 'Label',
	},
} satisfies Story;

export const WithDescriptionOnly = {
	name: 'With Description Only - md size',
	args: {
		size: 'md',
		description: 'This is a description for the text input.',
	},
} satisfies Story;

export const SmallSize = {
	name: 'Small Size - sm size',
	args: {
		size: 'sm',
		label: 'Label',
		description: 'This is a description for the text input.',
	},
} satisfies Story;

export const Disabled = {
	name: 'Disabled State',
	args: {
		size: 'md',
		label: 'Label',
		description: 'This is a description for the text input.',
		value: 'Text input value',
		isDisabled: true,
	},
} satisfies Story;
