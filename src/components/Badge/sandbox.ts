// Component Name
export const componentName = 'Badge';

// React sandbox example
export const componentTsx = /* javascript */ `import { Badge } from '@guardian/stand/Badge';

export const Component = () => (
	<>
		{/* default example */}
		<Badge />

		{/* custom message example */}
		<Badge message="hi there" />

);

`;

// Custom component - CSS example
export const componentCss = /* css */ `
/* import the badge styles */
@import '@guardian/stand/component/badge.css';
/* import the icon styles if using the icon variant of the badge component */
@import "@guardian/stand/component/icon.css";

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

.stand-badge-icon {
	display: var(--component-icon-shared-display);
	user-select: var(--component-icon-shared-user-select);
	font-size: var(--component-icon-md-size);
}

.stand-badge-icon-color-svg > svg {
	width: var(--component-icon-md-size);
	height: var(--component-icon-md-size);
	fill: var(--component-badge-color-text);
}

/* example setup for badge image */
.stand-badge > img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
`;

export const componentHtml = /* html */ `<div class="container">
	<div class="stand-badge">C</div>
    <div class="stand-badge">
		<span class="material-symbols stand-badge-icon">raven</span>
    </div>
    <div class="stand-badge">
        <span class="stand-badge-icon stand-badge-icon-color-svg"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg></span>
    </div>
    <div class="stand-badge">
    	<img src="https://uploads.guimcode.co.uk/2026/01/27/f85e2e477ce54f4c3b671faa5cd21673aa9f8072fddb5d70a73e6038dc812eec.jpg" alt="Mahesh Makani" />
    </div>
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

const imgStyle = \`
  width: 100%;
  height: 100%;
  object-fit: cover;
\`;

const iconStyles = \`
  display: \${componentIcon.shared.display};
  user-select: \${componentIcon.shared["user-select"]};
  font-size: \${componentIcon.md.size};
  color: \${componentBadge.color.text};
\`;

const iconSvgStyles = \`
  width: \${componentIcon.md.size};
  height: \${componentIcon.md.size};
  fill:  \${componentBadge.color.text};
\`;

// e.g. adding to DOM using vanilla JS styles
document.getElementById("app").innerHTML = \`
<div class="container">
  <div style="\${badgeStyles}\${typographyStyle}">C</div>
  <div style="\${badgeStyles}">
	<span class="material-symbols" style="\${iconStyles}">raven</span>
  </div>
  <div style="\${badgeStyles}">
    <span class="material-symbols" style="\${iconStyles}"><svg style="\${iconSvgStyles}" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg></span>
  </div>
  <div style="\${badgeStyles}">
    <img style="\${imgStyle}" src="https://uploads.guimcode.co.uk/2026/01/27/f85e2e477ce54f4c3b671faa5cd21673aa9f8072fddb5d70a73e6038dc812eec.jpg" alt="Mahesh Makani" />
  </div>
\`;
`;
