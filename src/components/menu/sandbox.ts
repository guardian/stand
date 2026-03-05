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
@import "@guardian/stand/fonts/MaterialSymbolsOutlined.css";

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

/* Menu section header */
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
.stand-menu-item-with-description {
	grid-template-areas: var(--component-menu-menu-item-shared-grid-template-areas-with-description);
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

.stand-menu-item-icon {
	grid-area: var(--component-menu-menu-item-shared-icon-grid-area);
	justify-self: var(--component-menu-menu-item-shared-icon-justify-self);
	align-self: var(--component-menu-menu-item-shared-icon-align-self);
	color: var(--component-menu-menu-item-shared-icon-color);
	font-size: var(--component-menu-menu-item-md-icon-size);
	line-height: var(--component-menu-menu-item-md-icon-line-height);
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
			<div class="stand-menu-item stand-menu-item-with-description" tabindex="0">
				<span class="stand-menu-item-icon material-symbols">open_in_new</span>
				<span class="stand-menu-item-label">Open</span>
				<span class="stand-menu-item-description">Open in a new tab</span>
				<span class="stand-menu-item-aside">⌘O</span>
			</div>
			<div class="stand-menu-item stand-menu-item-with-description" tabindex="0">
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
				<span class="stand-menu-item-icon material-symbols">check_box</span>
				<span class="stand-menu-item-label">Show files</span>
			</div>
			<div class="stand-menu-item" tabindex="0">
				<span class="stand-menu-item-icon material-symbols">check_box_outline_blank</span>
				<span class="stand-menu-item-label">Show folders</span>
			</div>
		</div>
	</div>
</div>
`;

// Menu - Custom component - JS example
export const componentJs = /* javascript */ `import { componentMenu } from "@guardian/stand";

const { menu, menuItem, menuSection, menuSeparator, popover } = componentMenu;

// example of creating a stylesheet in js
const sheet = new CSSStyleSheet();

// apply the rules to the sheet
sheet.replaceSync(\`
	/* Popover container */
	.js-stand-popover {
		overflow: \${popover.shared.overflow};
		max-width: \${popover.md['max-width']};
		width: \${popover.md.width};
		box-shadow: \${popover.shared.shadow};
	}

	/* Menu list */
	.js-stand-menu {
		display: \${menu.shared.display};
		flex-direction: \${menu.shared['flex-direction']};
		background: \${menu.shared['background-color']};
		border: \${menu.shared.border};
	}

	/* Menu section header */
	.js-stand-menu-section-header {
		display: \${menuSection.header.shared.display};
		align-items: \${menuSection.header.shared['align-items']};
		height: \${menuSection.header.md.height};
		background: \${menuSection.header.shared['background-color']};
		padding: \${menuSection.header.shared.padding.top} \${menuSection.header.shared.padding.right} \${menuSection.header.shared.padding.bottom} \${menuSection.header.shared.padding.left};
		font: \${menuSection.header.md.typography.font};
		letter-spacing: \${menuSection.header.md.typography.letterSpacing};
		font-variation-settings: 'wdth' \${menuSection.header.md.typography.fontWidth};
	}

	/* Menu item */
	.js-stand-menu-item {
		display: \${menuItem.shared.display};
		grid-template-columns: \${menuItem.shared['grid-template-columns']};
		grid-template-areas: \${menuItem.shared['grid-template-areas']};
		gap: \${menuItem.shared.gap};
		align-items: \${menuItem.shared['align-items']};
		padding: \${menuItem.shared.padding.top} \${menuItem.shared.padding.right} \${menuItem.shared.padding.bottom} \${menuItem.shared.padding.left};
		border-bottom: \${menuItem.shared['border-bottom']};
		cursor: pointer;
	}
	.js-stand-menu-item-with-description {
		grid-template-areas: \${menuItem.shared['grid-template-areas-with-description']};
	}
	.js-stand-menu-item:last-child {
		border-bottom: \${menuItem.shared[':last-child']['border-bottom']};
	}
	.js-stand-menu-item:hover {
		background: \${menuItem.shared[':hover']['background-color']};
	}
	.js-stand-menu-item:focus-visible {
		outline: \${menuItem.shared[':focus-visible'].outline};
		outline-offset: \${menuItem.shared[':focus-visible']['outline-offset']};
		background: \${menuItem.shared[':hover']['background-color']};
	}

	.js-stand-menu-item-icon {
		grid-area: \${menuItem.shared.icon['grid-area']};
		justify-self: \${menuItem.shared.icon['justify-self']};
		align-self: \${menuItem.shared.icon['align-self']};
		color: \${menuItem.shared.icon.color};
		font-size: \${menuItem.md.icon.size};
		line-height: \${menuItem.md.icon['line-height']};
	}
	.js-stand-menu-item-label {
		grid-area: \${menuItem.shared.label['grid-area']};
		color: \${menuItem.shared.label.color};
		font: \${menuItem.md.typography.font};
		letter-spacing: \${menuItem.md.typography.letterSpacing};
		font-variation-settings: 'wdth' \${menuItem.md.typography.fontWidth};
	}
	.js-stand-menu-item-description {
		grid-area: \${menuItem.shared.description['grid-area']};
		color: \${menuItem.shared.description.color};
		font: \${menuItem.md.typography.font};
	}
	.js-stand-menu-item-aside {
		grid-area: \${menuItem.shared.aside['grid-area']};
		justify-self: \${menuItem.shared.aside['justify-self']};
		color: \${menuItem.shared.aside.color};
		font: \${menuItem.md.typography.font};
	}

	/* Separator */
	.js-stand-menu-separator {
		background-color: \${menuSeparator.shared['background-color']};
		height: \${menuSeparator.shared.height};
		width: \${menuSeparator.shared.width};
	}
\`);

// update the document with the sheet
document.adoptedStyleSheets.push(sheet);

// modify the dom with the menu components using the generated stylesheet
document.getElementById("app").innerHTML = \`
	<div class="js-stand-popover">
		<div class="js-stand-menu">
			<div>
				<div class="js-stand-menu-section-header">File actions</div>
				<div class="js-stand-menu-item js-stand-menu-item-with-description" tabindex="0">
					<span class="js-stand-menu-item-icon material-symbols">open_in_new</span>
					<span class="js-stand-menu-item-label">Open</span>
					<span class="js-stand-menu-item-description">Open in a new tab</span>
					<span class="js-stand-menu-item-aside">⌘O</span>
				</div>
				<div class="js-stand-menu-item js-stand-menu-item-with-description" tabindex="0">
					<span class="js-stand-menu-item-label">Rename</span>
					<span class="js-stand-menu-item-description">Rename the file</span>
				</div>
				<div class="js-stand-menu-item" tabindex="0">
					<span class="js-stand-menu-item-label">Delete</span>
				</div>
			</div>
			<div class="js-stand-menu-separator"></div>
			<div>
				<div class="js-stand-menu-item" tabindex="0">
					<span class="js-stand-menu-item-icon material-symbols">check_box</span>
					<span class="js-stand-menu-item-label">Show files</span>
				</div>
				<div class="js-stand-menu-item" tabindex="0">
					<span class="js-stand-menu-item-icon material-symbols">check_box_outline_blank</span>
					<span class="js-stand-menu-item-label">Show folders</span>
				</div>
			</div>
		</div>
	</div>
\`;
`;
