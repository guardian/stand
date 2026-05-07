// Component Name
export const componentName = 'Layout';

// Layout - React sandbox example
export const componentTsx = /* javascript */ `import { Layout } from '@guardian/stand/layout';

export const Component = () => (
	<Layout>Hello</Layout>
);
`;

// Layout - Custom component - CSS example
export const componentCss = /* css */ `
/* import the layout styles */
@import '@guardian/stand/component/layout.css';

.stand-layout {
	display: var(--component-layout-shared-display);
}
`;

export const componentHtml = /* html */ `<div class="container">
	<div class="stand-layout">Hello</div>
</div>
`;

// Layout - Custom component - JS example
export const componentJs = /* javascript */ `
import { componentLayout } from "@guardian/stand";

const style = \`
	display: \${componentLayout.shared.display};
\`;

document.getElementById("app").innerHTML = \`
	<div style="\${style}">Hello</div>
\`;
`;
