import type { Meta, StoryObj } from '@storybook/react-vite';
import { Keyboard } from 'react-aria-components';
import { IconButton } from '../../icon-button';
import { Menu, MenuItem, MenuSection, MenuSeparator, MenuToggle } from './Menu';

const meta = {
	title: 'Stand/Tools Design System/Components/Menu',
	component: Menu,
	parameters: {},
	args: {},
} satisfies Meta<typeof Menu>;

type Story = StoryObj<typeof Menu>;

export default meta;

export const SizeMdDefault = {
	name: 'size md (default)',
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
				<MenuSeparator />
				<MenuSection
					onSelectionChange={(args) => console.log(args)}
					selectionMode="multiple"
					defaultSelectedKeys={['files']}
				>
					<MenuItem id="files" label="Show files" />
					<MenuItem id="folders" label="Show folders" />
				</MenuSection>
				<MenuSeparator />
				<MenuSection
					onSelectionChange={(args) => console.log(args)}
					selectionMode="single"
				>
					<MenuItem id="owls" label="Show owls" />
					<MenuItem id="ravens" label="Show ravens" />
				</MenuSection>
			</Menu>
		</>
	),
} satisfies Story;

export const SizeSm = {
	name: 'size sm',
	render: () => (
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
			<MenuSeparator />
			<MenuSection
				onSelectionChange={(args) => console.log(args)}
				selectionMode="multiple"
				defaultSelectedKeys={['files']}
			>
				<MenuItem id="files" label="Show files" />
				<MenuItem id="folders" label="Show folders" />
			</MenuSection>
			<MenuSeparator />
			<MenuSection
				onSelectionChange={(args) => console.log(args)}
				selectionMode="single"
			>
				<MenuItem id="owls" label="Show owls" />
				<MenuItem id="ravens" label="Show ravens" />
			</MenuSection>
		</Menu>
	),
};

export const SizeMdOpened = {
	name: 'size md - opened',
	render: () => (
		<Menu menuTriggerProps={{ isOpen: true }}>
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
			<MenuSeparator />
			<MenuSection
				onSelectionChange={(args) => console.log(args)}
				selectionMode="multiple"
				defaultSelectedKeys={['files']}
			>
				<MenuItem id="files" label="Show files" />
				<MenuItem id="folders" label="Show folders" />
			</MenuSection>
			<MenuSeparator />
			<MenuSection
				onSelectionChange={(args) => console.log(args)}
				selectionMode="single"
			>
				<MenuItem id="owls" label="Show owls" />
				<MenuItem id="ravens" label="Show ravens" />
			</MenuSection>
		</Menu>
	),
};

export const SizeSmOpened = {
	name: 'size sm - opened',
	render: () => (
		<Menu size="sm" menuTriggerProps={{ isOpen: true }}>
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
			<MenuSeparator />
			<MenuSection
				onSelectionChange={(args) => console.log(args)}
				selectionMode="multiple"
				defaultSelectedKeys={['files']}
			>
				<MenuItem id="files" label="Show files" />
				<MenuItem id="folders" label="Show folders" />
			</MenuSection>
			<MenuSeparator />
			<MenuSection
				onSelectionChange={(args) => console.log(args)}
				selectionMode="single"
			>
				<MenuItem id="owls" label="Show owls" />
				<MenuItem id="ravens" label="Show ravens" />
			</MenuSection>
		</Menu>
	),
};
