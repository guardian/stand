import type { Meta, StoryObj } from '@storybook/react-vite';
import { DemoPickerIframe } from './DemoPickerIframe';

const meta = {
	title: 'Stand/Tools Design System/Components/DemoPickerIframe',
	component: DemoPickerIframe,
	parameters: {},
} satisfies Meta<typeof DemoPickerIframe>;

type Story = StoryObj<typeof DemoPickerIframe>;

export const Default = {
	args: {},
} satisfies Story;

export default meta;
