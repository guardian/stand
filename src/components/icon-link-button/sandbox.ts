// Component Name
export const componentName = 'IconLinkButton';

// React sandbox example
export const componentTsx = /* javascript */ `import { IconLinkButton } from "@guardian/stand/icon-link-button";

export const Component = () => (
	<>
		<IconLinkButton
          href="#"
          symbol="raven"
          ariaLabel="Summon a raven"
        />
        <IconLinkButton
          href="#"
          isDisabled
          variant="emphasised-secondary"
          symbol="owl"
          ariaLabel="Consult with an owl"
        />
	</>
);

`;

// Custom component - CSS example
export const componentCss = /* css */ `@import '@guardian/stand/component/button.css';

    /* shared button styles for all variants */
	.stand-icon-button {
		display: var(--component-button-shared-display);
		-webkit-appearance: var(--component-button-shared-webkit-appearance);
		text-align: var(--component-button-shared-text-align);
		box-shadow: var(--component-button-shared-box-shadow);
		text-decoration: var(--component-button-shared-text-decoration);
		cursor: var(--component-button-shared-cursor);
		justify-content: var(--component-button-shared-justify-content);
		align-items: var(--component-button-shared-align-items);
	}
	.stand-icon-button:focus-visible {
		outline: var(--component-button-shared-focus-visible-outline);
		outline-offset: var(--component-button-shared-focus-visible-outline-offset);
	}
	.stand-icon-button:disabled {
		cursor: var(--component-button-shared-disabled-cursor);
	}

	/* example setup of button/link button style using md size and emphasised primary variant */
	.stand-icon-button-emphasised-primary {
		color: var(--component-button-emphasised-primary-shared-color);
		background: var(
			--component-button-emphasised-primary-shared-background-color
		);
		width: var(--component-button-emphasised-primary-md-icon-button-width);
		height: var(--component-button-emphasised-primary-md-height);
		padding: 0;
		font: var(--component-button-emphasised-primary-md-typography-font);
		letter-spacing: var(
			--component-button-emphasised-primary-md-typography-letter-spacing
		);
		font-variation-settings: "wdth"
			var(--component-button-emphasised-primary-md-typography-font-width);
		border: var(--component-button-emphasised-primary-shared-border);
		border-radius: var(
			--component-button-emphasised-primary-shared-border-radius
		);
	}
	.stand-icon-button-emphasised-primary:hover {
		background: var(
			--component-button-emphasised-primary-shared-hover-background-color
		);
		border: var(--component-button-emphasised-primary-shared-hover-border);
	}
	.stand-icon-button-emphasised-primary:active {
		background: var(
			--component-button-emphasised-primary-shared-active-background-color
		);
		border: var(--component-button-emphasised-primary-shared-active-border);
	}
	.stand-icon-button-emphasised-primary:disabled {
		color: var(--component-button-emphasised-primary-shared-disabled-color);
		background: var(
			--component-button-emphasised-primary-shared-disabled-background-color
		);
		border: var(--component-button-emphasised-primary-shared-disabled-border);
	}
	.stand-icon-button-emphasised-primary > .material-symbols {
		font-size: var(--component-button-emphasised-primary-md-icon-size);
	}

	/* example setup of button/link button style using md size and neutral secondary variant */
	.stand-icon-button-neutral-secondary {
		color: var(--component-button-neutral-secondary-shared-color);
		background: var(--component-button-neutral-secondary-shared-background-color);
		width: var(--component-button-neutral-secondary-md-icon-button-width);
		height: var(--component-button-neutral-secondary-md-height);
		padding: 0;
		font: var(--component-button-neutral-secondary-md-typography-font);
		letter-spacing: var(
			--component-button-neutral-secondary-md-typography-letter-spacing
		);
		font-variation-settings: "wdth"
			var(--component-button-neutral-secondary-md-typography-font-width);
		border: var(--component-button-neutral-secondary-shared-border);
		border-radius: var(--component-button-neutral-secondary-shared-border-radius);
	}
	.stand-icon-button-neutral-secondary:hover {
		background: var(
			--component-button-neutral-secondary-shared-hover-background-color
		);
		border: var(--component-button-neutral-secondary-shared-hover-border);
	}
	.stand-icon-button-neutral-secondary:active {
		background: var(
			--component-button-neutral-secondary-shared-active-background-color
		);
		border: var(--component-button-neutral-secondary-shared-active-border);
	}
	.stand-icon-button-neutral-secondary:disabled, .stand-icon-button-neutral-secondary[data-disabled] {
		color: var(--component-button-neutral-secondary-shared-disabled-color);
		background: var(
			--component-button-neutral-secondary-shared-disabled-background-color
		);
		border: var(--component-button-neutral-secondary-shared-disabled-border);
	}
	.stand-icon-button-neutral-secondary > .material-symbols {
		font-size: var(--component-button-neutral-secondary-md-icon-size);
	}

`;

export const componentHtml = /* html */ `<div class="container">
    <a class="stand-icon-button stand-icon-button-emphasised-primary" href="#" title="Summon a raven" aria-label="Summon a raven"><span class="material-symbols" aria-hidden="true">raven</span></a>
    <a class="stand-icon-button stand-icon-button-neutral-secondary" data-disabled title="Consult with an owl" aria-label="Consult with an owl"><span class="material-symbols" aria-hidden="true">owl</span></a>
</div>
`;

// Custom component - JS example
export const componentJs = /* javascript */ `	// for ts/js
	import { componentButton } from "@guardian/stand";

	// example of creating a stylesheet in js
	const sheet = new CSSStyleSheet();

	// apply the rules to the sheet
	sheet.replaceSync(\`
	/* shared button styles for all variants */
	.js-stand-icon-button {
		display: \${componentButton.shared.display};
		-webkit-appearance: \${componentButton.shared["-webkit-appearance"]};
		text-align: \${componentButton.shared["text-align"]};
		box-shadow: \${componentButton.shared["box-shadow"]};
		text-decoration: \${componentButton.shared["text-decoration"]};
		cursor: \${componentButton.shared.cursor};
		justify-content: \${componentButton.shared["justify-content"]};
		align-items: \${componentButton.shared["align-items"]};
	}
	.js-stand-icon-button:focus-visible {
		outline: \${componentButton.shared[":focus-visible"].outline};
		outline-offset: \${componentButton.shared[":focus-visible"]["outline-offset"]};
	}
	.js-stand-icon-button:disabled {
		cursor: \${componentButton.shared[":disabled"].cursor};
	}

	/* example setup of button/link button style using md size and emphasised primary variant */
	.js-stand-icon-button-emphasised-primary {
		color: \${componentButton["emphasised-primary"].shared.color};
		background: \${componentButton["emphasised-primary"].shared.backgroundColor};
		width: \${componentButton["emphasised-primary"].md.iconButton.width};
		height: \${componentButton["emphasised-primary"].md.height};
		padding: 0;
		font: \${componentButton["emphasised-primary"].md.typography.font};
		letter-spacing: \${componentButton["emphasised-primary"].md.typography.letterSpacing};
		font-variation-settings: 'wdth'
		\${componentButton["emphasised-primary"].md.typography.fontWidth};
		border: \${componentButton["emphasised-primary"].shared.border};
		border-radius: \${componentButton["emphasised-primary"].shared.borderRadius};
	}
	.js-stand-icon-button-emphasised-primary:hover {
		background: \${componentButton["emphasised-primary"].shared[":hover"].backgroundColor};
		border: \${componentButton["emphasised-primary"].shared[":hover"].border}
	}
	.js-stand-icon-button-emphasised-primary:active {
		background: \${componentButton["emphasised-primary"].shared[":active"].backgroundColor};
		border: \${componentButton["emphasised-primary"].shared[":active"].border};
	}
	.js-stand-icon-button-emphasised-primary:disabled, .js-stand-icon-button-emphasised-primary[data-disabled] {
		color: \${componentButton["emphasised-primary"].shared[":disabled"].color};
		background: \${componentButton["emphasised-primary"].shared[":disabled"].backgroundColor};
		border: \${componentButton["emphasised-primary"].shared[":disabled"].border};
	}
	.js-stand-icon-button-emphasised-primary > .material-symbols {
		font-size: \${componentButton["emphasised-primary"].md.icon.size}
	}

	/* example setup of button/link button style using md size and neutral secondary variant */
	.js-stand-icon-button-neutral-secondary {
		color: \${componentButton["neutral-secondary"].shared.color};
		background: \${componentButton["neutral-secondary"].shared.backgroundColor};
		width: \${componentButton["neutral-secondary"].md.iconButton.width};
		height: \${componentButton["neutral-secondary"].md.height};
		padding: 0;
		font: \${componentButton["neutral-secondary"].md.typography.font};
		letter-spacing: \${componentButton["neutral-secondary"].md.typography.letterSpacing};
		font-variation-settings: 'wdth'
		\${componentButton["neutral-secondary"].md.typography.fontWidth};
		border: \${componentButton["neutral-secondary"].shared.border};
		border-radius: \${componentButton["neutral-secondary"].shared.borderRadius};
	}
	.js-stand-icon-button-neutral-secondary:hover {
		background: \${componentButton["neutral-secondary"].shared[":hover"].backgroundColor};
		border: \${componentButton["neutral-secondary"].shared[":hover"].border};
	}
	.js-stand-icon-button-neutral-secondary:active {
		background: \${componentButton["neutral-secondary"].shared[":active"].backgroundColor};
		border: \${componentButton["neutral-secondary"].shared[":active"].border};
	}
	.js-stand-icon-button-neutral-secondary:disabled, .js-stand-icon-button-neutral-secondary[data-disabled] {
		color: \${componentButton["neutral-secondary"].shared[":disabled"].color};
		background: \${componentButton["neutral-secondary"].shared[":disabled"].backgroundColor};
		border: \${componentButton["neutral-secondary"].shared[":disabled"].border};
	}
	.js-stand-icon-button-neutral-secondary > .material-symbols {
		font-size: \${componentButton["neutral-secondary"].md.icon.size}
	}
	\`);

	// update the document with the sheet
	document.adoptedStyleSheets.push(sheet);

	// modify the dom with the button components using the generated stylesheet
	document.getElementById("app").innerHTML = \`
	<div class="container">
		<a class="js-stand-icon-button js-stand-icon-button-emphasised-primary" href="#" title="Summon a raven"><span class="material-symbols">raven</span></a>
		<a class="js-stand-icon-button js-stand-icon-button-neutral-secondary" data-disabled title="Consult with an owl"><span class="material-symbols">owl</span></a>
	</div>
	\`;

`;
