import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from '../avatar/Avatar';
import { Button } from '../button/Button';
import { Grid, Item } from '../grid/Grid';
import { MenuItem, MenuSection } from '../menu/Menu';
import { TextInput } from '../text-input/TextInput';
import {
	TopBar,
	TopBarContainerLeft,
	TopBarContainerRight,
} from '../topbar/TopBar';
import { TopBarItem } from '../topbar/topBarItem/TopBarItem';
import { TopBarNavigation } from '../topbar/topBarNavigation/TopBarNavigation';
import { TopBarToolName } from '../topbar/topBarToolName/TopBarToolName';
import { Layout, Sidebar } from './Layout';

const meta = {
	title: 'Stand/Tools Design System/Components/Layout',
	component: Layout,
	parameters: {},
	args: {},
} satisfies Meta<typeof Layout>;

type Story = StoryObj<typeof Layout>;

export default meta;

export const Default = {
	name: 'Default',
	render: (args) => (
		<Layout {...args}>
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
									'margin-top': '0',
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
		</Layout>
	),
} satisfies Story;

export const WithSidebar = {
	render: (args) => (
		<Layout {...args}>
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
									'margin-top': '0',
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
			<Sidebar>
				<div
					css={css`
						padding: 4px 8px;
						background-color: #f0f0f0;
						height: 100%;
					`}
				>
					<p>Sidebar content goes here</p>
				</div>
			</Sidebar>
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
		</Layout>
	),
} satisfies Story;
