// Component Name
export const componentName = 'Badge';

// React sandbox example
export const componentTsx = /* javascript */ `import { Badge } from '@guardian/stand/Badge';

export const Component = () => (
	<>
		{/* default example */}
		<Badge color="green" size="md" weight="strong">
			This is the default badge
		</Badge>

		{/* styled example */}
		<Badge color="red" weight="light">
			This is a lightweight red badge
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
	display: var(--component-badge-shared-display);
	align-items: var(--component-badge-shared-align-items);
	justify-content: var(--component-badge-shared-justify-content);
	padding-top: var(--component-badge-size-md-padding-top);
	padding-right: var(--component-badge-size-md-padding-right);
	padding-bottom: var(--component-badge-size-md-padding-bottom);
	padding-left: var(--component-badge-size-md-padding-left);
	font: var(--component-badge-size-md-weight-strong-typography-font);
	letter-spacing: var(--component-badge-size-md-weight-strong-typography-letter-spacing);
	font-variation-settings: "wdth" var(--component-badge-size-md-weight-strong-typography-font-width);
	background: var(--component-badge-color-green-weight-strong-background);
	color: var(--component-badge-color-green-weight-strong-color);
}
`;

export const componentHtml = /* html */ `<div class="container">
	<div class="stand-badge">Vanilla CSS Badge</div>
</div>
`;

// Custom component - JS example
export const componentJs = /* javascript */ `
// for ts/js
import { componentBadge } from "@guardian/stand";

const badgeStyles = \`
	background: \${componentBadge.color.green.weight.strong.background};
	color: \${componentBadge.color.green.weight.strong.color};
	display: \${componentBadge.shared.display};
	align-items: \${componentBadge.shared.alignItems};
	justify-content: \${componentBadge.shared.justifyContent};
	padding-top: \${componentBadge.size.md.padding.top};
	padding-right: \${componentBadge.size.md.padding.right};
	padding-bottom: \${componentBadge.size.md.padding.bottom};
	padding-left: \${componentBadge.size.md.padding.left};
	font: \${componentBadge.size.md.weight.strong.typography.font};
	letter-spacing: \${componentBadge.size.md.weight.strong.typography.letterSpacing};
	font-variation-settings: 'wdth' 
	\${componentBadge.size.md.weight.strong.typography.fontWidth};
\`;

// e.g. adding to DOM using vanilla JS styles
document.getElementById("app").innerHTML = \`
<div class="container">
  <div style="\${badgeStyles}">Vanilla JS Badge</div>
</div>
\`;
`;
