// Component Name
export const componentName = 'TopBarItem';

// TopBarItem - React sandbox example
export const componentTsx = /* javascript */ `import { TopBarItem } from '@guardian/stand/top-bar-item';

export const Component = () => (
	<TopBarItem>Hello</TopBarItem>
);
`;

// TopBarItem - Custom component - CSS example
export const componentCss = /* css */ `
/* import the topbaritem styles */
@import '@guardian/stand/component/topBarItem.css';

.stand-top-bar-item {
	display: var(--component-topBarItem-shared-display);
}
`;

export const componentHtml = /* html */ `<div class="container">
	<div class="stand-top-bar-item">Hello</div>
</div>
`;

// TopBarItem - Custom component - JS example
export const componentJs = /* javascript */ `
import { componentTopBarItem } from "@guardian/stand";

const style = \`
	display: \${componentTopBarItem.shared.display};
\`;

document.getElementById("app").innerHTML = \`
	<div style="\${style}">Hello</div>
\`;
`;
