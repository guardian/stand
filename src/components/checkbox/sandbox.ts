// Component Name
export const componentName = 'Checkbox';

// Checkbox - React sandbox example
export const componentTsx = /* javascript */ `import { Checkbox } from '@guardian/stand/checkbox';

export const Component = () => (
	<Checkbox>Hello</Checkbox>
);
`;

// Checkbox - Custom component - CSS example
export const componentCss = /* css */ `
/* import the checkbox styles */
@import '@guardian/stand/component/checkbox.css';

.stand-checkbox {
	display: var(--component-checkbox-shared-display);
}
`;

export const componentHtml = /* html */ `<div class="container">
	<div class="stand-checkbox">Hello</div>
</div>
`;

// Checkbox - Custom component - JS example
export const componentJs = /* javascript */ `
import { componentCheckbox } from "@guardian/stand";

const style = \`
	display: \${componentCheckbox.shared.display};
\`;

document.getElementById("app").innerHTML = \`
	<div style="\${style}">Hello</div>
\`;
`;
