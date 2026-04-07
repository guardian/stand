// Component Name
export const componentName = 'TextInput';

// TextInput - React sandbox example
export const componentTsx = /* javascript */ `import { TextInput } from '@guardian/stand/text-input';

export const Component = () => (
	<TextInput>Hello</TextInput>
);
`;

// TextInput - Custom component - CSS example
export const componentCss = /* css */ `
/* import the textinput styles */
@import '@guardian/stand/component/textInput.css';

.stand-text-input {
	display: var(--component-textInput-shared-display);
}
`;

export const componentHtml = /* html */ `<div class="container">
	<div class="stand-text-input">Hello</div>
</div>
`;

// TextInput - Custom component - JS example
export const componentJs = /* javascript */ `
import { componentTextInput } from "@guardian/stand";

const style = \`
	display: \${componentTextInput.shared.display};
\`;

document.getElementById("app").innerHTML = \`
	<div style="\${style}">Hello</div>
\`;
`;
