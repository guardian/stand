import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Keyboard } from 'react-aria-components';
import { baseColors, baseSizing, baseSpacing } from '../..';
import { IconButton } from '../../icon-button';
import type { ComponentMenu } from '../../menu';
import type { DeepPartial } from '../../util/types';
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
						label="Long menu label which wraps in multiple lines"
						description="Another quite lengthy description that spans multiple lines too"
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
					<MenuItem
						onAction={() => alert('duplicate')}
						label="Duplicate"
						aside={<Keyboard>⌘D</Keyboard>}
					/>
					{/* delete */}
					<MenuItem onAction={() => alert('delete')} label="Delete" />
				</MenuSection>
				<MenuSeparator />
				<MenuSection>
					<MenuItem id="files" label="Show files" />
					<MenuItem id="folders" label="Show folders" />
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
					label="Long menu label which wraps in multiple lines"
					description="Another quite lengthy description that spans multiple lines too"
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
				<MenuItem
					onAction={() => alert('duplicate')}
					label="Duplicate"
					aside={<Keyboard>⌘D</Keyboard>}
				/>
				{/* delete */}
				<MenuItem onAction={() => alert('delete')} label="Delete" />
			</MenuSection>
			<MenuSeparator />
			<MenuSection>
				<MenuItem id="files" label="Show files" />
				<MenuItem id="folders" label="Show folders" />
			</MenuSection>
		</Menu>
	),
} satisfies Story;

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
					label="Long menu label which wraps in multiple lines"
					description="Another quite lengthy description that spans multiple lines too"
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
				<MenuItem
					onAction={() => alert('duplicate')}
					label="Duplicate"
					aside={<Keyboard>⌘D</Keyboard>}
				/>
				{/* delete */}
				<MenuItem onAction={() => alert('delete')} label="Delete" />
			</MenuSection>
			<MenuSeparator />
			<MenuSection>
				<MenuItem id="files" label="Show files" />
				<MenuItem id="folders" label="Show folders" />
			</MenuSection>
		</Menu>
	),
} satisfies Story;

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
					label="Long menu label which wraps in multiple lines"
					description="Another quite lengthy description that spans multiple lines too"
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
				<MenuItem
					onAction={() => alert('duplicate')}
					label="Duplicate"
					aside={<Keyboard>⌘D</Keyboard>}
				/>
				{/* delete */}
				<MenuItem onAction={() => alert('delete')} label="Delete" />
			</MenuSection>
			<MenuSeparator />
			<MenuSection>
				<MenuItem id="files" label="Show files" />
				<MenuItem id="folders" label="Show folders" />
			</MenuSection>
		</Menu>
	),
} satisfies Story;

export const CustomTheme = {
	name: 'custom theme',
	render: () => {
		const theme: DeepPartial<ComponentMenu> = {
			menu: {
				shared: {
					border: `${baseSizing['size-8-px']} solid ${baseColors.orange[900]}`,
					'background-color': baseColors.orange[50],
				},
			},
			menuItem: {
				shared: {
					':hover': {
						'background-color': baseColors.orange[100],
					},
					label: {
						color: baseColors.orange[900],
					},
					aside: {
						color: baseColors.orange[700],
					},
					icon: {
						color: baseColors.orange[900],
					},
					description: {
						color: baseColors.orange[700],
					},
				},
			},
			menuSection: {
				header: {
					shared: {
						'background-color': baseColors.orange[50],
						color: baseColors.orange[900],
					},
				},
			},
			menuSeparator: {
				shared: {
					'background-color': baseColors.orange[200],
				},
			},
			menuPopover: {
				shared: {
					shadow: `0 ${baseSizing['size-2-px']} ${baseSizing['size-16-px']} 0 rgb(255 165 0 / 0.3)`,
				},
			},
		};

		return (
			<>
				<Menu theme={theme.menu} popoverProps={{ theme: theme.menuPopover }}>
					<MenuToggle>
						<IconButton symbol="settings" ariaLabel="Open menu" />
					</MenuToggle>
					<MenuSection theme={theme.menuSection} name="File actions">
						<MenuItem
							theme={theme.menuItem}
							icon="open_in_new"
							onAction={() => alert('open')}
							label="Long menu label which wraps in multiple lines"
							description="Another quite lengthy description that spans multiple lines too"
							aside={<Keyboard>⌘O</Keyboard>}
						/>
						{/* rename */}
						<MenuItem
							theme={theme.menuItem}
							onAction={() => alert('rename')}
							icon="edit"
							label="Rename"
							description="Rename the file"
						/>
						{/* duplicate */}
						<MenuItem
							theme={theme.menuItem}
							onAction={() => alert('duplicate')}
							label="Duplicate"
							aside={<Keyboard>⌘D</Keyboard>}
						/>
						{/* delete */}
						<MenuItem
							theme={theme.menuItem}
							onAction={() => alert('delete')}
							label="Delete"
						/>
					</MenuSection>
					<MenuSeparator />
					<MenuSection theme={theme.menuSection}>
						<MenuItem theme={theme.menuItem} id="files" label="Show files" />
						<MenuItem
							theme={theme.menuItem}
							id="folders"
							label="Show folders"
						/>
					</MenuSection>
				</Menu>
			</>
		);
	},
} satisfies Story;

export const CssOverrides = {
	name: 'css overrides',
	render: () => {
		const menuStyles = css`
			padding: ${baseSpacing['16-px']};
		`;

		const menuPopoverStyles = css`
			z-index: 1;
		`;

		const menuItemStyles = css`
			padding: ${baseSpacing['8-px']} ${baseSpacing['16-px']};
		`;

		const menuSeparatorStyles = css`
			filter: drop-shadow(0 1px 0 ${baseColors.blue[500]});
		`;

		return (
			<>
				<Menu
					cssOverrides={menuStyles}
					popoverProps={{ cssOverrides: menuPopoverStyles }}
				>
					<MenuToggle>
						<IconButton symbol="settings" ariaLabel="Open menu" />
					</MenuToggle>
					<MenuSection name="File actions">
						<MenuItem
							icon="open_in_new"
							onAction={() => alert('open')}
							label="Long menu label which wraps in multiple lines"
							description="Another quite lengthy description that spans multiple lines too"
							aside={<Keyboard>⌘O</Keyboard>}
							cssOverrides={menuItemStyles}
						/>
						{/* rename */}
						<MenuItem
							onAction={() => alert('rename')}
							icon="edit"
							label="Rename"
							description="Rename the file"
							cssOverrides={menuItemStyles}
						/>
						{/* duplicate */}
						<MenuItem
							onAction={() => alert('duplicate')}
							label="	Duplicate"
							cssOverrides={menuItemStyles}
							aside={<Keyboard>⌘D</Keyboard>}
						/>
						{/* delete */}
						<MenuItem
							onAction={() => alert('delete')}
							label="Delete"
							cssOverrides={menuItemStyles}
						/>
					</MenuSection>
					<MenuSeparator cssOverrides={menuSeparatorStyles} />
					<MenuSection>
						<MenuItem
							id="files"
							label="Show files"
							cssOverrides={menuItemStyles}
						/>
						<MenuItem
							id="folders"
							label="Show folders"
							cssOverrides={menuItemStyles}
						/>
					</MenuSection>
				</Menu>
			</>
		);
	},
} satisfies Story;
