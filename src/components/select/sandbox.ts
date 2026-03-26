// Component Name
export const componentName = 'Select';

// Select - React sandbox example
export const componentTsx = /* javascript */ `import { Select } from '@guardian/stand/select';

export const Component = () => (
	<Select>Hello</Select>
);
`;

// Select - Custom component - CSS example
export const componentCss = /* css */ `
/* import the select styles */
@import '@guardian/stand/component/select.css';

.stand-select {
	display: var(--component-select-shared-display);
}
`;

export const componentHtml = /* html */ `<div class="container">
	<div class="stand-select">Hello</div>
</div>
`;

// Select - Custom component - JS example
export const componentJs = /* javascript */ `
import { componentSelect } from "@guardian/stand";

const style = \`
	display: \${componentSelect.shared.display};
\`;

document.getElementById("app").innerHTML = \`
	<div style="\${style}">Hello</div>
\`;
`;
