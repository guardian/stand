// Component Name
export const componentName = 'TopBarItem';

// TopBarItem - React sandbox example
export const componentTsx = /* javascript */ `import { TopBarItem } from '@guardian/stand/TopBar';

export const Component = () => (
	<TopBarItem>Hello</TopBarItem>
);
`;

// TopBarItem - Custom component - CSS example
export const componentCss = /* css */ `
/* import the topbaritem styles */
@import '@guardian/stand/component/TopBar.css';

.stand-top-bar-item {
	display: var(--component-top-bar-item-display);
	align-items: var(--component-top-bar-item-align-items);
	height: var(--component-top-bar-item-height);
	padding: var(--component-top-bar-item-sm-padding-top) var(--component-top-bar-item-sm-padding-right) var(--component-top-bar-item-sm-padding-bottom) var(--component-top-bar-item-sm-padding-left);
	border-right: var(--component-top-bar-item-border);
}
`;

export const componentHtml = /* html */ `<div class="container">
	<div class="stand-top-bar-item">Hello</div>
</div>
`;

// TopBarItem - Custom component - JS example
export const componentJs = /* javascript */ `
import { componentTopBar } from "@guardian/stand";

const style = \`
	display: \${componentTopBar.Item.display};
	align-items: \${componentTopBar.Item['align-items']};
	height: \${componentTopBar.Item.height};
	padding: \${componentTopBar.Item.sm.padding.top} \${componentTopBar.Item.sm.padding.right} \${componentTopBar.Item.sm.padding.bottom} \${componentTopBar.Item.sm.padding.left};
	border-right: \${componentTopBar.Item.border};
\`;

document.getElementById("app").innerHTML = \`
	<div class="container">
		<div style="\${style}">Hello</div>
	</div>
\`;
`;
