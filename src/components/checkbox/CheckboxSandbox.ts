// Component Name
export const componentName = 'Checkbox';

// Checkbox - React sandbox example
export const componentTsx = /* javascript */ `import { Checkbox } from '@guardian/stand/checkbox';

export const Component = () => (
	<>
		<Checkbox>Accept terms and conditions</Checkbox>

		<Checkbox isInvalid>Required option</Checkbox>

		<Checkbox isDisabled>Unavailable option</Checkbox>

		<Checkbox size="sm" isIndeterminate isSelected>
			Select all
		</Checkbox>
	</>
);
`;

// Checkbox - Custom component - CSS example
export const componentCss = /* css */ `
/* import the checkbox styles */
@import "@guardian/stand/component/checkbox.css";

.stand-checkbox {
  display: var(--component-checkbox-input-shared-display);
  position: var(--component-checkbox-input-shared-position);
  align-items: var(--component-checkbox-input-shared-align-items);
  gap: var(--component-checkbox-input-shared-gap);
  cursor: var(--component-checkbox-input-shared-cursor);
  color: var(--component-checkbox-input-shared-color);
}

.stand-checkbox.md {
  font: var(--component-checkbox-input-md-typography-font);
  letter-spacing: var(--component-checkbox-input-md-typography-letter-spacing);
  font-variation-settings: "wdth"
    var(--component-checkbox-input-md-typography-font-width);
}

.stand-checkbox.sm {
  font: var(--component-checkbox-input-sm-typography-font);
  letter-spacing: var(--component-checkbox-input-sm-typography-letter-spacing);
  font-variation-settings: "wdth"
	var(--component-checkbox-input-sm-typography-font-width);
}

.stand-checkbox > label {
  cursor: var(--component-checkbox-input-shared-cursor);
}

.stand-checkbox-indicator {
  /* Reset browser default styles for checkboxes */
  margin: 0;
  background-color: transparent;
  outline: none;

  /* component styles */
  cursor: var(--component-checkbox-input-shared-cursor);
  border: var(--component-checkbox-input-shared-indicator-border);
  border-radius: var(--component-checkbox-input-shared-indicator-border-radius);
  accent-color: var(
    --component-checkbox-input-shared-indicator-selected-background-color
  );
}

.stand-checkbox.md > .stand-checkbox-indicator {
  width: var(--component-checkbox-input-md-indicator-size);
  height: var(--component-checkbox-input-md-indicator-size);
}

.stand-checkbox.sm > .stand-checkbox-indicator {
  width: var(--component-checkbox-input-sm-indicator-size);
  height: var(--component-checkbox-input-sm-indicator-size);
}
`;

export const componentHtml = /* html */ `<div class="container flow-column">
	<div>
		Checkboxes can be built with the input HTML element, but this can be difficult to style. These examples only show basic size and color customisation.
	</div>
	<div class="stand-checkbox md">
    	<input class="stand-checkbox-indicator" type="checkbox" id="terms" name="terms" />
    	<label for="terms">Accept terms and conditions</label>
  	</div>
	<div class="stand-checkbox sm">
    	<input class="stand-checkbox-indicator" type="checkbox" id="terms" name="terms" />
    	<label for="terms">Required option</label>
  	</div>
</div>
`;

// Checkbox - Custom component - JS example
export const componentJs = /* javascript */ `
import { componentCheckbox } from "@guardian/stand";

// example of creating a stylesheet in js
const sheet = new CSSStyleSheet();

// apply the rules to the sheet
sheet.replaceSync(\`
  .js-stand-checkbox {
	display: \${componentCheckbox.input.shared.display};
	position: \${componentCheckbox.input.shared.position};
	align-items: \${componentCheckbox.input.shared['align-items']};
	gap: \${componentCheckbox.input.shared.gap};
	cursor: \${componentCheckbox.input.shared.cursor};
	color: \${componentCheckbox.input.shared.color};
	font: \${componentCheckbox.input.md.typography.font};
	letter-spacing: \${componentCheckbox.input.md.typography.letterSpacing};
	font-variation-settings: "wdth" \${componentCheckbox.input.md.typography.fontWidth};
  }

  .js-stand-checkbox.md {
	font: \${componentCheckbox.input.md.typography.font};
	letter-spacing: \${componentCheckbox.input.md.typography.letterSpacing};
	font-variation-settings: "wdth" \${componentCheckbox.input.md.typography.fontWidth};
  }

  .js-stand-checkbox.sm {
	font: \${componentCheckbox.input.sm.typography.font};
	letter-spacing: \${componentCheckbox.input.sm.typography.letterSpacing};
	font-variation-settings: "wdth" \${componentCheckbox.input.sm.typography.fontWidth};
  }

  .js-stand-checkbox > label {
	cursor: \${componentCheckbox.input.shared.cursor};
  }

  .js-stand-checkbox-indicator {
	/* Reset browser default styles for checkboxes */
	margin: 0;
	background-color: transparent;
	outline: none;

	/* component styles */
	cursor: \${componentCheckbox.input.shared.cursor};
	border: \${componentCheckbox.input.shared.indicator.border};
	border-radius: \${componentCheckbox.input.shared.indicator['border-radius']};
	accent-color: \${componentCheckbox.input.shared.indicator.selected['background-color']};
  }

  .js-stand-checkbox.md > .js-stand-checkbox-indicator {
	width: \${componentCheckbox.input.md.indicator.size};
	height: \${componentCheckbox.input.md.indicator.size};
  }

  .js-stand-checkbox.sm > .js-stand-checkbox-indicator {
	width: \${componentCheckbox.input.sm.indicator.size};
	height: \${componentCheckbox.input.sm.indicator.size};
  }
\`);

// update the document with the sheet
document.adoptedStyleSheets.push(sheet);

// modify the dom with the button components using the generated stylesheet
document.getElementById("app").innerHTML = \`
<div class="container flow-column">
	<div>
		Checkboxes can be built with the input HTML element, but this can be difficult to style. These examples only show basic size and color customisation.
	</div>
	<div class="js-stand-checkbox md">
		<input class="js-stand-checkbox-indicator" type="checkbox" id="terms" name="terms" />
		<label for="terms">Accept terms and conditions</label>
	</div>
	<div class="js-stand-checkbox sm">
		<input class="js-stand-checkbox-indicator" type="checkbox" id="terms" name="terms" />
		<label for="terms">Required option</label>
	</div>
</div>
\`;

`;
