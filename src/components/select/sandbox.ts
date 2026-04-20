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

.stand-select-container {
	display: var(--component-select-shared-display);
	flex-direction: var(--component-select-shared-flex-direction);
	gap: var(--component-select-shared-gap);

	max-width: var(--component-select-shared-maxWidth);
	width: var(--component-select-shared-width);
}

.stand-select {
		display: var(--component-select-button-display);
		justify-content: var(--component-select-button-justify-content);
		align-items: var(--component-select-button-align-items);
		background-color: var(--component-select-button-background-color);
		border: var(--component-select-button-border);
		border-radius: var(--component-select-button-border-radius);
		height: var(--component-select-button-height);
		padding-left: var(--component-select-button-padding-left);
		padding-right: var(--component-select-button-padding-right);
		margin-top: var(--component-select-button-margin-top);
		color: var(--component-select-button-color);

		font: var(--component-select-button-body-md-typography-font);
		letter-spacing: var(--component-select-button-body-md-typography-letter-spacing);
		font-variation-settings: "wdth" var(--component-select-button-body-md-typography-font-width);


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
import { componentSelect } from "@guardian/stand";

// example of creating a stylesheet in js
const sheet = new CSSStyleSheet();

// apply the rules to the sheet
sheet.replaceSync(\`

.js-stand-select-container {
	display: \${componentSelect.shared.display};
	flex-direction: \${componentSelect.shared.flexDirection};
	gap: \${componentSelect.shared.gap};

	max-width: \${componentSelect.shared.maxWidth};
	width: \${componentSelect.shared.width};
}

.js-stand-select {
	display: \${componentSelect.button.display};
	justify-content: \${componentSelect.button.justifyContent};
	align-items: \${componentSelect.button.alignItems};
	background-color: \${componentSelect.button.backgroundColor};
	border: \${componentSelect.button.border};
	border-radius: \${componentSelect.button.borderRadius};
	height: \${componentSelect.button.height};
	padding-left: \${componentSelect.button.paddingLeft};
	padding-right: \${componentSelect.button.paddingRight};
	margin-top: \${componentSelect.button.marginTop};
	color: \${componentSelect.button.color};

	font: \${componentSelect.button.typography.font};
	letter-spacing: \${componentSelect.button.typography.letterSpacing};
	font-variation-settings: "wdth" \${componentSelect.button.typography.fontWidth};

	&:hover {
		background: \${componentSelect.shared.hover.backgroundColor};
	}

	&:active {
		background: \${componentSelect.shared.pressed.backgroundColor};
	}

	&:focus-visible {
		outline: \${componentSelect.button.focused.outline};
		outline-offset: \${componentSelect.button.focused['outline-offset']};
	}

	&:disabled {
		cursor: \${componentSelect.button.disabled.cursor};
		background-color: \${componentSelect.button.disabled.backgroundColor};
		color: \${componentSelect.button.disabled.color};
		border: \${componentSelect.button.disabled.border};
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
