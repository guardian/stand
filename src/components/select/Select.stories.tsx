import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { baseColors } from '../../styleD/build/typescript/base/colors';
import { Option, Select } from './Select';

const meta = {
	title: 'Stand/Tools Design System/Components/Select',
	component: Select,
	parameters: {},
	args: { label: 'Select' },
	render: (args) => {
		return (
			<Select {...args}>
				<Option>Option 1</Option>
				<Option>Option 2</Option>
			</Select>
		);
	},
} satisfies Meta<typeof Select>;

type Story = StoryObj<typeof Select>;

export default meta;

export const Default = {} satisfies Story;

export const Disabled = {
	args: {
		isDisabled: true,
	},
} satisfies Story;

export const WithError = {
	args: {
		isInvalid: true,
		errorMessage: 'Error text',
	},
} satisfies Story;

export const WithHelpText = {
	args: {
		contextualHelpText: 'Optional contextual help text',
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
			label: {
				color: baseColors['cool-purple'][300],
			},
			button: {
				color: baseColors['cool-purple'][200],
				backgroundColor: baseColors['cool-purple'][800],
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
