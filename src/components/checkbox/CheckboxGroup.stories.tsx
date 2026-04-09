import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './Checkbox';
import { CheckboxGroup } from './CheckboxGroup';

const meta = {
	title: 'Stand/Tools Design System/Components/CheckboxGroup',
	component: CheckboxGroup,
	parameters: {},
	args: {},
} satisfies Meta<typeof CheckboxGroup>;

type Story = StoryObj<typeof CheckboxGroup>;

export default meta;

export const Default = {
	name: 'Default - md',
	args: {
		label: 'Checkbox Group',
		description: 'This is a description for the checkbox group.',
	},
	render: (args) => (
		<CheckboxGroup {...args}>
			<Checkbox value="option1">Option 1</Checkbox>
			<Checkbox value="option2">Option 2</Checkbox>
			<Checkbox value="option3">Option 3</Checkbox>
		</CheckboxGroup>
	),
} satisfies Story;

export const GroupDisabledMd = {
	name: 'Group Disabled - md',
	args: {
		label: 'Checkbox Group',
		description: 'This is a description for the checkbox group.',
		isDisabled: true,
	},
	render: (args) => (
		<CheckboxGroup {...args}>
			<Checkbox value="option1">Option 1</Checkbox>
			<Checkbox value="option2">Option 2</Checkbox>
			<Checkbox value="option3">Option 3</Checkbox>
		</CheckboxGroup>
	),
} satisfies Story;

export const SingleOptionDisabledMd = {
	name: 'Single Option Disabled - md',
	args: {
		label: 'Checkbox Group',
		description: 'This is a description for the checkbox group.',
	},
	render: (args) => (
		<CheckboxGroup {...args}>
			<Checkbox value="option1" isDisabled>
				Option 1
			</Checkbox>
			<Checkbox value="option2">Option 2</Checkbox>
			<Checkbox value="option3">Option 3</Checkbox>
		</CheckboxGroup>
	),
} satisfies Story;

export const GroupErrorMd = {
	name: 'Group Error - md',
	args: {
		label: 'Checkbox Group',
		description: 'This is a description for the checkbox group.',
		error: 'This is an error message for the checkbox group.',
		isInvalid: true,
	},
	render: (args) => (
		<CheckboxGroup {...args}>
			<Checkbox value="option1">Option 1</Checkbox>
			<Checkbox value="option2">Option 2</Checkbox>
			<Checkbox value="option3">Option 3</Checkbox>
		</CheckboxGroup>
	),
} satisfies Story;

export const SingleOptionErrorMd = {
	name: 'Single Option Error - md',
	args: {
		label: 'Checkbox Group',
		description: 'This is a description for the checkbox group.',
		error: 'This is an error message for the checkbox group.',
	},
	render: (args) => (
		<CheckboxGroup {...args}>
			<Checkbox value="option1" isInvalid>
				Option 1
			</Checkbox>
			<Checkbox value="option2">Option 2</Checkbox>
			<Checkbox value="option3">Option 3</Checkbox>
		</CheckboxGroup>
	),
} satisfies Story;

export const SizeSmall = {
	name: 'Size - sm',
	args: {
		label: 'Checkbox Group',
		description: 'This is a description for the checkbox group.',
		size: 'sm',
	},
	render: (args) => (
		<CheckboxGroup {...args}>
			<Checkbox value="option1">Option 1</Checkbox>
			<Checkbox value="option2">Option 2</Checkbox>
			<Checkbox value="option3">Option 3</Checkbox>
		</CheckboxGroup>
	),
} satisfies Story;

export const GroupDisabledSmall = {
	name: 'Group Disabled - sm',
	args: {
		label: 'Checkbox Group',
		description: 'This is a description for the checkbox group.',
		size: 'sm',
		isDisabled: true,
	},
	render: (args) => (
		<CheckboxGroup {...args}>
			<Checkbox value="option1">Option 1</Checkbox>
			<Checkbox value="option2">Option 2</Checkbox>
			<Checkbox value="option3">Option 3</Checkbox>
		</CheckboxGroup>
	),
} satisfies Story;

export const SingleOptionDisabledSmall = {
	name: 'Single Option Disabled - sm',
	args: {
		label: 'Checkbox Group',
		description: 'This is a description for the checkbox group.',
		size: 'sm',
	},
	render: (args) => (
		<CheckboxGroup {...args}>
			<Checkbox value="option1" isDisabled>
				Option 1
			</Checkbox>
			<Checkbox value="option2">Option 2</Checkbox>
			<Checkbox value="option3">Option 3</Checkbox>
		</CheckboxGroup>
	),
} satisfies Story;

export const GroupErrorSmall = {
	name: 'Group Error - sm',
	args: {
		label: 'Checkbox Group',
		description: 'This is a description for the checkbox group.',
		size: 'sm',
		error: 'This is an error message for the checkbox group.',
		isInvalid: true,
	},
	render: (args) => (
		<CheckboxGroup {...args}>
			<Checkbox value="option1">Option 1</Checkbox>
			<Checkbox value="option2">Option 2</Checkbox>
			<Checkbox value="option3">Option 3</Checkbox>
		</CheckboxGroup>
	),
} satisfies Story;

export const SingleOptionErrorSmall = {
	name: 'Single Option Error - sm',
	args: {
		label: 'Checkbox Group',
		description: 'This is a description for the checkbox group.',
		size: 'sm',
		error: 'This is an error message for the checkbox group.',
	},
	render: (args) => (
		<CheckboxGroup defaultValue={['option1']} {...args}>
			<Checkbox value="option1" isInvalid>
				Option 1
			</Checkbox>
			<Checkbox value="option2">Option 2</Checkbox>
			<Checkbox value="option3">Option 3</Checkbox>
		</CheckboxGroup>
	),
} satisfies Story;
