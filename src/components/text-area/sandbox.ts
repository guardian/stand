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
	height: var(--component-text-area-md-height);
	font: var(--component-text-area-md-typography-font);
	letter-spacing: var(--component-text-area-md-typography-letter-spacing);
	font-variation-settings: "wdth" var(--component-text-area-md-typography-font-width);
}

.stand-text-area.sm {
	height: var(--component-text-area-sm-height);
	font: var(--component-text-area-sm-typography-font);
	letter-spacing: var(--component-text-area-sm-typography-letter-spacing);
	font-variation-settings: "wdth" var(--component-text-area-sm-typography-font-width);
}
`;

export const componentHtml = /* html */ `<div class="container">
	<div class="stand-form-area-container md">
		<label for="name">Name</label>
		<span class="description">This is a description for the text area.</span>
		<textarea id="name" class="stand-text-area md" type="text" />
	</div>
	<div class="stand-form-area-container sm">
		<label for="story">Tell us a story</label>
		<textarea
			id="username"
			class="stand-text-input sm"
			type="text"
			value="story"
			data-invalid
		/>
		<span class="stand-inline-message stand-inline-message-error"><span class="material-symbols">warning</span> Story is below character count</span>
	</div>
	<div class="stand-form-input-container md" data-disabled>
		<label for="notes">Notes</label>
		<textarea
			id="notes"
			class="stand-text-input md"
			type="text"
			value="Read only content"
			disabled
		/>
	</div>
</div>
`;

// TextArea - Custom component - JS example
export const componentJs = /* javascript */ `
import { componentTextArea } from "@guardian/stand";

const style = \`
	display: \${componentTextArea.shared.display};
\`;

document.getElementById("app").innerHTML = \`
	<div style="\${style}">Hello</div>
\`;
`;
