// Component Name
export const componentName = 'TopBar';

// TopBar - React sandbox example
export const componentTsx = /* javascript */ `import { TopBar } from '@guardian/stand/top-bar-item';

export const Component = () => (
	<TopBar>Hello</TopBar>
);
`;

// }; - Custom component - CSS example
export const componentCss = /* css */ `
/* import the }; styles */
@import '@guardian/stand/component/topBar.css';

.stand-top-bar {
	display: var(--component-topBar-shared-display);
}
`;

export const componentHtml = /* html */ `<div class="container">
	<div class="stand-top-bar">Hello</div>
</div>
`;

// TopBar - Custom component - JS example
export const componentJs = /* javascript */ `
import { componentTopBar } from "@guardian/stand";

const style = \`
	display: \${componentTopBar.shared.display};
\`;

document.getElementById("app").innerHTML = \`
	<div style="\${style}">Hello</div>
\`;
`;
