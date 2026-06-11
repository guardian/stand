import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { baseColors } from '../../styleD/build/typescript/base/colors';
import { Option, Select } from './Select';

const meta: Meta<typeof Select> = {
	title: 'Stand/Tools Design System/Components/Select',
	component: Select,
	parameters: {},
	args: { label: 'Select' },
	render: (args) => {
		return (
			<Select
				{...args}
				onChange={(value) => console.log('Selected value:', value)}
			>
				<Option>Option 1</Option>
				<Option>Option 2</Option>
				<Option>Option 3</Option>
			</Select>
		);
	},
};

type Story = StoryObj<typeof Select>;

export default meta;

export const Default = {} satisfies Story;

export const WithIdProp: Story = {
	render: (args) => (
		<Select
			{...args}
			onChange={(value) => console.log('Selected value:', value)}
		>
			<Option id="option-1">Option 1</Option>
			<Option id="option-2">Option 2</Option>
			<Option id="option-3">Option 3</Option>
		</Select>
	),
};

export const Disabled = {
	args: {
		isDisabled: true,
	},
} satisfies Story;

export const WithError = {
	args: {
		isInvalid: true,
		error: 'Error text',
	},
} satisfies Story;

export const WithHelpText = {
	args: {
		description: 'Optional contextual help text',
	},
} satisfies Story;

export const IsOpen = {
	args: {
		isOpen: true,
	},
} satisfies Story;

export const CustomTheme = {
	args: {
		theme: {
			shared: {
				button: {
					color: baseColors.coolPurple[200],
					backgroundColor: baseColors.coolPurple[800],
				},
			},
		},
	},
} satisfies Story;

export const CssOverrides = {
	args: {
		cssOverrides: css`
			button {
				color: ${baseColors.red[300]};
				border: 3px solid ${baseColors.red[800]};
			}
		`,
	},
} satisfies Story;

const LabelWithAsterisk = ({ label }: { label: string }) => (
	<span>
		{label} <span style={{ color: 'red', marginLeft: 4 }}>*</span>
	</span>
);

export const RenderWithAsterisk = {
	args: {
		renderLabel: (label) => <LabelWithAsterisk label={label} />,
	},
} satisfies Story;
