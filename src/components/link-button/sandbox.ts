// Component Name
export const componentName = 'LinkButton';

// React sandbox example
export const componentTsx = /* javascript */ `import { LinkButton } from '@guardian/stand/link-button';

export const Component = () => (
	<>
		<div className="container">
			<LinkButton href="#">
          		LinkButton
			</LinkButton>
			<LinkButton isDisabled variant="secondary">
				Disabled LinkButton
			</LinkButton>
		</div>
		<div className="container">
			<LinkButton
				href="#"
				icon="raven"
			>
				LinkButton with Icon
			</LinkButton>
			<LinkButton
				isDisabled
				href="#"
				variant="tertiary"
				icon="owl"
			>
				Disabled LinkButton with Icon
			</LinkButton>
		</div>
	</>
);

`;

// Custom component - CSS example
export const componentCss = /* css */ `@import '@guardian/stand/component/button.css';

    /* shared button styles for all variants */
    .stand-button {
    	display: var(--component-button-shared-display);
    	-webkit-appearance: var(--component-button-shared-webkit-appearance);
    	text-align: var(--component-button-shared-text-align);
    	box-shadow: var(--component-button-shared-box-shadow);
    	text-decoration: var(--component-button-shared-text-decoration);
    	cursor: var(--component-button-shared-cursor);
    	justify-content: var(--component-button-shared-justify-content);
    	align-items: var(--component-button-shared-align-items);
    }
    .stand-button:focus-visible {
    	outline: var(--component-button-shared-focus-visible-outline);
    	outline-offset: var(--component-button-shared-focus-visible-outline-offset);
    }
    .stand-button:disabled {
    	cursor: var(--component-button-shared-disabled-cursor);
    }

    /* example setup of button/link button style using md size and emphasised primary variant */
    .stand-button-primary {
    	color: var(--component-button-primary-shared-color);
    	background: var(
    		--component-button-primary-shared-background-color
    	);
    	height: var(--component-button-primary-md-height);
    	padding: var(--component-button-primary-md-padding-top)
    	var(--component-button-primary-md-padding-right)
    	var(--component-button-primary-md-padding-bottom)
    	var(--component-button-primary-md-padding-left);
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
    .stand-button-primary:hover {
    	background: var(
    		--component-button-primary-shared-hover-background-color
    	);
    	border: var(--component-button-primary-shared-hover-border);
    }
    .stand-button-primary:active {
    	background: var(
    		--component-button-primary-shared-active-background-color
    	);
    	border: var(--component-button-primary-shared-active-border);
    }
    .stand-button-primary:disabled, .stand-button-primary[data-disabled] {
    	color: var(--component-button-primary-shared-disabled-color);
    	background: var(
    		--component-button-primary-shared-disabled-background-color
    	);
    	border: var(--component-button-primary-shared-disabled-border);
    	}
    	.stand-button-primary > .material-symbols {
    	font-size: var(--component-button-primary-md-icon-size);
    	}
    	.stand-button-primary:has(> .material-symbols) {
    	padding-left: var(
    		--component-button-primary-md-padding-with-icon-icon-left-left
    	);
    	gap: var(--component-button-primary-md-icon-gap);
    }

    /* example setup of button/link button style using md size and neutral secondary variant */
    .stand-button-tertiary {
    	color: var(--component-button-tertiary-shared-color);
    	background: var(--component-button-tertiary-shared-background-color);
    	height: var(--component-button-tertiary-md-height);
    	padding: var(--component-button-tertiary-md-padding-top)
    	var(--component-button-tertiary-md-padding-right)
    	var(--component-button-tertiary-md-padding-bottom)
    	var(--component-button-tertiary-md-padding-left);
    	font: var(--component-button-tertiary-md-typography-font);
    	letter-spacing: var(
    		--component-button-tertiary-md-typography-letter-spacing
    	);
    	font-variation-settings: "wdth"
    	var(--component-button-tertiary-md-typography-font-width);
    	border: var(--component-button-tertiary-shared-border);
    	border-radius: var(--component-button-tertiary-shared-border-radius);
    }
    .stand-button-tertiary:hover {
    	background: var(
    		--component-button-tertiary-shared-hover-background-color
    	);
    	border: var(--component-button-tertiary-shared-hover-border);
    }
    .stand-button-tertiary:active {
    	background: var(
    		--component-button-tertiary-shared-active-background-color
    	);
    	border: var(--component-button-tertiary-shared-active-border);
    }
    .stand-button-tertiary:disabled, .stand-button-tertiary[data-disabled] {
    	color: var(--component-button-tertiary-shared-disabled-color);
    	background: var(
    		--component-button-tertiary-shared-disabled-background-color
    	);
    	border: var(--component-button-tertiary-shared-disabled-border);
    }
    .stand-button-tertiary > .material-symbols {
    	font-size: var(--component-button-tertiary-md-icon-size);
    }
    .stand-button-tertiary:has(> .material-symbols) {
    	padding-left: var(
    		--component-button-tertiary-md-padding-with-icon-icon-left-left
    	);
    	gap: var(--component-button-tertiary-md-icon-gap);
    }

`;

export const componentHtml = /* html */ `<div class="container flow-column">
    <div class="container">
    	<a href="#" class="stand-button stand-button-primary">LinkButton</a>
    	<a class="stand-button stand-button-tertiary" data-disabled>Disabled LinkButton</a>
    </div>

    <div class="container">
    	<a href="#" class="stand-button stand-button-primary"><span class="material-symbols">raven</span>LinkButton with Icon</a>
    	<a class="stand-button stand-button-tertiary" data-disabled><span class="material-symbols">owl</span>Disabled LinkButton with Icon</a>
    </div>

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
    	.js-stand-button {
    		display: \${componentButton.shared.display};
    		-webkit-appearance: \${componentButton.shared["-webkit-appearance"]};
    		text-align: \${componentButton.shared["text-align"]};
    		box-shadow: \${componentButton.shared["box-shadow"]};
    		text-decoration: \${componentButton.shared["text-decoration"]};
    		cursor: \${componentButton.shared.cursor};
    		justify-content: \${componentButton.shared["justify-content"]};
    		align-items: \${componentButton.shared["align-items"]};
    	}
    	.js-stand-button:focus-visible {
    		outline: \${componentButton.shared[":focus-visible"].outline};
    		outline-offset: \${componentButton.shared[":focus-visible"]["outline-offset"]};
    	}
    	.js-stand-button:disabled {
    		cursor: \${componentButton.shared[":disabled"].cursor};
    	}

    	/* example setup of button/link button style using md size and emphasised primary variant */
    	.js-stand-button-primary {
    		color: \${componentButton["primary"].shared.color};
    		background: \${componentButton["primary"].shared.backgroundColor};
    		height: \${componentButton["primary"].md.height};
    		padding: \${componentButton["primary"].md.padding.top}
    		\${componentButton["primary"].md.padding.right}
    		\${componentButton["primary"].md.padding.bottom}
    		\${componentButton["primary"].md.padding.left};
    		font: \${componentButton["primary"].md.typography.font};
    		letter-spacing: \${componentButton["primary"].md.typography.letterSpacing};
    		font-variation-settings: 'wdth'
    		\${componentButton["primary"].md.typography.fontWidth};
    		border: \${componentButton["primary"].shared.border};
    		border-radius: \${componentButton["primary"].shared.borderRadius};
    	}
    	.js-stand-button-primary:hover {
    		background: \${componentButton["primary"].shared[":hover"].backgroundColor};
    		border: \${componentButton["primary"].shared[":hover"].border}
    	}
    	.js-stand-button-primary:active {
    		background: \${componentButton["primary"].shared[":active"].backgroundColor};
    		border: \${componentButton["primary"].shared[":active"].border};
    	}
    	.js-stand-button-primary:disabled, .js-stand-button-primary[data-disabled] {
    		color: \${componentButton["primary"].shared[":disabled"].color};
    		background: \${componentButton["primary"].shared[":disabled"].backgroundColor};
    		border: \${componentButton["primary"].shared[":disabled"].border};
    	}
    	.js-stand-button-primary > .material-symbols {
    		font-size: \${componentButton["primary"].md.icon.size}
    	}
    	.js-stand-button-primary:has(> .material-symbols) {
    		padding-left: \${componentButton["primary"].md.padding.withIcon.iconLeft.left};
    		gap: \${componentButton["primary"].md.icon.gap};
    	}

    	/* example setup of button/link button style using md size and neutral secondary variant */
    	.js-stand-button-tertiary {
    		color: \${componentButton["tertiary"].shared.color};
    		background: \${componentButton["tertiary"].shared.backgroundColor};
    		height: \${componentButton["tertiary"].md.height};
    		padding: \${componentButton["tertiary"].md.padding.top}
    		\${componentButton["tertiary"].md.padding.right}
    		\${componentButton["tertiary"].md.padding.bottom}
    		\${componentButton["tertiary"].md.padding.left};
    		font: \${componentButton["tertiary"].md.typography.font};
    		letter-spacing: \${componentButton["tertiary"].md.typography.letterSpacing};
    		font-variation-settings: 'wdth'
    		\${componentButton["tertiary"].md.typography.fontWidth};
    		border: \${componentButton["tertiary"].shared.border};
    		border-radius: \${componentButton["tertiary"].shared.borderRadius};
    	}
    	.js-stand-button-tertiary:hover {
    		background: \${componentButton["tertiary"].shared[":hover"].backgroundColor};
    		border: \${componentButton["tertiary"].shared[":hover"].border};
    	}
    	.js-stand-button-tertiary:active {
    		background: \${componentButton["tertiary"].shared[":active"].backgroundColor};
    		border: \${componentButton["tertiary"].shared[":active"].border};
    	}
    	.js-stand-button-tertiary:disabled, .js-stand-button-tertiary[data-disabled] {
    		color: \${componentButton["tertiary"].shared[":disabled"].color};
    		background: \${componentButton["tertiary"].shared[":disabled"].backgroundColor};
    		border: \${componentButton["tertiary"].shared[":disabled"].border};
    	}
    	.js-stand-button-tertiary > .material-symbols {
    		font-size: \${componentButton["tertiary"].md.icon.size}
    	}
    	.js-stand-button-tertiary:has(> .material-symbols) {
    		padding-left: \${componentButton["tertiary"].md.padding.withIcon.iconLeft.left};
    		gap: \${componentButton["tertiary"].md.icon.gap};
    	}

    \`);

    // update the document with the sheet
    document.adoptedStyleSheets.push(sheet);

    // modify the dom with the button components using the generated stylesheet
    document.getElementById("app").innerHTML = \`<div class="container flow-column">
    	<div class="container">
    		<a href="#" class="js-stand-button js-stand-button-primary">LinkButton</a>
    		<a class="js-stand-button js-stand-button-tertiary" data-disabled>Disabled LinkButton</a>
    	</div>
    	<div class="container">
    		<a href="#" class="js-stand-button js-stand-button-primary"><span class="material-symbols">raven</span>LinkButton with Icon</a>
    		<a class="js-stand-button js-stand-button-tertiary" data-disabled><span class="material-symbols">owl</span>Disabled LinkButton with Icon</a>
    	</div>
    </div>\`;

`;
