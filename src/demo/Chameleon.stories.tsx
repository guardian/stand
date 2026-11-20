import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Avatar } from '../components/Avatar/Avatar';
import { Button } from '../components/Button/Button';
import { Layout } from '../components/Layout/Layout';
import { Option, Select } from '../components/Select/Select';
import { SidebarStepperNavigation } from '../components/SidebarStepperNavigation/SidebarStepperNavigation';
import type {
	StepNavConfig,
	StepStatus,
} from '../components/SidebarStepperNavigation/types';
import {
	TopBar,
	TopBarContainerLeft,
	TopBarContainerRight,
} from '../components/TopBar/TopBar';
import { TopBarItem } from '../components/TopBar/TopBarItem/TopBarItem';
import { TopBarNavigation } from '../components/TopBar/TopBarNavigation/TopBarNavigation';
import { TopBarToolName } from '../components/TopBar/TopBarToolName/TopBarToolName';
import { Typography } from '../Typography';

const meta: Meta<typeof Layout> = {
	title: 'Stand/Demo/Theming',
	component: Layout,
	parameters: {},
	args: {},
} satisfies Meta<typeof Layout>;

type Story = StoryObj<typeof Layout>;

export default meta;

const TopBarExample = (
	<TopBar>
		<TopBarToolName name="Chameleon" favicon={{ letter: 'C' }} />
		<TopBarContainerLeft>
			<TopBarNavigation isSelected text="Navigation 1" href="#" />
			<TopBarNavigation text="Navigation 2" href="#" />
			<TopBarNavigation text="Navigation 3" href="#" />
		</TopBarContainerLeft>
		<TopBarContainerRight>
			<TopBarItem>
				<Button>Button label</Button>
			</TopBarItem>
			<TopBarItem>
				<Button variant="tertiary">Button label</Button>
			</TopBarItem>
		</TopBarContainerRight>
		<Avatar initials="BG" size="sm" />
	</TopBar>
);

const nonGridMainContentStyles = css`
	display: flex;
	flex-direction: column;
	gap: 16px;
	padding: 16px;
`;

const workflowControlsStyles = css`
	display: flex;
	flex-wrap: wrap;
	align-items: flex-end;
	gap: 16px;
`;

const sidebarStepperNavigationConfig: StepNavConfig = {
	isNonLinear: true,
	steps: [
		{
			id: 'details',
			label: 'Article and channel',
			canSkipFrom: true,
			canSkipTo: true,
			stepStatus: 'complete',
		},
		{
			id: 'audience',
			label: 'Alert type and editions',
			canSkipFrom: true,
			canSkipTo: true,
			stepStatus: 'complete',
		},
		{
			id: 'settings',
			label: 'Headline',
			canSkipFrom: true,
			canSkipTo: true,
			stepStatus: 'incomplete',
		},
		{
			id: 'preview',
			label: 'Delivery and timing',
			canSkipFrom: true,
			canSkipTo: true,
			stepStatus: 'incomplete',
		},
		{
			id: 'review',
			label: 'Send',
			canSkipTo: true,
			stepStatus: 'no-fields',
		},
	],
};

function LayoutWithSidebarStepperNavigation() {
	const [currentStepId, setCurrentStepId] = useState('details');
	const [stepStatuses, setStepStatuses] = useState<Record<string, StepStatus>>(
		() =>
			Object.fromEntries(
				sidebarStepperNavigationConfig.steps.map((step) => [
					step.id,
					step.stepStatus ?? 'no-fields',
				]),
			),
	);
	const stepNavConfig = {
		...sidebarStepperNavigationConfig,
		steps: sidebarStepperNavigationConfig.steps.map((step) => ({
			...step,
			stepStatus: stepStatuses[step.id],
		})),
	};
	const currentStepIndex = stepNavConfig.steps.findIndex(
		(step) => step.id === currentStepId,
	);
	const currentStep = stepNavConfig.steps[currentStepIndex];
	const previousStep = stepNavConfig.steps[currentStepIndex - 1];
	const nextStep = stepNavConfig.steps[currentStepIndex + 1];

	return (
		<div
			css={css`
				background-color: var(--semantic-colors-bg-base);
			`}
		>
			<Layout>
				<Layout.TopBar>{TopBarExample}</Layout.TopBar>
				<Layout.Sidebar layoutSmBreakpoint="above-grid">
					<SidebarStepperNavigation
						currentStepId={currentStepId}
						stepNavConfig={stepNavConfig}
						onPress={setCurrentStepId}
					/>
				</Layout.Sidebar>
				<Layout.Main paddingTop={false} paddingBottom={false}>
					<section
						css={nonGridMainContentStyles}
						aria-label="Current workflow step"
					>
						<Typography element="h2" variant="headingCompactXl">
							{currentStep?.label}
						</Typography>
						<Typography element="p">
							Content for the selected workflow step.
						</Typography>
						<div css={workflowControlsStyles}>
							{currentStep && (
								<Select
									label="Step status"
									selectedKey={currentStep.stepStatus}
									onChange={(stepStatus) => {
										if (typeof stepStatus !== 'string') {
											return;
										}

										setStepStatuses((statuses) => ({
											...statuses,
											[currentStep.id]: stepStatus as StepStatus,
										}));
									}}
								>
									<Option id="complete">Complete</Option>
									<Option id="incomplete">Incomplete</Option>
									<Option id="optional">Optional</Option>
									<Option id="no-fields">No fields</Option>
								</Select>
							)}
							<Button
								variant="secondary"
								isDisabled={!previousStep}
								onPress={() =>
									previousStep && setCurrentStepId(previousStep.id)
								}
							>
								Previous
							</Button>
							<Button
								isDisabled={!nextStep}
								onPress={() => nextStep && setCurrentStepId(nextStep.id)}
							>
								Next
							</Button>
						</div>
					</section>
				</Layout.Main>
			</Layout>
		</div>
	);
}

export const Chameleon = {
	render: () => <LayoutWithSidebarStepperNavigation />,
} satisfies Story;
