import type { Meta, StoryObj } from '@storybook/react-vite';
import { ToggleSwitch } from './ToggleSwitch';

const meta = {
	title: 'Stand/Tools Design System/Components/ToggleSwitch',
	component: ToggleSwitch,
} satisfies Meta<typeof ToggleSwitch>;

type Story = StoryObj<typeof ToggleSwitch>;

export default meta;

export const Default = {
	name: 'Off - md',
	args: { children: 'Camera access' },
} satisfies Story;

export const Selected = {
	name: 'On - md',
	args: { children: 'Camera access', isSelected: true },
} satisfies Story;

export const WithDescription = {
	name: 'With description - md',
	args: {
		children: 'Camera access',
		description: 'App has an access to your camera',
	},
} satisfies Story;

export const Disabled = {
	name: 'Disabled off - md',
	args: { children: 'Camera access', isDisabled: true },
} satisfies Story;

export const DisabledSelected = {
	name: 'Disabled on - md',
	args: { children: 'Camera access', isDisabled: true, isSelected: true },
} satisfies Story;

export const Small = {
	name: 'Off - sm',
	args: { children: 'Camera access', size: 'sm' },
} satisfies Story;

export const SmallWithDescription = {
	name: 'With description - sm',
	args: {
		children: 'Camera access',
		description: 'App has an access to your camera',
		size: 'sm',
	},
} satisfies Story;

export const SmallSelected = {
	name: 'On - sm',
	args: { children: 'Camera access', size: 'sm', isSelected: true },
} satisfies Story;

export const SmallDisabled = {
	name: 'Disabled off - sm',
	args: { children: 'Camera access', size: 'sm', isDisabled: true },
} satisfies Story;

export const SmallDisabledSelected = {
	name: 'Disabled on - sm',
	args: {
		children: 'Camera access',
		size: 'sm',
		isDisabled: true,
		isSelected: true,
	},
} satisfies Story;
