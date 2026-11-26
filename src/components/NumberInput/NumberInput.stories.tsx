import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { NumberInput } from './NumberInput';
import type { NumberInputProps } from './types';

const meta = {
	title: 'Stand/Tools Design System/Components/NumberInput',
	component: NumberInput,
	args: {
		label: 'Quantity',
		defaultValue: 4,
	},
} satisfies Meta<typeof NumberInput>;

export default meta;
type Story = StoryObj<typeof NumberInput>;

export const Default = {} satisfies Story;

export const SmallSize = {
	args: { size: 'sm' },
} satisfies Story;

export const Fluid = {
	args: { fluid: true },
} satisfies Story;

export const WithDescription = {
	args: {
		description: 'Choose a quantity between 0 and 10.',
		minValue: 0,
		maxValue: 10,
	},
} satisfies Story;

export const Empty = {
	args: { defaultValue: undefined, placeholder: 'Enter a number' },
} satisfies Story;

export const Bounded = {
	args: { minValue: 0, maxValue: 10, defaultValue: 0 },
} satisfies Story;

export const DecimalSteps = {
	args: {
		label: 'Distance',
		defaultValue: 1.5,
		minValue: 0,
		step: 0.5,
		formatOptions: { maximumFractionDigits: 1 },
	},
} satisfies Story;

export const Disabled = {
	args: { isDisabled: true },
} satisfies Story;

export const ReadOnly = {
	args: { isReadOnly: true },
} satisfies Story;

export const Invalid = {
	args: { isInvalid: true, error: 'Enter a valid quantity.' },
} satisfies Story;

export const Required = {
	args: {
		isRequired: true,
		defaultValue: undefined,
		error: 'Enter a quantity.',
	},
} satisfies Story;

function ControlledExample(props: NumberInputProps) {
	const [value, setValue] = useState(4);
	return (
		<>
			<NumberInput {...props} value={value} onChange={setValue} />
			<output>Current value: {Number.isNaN(value) ? 'empty' : value}</output>
		</>
	);
}

export const Controlled = {
	render: (args) => <ControlledExample {...args} />,
	args: { defaultValue: undefined },
} satisfies Story;

export const CustomTheme = {
	args: { theme: { shared: { borderRadius: '0' } } },
} satisfies Story;
