// Component Name
export const componentName = 'RadioGroup';

// RadioGroup - React sandbox example
export const componentTsx = /* javascript */ `import { Radio, RadioGroup } from '@guardian/stand/radio-group';

export const Component = () => (
	<RadioGroup
		label="Option"
		description="This is a description for the radio button input"
	>
		<Radio value="one">Option 1</Radio>
		<Radio value="two">Option 2</Radio>
	</RadioGroup>
);
`;

// RadioGroup - Custom component - CSS example
export const componentCss = /* css */ `
/* import the radiogroup styles */
@import '@guardian/stand/component/radioGroup.css';

.stand-radio-group {
	display: var(--component-radioGroup-shared-display);
}
`;

export const componentHtml = /* html */ `<div class="container">
	<div class="stand-radio-group">Hello</div>
</div>
`;

// RadioGroup - Custom component - JS example
export const componentJs = /* javascript */ `
import { componentRadioGroup } from "@guardian/stand";

const style = \`
	display: \${componentRadioGroup.shared.display};
\`;

document.getElementById("app").innerHTML = \`
	<div style="\${style}">Hello</div>
\`;
`;
