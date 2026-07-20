// Component Name
export const componentName = 'Badge';

// React sandbox example
export const componentTsx = /* javascript */ `import { Badge } from '@guardian/stand/Badge';

export const Component = () => (
	{/* default example */}
	<Badge color="green" size="md">This is a badge</Badge>
);
`;

// Custom component - CSS example
export const componentCss = /* css */ `
/* import the badge styles */
@import '@guardian/stand/component/badge.css';

/* example setup of badge style */
.stand-badge {
	background-color: var(--component-badge-color-background);
	display: var(--component-badge-display);
	align-items: var(--component-badge-align-items);
	justify-content: var(--component-badge-justify-content);
	width: var(--component-badge-size);
	height: var(--component-badge-size);
	user-select: var(--component-badge-user-select);
	color: var(--component-badge-color-text);
	font: var(--component-badge-typography-font);
	letter-spacing: var(--component-badge-typography-letter-spacing);
	font-variation-settings: "wdth" var(--component-badge-typography-font-width);
}
`;

export const componentHtml = /* html */ `<div class="container">
	<div class="stand-badge">I wonder where this will turn up</div>
</div>
`;

// Custom component - JS example
export const componentJs = /* javascript */ `	// for ts/js
		import { componentBadge, componentIcon } from "@guardian/stand";

const badgeStyles = \`
    background-color: \${componentBadge.color.background};
    display: \${componentBadge.display};
    align-items: \${componentBadge["align-items"]};
    justify-content: \${componentBadge["justify-content"]};
    width: \${componentBadge.size};
    height: \${componentBadge.size};
    user-select: \${componentBadge["user-select"]};
\`;

const typographyStyle = \`
    color: \${componentBadge.color.text};
    font: \${componentBadge.typography.font};
    letter-spacing: \${componentBadge.typography.letterSpacing};
    font-variation-settings: 'wdth' \${componentBadge.typography.fontWidth};
\`;

// e.g. adding to DOM using vanilla JS styles
document.getElementById("app").innerHTML = \`
<div class="container">
  <div style="\${badgeStyles}\${typographyStyle}">This too will pass</div>
</div>
\`;
`;
