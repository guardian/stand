// Component Name
export const componentName = 'Menu';

// Menu - React sandbox example
export const componentTsx = /* javascript */ `import {
	Menu,
	MenuToggle,
	MenuSection,
	MenuItem,
	MenuSeparator,
} from '@guardian/stand/menu';
import { IconButton } from '@guardian/stand/icon-button';

export const Component = () => (
	<Menu>
		<MenuToggle>
			<IconButton symbol="settings" ariaLabel="Open menu" />
		</MenuToggle>

		<MenuSection name="File actions">
			<MenuItem
				icon="open_in_new"
				label="Open"
				description="Open in a new tab"
				onAction={() => alert('open')}
			/>
			<MenuItem
				icon="edit"
				label="Rename"
				description="Rename the file"
				onAction={() => alert('rename')}
			/>
			<MenuItem label="Delete" onAction={() => alert('delete')} />
		</MenuSection>

		<MenuSeparator />

		<MenuSection
			selectionMode="multiple"
			defaultSelectedKeys={['files']}
			onSelectionChange={(keys) => console.log(keys)}
		>
			<MenuItem id="files" label="Show files" />
			<MenuItem id="folders" label="Show folders" />
		</MenuSection>
	</Menu>
);
`;

// Menu - Custom component - CSS example
export const componentCss = /* css */ `@import '@guardian/stand/component/menu.css';

/* Popover container */
.stand-popover {
	overflow: var(--component-menu-popover-shared-overflow);
	max-width: var(--component-menu-popover-md-max-width);
	width: var(--component-menu-popover-md-width);
	box-shadow: var(--component-menu-popover-shared-shadow);
}

/* Menu list */
.stand-menu {
	display: var(--component-menu-menu-shared-display);
	flex-direction: var(--component-menu-menu-shared-flex-direction);
	background: var(--component-menu-menu-shared-background-color);
	border: var(--component-menu-menu-shared-border);
}

/* Section header */
.stand-menu-section-header {
	display: var(--component-menu-menu-section-header-shared-display);
	align-items: var(--component-menu-menu-section-header-shared-align-items);
	padding: var(--component-menu-menu-section-header-shared-padding-top)
		var(--component-menu-menu-section-header-shared-padding-right)
		var(--component-menu-menu-section-header-shared-padding-bottom)
		var(--component-menu-menu-section-header-shared-padding-left);
	height: var(--component-menu-menu-section-header-md-height);
	background: var(--component-menu-menu-section-header-shared-background-color);
	font: var(--component-menu-menu-section-header-md-typography-font);
	letter-spacing: var(--component-menu-menu-section-header-md-typography-letter-spacing);
	font-variation-settings: "wdth" var(--component-menu-menu-section-header-md-typography-font-width);
}

/* Menu item */
.stand-menu-item {
	display: var(--component-menu-menu-item-shared-display);
	grid-template-columns: var(--component-menu-menu-item-shared-grid-template-columns);
	grid-template-areas: var(--component-menu-menu-item-shared-grid-template-areas);
	gap: var(--component-menu-menu-item-shared-gap);
	align-items: var(--component-menu-menu-item-shared-align-items);
	padding: var(--component-menu-menu-item-shared-padding-top)
		var(--component-menu-menu-item-shared-padding-right)
		var(--component-menu-menu-item-shared-padding-bottom)
		var(--component-menu-menu-item-shared-padding-left);
	border-bottom: var(--component-menu-menu-item-shared-border-bottom);
	cursor: pointer;
}
.stand-menu-item:last-child {
	border-bottom: var(--component-menu-menu-item-shared-last-child-border-bottom);
}
.stand-menu-item:hover {
	background: var(--component-menu-menu-item-shared-hover-background-color);
}
.stand-menu-item:focus-visible {
	outline: var(--component-menu-menu-item-shared-focus-visible-outline);
	outline-offset: var(--component-menu-menu-item-shared-focus-visible-outline-offset);
	background: var(--component-menu-menu-item-shared-hover-background-color);
}

.stand-menu-item-label {
	grid-area: var(--component-menu-menu-item-shared-label-grid-area);
	color: var(--component-menu-menu-item-shared-label-color);
	font: var(--component-menu-menu-item-md-typography-font);
	letter-spacing: var(--component-menu-menu-item-md-typography-letter-spacing);
	font-variation-settings: "wdth" var(--component-menu-menu-item-md-typography-font-width);
}

.stand-menu-item-description {
	grid-area: var(--component-menu-menu-item-shared-description-grid-area);
	color: var(--component-menu-menu-item-shared-description-color);
	font: var(--component-menu-menu-item-md-typography-font);
}

.stand-menu-item-aside {
	grid-area: var(--component-menu-menu-item-shared-aside-grid-area);
	justify-self: var(--component-menu-menu-item-shared-aside-justify-self);
	color: var(--component-menu-menu-item-shared-aside-color);
	font: var(--component-menu-menu-item-md-typography-font);
}

/* Separator */
.stand-menu-separator {
	background-color: var(--component-menu-menu-separator-shared-background-color);
	height: var(--component-menu-menu-separator-shared-height);
	width: var(--component-menu-menu-separator-shared-width);
}
`;

export const componentHtml = /* html */ `<div class="stand-popover">
	<div class="stand-menu">
		<div>
			<div class="stand-menu-section-header">File actions</div>
			<div class="stand-menu-item" tabindex="0">
				<span class="stand-menu-item-label">Open</span>
				<span class="stand-menu-item-description">Open in a new tab</span>
			</div>
			<div class="stand-menu-item" tabindex="0">
				<span class="stand-menu-item-label">Rename</span>
				<span class="stand-menu-item-description">Rename the file</span>
			</div>
			<div class="stand-menu-item" tabindex="0">
				<span class="stand-menu-item-label">Delete</span>
			</div>
		</div>
		<div class="stand-menu-separator"></div>
		<div>
			<div class="stand-menu-item" tabindex="0">
				<span class="stand-menu-item-label">Show files</span>
			</div>
			<div class="stand-menu-item" tabindex="0">
				<span class="stand-menu-item-label">Show folders</span>
			</div>
		</div>
	</div>
</div>
`;

// Menu - Custom component - JS example
export const componentJs = /* javascript */ `import { componentMenu } from "@guardian/stand";

const { menu, menuItem, menuSection, menuSeparator, popover } = componentMenu;

const popoverStyle = \`
	overflow: \${popover.shared.overflow};
	max-width: \${popover.md['max-width']};
	width: \${popover.md.width};
	box-shadow: \${popover.shared.shadow};
\`;

const menuStyle = \`
	display: \${menu.shared.display};
	flex-direction: \${menu.shared['flex-direction']};
	background: \${menu.shared['background-color']};
	border: \${menu.shared.border};
\`;

const menuSectionHeaderStyle = \`
	display: \${menuSection.header.shared.display};
	align-items: \${menuSection.header.shared['align-items']};
	height: \${menuSection.header.md.height};
	background: \${menuSection.header.shared['background-color']};
	padding: \${menuSection.header.shared.padding.top} \${menuSection.header.shared.padding.right} \${menuSection.header.shared.padding.bottom} \${menuSection.header.shared.padding.left};
	font: \${menuSection.header.md.typography.font};
	letter-spacing: \${menuSection.header.md.typography.letterSpacing};
\`;

const menuItemStyle = \`
	display: \${menuItem.shared.display};
	grid-template-columns: \${menuItem.shared['grid-template-columns']};
	grid-template-areas: \${menuItem.shared['grid-template-areas']};
	gap: \${menuItem.shared.gap};
	align-items: \${menuItem.shared['align-items']};
	padding: \${menuItem.shared.padding.top} \${menuItem.shared.padding.right} \${menuItem.shared.padding.bottom} \${menuItem.shared.padding.left};
	border-bottom: \${menuItem.shared['border-bottom']};
	cursor: pointer;
\`;

const menuItemLabelStyle = \`
	grid-area: \${menuItem.shared.label['grid-area']};
	color: \${menuItem.shared.label.color};
	font: \${menuItem.md.typography.font};
\`;

const separatorStyle = \`
	background-color: \${menuSeparator.shared['background-color']};
	height: \${menuSeparator.shared.height};
	width: \${menuSeparator.shared.width};
\`;

const items = [
	{ label: 'Open', description: 'Open in a new tab' },
	{ label: 'Rename', description: 'Rename the file' },
	{ label: 'Delete' },
];

const menuItemsHtml = items
	.map(
		({ label, description }) => \`
	<div style="\${menuItemStyle}" tabindex="0">
		<span style="\${menuItemLabelStyle}">\${label}</span>
	</div>\`,
	)
	.join('');

document.getElementById("app").innerHTML = \`
	<div style="\${popoverStyle}">
		<div style="\${menuStyle}">
			<div>
				<div style="\${menuSectionHeaderStyle}">File actions</div>
				\${menuItemsHtml}
			</div>
			<div style="\${separatorStyle}"></div>
			<div>
				<div style="\${menuItemStyle}" tabindex="0">
					<span style="\${menuItemLabelStyle}">Show files</span>
				</div>
				<div style="\${menuItemStyle}" tabindex="0">
					<span style="\${menuItemLabelStyle}">Show folders</span>
				</div>
			</div>
		</div>
	</div>
\`;
`;
