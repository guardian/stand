import type { Meta, StoryObj } from '@storybook/react-vite';
import { Keyboard } from 'react-aria-components';
import { IconButton } from '../../icon-button';
import { Menu, MenuItem, MenuSection, MenuToggle } from './Menu';

const meta = {
	title: 'Stand/Tools Design System/Components/Menu',
	component: Menu,
	parameters: {},
	args: {},
} satisfies Meta<typeof Menu>;

type Story = StoryObj<typeof Menu>;

export default meta;

export const Default = {
	render: () => (
		<>
			<Menu>
				<MenuToggle>
					<IconButton symbol="settings" ariaLabel="Open menu" />
				</MenuToggle>
				<MenuSection name="File actions">
					<MenuItem
						icon="open_in_new"
						onAction={() => alert('open')}
						label="Long menu label which wraps in two lines"
						description="Another quite lengthy description"
						aside={<Keyboard>⌘O</Keyboard>}
					/>
					{/* rename */}
					<MenuItem
						onAction={() => alert('rename')}
						icon="edit"
						label="Rename"
						description="Rename the file"
					/>
					{/* duplicate */}
					<MenuItem onAction={() => alert('duplicate')} label="Duplicate" />
					{/* delete */}
					<MenuItem onAction={() => alert('delete')} label="Delete" />
				</MenuSection>
				{/* <MenuSection
					onSelectionChange={(args) => console.log(args)}
					selectionMode="multiple"
					defaultSelectedKeys={['files']}
				>
					<MenuItem id="files">Show files</MenuItem>
					<MenuItem id="folders">Show folders</MenuItem>
				</MenuSection>
				<MenuSection
					onSelectionChange={(args) => console.log(args)}
					selectionMode="single"
				>
					<MenuItem id="owls">Show owls</MenuItem>
					<MenuItem id="ravens">Show ravens</MenuItem>
				</MenuSection> */}
			</Menu>
			<Menu size="sm">
				<MenuToggle>
					<IconButton symbol="settings" ariaLabel="Open menu" />
				</MenuToggle>
				<MenuSection name="File actions">
					<MenuItem
						icon="open_in_new"
						onAction={() => alert('open')}
						label="Long menu label which wraps in two lines"
						description="Another quite lengthy description"
						aside={<Keyboard>⌘O</Keyboard>}
					/>
					{/* rename */}
					<MenuItem
						onAction={() => alert('rename')}
						icon="edit"
						label="Rename"
						description="Rename the file"
					/>
					{/* duplicate */}
					<MenuItem onAction={() => alert('duplicate')} label="Duplicate" />
					{/* delete */}
					<MenuItem onAction={() => alert('delete')} label="Delete" />
				</MenuSection>
				{/* <MenuSection
					onSelectionChange={(args) => console.log(args)}
					selectionMode="multiple"
					defaultSelectedKeys={['files']}
				>
					<MenuItem id="files">Show files</MenuItem>
					<MenuItem id="folders">Show folders</MenuItem>
				</MenuSection>
				<MenuSection
					onSelectionChange={(args) => console.log(args)}
					selectionMode="single"
				>
					<MenuItem id="owls">Show owls</MenuItem>
					<MenuItem id="ravens">Show ravens</MenuItem>
				</MenuSection> */}
			</Menu>
		</>
	),
} satisfies Story;
