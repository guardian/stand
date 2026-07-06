// Component Name
export const componentName = 'ButtonGroup';

// React sandbox example
export const componentTsx = /* javascript */ `import { ButtonGroup } from '@guardian/stand/ButtonGroup';

export const Component = () => (
	<ButtonGroup>
		<Button variant="tertiary">Stay on this step</Button>
		<Button>Discard changes and skip</Button>
	</ButtonGroup>
);
`;

// Custom component - CSS example
export const componentCss = /* css */ `
@import '@guardian/stand/component/buttonGroup.css';

/* example setup of buttonGroup style */
.stand-button-group {
		display: var(--component-button-group-display);
		flex-direction: var(--component-button-group-flex-direction);
		flex-wrap: var(--component-button-group-flex-wrap);
		gap: var(--component-button-group-gap);
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
		<button>Stay on this step</button>
		<button>Discard changes and skip</button>
	</div>
`;

// Custom component - JS example
export const componentJs = /* javascript */ `
// for ts/js
import { componentButtonGroup } from "@guardian/stand";

const sheet = new CSSStyleSheet();

sheet.replaceSync(\`
	.js-button-group {
		display: \${componentButtonGroup.display};
		flex-direction: \${componentButtonGroup.flexDirection};
		flex-wrap: \${componentButtonGroup.flexWrap};
		gap: \${componentButtonGroup.gap};
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
  <div class="js-button-group">
		<button>Stay on this step</button>
		<button>Discard changes and skip</button>
	</div>
</div>
\`;
`;
