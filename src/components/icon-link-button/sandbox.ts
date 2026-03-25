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
          variant="secondary"
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
	.stand-icon-button-primary {
		color: var(--component-button-primary-shared-color);
		background: var(
			--component-button-primary-shared-background-color
		);
		width: var(--component-button-primary-md-icon-button-width);
		height: var(--component-button-primary-md-height);
		padding: 0;
		font: var(--component-button-primary-md-typography-font);
		letter-spacing: var(
			--component-button-primary-md-typography-letter-spacing
		);
		font-variation-settings: "wdth"
			var(--component-button-primary-md-typography-font-width);
		border: var(--component-button-primary-shared-border);
		border-radius: var(
			--component-button-primary-shared-border-radius
		);
	}
	.stand-icon-button-primary:hover {
		background: var(
			--component-button-primary-shared-hover-background-color
		);
		border: var(--component-button-primary-shared-hover-border);
	}
	.stand-icon-button-primary:active {
		background: var(
			--component-button-primary-shared-active-background-color
		);
		border: var(--component-button-primary-shared-active-border);
	}
	.stand-icon-button-primary:disabled {
		color: var(--component-button-primary-shared-disabled-color);
		background: var(
			--component-button-primary-shared-disabled-background-color
		);
		border: var(--component-button-primary-shared-disabled-border);
	}
	.stand-icon-button-primary > .material-symbols {
		font-size: var(--component-button-primary-md-icon-size);
	}

	/* example setup of button/link button style using md size and neutral secondary variant */
	.stand-icon-button-tertiary {
		color: var(--component-button-tertiary-shared-color);
		background: var(--component-button-tertiary-shared-background-color);
		width: var(--component-button-tertiary-md-icon-button-width);
		height: var(--component-button-tertiary-md-height);
		padding: 0;
		font: var(--component-button-tertiary-md-typography-font);
		letter-spacing: var(
			--component-button-tertiary-md-typography-letter-spacing
		);
		font-variation-settings: "wdth"
			var(--component-button-tertiary-md-typography-font-width);
		border: var(--component-button-tertiary-shared-border);
		border-radius: var(--component-button-tertiary-shared-border-radius);
	}
	.stand-icon-button-tertiary:hover {
		background: var(
			--component-button-tertiary-shared-hover-background-color
		);
		border: var(--component-button-tertiary-shared-hover-border);
	}
	.stand-icon-button-tertiary:active {
		background: var(
			--component-button-tertiary-shared-active-background-color
		);
		border: var(--component-button-tertiary-shared-active-border);
	}
	.stand-icon-button-tertiary:disabled, .stand-icon-button-tertiary[data-disabled] {
		color: var(--component-button-tertiary-shared-disabled-color);
		background: var(
			--component-button-tertiary-shared-disabled-background-color
		);
		border: var(--component-button-tertiary-shared-disabled-border);
	}
	.stand-icon-button-tertiary > .material-symbols {
		font-size: var(--component-button-tertiary-md-icon-size);
	}

`;

export const componentHtml = /* html */ `<div class="container">
    <a class="stand-icon-button stand-icon-button-primary" href="#" title="Summon a raven" aria-label="Summon a raven"><span class="material-symbols" aria-hidden="true">raven</span></a>
    <a class="stand-icon-button stand-icon-button-tertiary" data-disabled title="Consult with an owl" aria-label="Consult with an owl"><span class="material-symbols" aria-hidden="true">owl</span></a>
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
	.js-stand-icon-button-primary {
		color: \${componentButton["primary"].shared.color};
		background: \${componentButton["primary"].shared.backgroundColor};
		width: \${componentButton["primary"].md.iconButton.width};
		height: \${componentButton["primary"].md.height};
		padding: 0;
		font: \${componentButton["primary"].md.typography.font};
		letter-spacing: \${componentButton["primary"].md.typography.letterSpacing};
		font-variation-settings: 'wdth'
		\${componentButton["primary"].md.typography.fontWidth};
		border: \${componentButton["primary"].shared.border};
		border-radius: \${componentButton["primary"].shared.borderRadius};
	}
	.js-stand-icon-button-primary:hover {
		background: \${componentButton["primary"].shared[":hover"].backgroundColor};
		border: \${componentButton["primary"].shared[":hover"].border}
	}
	.js-stand-icon-button-primary:active {
		background: \${componentButton["primary"].shared[":active"].backgroundColor};
		border: \${componentButton["primary"].shared[":active"].border};
	}
	.js-stand-icon-button-primary:disabled, .js-stand-icon-button-primary[data-disabled] {
		color: \${componentButton["primary"].shared[":disabled"].color};
		background: \${componentButton["primary"].shared[":disabled"].backgroundColor};
		border: \${componentButton["primary"].shared[":disabled"].border};
	}
	.js-stand-icon-button-primary > .material-symbols {
		font-size: \${componentButton["primary"].md.icon.size}
	}

	/* example setup of button/link button style using md size and neutral secondary variant */
	.js-stand-icon-button-tertiary {
		color: \${componentButton["tertiary"].shared.color};
		background: \${componentButton["tertiary"].shared.backgroundColor};
		width: \${componentButton["tertiary"].md.iconButton.width};
		height: \${componentButton["tertiary"].md.height};
		padding: 0;
		font: \${componentButton["tertiary"].md.typography.font};
		letter-spacing: \${componentButton["tertiary"].md.typography.letterSpacing};
		font-variation-settings: 'wdth'
		\${componentButton["tertiary"].md.typography.fontWidth};
		border: \${componentButton["tertiary"].shared.border};
		border-radius: \${componentButton["tertiary"].shared.borderRadius};
	}
	.js-stand-icon-button-tertiary:hover {
		background: \${componentButton["tertiary"].shared[":hover"].backgroundColor};
		border: \${componentButton["tertiary"].shared[":hover"].border};
	}
	.js-stand-icon-button-tertiary:active {
		background: \${componentButton["tertiary"].shared[":active"].backgroundColor};
		border: \${componentButton["tertiary"].shared[":active"].border};
	}
	.js-stand-icon-button-tertiary:disabled, .js-stand-icon-button-tertiary[data-disabled] {
		color: \${componentButton["tertiary"].shared[":disabled"].color};
		background: \${componentButton["tertiary"].shared[":disabled"].backgroundColor};
		border: \${componentButton["tertiary"].shared[":disabled"].border};
	}
	.js-stand-icon-button-tertiary > .material-symbols {
		font-size: \${componentButton["tertiary"].md.icon.size}
	}
	\`);

	// update the document with the sheet
	document.adoptedStyleSheets.push(sheet);

	// modify the dom with the button components using the generated stylesheet
	document.getElementById("app").innerHTML = \`
	<div class="container">
		<a class="js-stand-icon-button js-stand-icon-button-primary" href="#" title="Summon a raven"><span class="material-symbols">raven</span></a>
		<a class="js-stand-icon-button js-stand-icon-button-tertiary" data-disabled title="Consult with an owl"><span class="material-symbols">owl</span></a>
	</div>
	\`;

`;
