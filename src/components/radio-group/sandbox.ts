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
@import '@guardian/stand/component/form.css';

/* form input container styles */

.stand-form-input-container {
	display: var(--component-form-input-shared-container-display);
	flex-direction: var(--component-form-input-shared-container-flex-direction);
	gap: var(--component-form-input-shared-container-gap);
	width: var(--component-form-input-shared-container-width);
}

.stand-form-input-container > label {
	color: var(--component-form-input-shared-label-color);
	font: var(--component-form-input-md-label-typography-font);
	letter-spacing: var(--component-form-input-md-label-typography-letter-spacing);
	font-variation-settings: "wdth" var(--component-form-input-md-label-typography-font-width);
}

.stand-form-input-container > span.description {
	color: var(--component-form-input-shared-description-color);
	font: var(--component-form-input-shared-description-typography-font);
	letter-spacing: var(--component-form-input-shared-description-typography-letter-spacing);
	font-variation-settings: "wdth" var(--component-form-input-shared-description-typography-font-width);
}

/* radiogroup styles */

.stand-radio-group {
	display: var(--component-radio-group-shared-display);
	flex-direction: var(--component-radio-group-shared-flex-direction);
	gap: var(--component-radio-group-md-gap);
	margin-top: var(--component-radio-group-shared-margin-top);
	margin-bottom: var(--component-radio-group-shared-margin-bottom);
}

.stand-radio {
	display: var(--component-radio-group-shared-radio-display);
	align-items: var(--component-radio-group-shared-radio-align-items);
	gap: var(--component-radio-group-shared-radio-gap);
	font: var(--component-radio-group-md-typography-font);
	letter-spacing: var(--component-radio-group-md-typography-letter-spacing);
	font-variation-settings: "wdth" var(--component-radio-group-md-typography-font-width);
	color: var(--component-radio-group-shared-radio-color);
}

.stand-radio input {
	position: var(--component-radio-group-shared-indicator-position);
	width: var(--component-radio-group-md-indicator-width);
	height: var(--component-radio-group-md-indicator-height);
	border-radius: var(--component-radio-group-shared-indicator-border-radius);
	border: var(--component-radio-group-shared-indicator-border);
}

.stand-radio > input::after {
	content: '';
	position: var(--component-radio-group-shared-indicator-after-position);
	border-radius: var(--component-radio-group-shared-indicator-after-border-radius);
	inset: var(--component-radio-group-shared-indicator-after-inset);
	scale: var(--component-radio-group-shared-indicator-after-scale);
}
`;

export const componentHtml = /* html */ `<div class="container">
<div class="stand-form-input-container">
	<label>Options</label>
	<span class="description">This is a description for the radio group.</span>
	<div class="stand-radio-group">
		<div class="stand-radio">
			<input type="radio" value="one" name="option" />
			<label>Option 1</label>
		</div>
		<div class="stand-radio">
			<input type="radio" value="two" name="option" />
			<label>Option 2</label>
		</div>
	</div>
</div>
</div>
`;

// RadioGroup - Custom component - JS example
export const componentJs = /* javascript */ `
import { componentRadioGroup, componentForm } from "@guardian/stand";

// example of creating a stylesheet in js
const sheet = new CSSStyleSheet();

// apply the rules to the sheet
sheet.replaceSync(\`
/* form input container styles */

.stand-form-input-container {
	display: \${componentForm.input.shared.container.display};
	flex-direction: \${componentForm.input.shared.container['flex-direction']};
	gap: \${componentForm.input.shared.container.gap};
	width: \${componentForm.input.shared.container.width};
}

.stand-form-input-container > label {
	color: \${componentForm.input.shared.label.color};
	font: \${componentForm.input.shared.label.font};
	letter-spacing: \${componentForm.input.shared.label.letterSpacing};
	font-variation-settings: "wdth" \${componentForm.input.shared.label.fontWidth};
}

.stand-form-input-container > span.description {
	color: \${componentForm.input.shared.description.color};
	font: \${componentForm.input.shared.description.font};
	letter-spacing: \${componentForm.input.shared.description.letterSpacing};
	font-variation-settings: "wdth" \${componentForm.input.shared.description.fontWidth};
}

.stand-radio-group {
	display: \${componentRadioGroup.shared.display};
	flex-direction: \${componentRadioGroup.shared.flexDirection};
	gap: \${componentRadioGroup.md.gap};
	margin-top: \${componentRadioGroup.shared.marginTop};
	margin-bottom: \${componentRadioGroup.shared.marginBottom};
}

.stand-radio {
	display: \${componentRadioGroup.shared.radio.display};
	align-items: \${componentRadioGroup.shared.radio.alignItems};
	gap: \${componentRadioGroup.shared.radio.gap};
	font: \${componentRadioGroup.md.typography.font};
	letter-spacing: \${componentRadioGroup.md.typography.letterSpacing};
	font-variation-settings: "wdth" \${componentRadioGroup.md.typography.fontWidth};
	color: \${componentRadioGroup.shared.radio.color};
}

.stand-radio input {
	position: \${componentRadioGroup.shared.indicator.position};
	width: \${componentRadioGroup.md.indicator.width};
	height: \${componentRadioGroup.md.indicator.height};
	border-radius: \${componentRadioGroup.shared.indicator.borderRadius};
	border: \${componentRadioGroup.shared.indicator.border};
}

.stand-radio > input::after {
	content: '';
	position: \${componentRadioGroup.shared.indicator.after.position};
	border-radius: \${componentRadioGroup.shared.indicator.after.borderRadius};
	inset: \${componentRadioGroup.shared.indicator.after.inset};
	scale: \${componentRadioGroup.shared.indicator.after.scale};
}
\`);

// update the document with the sheet
document.adoptedStyleSheets.push(sheet);

// modify the dom with the button components using the generated stylesheet
document.getElementById("app").innerHTML = \`
<div class="container">
<div class="stand-form-input-container">
	<label>Options</label>
	<span class="description">This is a description for the radio group.</span>
	<div class="stand-radio-group">
		<div class="stand-radio">
			<input type="radio" value="one" name="option" />
			<label>Option 1</label>
		</div>
		<div class="stand-radio">
			<input type="radio" value="two" name="option" />
			<label>Option 2</label>
		</div>
	</div>
</div>
</div>
\`;
`;
