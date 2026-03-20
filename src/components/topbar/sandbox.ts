// Component Name
export const componentName = 'TopBar';

// TopBar - React sandbox example
export const componentTsx = /* javascript */ `import { TopBar, TopBarToolName } from '@guardian/stand/TopBar';

export const Component = () => (
	<TopBar><TopBarToolName name="Composer" favicon={{ letter: "C" }} /></TopBar>
);
`;

//Custom component - CSS example
export const componentCss = /* css */ `
/* import the styles */
@import '@guardian/stand/component/TopBar.css';
@import '@guardian/stand/component/favicon.css';

.stand-top-bar {
	display: var(--component-top-bar-display);
	justify-content: var(--component-top-bar-justify-content);
	height: var(--component-top-bar-height);
	border: var(--component-top-bar-border);
}

.stand-top-bar-lhs {
	display: var(--component-top-bar-display);
}

.stand-top-bar-tool-name {
	display: var(--component-top-bar-tool-name-display);
	align-items: var(--component-top-bar-tool-name-align-items);
	gap: var(--component-top-bar-tool-name-gap);
	font: var(--component-top-bar-tool-name-typography-font);
	letter-spacing: var(--component-top-bar-tool-name-typography-letter-spacing);
	font-variation-settings: "wdth" var(--component-top-bar-tool-name-typography-font-width);
}

.stand-favicon {
		background-color: var(--component-favicon-color-background);
		display: var(--component-favicon-display);
		align-items: var(--component-favicon-align-items);
		justify-content: var(--component-favicon-justify-content);
		width: var(--component-favicon-size);
		height: var(--component-favicon-size);
		user-select: var(--component-favicon-user-select);
		color: var(--component-favicon-color-text);
		font: var(--component-favicon-typography-font);
		letter-spacing: var(--component-favicon-typography-letter-spacing);
		font-variation-settings: "wdth" var(--component-favicon-typography-font-width);
}

.stand-top-bar-item {
	display: var(--component-top-bar-item-display);
	align-items: var(--component-top-bar-item-align-items);
	height: var(--component-top-bar-item-height);
	padding: var(--component-top-bar-item-sm-padding-top) var(--component-top-bar-item-sm-padding-right) var(--component-top-bar-item-sm-padding-bottom) var(--component-top-bar-item-sm-padding-left);
	border-right: var(--component-top-bar-item-border);
}

`;

export const componentHtml = /* html */ `
	<div class="stand-top-bar">
		<div class="stand-top-bar-lhs">
			<div class="stand-top-bar-tool-name stand-top-bar-item">
				<div class="stand-favicon">C</div>
				<div>Composer</div>
			</div>
			<div class="stand-top-bar-item">Item 1</div>
		</div>
	</div>
`;

// TopBar - Custom component - JS example
export const componentJs = /* javascript */ `
import { componentTopBar } from "@guardian/stand";
import { componentFavicon } from "@guardian/stand";
const style = \`
	display: \${componentTopBar.display};
	justify-content: \${componentTopBar['justify-content']};
	height: \${componentTopBar.height};
	border: \${componentTopBar.border};
\`;

const lhsStyle = \`
	display: \${componentTopBar.display};
\`;

const toolNameStyle = \`display: \${componentTopBar.ToolName.display};
	align-items: \${componentTopBar.ToolName['align-items']};
	gap: \${componentTopBar.ToolName.gap};
	font: \${componentTopBar.ToolName.typography.font};
	letter-spacing: \${componentTopBar.ToolName.typography.letterSpacing};
	font-variation-settings: "wdth" \${componentTopBar.ToolName.typography.fontWidth};
\`;

const faviconStyle = \`
	background-color: \${componentFavicon.color.background};
	display: \${componentFavicon.display};
	align-items: \${componentFavicon['align-items']};
	justify-content: \${componentFavicon['justify-content']};
	width: \${componentFavicon.size};
	height: \${componentFavicon.size};
	user-select: \${componentFavicon.userSelect};
	color: \${componentFavicon.color.text};
	font: \${componentFavicon.typography.font};
	letter-spacing: \${componentFavicon.typography.letterSpacing};
	font-variation-settings: "wdth" \${componentFavicon.typography['font-width']};
\`;

const topBarItemStyle = \`display: \${componentTopBar.Item.display};
	align-items: \${componentTopBar.Item['align-items']};
	height: \${componentTopBar.Item.height};
	padding: \${componentTopBar.Item.sm.padding.top} \${componentTopBar.Item.sm.padding.right} \${componentTopBar.Item.sm.padding.bottom} \${componentTopBar.Item.sm.padding.left};
	border-right: \${componentTopBar.Item.border};
\`;

document.getElementById("app").innerHTML = \`
	<div style="\${style}">
		<div style="\${lhsStyle}">
			<div style="\${topBarItemStyle}">
				<div style="\${toolNameStyle}">
					<div style="\${faviconStyle}">C</div>
					<div>Composer</div>
				</div>
			</div>

			<div style="\${topBarItemStyle}">Item 1</div>
		</div>
	</div>
\`;
`;
