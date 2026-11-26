export const componentName = 'NumberInput';

export const componentTsx = /* javascript */ `import { NumberInput } from '@guardian/stand/NumberInput';

export const Component = () => (
	<>
		<NumberInput
			label="Quantity"
			description="Choose a quantity between 0 and 10."
			defaultValue={4}
			minValue={0}
			maxValue={10}
		/>
		<NumberInput
			label="Distance"
			size="sm"
			defaultValue={1.5}
			step={0.5}
			formatOptions={{ maximumFractionDigits: 1 }}
		/>
	</>
);
`;

export const componentCss = /* css */ `@import '@guardian/stand/component/numberInput.css';
@import '@guardian/stand/component/form.css';

.number-input-label {
	color: var(--component-form-input-shared-label-color);
	font: var(--component-form-input-md-label-typography-font);
}
.number-input {
	box-sizing: border-box;
	display: flex;
	align-items: center;
	max-width: var(--component-number-input-shared-max-width);
	height: var(--component-number-input-md-height);
	margin-top: var(--component-number-input-shared-margin-top);
	background: var(--component-number-input-shared-background-color);
	border: var(--component-number-input-shared-border);
	border-radius: var(--component-number-input-shared-border-radius);
	color: var(--component-number-input-shared-color);
}
.number-input:focus-within {
	outline: var(--component-number-input-shared-focused-outline);
}
.number-input input {
	box-sizing: border-box;
	flex: 1;
	width: 100%;
	min-width: 0;
	height: 100%;
	padding: 0 var(--component-number-input-shared-padding-inline);
	background: transparent;
	border: 0;
	outline: none;
	color: inherit;
	font: var(--component-number-input-md-typography-font);
	font-variation-settings: "wdth" var(--component-number-input-md-typography-font-width);
	letter-spacing: var(--component-number-input-md-typography-letter-spacing);
	appearance: textfield;
}
.number-input input::-webkit-inner-spin-button,
.number-input input::-webkit-outer-spin-button {
	appearance: none;
	margin: 0;
}
.number-input button {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	align-self: stretch;
	flex: 0 0 var(--component-number-input-md-button-width);
	padding: 0;
	background: transparent;
	border: 0;
	color: var(--component-number-input-shared-button-color);
	cursor: pointer;
}
.number-input button:hover {
	background: var(--component-number-input-shared-button-hovered-background-color);
}
.number-input button:active {
	background: var(--component-number-input-shared-button-pressed-background-color);
}
.number-input button:focus-visible {
	outline: var(--component-number-input-shared-focused-outline);
}
.number-input-divider {
	flex: 0 0 var(--component-number-input-shared-divider-width);
	height: var(--component-number-input-md-divider-height);
	background: var(--component-number-input-shared-divider-color);
}
`;

export const componentHtml = /* html */ `<label class="number-input-label" for="quantity">Quantity</label>
<div class="number-input">
	<input id="quantity" type="number" value="4" min="0" max="10" />
	<button type="button" aria-label="Decrement quantity">
		<span class="material-symbols" aria-hidden="true">remove</span>
	</button>
	<span class="number-input-divider" aria-hidden="true"></span>
	<button type="button" aria-label="Increment quantity">
		<span class="material-symbols" aria-hidden="true">add</span>
	</button>
</div>`;

export const componentJs = /* javascript */ `import { componentNumberInput, componentForm, componentIcon } from '@guardian/stand';

const theme = componentNumberInput;
document.getElementById('app').innerHTML = \`
	<label for="quantity" style="font: \${componentForm.input.md.label.typography.font}">Quantity</label>
	<div style="box-sizing: border-box; display: flex; align-items: center; max-width: \${theme.shared.maxWidth}; height: \${theme.md.height}; margin-top: \${theme.shared.marginTop}; border: \${theme.shared.border}; border-radius: \${theme.shared.borderRadius}; background: \${theme.shared.backgroundColor}; color: \${theme.shared.color}">
		<input id="quantity" type="number" value="4" min="0" max="10" style="box-sizing: border-box; flex: 1; width: 100%; min-width: 0; height: 100%; padding: 0 \${theme.shared.paddingInline}; border: 0; background: transparent; color: inherit; font: \${theme.md.typography.font}; appearance: textfield" />
		<button type="button" data-action="decrement" aria-label="Decrement quantity" style="display: inline-flex; align-items: center; justify-content: center; align-self: stretch; flex: 0 0 \${theme.md.buttonWidth}; padding: 0; border: 0; background: transparent; color: \${theme.shared.button.color}">
			<span class="material-symbols" aria-hidden="true" style="font-size: \${componentIcon.md.size}">remove</span>
		</button>
		<span aria-hidden="true" style="flex: 0 0 \${theme.shared.divider.width}; height: \${theme.md.dividerHeight}; background: \${theme.shared.divider.color}"></span>
		<button type="button" data-action="increment" aria-label="Increment quantity" style="display: inline-flex; align-items: center; justify-content: center; align-self: stretch; flex: 0 0 \${theme.md.buttonWidth}; padding: 0; border: 0; background: transparent; color: \${theme.shared.button.color}">
			<span class="material-symbols" aria-hidden="true" style="font-size: \${componentIcon.md.size}">add</span>
		</button>
	</div>
\`;

const input = document.getElementById('quantity');
document.querySelector('[data-action="decrement"]').addEventListener('click', () => input.stepDown());
document.querySelector('[data-action="increment"]').addEventListener('click', () => input.stepUp());
`;
