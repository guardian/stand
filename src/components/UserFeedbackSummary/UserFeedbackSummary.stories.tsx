import type { Meta, StoryObj } from '@storybook/react-vite';
import { UserFeedbackSummary } from './UserFeedbackSummary';

const meta = {
	title: 'Stand/Tools Design System/Components/UserFeedbackSummary',
	component: UserFeedbackSummary,
	parameters: {},
} satisfies Meta<typeof UserFeedbackSummary>;

type Story = StoryObj<typeof UserFeedbackSummary>;

export const Default = {
	args: {},
} satisfies Story;

export default meta;
