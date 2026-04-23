// Component Name
export const componentName = 'TextInput';

// TextInput - React sandbox example
export const componentTsx = /* javascript */ `import { TextInput } from '@guardian/stand/text-input';

export const Component = () => (
	<>
		<TextInput
			label="Name"
			description="This is a description for the text input."
		/>

		<TextInput
			size="sm"
			label="Username"
			isInvalid
			defaultValue="guardian_user"
			error="Username is already taken"
		/>

		<TextInput
			label="Password"
			description="Showing a different type"
			type="password"
		/>

		<TextInput label="Notes" isDisabled defaultValue="Read only content" />
	</>
);
`;

// TextInput - Custom component - CSS example
export const componentCss = /* css */ `
/* import the text input, form, inline message styles */
@import '@guardian/stand/component/inlineMessage.css';
@import '@guardian/stand/component/form.css';
@import '@guardian/stand/component/textInput.css';

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

/* text input styles */

.stand-text-input {
	background-color: var(--component-text-input-shared-background-color);
	border-radius: var(--component-text-input-shared-border-radius);
	border: var(--component-text-input-shared-border);
	color: var(--component-text-input-shared-color);
	cursor: var(--component-text-input-shared-cursor);
	margin-top: var(--component-text-input-shared-margin-top);
	padding-top: var(--component-text-input-shared-padding-top);
	padding-right: var(--component-text-input-shared-padding-right);
	padding-bottom: var(--component-text-input-shared-padding-bottom);
	padding-left: var(--component-text-input-shared-padding-left);
}

.stand-text-input[disabled] {
	background-color: var(--component-text-input-shared-disabled-background-color);
	border: var(--component-text-input-shared-disabled-border);
	color: var(--component-text-input-shared-disabled-color);
	cursor: var(--component-text-input-shared-disabled-cursor);
}

.stand-text-input[data-invalid] {
	border: var(--component-text-input-shared-error-border);
}

.stand-text-input.md {
	height: var(--component-text-input-md-height);
	font: var(--component-text-input-md-typography-font);
	letter-spacing: var(--component-text-input-md-typography-letter-spacing);
	font-variation-settings: "wdth" var(--component-text-input-md-typography-font-width);
}

.stand-text-input.sm {
	height: var(--component-text-input-sm-height);
	font: var(--component-text-input-sm-typography-font);
	letter-spacing: var(--component-text-input-sm-typography-letter-spacing);
	font-variation-settings: "wdth" var(--component-text-input-sm-typography-font-width);
}
`;

export const componentHtml = /* html */ `<div class="container flow-column">
	<div class="stand-form-input-container md">
		<label for="name">Name</label>
		<span class="description">This is a description for the text input.</span>
		<input id="name" class="stand-text-input md" type="text" />
	</div>
	<div class="stand-form-input-container sm">
		<label for="username">Username</label>
		<input
			id="username"
			class="stand-text-input sm"
			type="text"
			value="guardian_user"
			data-invalid
		/>
		<span class="stand-inline-message stand-inline-message-error"><span class="material-symbols">warning</span> Username is already taken</span>
	</div>
	<div class="stand-form-input-container md">
		<label for="password">Password</label>
		<span class="description">Showing a different type</span>
		<input id="password" class="stand-text-input md" type="password" />
	</div>
	<div class="stand-form-input-container md" data-disabled>
		<label for="notes">Notes</label>
		<input
			id="notes"
			class="stand-text-input md"
			type="text"
			value="Read only content"
			disabled
		/>
	</div>
</div>
`;

// TextInput - Custom component - JS example
export const componentJs = /* javascript */ `
import { componentTextInput, componentForm, componentInlineMessage } from "@guardian/stand";

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
	flex-direction: \${componentForm.input.shared.container['flex-direction']};
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
	color: \${componentForm.input.shared.label.disabled.color};
}

.js-stand-form-input-container > span.description {
	color: \${componentForm.input.shared.description.color};
	font: \${componentForm.input.shared.description.typography.font};
	letter-spacing: \${componentForm.input.shared.description.typography.letterSpacing};
	font-variation-settings: "wdth" \${componentForm.input.shared.description.typography.fontWidth};
}

.js-stand-form-input-container[data-disabled] > span.description {
	color: \${componentForm.input.shared.description.disabled.color};
}

/* text input styles */

.js-stand-text-input {
	background-color: \${componentTextInput.shared['background-color']};
	border-radius: \${componentTextInput.shared['border-radius']};
	border: \${componentTextInput.shared.border};
	color: \${componentTextInput.shared.color};
	cursor: \${componentTextInput.shared.cursor};
	margin-top: \${componentTextInput.shared['margin-top']};
	padding-top: \${componentTextInput.shared.padding.top};
	padding-right: \${componentTextInput.shared.padding.right};
	padding-bottom: \${componentTextInput.shared.padding.bottom};
	padding-left: \${componentTextInput.shared.padding.left};
}

.js-stand-text-input[disabled] {
	background-color: \${componentTextInput.shared.disabled.backgroundColor};
	border: \${componentTextInput.shared.disabled.border};
	color: \${componentTextInput.shared.disabled.color};
	cursor: \${componentTextInput.shared.disabled.cursor};
}

.js-stand-text-input[data-invalid] {
	border: \${componentTextInput.shared.errorBorder};
}

.js-stand-text-input.md {
	height: \${componentTextInput.md.height};
	font: \${componentTextInput.md.typography.font};
	letter-spacing: \${componentTextInput.md.typography.letterSpacing};
	font-variation-settings: "wdth" \${componentTextInput.md.typography.fontWidth};
}

.js-stand-text-input.sm {
	height: \${componentTextInput.sm.height};
	font: \${componentTextInput.sm.typography.font};
	letter-spacing: \${componentTextInput.sm.typography.letterSpacing};
	font-variation-settings: "wdth" \${componentTextInput.sm.typography.fontWidth};
}
\`);

// update the document with the sheet
document.adoptedStyleSheets.push(sheet);

// modify the dom with the button components using the generated stylesheet
document.getElementById("app").innerHTML = \`
<div class="container flow-column">
	<div class="js-stand-form-input-container md">
		<label for="name">Name</label>
		<span class="description">This is a description for the text input.</span>
		<input id="name" class="js-stand-text-input md" type="text" />
	</div>
	<div class="js-stand-form-input-container sm">
		<label for="username">Username</label>
		<input
			id="username"
			class="js-stand-text-input sm"
			type="text"
		/>
		<span class="js-stand-inline-message js-stand-inline-message-error"><span class="material-symbols">warning</span> Username is already taken</span>
	</div>
	<div class="js-stand-form-input-container md">
		<label for="password">Password</label>
		<span class="description">Showing a different type</span>
		<input id="password" class="js-stand-text-input md" type="password" />
	</div>
	<div class="js-stand-form-input-container md" data-disabled>
		<label for="notes">Notes</label>
		<input
			id="notes"
			class="js-stand-text-input md"
			type="text"
			value="Read only content"
			disabled
		 />
	</div>
</div>
\`;
`;
