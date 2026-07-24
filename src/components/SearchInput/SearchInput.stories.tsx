import type { Meta, StoryObj } from '@storybook/react-vite';
import { SearchInput } from './SearchInput';

const meta = {
	title: 'Stand/Tools Design System/Components/SearchInput',
	component: SearchInput,
	parameters: {},
	args: {},
} satisfies Meta<typeof SearchInput>;

type Story = StoryObj<typeof SearchInput>;

export default meta;

export const Default = {
	name: 'Default - md size',
	args: {},
} satisfies Story;

export const Fluid = {
	name: 'Fluid - md size',
	args: {
		fluid: true,
	},
} satisfies Story;

export const WithLabelAndDescription = {
	name: 'With Label and Description - md size',
	args: {
		size: 'md',
		label: 'Label',
		description: 'This is a description for the search input.',
	},
} satisfies Story;

export const WithLabelValueAndDescription = {
	name: 'With Label, Value and Description - md size',
	args: {
		size: 'md',
		label: 'Label',
		description: 'This is a description for the search input.',
		defaultValue: 'Search input value',
	},
} satisfies Story;

export const WithLabelValueDescriptionAndError = {
	name: 'With Label, Value, Description and Error - md size',
	args: {
		size: 'md',
		label: 'Label',
		description: 'This is a description for the search input.',
		defaultValue: 'Search input value',
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
		description: 'This is a description for the search input.',
	},
} satisfies Story;

export const SmallSize = {
	name: 'Small Size - sm size',
	args: {
		size: 'sm',
		label: 'Label',
		description: 'This is a description for the search input.',
	},
} satisfies Story;

export const Disabled = {
	name: 'Disabled State',
	args: {
		size: 'md',
		label: 'Label',
		description: 'This is a description for the search input.',
		defaultValue: 'Search input value',
		isDisabled: true,
	},
} satisfies Story;

export const WithTypePassword = {
	name: 'With Type Password',
	args: {
		size: 'md',
		label: 'Password',
		description: 'Please enter your password.',
		type: 'password',
	},
} satisfies Story;

export const WithPlaceholder = {
	args: {
		size: 'md',
		label: 'Placeholder',
		description: 'With placeholder',
		placeholder: 'Placeholder',
	},
} satisfies Story;

export const WithPlaceholderDisabled = {
	args: {
		size: 'md',
		label: 'Placeholder',
		description: 'With placeholder',
		placeholder: 'Placeholder',
		isDisabled: true,
	},
} satisfies Story;

const LabelWithAsterisk = ({ label }: { label: string }) => (
	<span>
		{label} <span style={{ color: 'red', marginLeft: 4 }}>*</span>
	</span>
);

export const RenderWithAsterisk = {
	args: {
		size: 'md',
		label: 'Label',
		description: 'This is a description for the search input.',
		renderLabel: (label) => <LabelWithAsterisk label={label} />,
	},
} satisfies Story;
