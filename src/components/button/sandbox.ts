// Component Name
export const componentName = 'Button';

// React sandbox example
export const componentTsx = /* javascript */ `import { Button } from '@guardian/stand/button';

export const Component = () => (
	<>
		<div className="container">
			<Button onPress={() => alert('Button Clicked from React')}>Button</Button>
			<Button isDisabled onPress={() => alert('Button Clicked from React')}>
				Disabled Button
			</Button>
		</div>
		<div className="container">
			<Button
				onPress={() => alert('Button Clicked from React')}
				variant="neutral-secondary"
				icon="raven"
			>
				Button with Icon
			</Button>
			<Button
				isDisabled
				onPress={() => alert('Button Clicked from React')}
				variant="neutral-secondary"
				icon="owl"
			>
				Disabled Button with Icon
			</Button>
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
    .stand-button-emphasised-primary {
    	color: var(--component-button-emphasised-primary-shared-color);
    	background: var(
    		--component-button-emphasised-primary-shared-background-color
    	);
    	height: var(--component-button-emphasised-primary-md-height);
    	padding: var(--component-button-emphasised-primary-md-padding-top)
    	var(--component-button-emphasised-primary-md-padding-right)
    	var(--component-button-emphasised-primary-md-padding-bottom)
    	var(--component-button-emphasised-primary-md-padding-left);
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
    .stand-button-emphasised-primary:hover {
    	background: var(
    		--component-button-emphasised-primary-shared-hover-background-color
    	);
    	border: var(--component-button-emphasised-primary-shared-hover-border);
    }
    .stand-button-emphasised-primary:active {
    	background: var(
    		--component-button-emphasised-primary-shared-active-background-color
    	);
    	border: var(--component-button-emphasised-primary-shared-active-border);
    }
    .stand-button-emphasised-primary:disabled {
    	color: var(--component-button-emphasised-primary-shared-disabled-color);
    	background: var(
    		--component-button-emphasised-primary-shared-disabled-background-color
    	);
    	border: var(--component-button-emphasised-primary-shared-disabled-border);
    	}
    	.stand-button-emphasised-primary > .material-symbols {
    	font-size: var(--component-button-emphasised-primary-md-icon-size);
    	}
    	.stand-button-emphasised-primary:has(> .material-symbols) {
    	padding-left: var(
    		--component-button-emphasised-primary-md-padding-with-icon-icon-left-left
    	);
    	gap: var(--component-button-emphasised-primary-md-icon-gap);
    }

    /* example setup of button/link button style using md size and neutral secondary variant */
    .stand-button-neutral-secondary {
    	color: var(--component-button-neutral-secondary-shared-color);
    	background: var(--component-button-neutral-secondary-shared-background-color);
    	height: var(--component-button-neutral-secondary-md-height);
    	padding: var(--component-button-neutral-secondary-md-padding-top)
    	var(--component-button-neutral-secondary-md-padding-right)
    	var(--component-button-neutral-secondary-md-padding-bottom)
    	var(--component-button-neutral-secondary-md-padding-left);
    	font: var(--component-button-neutral-secondary-md-typography-font);
    	letter-spacing: var(
    		--component-button-neutral-secondary-md-typography-letter-spacing
    	);
    	font-variation-settings: "wdth"
    	var(--component-button-neutral-secondary-md-typography-font-width);
    	border: var(--component-button-neutral-secondary-shared-border);
    	border-radius: var(--component-button-neutral-secondary-shared-border-radius);
    }
    .stand-button-neutral-secondary:hover {
    	background: var(
    		--component-button-neutral-secondary-shared-hover-background-color
    	);
    	border: var(--component-button-neutral-secondary-shared-hover-border);
    }
    .stand-button-neutral-secondary:active {
    	background: var(
    		--component-button-neutral-secondary-shared-active-background-color
    	);
    	border: var(--component-button-neutral-secondary-shared-active-border);
    }
    .stand-button-neutral-secondary:disabled {
    	color: var(--component-button-neutral-secondary-shared-disabled-color);
    	background: var(
    		--component-button-neutral-secondary-shared-disabled-background-color
    	);
    	border: var(--component-button-neutral-secondary-shared-disabled-border);
    }
    .stand-button-neutral-secondary > .material-symbols {
    	font-size: var(--component-button-neutral-secondary-md-icon-size);
    }
    .stand-button-neutral-secondary:has(> .material-symbols) {
    	padding-left: var(
    		--component-button-neutral-secondary-md-padding-with-icon-icon-left-left
    	);
    	gap: var(--component-button-neutral-secondary-md-icon-gap);
    }

`;

export const componentHtml = /* html */ `<div class="container flow-column">
    <div class"container">
    	<button class="stand-button stand-button-emphasised-primary">Button</button>
    	<button class="stand-button stand-button-emphasised-primary" disabled>Disabled Button</button>
    </div>

    <div class"container">
    	<button class="stand-button stand-button-neutral-secondary"><span class="material-symbols">raven</span>Button with Icon</button>
    	<button class="stand-button stand-button-neutral-secondary" disabled><span class="material-symbols">owl</span>Disabled Button with Icon</button>
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
    	.js-stand-button-emphasised-primary {
    		color: \${componentButton["emphasised-primary"].shared.color};
    		background: \${componentButton["emphasised-primary"].shared.backgroundColor};
    		height: \${componentButton["emphasised-primary"].md.height};
    		padding: \${componentButton["emphasised-primary"].md.padding.top}
    		\${componentButton["emphasised-primary"].md.padding.right}
    		\${componentButton["emphasised-primary"].md.padding.bottom}
    		\${componentButton["emphasised-primary"].md.padding.left};
    		font: \${componentButton["emphasised-primary"].md.typography.font};
    		letter-spacing: \${componentButton["emphasised-primary"].md.typography.letterSpacing};
    		font-variation-settings: 'wdth'
    		\${componentButton["emphasised-primary"].md.typography.fontWidth};
    		border: \${componentButton["emphasised-primary"].shared.border};
    		border-radius: \${componentButton["emphasised-primary"].shared.borderRadius};
    	}
    	.js-stand-button-emphasised-primary:hover {
    		background: \${componentButton["emphasised-primary"].shared[":hover"].backgroundColor};
    		border: \${componentButton["emphasised-primary"].shared[":hover"].border}
    	}
    	.js-stand-button-emphasised-primary:active {
    		background: \${componentButton["emphasised-primary"].shared[":active"].backgroundColor};
    		border: \${componentButton["emphasised-primary"].shared[":active"].border};
    	}
    	.js-stand-button-emphasised-primary:disabled {
    		color: \${componentButton["emphasised-primary"].shared[":disabled"].color};
    		background: \${componentButton["emphasised-primary"].shared[":disabled"].backgroundColor};
    		border: \${componentButton["emphasised-primary"].shared[":disabled"].border};
    	}
    	.js-stand-button-emphasised-primary > .material-symbols {
    		font-size: \${componentButton["emphasised-primary"].md.icon.size}
    	}
    	.js-stand-button-emphasised-primary:has(> .material-symbols) {
    		padding-left: \${componentButton["emphasised-primary"].md.padding.withIcon.iconLeft.left};
    		gap: \${componentButton["emphasised-primary"].md.icon.gap};
    	}

    	/* example setup of button/link button style using md size and neutral secondary variant */
    	.js-stand-button-neutral-secondary {
    		color: \${componentButton["neutral-secondary"].shared.color};
    		background: \${componentButton["neutral-secondary"].shared.backgroundColor};
    		height: \${componentButton["neutral-secondary"].md.height};
    		padding: \${componentButton["neutral-secondary"].md.padding.top}
    		\${componentButton["neutral-secondary"].md.padding.right}
    		\${componentButton["neutral-secondary"].md.padding.bottom}
    		\${componentButton["neutral-secondary"].md.padding.left};
    		font: \${componentButton["neutral-secondary"].md.typography.font};
    		letter-spacing: \${componentButton["neutral-secondary"].md.typography.letterSpacing};
    		font-variation-settings: 'wdth'
    		\${componentButton["neutral-secondary"].md.typography.fontWidth};
    		border: \${componentButton["neutral-secondary"].shared.border};
    		border-radius: \${componentButton["neutral-secondary"].shared.borderRadius};
    	}
    	.js-stand-button-neutral-secondary:hover {
    		background: \${componentButton["neutral-secondary"].shared[":hover"].backgroundColor};
    		border: \${componentButton["neutral-secondary"].shared[":hover"].border};
    	}
    	.js-stand-button-neutral-secondary:active {
    		background: \${componentButton["neutral-secondary"].shared[":active"].backgroundColor};
    		border: \${componentButton["neutral-secondary"].shared[":active"].border};
    	}
    	.js-stand-button-neutral-secondary:disabled {
    		color: \${componentButton["neutral-secondary"].shared[":disabled"].color};
    		background: \${componentButton["neutral-secondary"].shared[":disabled"].backgroundColor};
    		border: \${componentButton["neutral-secondary"].shared[":disabled"].border};
    	}
    	.js-stand-button-neutral-secondary > .material-symbols {
    		font-size: \${componentButton["neutral-secondary"].md.icon.size}
    	}
    	.js-stand-button-neutral-secondary:has(> .material-symbols) {
    		padding-left: \${componentButton["neutral-secondary"].md.padding.withIcon.iconLeft.left};
    		gap: \${componentButton["neutral-secondary"].md.icon.gap};
    	}

    \`);

    // update the document with the sheet
    document.adoptedStyleSheets.push(sheet);

    // modify the dom with the button components using the generated stylesheet
    document.getElementById("app").innerHTML = \`<div class="container flow-column">
    	<div class"container">
    		<button class="js-stand-button js-stand-button-emphasised-primary">Button</button>
    		<button class="js-stand-button js-stand-button-emphasised-primary" disabled>Disabled Button</button>
    	</div>
    	<div class"container">
    		<button class="js-stand-button js-stand-button-neutral-secondary"><span class="material-symbols">raven</span>Button with Icon</button>
    		<button class="js-stand-button js-stand-button-neutral-secondary" disabled><span class="material-symbols">owl</span>Disabled Button with Icon</button>
    	</div>
    </div>\`;

`;
