import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { baseColors } from '../../styleD/build/typescript/base/colors';
import { semanticColors } from '../../styleD/build/typescript/semantic/colors';
import { semanticSizing } from '../../styleD/build/typescript/semantic/sizing';
import { Avatar } from '../avatar/Avatar';
import { Button } from '../button/Button';
import { TopBar, TopBarContainerLeft, TopBarContainerRight } from './TopBar';
import { TopBarItem } from './topBarItem/TopBarItem';
import { TopBarNavigation } from './topBarNavigation/TopBarNavigation';
import { TopBarToolName } from './topBarToolName/TopBarToolName';

const meta = {
	title: 'Stand/Tools Design System/Components/TopBar/Top Bar',
	component: TopBar,
	parameters: {},
	args: {},
} satisfies Meta<typeof TopBar>;

type Story = StoryObj<typeof TopBar>;

export default meta;

export const Default = {
	name: 'Default',
	render: () => (
		<TopBar>
			<TopBarToolName name="Default" favicon={{ letter: 'D' }} />
			<Avatar
				src="https://uploads.guimcode.co.uk/2026/01/27/f85e2e477ce54f4c3b671faa5cd21673aa9f8072fddb5d70a73e6038dc812eec.jpg"
				alt="Mahesh Makani"
				size="sm"
			/>
		</TopBar>
	),
} satisfies Story;

export const WithTopNavigation = {
	render: () => (
		<TopBar>
			<TopBarToolName
				name="Default"
				favicon={{ letter: 'D' }}
				href="#"
				hoverText="Back to dashboard"
			/>
			<TopBarContainerLeft>
				<TopBarNavigation isSelected text="Navigation 1" href="#" />
				<TopBarNavigation text="Navigation 2" href="#" />
				<TopBarNavigation text="Navigation 3" href="#" />
			</TopBarContainerLeft>
			<Avatar
				src="https://uploads.guimcode.co.uk/2026/01/27/f85e2e477ce54f4c3b671faa5cd21673aa9f8072fddb5d70a73e6038dc812eec.jpg"
				alt="Mahesh Makani"
				size="sm"
			/>
		</TopBar>
	),
} satisfies Story;

export const WithButtons = {
	render: () => (
		<TopBar>
			<TopBarToolName name="Default" favicon={{ letter: 'D' }} />
			<TopBarContainerLeft>
				<TopBarNavigation isSelected text="Navigation 1" href="#" />
				<TopBarNavigation text="Navigation 2" href="#" />
				<TopBarNavigation text="Navigation 3" href="#" />
			</TopBarContainerLeft>
			<TopBarContainerRight>
				<TopBarItem>
					<Button variant="primary">Button label</Button>
				</TopBarItem>
				<TopBarItem>
					<Button variant="tertiary">Button label</Button>
				</TopBarItem>
			</TopBarContainerRight>
			<Avatar
				src="https://uploads.guimcode.co.uk/2026/01/27/f85e2e477ce54f4c3b671faa5cd21673aa9f8072fddb5d70a73e6038dc812eec.jpg"
				alt="Mahesh Makani"
				size="sm"
			/>
		</TopBar>
	),
} satisfies Story;

export const CustomTheme = {
	render: () => (
		<TopBar
			theme={{
				'background-color': baseColors.cyan[200],
				ToolName: {
					color: semanticColors.text['stronger-inverse'],
				},
				Navigation: {
					selected: {
						color: semanticColors.text['stronger-inverse'],
						'border-bottom': `${semanticSizing.border['extra-wide']} solid ${semanticColors.border['selected-inverse']}`,
					},
					unselected: {
						color: semanticColors.text['stronger-inverse'],
					},
				},
			}}
		>
			<TopBarToolName
				name="Default"
				favicon={{
					letter: 'D',
					theme: {
						color: {
							background: baseColors.cyan[100],
							text: baseColors.cyan[900],
						},
					},
				}}
				href="#"
				hoverText="Back to dashboard"
			/>
			<TopBarContainerLeft>
				<TopBarNavigation isSelected text="Navigation 1" href="#" />
				<TopBarNavigation text="Navigation 2" href="#" />
				<TopBarNavigation text="Navigation 3" href="#" />
			</TopBarContainerLeft>
			<Avatar
				src="https://uploads.guimcode.co.uk/2026/01/27/f85e2e477ce54f4c3b671faa5cd21673aa9f8072fddb5d70a73e6038dc812eec.jpg"
				alt="Mahesh Makani"
				size="sm"
			/>
		</TopBar>
	),
} satisfies Story;

export const CssOverrides = {
	render: () => (
		<TopBar
			cssOverrides={css`
				border: 4px solid ${baseColors.cyan['300']};
			`}
		>
			<TopBarToolName name="CssOverrides" favicon={{ letter: 'C' }} />
			<TopBarContainerLeft>
				<TopBarItem>Top Bar</TopBarItem>
			</TopBarContainerLeft>
		</TopBar>
	),
} satisfies Story;
