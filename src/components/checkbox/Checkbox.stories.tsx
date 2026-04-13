import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './Checkbox';

const meta = {
	title: 'Stand/Tools Design System/Components/Checkbox',
	component: Checkbox,
	parameters: {},
	args: {},
} satisfies Meta<typeof Checkbox>;

type Story = StoryObj<typeof Checkbox>;

export default meta;

export const Default = {
	name: 'Default - md',
	args: {
		children: 'Checkbox',
	},
} satisfies Story;

export const Error = {
	name: 'Error - md',
	args: {
		children: 'Checkbox',
		isInvalid: true,
	},
};

export const Selected = {
	name: 'Selected - md',
	args: {
		children: 'Checkbox',
		isSelected: true,
	},
} satisfies Story;

export const ErrorSelected = {
	name: 'Error Selected - md',
	args: {
		children: 'Checkbox',
		isSelected: true,
		isInvalid: true,
	},
} satisfies Story;

export const Indeterminate = {
	name: 'Indeterminate - md',
	args: {
		children: 'Checkbox',
		isSelected: true,
		isIndeterminate: true,
	},
} satisfies Story;

export const ErrorIndeterminate = {
	name: 'Error Indeterminate - md',
	args: {
		children: 'Checkbox',
		isSelected: true,
		isIndeterminate: true,
		isInvalid: true,
	},
} satisfies Story;

export const Disabled = {
	name: 'Disabled - md',
	args: {
		children: 'Checkbox',
		isDisabled: true,
	},
} satisfies Story;

export const DisabledSelected = {
	name: 'Disabled Selected - md',
	args: {
		children: 'Checkbox',
		isDisabled: true,
		isSelected: true,
	},
} satisfies Story;

export const DisabledIndeterminate = {
	name: 'Disabled Indeterminate - md',
	args: {
		children: 'Checkbox',
		isDisabled: true,
		isSelected: true,
		isIndeterminate: true,
	},
} satisfies Story;

export const Small = {
	name: 'Small - sm',
	args: {
		children: 'Checkbox',
		size: 'sm',
	},
} satisfies Story;

export const SmallSelected = {
	name: 'Small Selected - sm',
	args: {
		children: 'Checkbox',
		size: 'sm',
		isSelected: true,
	},
} satisfies Story;

export const SmallErrorSelected = {
	name: 'Small Error Selected - sm',
	args: {
		children: 'Checkbox',
		size: 'sm',
		isSelected: true,
		isInvalid: true,
	},
} satisfies Story;

export const SmallIndeterminate = {
	name: 'Small Indeterminate - sm',
	args: {
		children: 'Checkbox',
		size: 'sm',
		isSelected: true,
		isIndeterminate: true,
	},
} satisfies Story;

export const SmallErrorIndeterminate = {
	name: 'Small Error Indeterminate - sm',
	args: {
		children: 'Checkbox',
		size: 'sm',
		isSelected: true,
		isIndeterminate: true,
		isInvalid: true,
	},
} satisfies Story;

export const SmallDisabled = {
	name: 'Small Disabled - sm',
	args: {
		children: 'Checkbox',
		size: 'sm',
		isDisabled: true,
	},
} satisfies Story;

export const SmallDisabledSelected = {
	name: 'Small Disabled Selected - sm',
	args: {
		children: 'Checkbox',
		size: 'sm',
		isDisabled: true,
		isSelected: true,
	},
} satisfies Story;

export const SmallDisabledIndeterminate = {
	name: 'Small Disabled Indeterminate - sm',
	args: {
		children: 'Checkbox',
		size: 'sm',
		isDisabled: true,
		isSelected: true,
		isIndeterminate: true,
	},
} satisfies Story;
