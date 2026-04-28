// Component Name
export const componentName = 'Link';

// Link - React sandbox example
export const componentTsx = /* javascript */ `import { Link } from '@guardian/stand/link';

export const Component = () => (
	<Link href="#">Hello</Link>
);
`;

// Link - Custom component - CSS example
export const componentCss = /* css */ `
/* import the link styles */
@import '@guardian/stand/component/link.css';

.stand-typography-body-sm {
	font: var(--semantic-typography-body-sm-font);
	letter-spacing: var(--semantic-typography-body-sm-letter-spacing);
	font-variation-settings: "wdth" var(--semantic-typography-body-sm-font-width);
}
.stand-link {
	text-decoration: underline;
	text-decoration-style: solid;
	text-underline-offset: 8%;
	text-decoration-thickness: 5%;
	color: var(--component-link-shared-enabled-color);
}

.stand-link[data-hovered] {
	color: var(--component-link-shared-hover-color);
	cursor: var(--component-link-shared-hover-cursor);
}

.stand-link[data-pressed] {
	color: var(--component-link-shared-pressed-color);
}

.stand-link[data-disabled] {
	color: var(--component-link-shared-disabled-color);
}

.stand-link[data-focus-visible] {
	outline: var(--component-link-shared-outline);
}
`;

export const componentHtml = /* html */ `<div class="container">
	<a class="stand-link stand-typography-body-sm" href="#">Default link</a></br>
	<a class="stand-link stand-typography-body-sm" href="#" data-hovered>Hovered link</a></br>
	<a class="stand-link stand-typography-body-sm" href="#" data-pressed>Pressed link</a></br>
	<a class="stand-link stand-typography-body-sm" href="#" data-disabled>Disabled link</a></br>
	<a class="stand-link stand-typography-body-sm" href="#" data-focus-visible>Focused link</a>
</div>
`;

// Link - Custom component - JS example
export const componentJs = /* javascript */ `
import { componentLink, semanticTypography } from "@guardian/stand";

const semanticTypographyBodySm = \`
		font: \${semanticTypography['body-sm'].font};
		letter-spacing: \${semanticTypography['body-sm'].letterSpacing};
		font-variation-settings: "wdth" \${semanticTypography['body-sm'].fontWidth};
\`;

const baseStyle = \`
	text-decoration: underline;
	text-decoration-style: solid;
	text-underline-offset: 8%;
	text-decoration-thickness: 5%;
	color: \${componentLink.shared.enabled.color};
\`;

const hoverStyle = \`
	color: \${componentLink.shared.hover.color};
	cursor: \${componentLink.shared.hover.cursor};
\`;

const pressedStyle = \`
	color: \${componentLink.shared.pressed.color};
\`;

const disabledStyle = \`
	color: \${componentLink.shared.disabled.color};
\`;

const focusVisibleStyle = \`
	outline: \${componentLink.shared.outline};
\`;

document.getElementById("app").innerHTML = \`
	<style>
		.stand-typography-body-sm { \${semanticTypographyBodySm} }
		.stand-link { \${baseStyle} }
		.stand-link[data-hovered] { \${hoverStyle} }
		.stand-link[data-pressed] { \${pressedStyle} }
		.stand-link[data-disabled] { \${disabledStyle} }
		.stand-link[data-focus-visible] { \${focusVisibleStyle} }
	</style>
	<div class="container">
		<a class="stand-link stand-typography-body-sm" href="#">Default link</a></br>
		<a class="stand-link stand-typography-body-sm" href="#" data-hovered>Hovered link</a></br>
		<a class="stand-link stand-typography-body-sm" href="#" data-pressed>Pressed link</a></br>
		<a class="stand-link stand-typography-body-sm" href="#" data-disabled>Disabled link</a></br>
		<a class="stand-link stand-typography-body-sm" href="#" data-focus-visible>Focused link</a>
	</div>
\`;
`;
