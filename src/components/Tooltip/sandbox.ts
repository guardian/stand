// Component Name
export const componentName = 'Tooltip';

// React sandbox example
export const componentTsx = /* javascript */ `import { Tooltip } from '@guardian/stand/Tooltip';

export const Component = () => (
	<>
		{/* default example */}
		<Tooltip />

		{/* custom message example */}
		<Tooltip message="hi there" />

);

`;

// Custom component - CSS example
export const componentCss = /* css */ `
/* import the tooltip styles */
@import '@guardian/stand/component/tooltip.css';
/* import the icon styles if using the icon variant of the tooltip component */
@import "@guardian/stand/component/icon.css";

/* example setup of tooltip style */
.stand-tooltip {
	background-color: var(--component-tooltip-color-background);
	display: var(--component-tooltip-display);
	align-items: var(--component-tooltip-align-items);
	justify-content: var(--component-tooltip-justify-content);
	width: var(--component-tooltip-size);
	height: var(--component-tooltip-size);
	user-select: var(--component-tooltip-user-select);
	color: var(--component-tooltip-color-text);
	font: var(--component-tooltip-typography-font);
	letter-spacing: var(--component-tooltip-typography-letter-spacing);
	font-variation-settings: "wdth" var(--component-tooltip-typography-font-width);
}

.stand-tooltip-icon {
	display: var(--component-icon-shared-display);
	user-select: var(--component-icon-shared-user-select);
	font-size: var(--component-icon-md-size);
}

.stand-tooltip-icon-color-svg > svg {
	width: var(--component-icon-md-size);
	height: var(--component-icon-md-size);
	fill: var(--component-tooltip-color-text);
}

/* example setup for tooltip image */
.stand-tooltip > img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
`;

export const componentHtml = /* html */ `<div class="container">
	<div class="stand-tooltip">C</div>
    <div class="stand-tooltip">
		<span class="material-symbols stand-tooltip-icon">raven</span>
    </div>
    <div class="stand-tooltip">
        <span class="stand-tooltip-icon stand-tooltip-icon-color-svg"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg></span>
    </div>
    <div class="stand-tooltip">
    	<img src="https://uploads.guimcode.co.uk/2026/01/27/f85e2e477ce54f4c3b671faa5cd21673aa9f8072fddb5d70a73e6038dc812eec.jpg" alt="Mahesh Makani" />
    </div>
</div>
`;

// Custom component - JS example
export const componentJs = /* javascript */ `	// for ts/js
		import { componentTooltip, componentIcon } from "@guardian/stand";

const tooltipStyles = \`
    background-color: \${componentTooltip.color.background};
    display: \${componentTooltip.display};
    align-items: \${componentTooltip["align-items"]};
    justify-content: \${componentTooltip["justify-content"]};
    width: \${componentTooltip.size};
    height: \${componentTooltip.size};
    user-select: \${componentTooltip["user-select"]};
\`;

const typographyStyle = \`
    color: \${componentTooltip.color.text};
    font: \${componentTooltip.typography.font};
    letter-spacing: \${componentTooltip.typography.letterSpacing};
    font-variation-settings: 'wdth' \${componentTooltip.typography.fontWidth};
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
  color: \${componentTooltip.color.text};
\`;

const iconSvgStyles = \`
  width: \${componentIcon.md.size};
  height: \${componentIcon.md.size};
  fill:  \${componentTooltip.color.text};
\`;

// e.g. adding to DOM using vanilla JS styles
document.getElementById("app").innerHTML = \`
<div class="container">
  <div style="\${tooltipStyles}\${typographyStyle}">C</div>
  <div style="\${tooltipStyles}">
	<span class="material-symbols" style="\${iconStyles}">raven</span>
  </div>
  <div style="\${tooltipStyles}">
    <span class="material-symbols" style="\${iconStyles}"><svg style="\${iconSvgStyles}" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg></span>
  </div>
  <div style="\${tooltipStyles}">
    <img style="\${imgStyle}" src="https://uploads.guimcode.co.uk/2026/01/27/f85e2e477ce54f4c3b671faa5cd21673aa9f8072fddb5d70a73e6038dc812eec.jpg" alt="Mahesh Makani" />
  </div>
\`;
`;
