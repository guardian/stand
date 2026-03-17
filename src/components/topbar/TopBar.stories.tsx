import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from '../avatar/Avatar';
import { Button } from '../button/Button';
import { MenuItem, MenuSection } from '../menu/Menu';
import { TopBarNavigation } from './navigation/TopBarNavigation';
import { TopBarToolName } from './toolName/TopBarToolName';
import { TopBar, TopBarLHS, TopBarRHS } from './TopBar';
import { TopBarItem } from './topbarItem/TopBarItem';

const meta = {
	title: 'Stand/Tools Design System/Components/TopBar/topBar',
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
			<TopBarToolName name="Steve" favicon={{ letter: 'S' }} />
			<TopBarLHS>
				<TopBarItem>Top Bar</TopBarItem>
				<TopBarItem>
					<Button>Click me</Button>
				</TopBarItem>
				<TopBarNavigation icon="zoom_out_map" text={'Click me'} href="#" />
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
				<TopBarItem>On right</TopBarItem>
			</TopBarRHS>
			<Avatar
				src="https://uploads.guimcode.co.uk/2026/01/27/f85e2e477ce54f4c3b671faa5cd21673aa9f8072fddb5d70a73e6038dc812eec.jpg"
				alt="Mahesh Makani"
				size="sm"
			/>
		</TopBar>
	),
} satisfies Story;
