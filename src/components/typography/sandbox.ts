// Component Name
export const componentName = 'Typography';

// React sandbox example
export const componentTsx = /* javascript */ `import { Typography } from '@guardian/stand/typography';

export const Component = () => (
	<>
		{/* Paragraph element with default body-md preset and text children */}
		<Typography element="h2" variant="heading-compact-xl">Wow! A heading!</Typography>

		{/* Paragraph element with default body-md preset and text children */}
		<Typography>Body text here</Typography>

		{/* Div with an italic text wrapped inside */}
		<Typography element="div" variant="body-md">Some text, with <Typography element="i" variant="body-italic-md">even more text</Typography></Typography>
	</>
);

`;

// Custom component - CSS example
export const componentCss = /* css */ `@import '@guardian/stand/component/typography.css';
	@import '@guardian/stand/semantic/typography.css';

    /* shared typography styles for all variants */
    .stand-typography {
    	color: var(--component-typography-color);
    }

    /* example setup of heading-compact-xl */
    .stand-typography-heading-compact-xl {
		font: var(--semantic-typography-heading-compact-xl-font);
		letter-spacing: var(--semantic-typography-heading-compact-xl-letter-spacing);
		font-variation-settings: "wdth" var(--semantic-typography-heading-compact-xl-font-width);
	}

    /* example setup of standard body text */
    .stand-typography-body-md {
		font: var(--semantic-typography-body-md-font);
		letter-spacing: var(--semantic-typography-body-md-letter-spacing);
		font-variation-settings: "wdth" var(--semantic-typography-body-md-font-width);
	}

	/* example setup of italic body text */
	.stand-typography-body-italic-md {
		font: var(--semantic-typography-body-italic-md-font);
		letter-spacing: var(--semantic-typography-body-italic-md-letter-spacing);
		font-variation-settings: "wdth" var(--semantic-typography-body-italic-md-font-width);
	}
`;

export const componentHtml = /* html */ `<div class="container flow-column">
    <h2 class="stand-typography stand-typography-heading-compact-xl">Wow! A heading!</h2>

	<p class="stand-typography stand-typography-body-md">Body text here</p>

	<div class="stand-typography stand-typography-body-md">Some text, with <i class="stand-typography stand-typography-body-italic-md">even more text</i></div>
</div>
`;

// Custom component - JS example
export const componentJs = /* javascript */ `	// for ts/js
		import { componentTypography, semanticTypography } from "@guardian/stand";

    	// example of creating a stylesheet in js
    	const sheet = new CSSStyleSheet();

    	// apply the rules to the sheet
    	sheet.replaceSync(\`
			.js-stand-typography {
				color: \${componentTypography.color};
			}
			.js-stand-typography-heading-compact-xl {
				font: \${semanticTypography['heading-compact-xl'].font};
				letter-spacing: \${semanticTypography['heading-compact-xl'].letterSpacing};
				font-variation-settings: "wdth" \${semanticTypography['heading-compact-xl'].fontWidth};
			}
			.js-stand-typography-body-md {
				font: \${semanticTypography['body-md'].font};
				letter-spacing: \${semanticTypography['body-md'].letterSpacing};
				font-variation-settings: "wdth" \${semanticTypography['body-md'].fontWidth};
			}
			.js-stand-typography-body-italic-md {
				font: \${semanticTypography['body-italic-md'].font};
				letter-spacing: \${semanticTypography['body-italic-md'].letterSpacing};
				font-variation-settings: "wdth" \${semanticTypography['body-italic-md'].fontWidth};
			}
    	\`);

    // update the document with the sheet
    document.adoptedStyleSheets.push(sheet);

    // modify the dom with the typography components using the generated stylesheet
    document.getElementById("app").innerHTML = \`<div class="container flow-column">
		<h2 class="js-stand-typography js-stand-typography-heading-compact-xl">Wow! A heading!</h2>
		<p class="js-stand-typography js-stand-typography-body-md">Body text here</p>
		<div class="js-stand-typography js-stand-typography-body-md">Some text, with <i class="js-stand-typography js-stand-typography-body-italic-md">even more text</i></div>
    </div>\`;

`;
