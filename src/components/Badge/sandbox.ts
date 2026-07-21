// Component Name
export const componentName = 'Badge';

// React sandbox example
export const componentTsx = /* javascript */ `import { Badge } from '@guardian/stand/Badge';

export const Component = () => (
	<>
		{/* default example */}
		<Badge color="green" size="md">
			This is a badge
		</Badge>
	</>
);
`;

// Custom component - CSS example
export const componentCss = /* css */ `
/* import the badge styles */
@import '@guardian/stand/component/badge.css';

/* example setup of badge style */
.stand-badge {
	display: var(--component-badge-size-md-display);
	align-items: var(--component-badge-size-md-align-items);
	justify-content: var(--component-badge-size-md-justify-content);
	padding-top: var(--component-badge-size-md-padding-top);
	padding-right: var(--component-badge-size-md-padding-right);
	padding-bottom: var(--component-badge-size-md-padding-bottom);
	padding-left: var(--component-badge-size-md-padding-left);
	font: var(--component-badge-size-md-typography-font);
	letter-spacing: var(--component-badge-size-md-typography-letter-spacing);
	font-variation-settings: "wdth" var(--component-badge-size-md-typography-font-width);
	background: var(--component-badge-color-green-background);
	color: var(--component-badge-color-green-color);
}
`;

export const componentHtml = /* html */ `<div class="container">
	<div class="stand-badge">I wonder where this will turn up</div>
</div>
`;

// Custom component - JS example
export const componentJs = /* javascript */ `
// for ts/js
import { componentBadge } from "@guardian/stand";

const badgeStyles = \`
	display: \${componentBadge.size.md.display};
	align-items: \${componentBadge.size.md.alignItems};
	justify-content: \${componentBadge.size.md.justifyContent};
	padding-top: \${componentBadge.size.md.padding.top};
	padding-right: \${componentBadge.size.md.padding.right};
	padding-bottom: \${componentBadge.size.md.padding.bottom};
	padding-left: \${componentBadge.size.md.padding.left};
	font: \${componentBadge.size.md.typography.font};
	letter-spacing: \${componentBadge.size.md.typography.letterSpacing};
	font-variation-settings: "wdth" var(--component-badge-size-md-typography-font-width);
	background: \${componentBadge.color.green.background};
	color: \${componentBadge.color.green.color};
\`;

// e.g. adding to DOM using vanilla JS styles
document.getElementById("app").innerHTML = \`
<div class="container">
  <div style="\${badgeStyles}">This too shall pass</div>
</div>
\`;
`;
