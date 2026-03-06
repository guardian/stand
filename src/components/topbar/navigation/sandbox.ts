// Component Name
export const componentName = 'TopBarNavigation';

// TopBarNavigation - React sandbox example
export const componentTsx = /* javascript */ `import { TopBarNavigation } from '@guardian/stand/top-bar-navigation';

export const Component = () => (
	<TopBarNavigation text="hello" />
);
`;

// TopBarNavigation - Custom component - CSS example
export const componentCss = /* css */ `
/* import the topbarnavigation styles */
@import '@guardian/stand/component/topBarNavigation.css';

.stand-top-bar-navigation {
	display: var(--component-topBarNavigation-shared-display);
}
`;

export const componentHtml = /* html */ `<div class="container">
	<div class="stand-top-bar-navigation">Hello</div>
</div>
`;

// TopBarNavigation - Custom component - JS example
export const componentJs = /* javascript */ `
import { componentTopBarNavigation } from "@guardian/stand";

const style = \`
	display: \${componentTopBarNavigation.shared.display};
\`;

document.getElementById("app").innerHTML = \`
	<div style="\${style}">Hello</div>
\`;
`;
