import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { SidebarStepperNavigation } from './SidebarStepperNavigation';
import type { StepNavConfig } from './types';

const stepNavConfig: StepNavConfig = {
	isNonLinear: true,
	steps: [
		{
			id: 'details',
			label: 'Details',
			canSkipFrom: true,
			canSkipTo: true,
			stepStatus: 'complete',
		},
		{
			id: 'audience',
			label: 'Audience',
			canSkipTo: true,
			stepStatus: 'complete',
		},
		{
			id: 'settings',
			label: 'Settings',
			canSkipTo: true,
			stepStatus: 'incomplete',
		},
		{
			id: 'preview',
			label: 'Preview',
			canSkipTo: true,
			stepStatus: 'optional',
		},
		{
			id: 'review',
			label: 'Review',
			canSkipTo: true,
			stepStatus: 'incomplete',
		},
		{
			id: 'submit',
			label: 'Submit',
			canSkipTo: false,
			stepStatus: 'optional',
		},
	],
};

const meta: Meta<typeof SidebarStepperNavigation> = {
	title: 'Stand/Tools Design System/Components/SidebarStepperNavigation',
	component: SidebarStepperNavigation,
};

export default meta;
type Story = StoryObj<typeof SidebarStepperNavigation>;

export const Default = {
	name: 'Default',
	render: () => {
		const [currentStepId, setCurrentStepId] = useState('details');
		return (
			<SidebarStepperNavigation
				currentStepId={currentStepId}
				stepNavConfig={stepNavConfig}
				onPress={setCurrentStepId}
			/>
		);
	},
} satisfies Story;

export const WithStatuses = {
	name: 'With statuses',
	render: () => (
		<SidebarStepperNavigation
			currentStepId="review"
			stepNavConfig={stepNavConfig}
			onPress={() => undefined}
		/>
	),
} satisfies Story;

export const Linear = {
	name: 'Linear',
	render: () => (
		<SidebarStepperNavigation
			currentStepId="details"
			stepNavConfig={{ ...stepNavConfig, isNonLinear: false }}
			onPress={() => undefined}
		/>
	),
} satisfies Story;
