import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import type { Key } from 'react-aria-components';
import { baseColors } from '../../styleD/build/typescript/base/colors';
import { Option, Select } from './Select';

const meta: Meta<typeof Select> = {
	title: 'Stand/Tools Design System/Components/Select',
	component: Select,
	parameters: {},
	args: {
		label: 'Select',
		children: [
			/* eslint-disable react/jsx-key -- The array is fixed */
			<Option>Option 1</Option>,
			<Option>Option 2</Option>,
			<Option>Option 3</Option>,
			/* eslint-enable react/jsx-key */
		],
	},
	render: (args) => {
		return (
			<Select
				{...args}
				onChange={(value) => console.log('Selected value:', value)}
			></Select>
		);
	},
};

type Story = StoryObj<typeof Select>;

export default meta;

export const Default = {
	name: 'Default - md',
	args: {},
} satisfies Story;

export const Fluid = {
	args: {
		fluid: true,
	},
} satisfies Story;

export const Small = {
	name: 'Small - sm',
	args: {
		size: 'sm',
	},
} satisfies Story;

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
				option: {
					paddingLeft: '3rem',
				},
			},
			md: {
				typography: {
					font: 'normal 700 1rem/1.3 monospace',
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

export const MultiSelect = {
	args: {
		selectionMode: 'multiple',
	},
};

export const TextElision = {
	args: {
		selectionMode: 'multiple',
		children: [
			/* eslint-disable react/jsx-key -- The array is fixed */
			<Option id="chimpanzees">Chimpanzees</Option>,
			<Option id="bonobos">Bonobos</Option>,
			<Option id="oranguatns">Orangutans</Option>,
			<Option id="macaques">Macaques</Option>,
			<Option id="mandrils">Mandrils</Option>,
			<Option id="spider-monkeys">Spider monkeys</Option>,
			/* eslint-enable react/jsx-key */
		] as const,
	},
};

export const Controlled: Story = {
	args: {
		selectionMode: 'multiple',
	},
	render: (args) => {
		const [selected, setSelected] = useState<Key | Key[] | null>(null);

		return (
			<div>
				<Select {...args} value={selected} onChange={setSelected}>
					{/** N.B Id's are heavily encouraged for controlled selection */}
					<Option id="option-1">Option 1</Option>
					<Option id="option-2">Option 2</Option>
					<Option id="option-3">Option 3</Option>
				</Select>
				<span>
					Selected:{' '}
					{Array.isArray(selected) ? selected.join(',') : [selected].join(',')}
				</span>
			</div>
		);
	},
};
