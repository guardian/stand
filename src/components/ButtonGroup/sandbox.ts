// Component Name
export const componentName = 'ButtonGroup';

// React sandbox example
export const componentTsx = /* javascript */ `
import { Button } from '@guardian/stand/Button';
import { ButtonGroup } from '@guardian/stand/ButtonGroup';

export const Component = () => (
	<ButtonGroup>
		<Button variant="tertiary">Stay on this step</Button>
		<Button>Discard changes and skip</Button>
	</ButtonGroup>
);
`;

// Custom component - CSS example
export const componentCss = /* css */ `@import '@guardian/stand/component/button.css';
@import '@guardian/stand/component/buttonGroup.css';

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

/* example setup of button group style */
.stand-button-group {
		display: var(--component-button-group-display);
		flex-direction: var(--component-button-group-flex-direction);
		flex-wrap: var(--component-button-group-flex-wrap);
		gap: var(--component-button-group-gap);
		width: var(--component-button-group-width);
		justify-content: var(--component-button-group-justify-content);
}

@media (min-width: 830px) {
	.stand-button-group {
		flex-direction: var(--component-button-group-md-flex-direction);
	}
}
`;

export const componentHtml = /* html */ `<div class="container">
	<div class="stand-button-group">
		<button class="stand-button stand-button-primary">
			Button one
		</button>
		<button class="stand-button stand-button-primary">
			Button two
		</button>
	</div>
`;

// Custom component - JS example
export const componentJs = /* javascript */ `// for ts/js
import { componentButton, componentButtonGroup } from "@guardian/stand";

const sheet = new CSSStyleSheet();

sheet.replaceSync(\`
	/* shared button styles for all variants */
	.js-stand-button {
		display: \${componentButton.shared.display};
		-webkit-appearance: \${componentButton.shared.webkitAppearance};
		text-align: \${componentButton.shared.textAlign};
		box-shadow: \${componentButton.shared.boxShadow};
		text-decoration: \${componentButton.shared.textDecoration};
		cursor: \${componentButton.shared.cursor};
		justify-content: \${componentButton.shared.justifyContent};
		align-items: \${componentButton.shared.alignItems};
	}
	.js-stand-button:focus-visible {
		outline: \${componentButton.shared.focusVisible.outline};
		outline-offset: \${componentButton.shared.focusVisible.outlineOffset};
	}

	/* example setup of button/link button style using md size and emphasised primary variant */
	.js-stand-button-primary {
		color: \${componentButton.primary.shared.color};
		background: \${componentButton.primary.shared.backgroundColor};
		height: \${componentButton.primary.md.height};
		padding: \${componentButton.primary.md.padding.top}
		\${componentButton.primary.md.padding.right}
		\${componentButton.primary.md.padding.bottom}
		\${componentButton.primary.md.padding.left};
		font: \${componentButton.primary.md.typography.font};
		letter-spacing: \${componentButton.primary.md.typography.letterSpacing};
		font-variation-settings: 'wdth'
		\${componentButton.primary.md.typography.fontWidth};
		border: \${componentButton.primary.shared.border};
		border-radius: \${componentButton.primary.shared.borderRadius};
	}
	.js-stand-button-primary:hover {
		background: \${componentButton.primary.shared.hover.backgroundColor};
		border: \${componentButton.primary.shared.hover.border}
	}
	.js-stand-button-primary:active {
		background: \${componentButton.primary.shared.active.backgroundColor};
		border: \${componentButton.primary.shared.active.border};
	}

	/* example setup of button group style */
	.js-stand-button-group {
		display: \${componentButtonGroup.display};
		flex-direction: \${componentButtonGroup.flexDirection};
		flex-wrap: \${componentButtonGroup.flexWrap};
		gap: \${componentButtonGroup.gap};
		width: \${componentButtonGroup.width};
		justify-content: \${componentButtonGroup.justifyContent};
	}

	@media (min-width: 830px) {
		.js-button-group {
			flex-direction: \${componentButtonGroup.md.flexDirection};
		}
	}
\`);

document.adoptedStyleSheets.push(sheet);

// e.g. adding to DOM using vanilla JS styles
document.getElementById("app").innerHTML = \`
	<div class="container">
		<div class="js-stand-button-group">
			<button class="js-stand-button js-stand-button-primary">
				Button one
			</button>
			<button class="js-stand-button js-stand-button-primary">
				Button two
			</button>
		</div>
	</div>
\`;
`;
