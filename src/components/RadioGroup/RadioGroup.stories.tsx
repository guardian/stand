import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { baseColors } from '../..';
import { Radio, RadioGroup } from './RadioGroup';

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
							color: baseColors.warmPurple[300],
						},

						indicator: {
							border: `2px dashed ${baseColors.warmPurple[100]}`,
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
					border: 2px solid ${baseColors.coolPurple[700]};
					background-color: ${baseColors.coolPurple[900]};
				`}
			>
				<Radio value="Test">Option 1</Radio>
				<Radio value="Test2">Option 2</Radio>
			</RadioGroup>
		);
	},
} satisfies Story;

const Asterisk = ({ label }: { label: string }) => (
	<span>
		{label} <span style={{ color: 'red', marginLeft: 4 }}>*</span>
	</span>
);

export const RenderWithAsterisk = {
	render: () => {
		return (
			<RadioGroup
				label="Label"
				description="Optional contextual help text"
				renderLabel={(label) => <Asterisk label={label} />}
			>
				<Radio value="Test">Option 1</Radio>
				<Radio value="Test2">Option 2</Radio>
			</RadioGroup>
		);
	},
} satisfies Story;
