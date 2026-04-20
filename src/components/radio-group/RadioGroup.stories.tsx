import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { baseColors } from '../..';
import { SandboxJs } from '../../util/storybook/sandbox/Sandbox';
import { Radio, RadioGroup } from './RadioGroup';
import { componentJs, componentName } from './sandbox';

const meta = {
	title: 'Stand/Tools Design System/Components/RadioGroup',
	component: RadioGroup,
	parameters: {},
	args: {},
} satisfies Meta<typeof RadioGroup>;

type Story = StoryObj<typeof RadioGroup>;

export default meta;

export const Default = {
	name: 'Default - size md',
	render: () => {
		return (
			<RadioGroup label="Label" description="Optional contextual help text">
				<Radio value="Test">Option 1</Radio>
				<Radio value="Test2">Option 2</Radio>
			</RadioGroup>
		);
	},
} satisfies Story;

export const IsInvalid = {
	render: () => {
		return (
			<RadioGroup
				isInvalid
				label="Label"
				description="Optional contextual help text"
				error="Error text"
			>
				<Radio value="Test">Option 1</Radio>
				<Radio value="Test2">Option 2</Radio>
			</RadioGroup>
		);
	},
} satisfies Story;

export const IsDisabled = {
	render: () => {
		return (
			<RadioGroup
				isDisabled
				value="Test2"
				label="Label"
				description="Optional contextual help text"
			>
				<Radio value="Test">Option 1</Radio>
				<Radio value="Test2">Option 2</Radio>
			</RadioGroup>
		);
	},
} satisfies Story;

export const SizeSmall = {
	name: 'Size sm',
	render: () => {
		return (
			<RadioGroup
				label="Label"
				description="Optional contextual help text"
				size="sm"
			>
				<Radio value="Test">Option 1</Radio>
				<Radio value="Test2">Option 2</Radio>
			</RadioGroup>
		);
	},
} satisfies Story;

export const CustomTheme = {
	render: () => {
		return (
			<RadioGroup
				theme={{
					shared: {
						radio: {
							color: baseColors['warm-purple'][300],
						},

						indicator: {
							border: `2px dashed ${baseColors['warm-purple'][100]}`,
						},
					},
				}}
				label="Label"
				description="Optional contextual help text"
				size="sm"
			>
				<Radio value="Test">Option 1</Radio>
				<Radio value="Test2">Option 2</Radio>
			</RadioGroup>
		);
	},
} satisfies Story;

export const CssOverrides = {
	render: () => {
		return (
			<RadioGroup
				label="Label"
				description="Optional contextual help text"
				size="sm"
				cssOverrides={css`
					border: 2px solid ${baseColors['cool-purple'][700]};
					background-color: ${baseColors['cool-purple'][900]};
				`}
			>
				<Radio value="Test">Option 1</Radio>
				<Radio value="Test2">Option 2</Radio>
			</RadioGroup>
		);
	},
} satisfies Story;

export const Sandbox = {
	render: () => (
		<SandboxJs componentName={componentName} componentJs={componentJs} />
	),
} satisfies Story;
