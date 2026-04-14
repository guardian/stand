// Component Name
export const componentName = 'TextArea';

// TextArea - React sandbox example
export const componentTsx = /* javascript */ `import { TextArea } from '@guardian/stand/text-area';

export const Component = () => (
	<TextArea
			label="Description"
			description="This is a description for the text area."
		/>
);
`;

// TextArea - Custom component - CSS example
export const componentCss = /* css */ `
/* import the textarea, form and inline message styles */
@import '@guardian/stand/component/inlineMessage.css';
@import '@guardian/stand/component/form.css';
@import '@guardian/stand/component/textArea.css';

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

.stand-text-area {
	display: var(--component-textArea-shared-display);
}

/* form input container styles */

.stand-form-input-container {
	display: var(--component-form-input-shared-container-display);
	flex-direction: var(--component-form-input-shared-container-flex-direction);
	gap: var(--component-form-input-shared-container-gap);
	width: var(--component-form-input-shared-container-width);
}

.stand-form-input-container.sm {
	max-width: var(--component-form-input-sm-container-max-width);
}

.stand-form-input-container.md {
	max-width: var(--component-form-input-md-container-max-width);
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

/* text area styles */

.stand-text-area {
	background-color: var(--component-text-area-shared-background-color);
	border-radius: var(--component-text-area-shared-border-radius);
	border: var(--component-text-area-shared-border);
	color: var(--component-text-area-shared-color);
	cursor: var(--component-text-area-shared-cursor);
	margin-top: var(--component-text-area-shared-margin-top);
	padding-top: var(--component-text-area-shared-padding-top);
	padding-right: var(--component-text-area-shared-padding-right);
	padding-bottom: var(--component-text-area-shared-padding-bottom);
	padding-left: var(--component-text-area-shared-padding-left);
}

.stand-text-area[disabled] {
	background-color: var(--component-text-area-shared-disabled-background-color);
	border: var(--component-text-area-shared-disabled-border);
	color: var(--component-text-area-shared-disabled-color);
	cursor: var(--component-text-area-shared-disabled-cursor);
}

.stand-text-area[data-invalid] {
	border: var(--component-text-area-shared-error-border);
}

.stand-text-area.md {
	height: var(--component-text-area-shared-height);
	font: var(--component-text-area-md-typography-font);
	letter-spacing: var(--component-text-area-md-typography-letter-spacing);
	font-variation-settings: "wdth" var(--component-text-area-md-typography-font-width);
}

.stand-text-area.sm {
	height: var(--component-text-area-shared-height);
	font: var(--component-text-area-sm-typography-font);
	letter-spacing: var(--component-text-area-sm-typography-letter-spacing);
	font-variation-settings: "wdth" var(--component-text-area-sm-typography-font-width);
}
`;

export const componentHtml = /* html */ `<div class="container">
	<div class="stand-form-input-container md">
		<label for="name">Name</label>
		<span class="description">This is a description for the text area.</span>
		<textarea id="name" class="stand-text-area md" type="text"></textarea>
	</div>
	<div class="stand-form-input-container sm">
		<label for="story">Tell us a story</label>
		<textarea
			id="story"
			class="stand-text-area sm"
			type="text"
			data-invalid
		>It was a dark and stormy night...</textarea>
		<span class="stand-inline-message stand-inline-message-error"><span class="material-symbols">warning</span> Story is below character count</span>
	</div>
	<div class="stand-form-input-container md" data-disabled>
		<label for="notes">Notes</label>
		<textarea
			id="notes"
			class="stand-text-area md"
			type="text"
			disabled
		></textarea>
	</div>
</div>
`;

// TextArea - Custom component - JS example
export const componentJs = /* javascript */ `
import { componentTextArea, componentForm, componentInlineMessage } from "@guardian/stand";

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

.js-stand-form-input-container.sm {
	max-width: \${componentForm.input.sm.container['max-width']};
}

.js-stand-form-input-container.md {
	max-width: \${componentForm.input.md.container['max-width']};
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

/* text area styles */

.js-stand-text-area {
	background-color: \${componentTextArea.shared['background-color']};
	border-radius: \${componentTextArea.shared['border-radius']};
	border: \${componentTextArea.shared.border};
	color: \${componentTextArea.shared.color};
	cursor: \${componentTextArea.shared.cursor};
	margin-top: \${componentTextArea.shared['margin-top']};
	padding-top: \${componentTextArea.shared.padding.top};
	padding-right: \${componentTextArea.shared.padding.right};
	padding-bottom: \${componentTextArea.shared.padding.bottom};
	padding-left: \${componentTextArea.shared.padding.left};
}

.js-stand-text-area[disabled] {
	background-color: \${componentTextArea.shared.disabled.backgroundColor};
	border: \${componentTextArea.shared.disabled.border};
	color: \${componentTextArea.shared.disabled.color};
	cursor: \${componentTextArea.shared.disabled.cursor};
}

.js-stand-text-area[data-invalid] {
	border: \${componentTextArea.shared.errorBorder};
}

.js-stand-text-area.md {
	height: \${componentTextArea.shared.height};
	font: \${componentTextArea.md.typography.font};
	letter-spacing: \${componentTextArea.md.typography.letterSpacing};
	font-variation-settings: "wdth" \${componentTextArea.md.typography.fontWidth};
}

.js-stand-text-area.sm {
	height: \${componentTextArea.shared.height};
	font: \${componentTextArea.sm.typography.font};
	letter-spacing: \${componentTextArea.sm.typography.letterSpacing};
	font-variation-settings: "wdth" \${componentTextArea.sm.typography.fontWidth};
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
		<textarea id="name" class="js-stand-text-area md"></textarea>
	</div>
	<div class="js-stand-form-input-container sm">
		<label for="story">Story</label>
		<textarea
			id="story"
			class="js-stand-text-area sm"
		>It was a dark and stormy night...</textarea>
		<span class="js-stand-inline-message js-stand-inline-message-error"><span class="material-symbols">warning</span> Username is already taken</span>
	</div>
	<div class="js-stand-form-input-container md" data-disabled>
		<label for="notes">Notes</label>
		<textarea
			id="notes"
			class="js-stand-text-area md"
			type="text"
			disabled
		 </textarea>
	</div>
</div>
\`;
`;
