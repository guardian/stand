import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { semanticSizing } from '../../styleD/build/typescript/semantic/sizing';
import { from } from '../../styleD/utils/semantic/mq';
import { AlertBanner } from '../AlertBanner/AlertBanner';
import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import { Grid, Item } from '../Grid/Grid';
import { MenuItem, MenuSection } from '../Menu/Menu';
import { Option, Select } from '../Select/Select';
import { SidebarStepperNavigation } from '../SidebarStepperNavigation/SidebarStepperNavigation';
import type {
	StepNavConfig,
	StepStatus,
} from '../SidebarStepperNavigation/types';
import { TextInput } from '../TextInput/TextInput';
import {
	TopBar,
	TopBarContainerLeft,
	TopBarContainerRight,
} from '../TopBar/TopBar';
import { TopBarItem } from '../TopBar/TopBarItem/TopBarItem';
import { TopBarNavigation } from '../TopBar/TopBarNavigation/TopBarNavigation';
import { TopBarToolName } from '../TopBar/TopBarToolName/TopBarToolName';
import { Layout } from './Layout';

const meta: Meta<typeof Layout> = {
	title: 'Stand/Tools Design System/Components/Layout',
	component: Layout,
	parameters: {},
	args: {},
} satisfies Meta<typeof Layout>;

type Story = StoryObj<typeof Layout>;

export default meta;

const TopBarExample = (
	<TopBar>
		<TopBarToolName name="Default" favicon={{ letter: 'D' }} />
		<TopBarContainerLeft>
			<TopBarNavigation
				text="Menu"
				icon="file_upload"
				menuChildren={
					<MenuSection name="Menu section">
						<MenuItem label="Menu item 1" />
						<MenuItem label="Menu item 2" />
					</MenuSection>
				}
			/>
			<TopBarNavigation isSelected text="Current" href="#" />
			<TopBarItem>
				<Button variant="primary">Primary</Button>
			</TopBarItem>
			<TopBarNavigation text="Link" href="#" />
		</TopBarContainerLeft>
		<TopBarContainerRight>
			<TopBarItem>
				<TextInput
					theme={{
						shared: {
							marginTop: '0',
						},
					}}
					cssOverrides={css`
						width: 100px;
					`}
					placeholder="Search"
				/>
			</TopBarItem>
			<TopBarItem>
				<Button variant="tertiary">Tertiary</Button>
			</TopBarItem>
		</TopBarContainerRight>
		<Avatar
			src="https://uploads.guimcode.co.uk/2026/01/27/f85e2e477ce54f4c3b671faa5cd21673aa9f8072fddb5d70a73e6038dc812eec.jpg"
			alt="Mahesh Makani"
			size="sm"
		/>
	</TopBar>
);

const GridExample = (
	<Grid>
		<Item
			size={{ sm: 12, md: 6, lg: 4 }}
			cssOverrides={css`
				height: 10svh;
			`}
		>
			sm=12 md=6 lg=4
		</Item>
		<Item
			size={{ sm: 12, md: 6, lg: 4 }}
			cssOverrides={css`
				height: 10svh;
			`}
		>
			sm=12 md=6 lg=4
		</Item>
		<Item
			size={{ sm: 12, md: 6, lg: 4 }}
			cssOverrides={css`
				height: 10svh;
			`}
		>
			sm=12 md=6 lg=4
		</Item>
		<Item
			size={{ sm: 12, md: 6, lg: 4 }}
			cssOverrides={css`
				height: 10svh;
			`}
		>
			sm=12 md=6 lg=4
		</Item>
		<Item
			size={{ sm: 12, md: 6, lg: 4 }}
			cssOverrides={css`
				height: 10svh;
			`}
		>
			sm=12 md=6 lg=4
		</Item>
		<Item
			size={{ sm: 12, md: 6, lg: 4 }}
			cssOverrides={css`
				height: 10svh;
			`}
		>
			sm=12 md=6 lg=4
		</Item>
		<Item
			size={{ sm: 12, md: 6, lg: 4 }}
			cssOverrides={css`
				height: 10svh;
			`}
		>
			sm=12 md=6 lg=4
		</Item>
		<Item
			size={{ sm: 12, md: 6, lg: 4 }}
			cssOverrides={css`
				height: 10svh;
			`}
		>
			sm=12 md=6 lg=4
		</Item>
		<Item
			size={{ sm: 12, md: 6, lg: 4 }}
			cssOverrides={css`
				height: 10svh;
			`}
		>
			sm=12 md=6 lg=4
		</Item>
		<Item
			size={{ sm: 12, md: 6, lg: 4 }}
			cssOverrides={css`
				height: 10svh;
			`}
		>
			sm=12 md=6 lg=4
		</Item>
		<Item
			size={{ sm: 12, md: 6, lg: 4 }}
			cssOverrides={css`
				height: 10svh;
			`}
		>
			sm=12 md=6 lg=4
		</Item>
		<Item
			size={{ sm: 12, md: 6, lg: 4 }}
			cssOverrides={css`
				height: 10svh;
			`}
		>
			sm=12 md=6 lg=4
		</Item>
		<Item
			size={{ sm: 12, md: 6, lg: 4 }}
			cssOverrides={css`
				height: 10svh;
			`}
		>
			sm=12 md=6 lg=4
		</Item>
		<Item
			size={{ sm: 12, md: 6, lg: 4 }}
			cssOverrides={css`
				height: 10svh;
			`}
		>
			sm=12 md=6 lg=4
		</Item>
		<Item
			size={{ sm: 12, md: 6, lg: 4 }}
			cssOverrides={css`
				height: 10svh;
			`}
		>
			sm=12 md=6 lg=4
		</Item>
		<Item
			size={{ sm: 12, md: 6, lg: 4 }}
			cssOverrides={css`
				height: 10svh;
			`}
		>
			sm=12 md=6 lg=4
		</Item>
		<Item
			size={{ sm: 12, md: 6, lg: 4 }}
			cssOverrides={css`
				height: 10svh;
			`}
		>
			sm=12 md=6 lg=4
		</Item>
		<Item
			size={{ sm: 12, md: 6, lg: 4 }}
			cssOverrides={css`
				height: 10svh;
			`}
		>
			sm=12 md=6 lg=4
		</Item>
	</Grid>
);

const sidebarExampleStyles = css`
	padding: 4px 8px;
	background-color: #f0f0f0;
	height: ${semanticSizing.height.md};

	${from.md} {
		height: 100%;
	}
`;

const nonGridMainContentStyles = css`
	padding: 16px;
	background-color: #f8f8f8;
	min-height: 30svh;
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
			label: 'Details',
			canSkipFrom: true,
			canSkipTo: true,
			stepStatus: 'complete',
		},
		{
			id: 'audience',
			label: 'Audience',
			canSkipFrom: true,
			canSkipTo: true,
			stepStatus: 'complete',
		},
		{
			id: 'settings',
			label: 'Settings',
			canSkipFrom: true,
			canSkipTo: true,
			stepStatus: 'incomplete',
		},
		{
			id: 'preview',
			label: 'Preview',
			canSkipFrom: true,
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
					<h2>{currentStep?.label}</h2>
					<p>Content for the selected workflow step.</p>
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
							onPress={() => previousStep && setCurrentStepId(previousStep.id)}
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
	);
}

export const TopBarGrid = {
	render: (args) => (
		<Layout {...args}>
			<Layout.TopBar>{TopBarExample}</Layout.TopBar>
			<Layout.Main>{GridExample}</Layout.Main>
		</Layout>
	),
} satisfies Story;

export const TopBarGridFixed = {
	render: (args) => (
		<Layout {...args}>
			<Layout.TopBar>{TopBarExample}</Layout.TopBar>
			<Layout.Main fluid={false}>{GridExample}</Layout.Main>
		</Layout>
	),
} satisfies Story;

export const TopBarGridNoPadding = {
	render: (args) => (
		<Layout {...args}>
			<Layout.TopBar>{TopBarExample}</Layout.TopBar>
			<Layout.Main paddingTop={false} paddingBottom={false}>
				{GridExample}
			</Layout.Main>
		</Layout>
	),
} satisfies Story;

export const TopBarGridFixedNoPadding = {
	render: (args) => (
		<Layout {...args}>
			<Layout.TopBar>{TopBarExample}</Layout.TopBar>
			<Layout.Main fluid={false} paddingTop={false} paddingBottom={false}>
				{GridExample}
			</Layout.Main>
		</Layout>
	),
} satisfies Story;

export const TopBarWithCustomMainContent = {
	render: (args) => (
		<Layout {...args}>
			<Layout.TopBar>{TopBarExample}</Layout.TopBar>
			<Layout.Main>
				<section
					css={nonGridMainContentStyles}
					aria-label="Custom main content"
				>
					<h2>Custom main content region</h2>
					<p>This section is rendered without using the Grid component.</p>
				</section>
			</Layout.Main>
		</Layout>
	),
} satisfies Story;

export const TopBarGridSidebarHiddenSm = {
	render: (args) => (
		<Layout {...args}>
			<Layout.TopBar>{TopBarExample}</Layout.TopBar>
			<Layout.Sidebar layoutSmBreakpoint="hidden">
				<div css={sidebarExampleStyles}>
					<p>Sidebar content goes here</p>
				</div>
			</Layout.Sidebar>
			<Layout.Main>{GridExample}</Layout.Main>
		</Layout>
	),
} satisfies Story;

export const TopBarGridSidebarAboveGridSm = {
	render: (args) => (
		<Layout {...args}>
			<Layout.TopBar>{TopBarExample}</Layout.TopBar>
			<Layout.Sidebar layoutSmBreakpoint="above-grid">
				<div css={sidebarExampleStyles}>
					<p>Sidebar content goes here</p>
				</div>
			</Layout.Sidebar>
			<Layout.Main>{GridExample}</Layout.Main>
		</Layout>
	),
} satisfies Story;

export const SidebarStepperNavigationInLayout = {
	render: () => <LayoutWithSidebarStepperNavigation />,
} satisfies Story;

export const AlertBannerTopBarGridSidebarAboveGridSm = {
	render: (args) => (
		<Layout {...args}>
			<Layout.AlertBanner>
				<AlertBanner level="information" showIcon>
					This is an information alert banner
				</AlertBanner>
			</Layout.AlertBanner>
			<Layout.TopBar>{TopBarExample}</Layout.TopBar>
			<Layout.Sidebar layoutSmBreakpoint="above-grid">
				<div css={sidebarExampleStyles}>
					<p>Sidebar content goes here</p>
				</div>
			</Layout.Sidebar>
			<Layout.Main>{GridExample}</Layout.Main>
		</Layout>
	),
} satisfies Story;

export const CustomTheme = {
	render: (args) => (
		<Layout
			{...args}
			theme={{
				sm: {
					gridTemplateAreas: `'grid' 'topbar' 'sidebar'`,
					gridTemplateColumns: '1fr',
					gridTemplateRows: 'auto auto auto',
				},
			}}
		>
			<Layout.TopBar>{TopBarExample}</Layout.TopBar>
			<Layout.Sidebar layoutSmBreakpoint="above-grid">
				<div css={sidebarExampleStyles}>
					<p>Sidebar content goes here</p>
				</div>
			</Layout.Sidebar>
			<Layout.Main>{GridExample}</Layout.Main>
		</Layout>
	),
} satisfies Story;

export const CssOverrides = {
	render: (args) => (
		<Layout
			{...args}
			cssOverrides={css`
				border: 2px dashed #9aa0a6;
				border-radius: 8px;
				overflow: hidden;
			`}
		>
			<Layout.TopBar>{TopBarExample}</Layout.TopBar>
			<Layout.Sidebar layoutSmBreakpoint="above-grid">
				<div css={sidebarExampleStyles}>
					<p>Sidebar content goes here</p>
				</div>
			</Layout.Sidebar>
			<Layout.Main>{GridExample}</Layout.Main>
		</Layout>
	),
} satisfies Story;
