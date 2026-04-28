// Component Name
export const componentName = 'CheckboxGroup';

// Checkbox - React sandbox example
export const componentTsx = /* javascript */ `import { Checkbox, CheckboxGroup } from '@guardian/stand/checkbox';

export const Component = () => (
	<>
		<CheckboxGroup label="Notifications" description="Choose what to receive.">
			<Checkbox value="email">Email</Checkbox>
			<Checkbox value="sms">SMS</Checkbox>
			<Checkbox value="push">Push notification</Checkbox>
		</CheckboxGroup>

		<CheckboxGroup
			label="Preferences"
			size="sm"
			isInvalid
			error="Please select at least one option."
		>
			<Checkbox value="news">News</Checkbox>
			<Checkbox value="offers">Offers</Checkbox>
		</CheckboxGroup>
	</>
);
`;

// Checkbox - Custom component - CSS example
export const componentCss = /* css */ `
/* import the checkbox, form, inline message styles */
@import '@guardian/stand/component/inlineMessage.css';
@import '@guardian/stand/component/form.css';
@import '@guardian/stand/component/checkbox.css';

/* inline message styles - error */
.stand-inline-message {
  display: var(--component-inline-message-shared-display);
  align-items: var(--component-inline-message-shared-align-items);
  gap: var(--component-inline-message-shared-gap);
  font: var(--component-inline-message-shared-typography-font);
  letter-spacing: var(
    --component-inline-message-shared-typography-letter-spacing
  );
  font-variation-settings: "wdth"
    var(--component-inline-message-shared-typography-font-width);
}

.stand-inline-message > .material-symbols {
  font-size: var(--component-inline-message-shared-icon-size);
}

.stand-inline-message > svg {
  width: var(--component-inline-message-shared-icon-size);
  height: var(--component-inline-message-shared-icon-size);
}

.stand-inline-message-error {
  color: var(--component-inline-message-error-color);
  fill: var(--component-inline-message-error-color);
}

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

.stand-form-input-container[data-disabled] > label {
	color: var(--component-form-input-shared-label-disabled-color);
}

.stand-form-input-container > span.description {
	color: var(--component-form-input-shared-description-color);
	font: var(--component-form-input-shared-description-typography-font);
	letter-spacing: var(--component-form-input-shared-description-typography-letter-spacing);
	font-variation-settings: "wdth" var(--component-form-input-shared-description-typography-font-width);
}

.stand-form-input-container[data-disabled] > span.description {
	color: var(--component-form-input-shared-description-disabled-color);
}

/* checkbox styles */

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

/* CheckboxGroup styles */

.stand-checkbox-group {
	display: var(--component-checkbox-group-shared-display);
	flex-direction: var(--component-checkbox-group-shared-flex-direction);
}

.stand-checkbox-group.sm {
	gap: var(--component-checkbox-group-sm-gap);
	margin-top: var(--component-checkbox-group-sm-margin-top);
}

.stand-checkbox-group.md {
	gap: var(--component-checkbox-group-md-gap);
	margin-top: var(--component-checkbox-group-md-margin-top);
}
`;

export const componentHtml = /* html */ `<div class="container flow-column">
	<div>
		Checkboxes can be built with the input HTML element, but this can be difficult to style. These examples only show basic size and color customisation.
	</div>
	<div class="stand-form-input-container md">
		<label>Notifications</label>
		<span class="description">Choose what to receive.</span>
		<div class="stand-checkbox-group md">
			<div class="stand-checkbox md">
				<input class="stand-checkbox-indicator" type="checkbox" id="email" name="email" />
				<label for="email">Email</label>
			</div>
			<div class="stand-checkbox md">
				<input class="stand-checkbox-indicator" type="checkbox" id="sms" name="sms" />
				<label for="sms">SMS</label>
			</div>
			<div class="stand-checkbox md">
				<input class="stand-checkbox-indicator" type="checkbox" id="push" name="push" />
				<label for="push">Push notification</label>
			</div>
		</div>
	</div>
	<div class="stand-form-input-container sm" data-invalid>
		<label>Preferences</label>
		<span class="description">Please select at least one option.</span>
		<div class="stand-checkbox-group sm">
			<div class="stand-checkbox sm">
				<input class="stand-checkbox-indicator" type="checkbox" id="news" name="news" />
				<label for="news">News</label>
			</div>
			<div class="stand-checkbox sm">
				<input class="stand-checkbox-indicator" type="checkbox" id="offers" name="offers" />
				<label for="offers">Offers</label>
			</div>
		</div>
		<span class="stand-inline-message stand-inline-message-error"><span class="material-symbols">warning</span> Username is already taken</span>
	</div>
</div>
`;

// Checkbox - Custom component - JS example
export const componentJs = /* javascript */ `
import { componentCheckbox, componentForm, componentInlineMessage } from "@guardian/stand";

// example of creating a stylesheet in js
const sheet = new CSSStyleSheet();

// apply the rules to the sheet
sheet.replaceSync(\`
/* inline message styles - error */
.js-stand-inline-message {
  display: \${componentInlineMessage.shared.display};
  align-items: \${componentInlineMessage.shared['align-items']};
  gap: \${componentInlineMessage.shared.gap};
  font: \${componentInlineMessage.shared.typography.font};
  letter-spacing: \${componentInlineMessage.shared.typography.letterSpacing};
  font-variation-settings: "wdth" \${componentInlineMessage.shared.typography.fontWidth};
}

.js-stand-inline-message > .material-symbols {
  font-size: \${componentInlineMessage.shared.icon.size};
}

.js-stand-inline-message > svg {
  width: \${componentInlineMessage.shared.icon.size};
  height: \${componentInlineMessage.shared.icon.size};
}

.js-stand-inline-message-error {
  color: \${componentInlineMessage.error.color};
  fill: \${componentInlineMessage.error.color};
}

/* form input container styles */

.js-stand-form-input-container {
	display: \${componentForm.input.shared.container.display};
	flex-direction: \${componentForm.input.shared.container["flex-direction"]};
	gap: \${componentForm.input.shared.container.gap};
	width: \${componentForm.input.shared.container.width};
}

.js-stand-form-input-container > label {
	color: \${componentForm.input.shared.label.color};
	font: \${componentForm.input.md.label.typography.font};
	letter-spacing: \${componentForm.input.md.label.typography.letterSpacing};
	font-variation-settings: "wdth" \${componentForm.input.md.label.typography.fontWidth};
}

.js-stand-form-input-container[data-disabled] > label {
	color: \${componentForm.input.shared.label.disabledColor};
}

.js-stand-form-input-container > span.description {
	color: \${componentForm.input.shared.description.color};
	font: \${componentForm.input.shared.description.typography.font};
	letter-spacing: \${componentForm.input.shared.description.typography.letterSpacing};
	font-variation-settings: "wdth" \${componentForm.input.shared.description.typography.fontWidth};
}

.js-stand-form-input-container[data-disabled] > span.description {
	color: \${componentForm.input.shared.description.disabledColor};
}

/* checkbox styles */

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

.js-stand-checkbox.sm {
  font: \${componentCheckbox.input.sm.typography.font};
  letter-spacing: \${componentCheckbox.input.sm.typography.letterSpacing};
  font-variation-settings: "wdth"
	\${componentCheckbox.input.sm.typography.fontWidth};
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

/* CheckboxGroup styles */

.js-stand-checkbox-group {
	display: \${componentCheckbox.group.shared.display};
	flex-direction: \${componentCheckbox.group.shared["flex-direction"]};
}

.js-stand-checkbox-group.sm {
	gap: \${componentCheckbox.group.sm.gap};
	margin-top: \${componentCheckbox.group.sm.marginTop};
}

.js-stand-checkbox-group.md {
	gap: \${componentCheckbox.group.md.gap};
	margin-top: \${componentCheckbox.group.md.marginTop};
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
	<div class="js-stand-form-input-container md">
		<label>Notifications</label>
		<span class="description">Choose what to receive.</span>
		<div class="js-stand-checkbox-group md">
			<div class="js-stand-checkbox md">
				<input class="js-stand-checkbox-indicator" type="checkbox" id="email" name="email" />
				<label for="email">Email</label>
			</div>
			<div class="js-stand-checkbox md">
				<input class="js-stand-checkbox-indicator" type="checkbox" id="sms" name="sms" />
				<label for="sms">SMS</label>
			</div>
			<div class="js-stand-checkbox md">
				<input class="js-stand-checkbox-indicator" type="checkbox" id="push" name="push" />
				<label for="push">Push notification</label>
			</div>
		</div>
	</div>
	<div class="js-stand-form-input-container sm" data-invalid>
		<label>Preferences</label>
		<span class="description">Please select at least one option.</span>
		<div class="js-stand-checkbox-group sm">
			<div class="js-stand-checkbox sm">
				<input class="js-stand-checkbox-indicator" type="checkbox" id="news" name="news" />
				<label for="news">News</label>
			</div>
			<div class="js-stand-checkbox sm">
				<input class="js-stand-checkbox-indicator" type="checkbox" id="offers" name="offers" />
				<label for="offers">Offers</label>
			</div>
		</div>
		<span class="js-stand-inline-message js-stand-inline-message-error"><span class="material-symbols">warning</span> Username is already taken</span>
	</div>
</div>
\`;

`;
