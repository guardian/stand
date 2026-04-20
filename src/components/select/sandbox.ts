// Component Name
export const componentName = 'Select';

// Select - React sandbox example
export const componentTsx = /* javascript */ `import { Option, Select } from '@guardian/stand/select';

export const Component = () => (
	<Select label="Select">
		<Option>Option 1</Option>
		<Option>Option 2</Option>
	</Select>
);
`;

// Select - Custom component - CSS example
export const componentCss = /* css */ `
/* import the select styles */
@import '@guardian/stand/component/select.css';
@import '@guardian/stand/component/form.css';

.stand-select-container {
	display: var(--component-form-input-shared-container-display);
	flex-direction: var(--component-form-input-shared-container-flex-direction);
	gap: var(--component-form-input-shared-container-gap);
	width: var(--component-form-input-shared-container-width);
}

.stand-select-container > label {
	color: var(--component-form-input-shared-label-color);
	font: var(--component-form-input-md-label-typography-font);
	letter-spacing: var(--component-form-input-md-label-typography-letter-spacing);
	font-variation-settings: "wdth" var(--component-form-input-md-label-typography-font-width);
}

.stand-select-container > span.description {
	color: var(--component-form-input-shared-description-color);
	font: var(--component-form-input-shared-description-typography-font);
	letter-spacing: var(--component-form-input-shared-description-typography-letter-spacing);
	font-variation-settings: "wdth" var(--component-form-input-shared-description-typography-font-width);
}

.stand-select {
		display: var(--component-select-shared-button-display);
		justify-content: var(--component-select-shared-button-justify-content);
		align-items: var(--component-select-shared-button-align-items);
		background-color: var(--component-select-shared-button-background-color);
		border: var(--component-select-shared-button-border);
		border-radius: var(--component-select-shared-button-border-radius);
		height: var(--component-select-shared-button-height);
		padding-left: var(--component-select-shared-button-padding-left);
		padding-right: var(--component-select-shared-button-padding-right);
		margin-top: var(--component-select-shared-button-margin-top);
		color: var(--component-select-shared-button-color);

		font: var(--component-select-shared-button-body-md-typography-font);
		letter-spacing: var(--component-select-shared-button-body-md-typography-letter-spacing);
		font-variation-settings: "wdth" var(--component-select-shared-button-body-md-typography-font-width);


		&:hover {
			background: var(--component-select-shared-hover-background-color);
		}

		&:active {
			background: var(--component-select-shared-active-background-color);
		}

		&:focus-visible {
			outline: var(--component-select-button-focused-outline);
			outline-offset: var(--component-select-button-focused-outline-offset);
		}

		&:disabled {
			cursor: var(--component-select-button-disabled-cursor);
			background-color: var(--component-select-button-disabled-background-color);
			color: var(--component-select-button-disabled-color);
			border: var(--component-select-button-disabled-border);
		}
}
`;

export const componentHtml = /* html */ `<div class="container">
	<div class="stand-select-container">
		<label>Select</label>
		<select class="stand-select">
			<option>Option 1</option>
			<option>Option 2</option>
		</select>
	</div>
</div>
`;

// Select - Custom component - JS example
export const componentJs = /* javascript */ `
import { componentForm, componentSelect } from "@guardian/stand";

// example of creating a stylesheet in js
const sheet = new CSSStyleSheet();

// apply the rules to the sheet
sheet.replaceSync(\`

.js-stand-select-container {
	display: \${componentForm.input.shared.container.display};
	flex-direction: \${componentForm.input.shared.container['flex-direction']};
	gap: \${componentForm.input.shared.container.gap};
	width: \${componentForm.input.shared.container.width};
}

.js-stand-select-container > label {
	color: \${componentForm.input.shared.label.color};
	font: \${componentForm.input.md.label.typography.font};
	letter-spacing: \${componentForm.input.md.label.typography.letterSpacing};
	font-variation-settings: "wdth" \${componentForm.input.md.label.typography.fontWidth};
}

.js-stand-select-container > span.description {
	color: \${componentForm.input.shared.description.color};
	font: \${componentForm.input.shared.description.font};
	letter-spacing: \${componentForm.input.shared.description.letterSpacing};
	font-variation-settings: "wdth" \${componentForm.input.shared.description.fontWidth};
}

.js-stand-select {
	display: \${componentSelect.shared.button.display};
	justify-content: \${componentSelect.shared.button.justifyContent};
	align-items: \${componentSelect.shared.button.alignItems};
	background-color: \${componentSelect.shared.button.backgroundColor};
	border: \${componentSelect.shared.button.border};
	border-radius: \${componentSelect.shared.button.borderRadius};
	height: \${componentSelect.shared.button.height};
	padding-left: \${componentSelect.shared.button.paddingLeft};
	padding-right: \${componentSelect.shared.button.paddingRight};
	margin-top: \${componentSelect.shared.button.marginTop};
	color: \${componentSelect.shared.button.color};

	font: \${componentSelect.shared.button.typography.font};
	letter-spacing: \${componentSelect.shared.button.typography.letterSpacing};
	font-variation-settings: "wdth" \${componentSelect.shared.button.typography.fontWidth};

	&:hover {
		background: \${componentSelect.shared.hover.backgroundColor};
	}

	&:active {
		background: \${componentSelect.shared.pressed.backgroundColor};
	}

	&:focus-visible {
		outline: \${componentSelect.shared.button.focused.outline};
		outline-offset: \${componentSelect.shared.button.focused['outline-offset']};
	}

	&:disabled {
		cursor: \${componentSelect.shared.button.disabled.cursor};
		background-color: \${componentSelect.shared.button.disabled.backgroundColor};
		color: \${componentSelect.shared.button.disabled.color};
		border: \${componentSelect.shared.button.disabled.border};
	}
}
\`);

// update the document with the sheet
document.adoptedStyleSheets.push(sheet);

document.getElementById("app").innerHTML = \`
	<div class="js-stand-select-container">
		<label>Select</label>
		<select class="js-stand-select">
			<option>Option 1</option>
			<option>Option 2</option>
		</select>
	</div>
\`;
`;
