// Component Name
export const componentName = 'Link';

// Link - React sandbox example
export const componentTsx = /* javascript */ `import { Link } from '@guardian/stand/link';

export const Component = () => (
	<Link>Hello</Link>
);
`;

// Link - Custom component - CSS example
export const componentCss = /* css */ `
/* import the link styles */
@import '@guardian/stand/component/link.css';

.stand-link {
	display: var(--component-link-shared-display);
}
`;

export const componentHtml = /* html */ `<div class="container">
	<div class="stand-link">Hello</div>
</div>
`;

// Link - Custom component - JS example
export const componentJs = /* javascript */ `
import { componentLink } from "@guardian/stand";

const style = \`
	display: \${componentLink.shared.display};
\`;

document.getElementById("app").innerHTML = \`
	<div style="\${style}">Hello</div>
\`;
`;
