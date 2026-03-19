import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { baseColors } from '../../styleD/build/typescript/base/colors';
import { Avatar } from '../avatar/Avatar';
import { Button } from '../button/Button';
import { MenuItem, MenuSection } from '../menu/Menu';
import { TopBar, TopBarLHS, TopBarRHS } from './TopBar';
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
			<TopBarLHS>
				<TopBarItem>Some text</TopBarItem>
				<TopBarItem>
					<Button>Click me</Button>
				</TopBarItem>
				<TopBarNavigation icon="zoom_out_map" text={'Or click me'} href="#" />
			</TopBarLHS>
			<TopBarRHS>
				<TopBarNavigation
					text="Menu"
					menuChildren={
						<MenuSection name="Stuff">
							<MenuItem label="Text" />
						</MenuSection>
					}
				/>
				<TopBarItem>On the right</TopBarItem>
			</TopBarRHS>
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
				border: `5px solid ${baseColors['cool-purple']['700']}`,
			}}
		>
			<TopBarToolName name="Custom" favicon={{ letter: 'C' }} />
			<TopBarLHS>
				<TopBarItem>Top Bar</TopBarItem>
			</TopBarLHS>
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
			<TopBarToolName name="CssOverides" favicon={{ letter: 'C' }} />
			<TopBarLHS>
				<TopBarItem>Top Bar</TopBarItem>
			</TopBarLHS>
		</TopBar>
	),
} satisfies Story;
