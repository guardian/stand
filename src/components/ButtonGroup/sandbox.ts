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
/* import the buttonGroup styles */
@import '@guardian/stand/component/buttonGroup.css';
/* import the icon styles if using the icon variant of the buttonGroup component */
@import "@guardian/stand/component/icon.css";

/* example setup of buttonGroup style */
.stand-button-group {
	background-color: var(--component-button-group-color-background);
	display: var(--component-button-group-display);
	align-items: var(--component-button-group-align-items);
	justify-content: var(--component-button-group-justify-content);
	width: var(--component-button-group-size);
	height: var(--component-button-group-size);
	user-select: var(--component-button-group-user-select);
	color: var(--component-button-group-color-text);
	font: var(--component-button-group-typography-font);
	letter-spacing: var(--component-button-group-typography-letter-spacing);
	font-variation-settings: "wdth" var(--component-button-group-typography-font-width);
}

.stand-button-group-icon {
	display: var(--component-icon-shared-display);
	user-select: var(--component-icon-shared-user-select);
	font-size: var(--component-icon-md-size);
}

.stand-button-group-icon-color-svg > svg {
	width: var(--component-icon-md-size);
	height: var(--component-icon-md-size);
	fill: var(--component-button-group-color-text);
}

/* example setup for buttonGroup image */
.stand-button-group > img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
`;

export const componentHtml = /* html */ `<div class="container">
	<div class="stand-button-group">C</div>
    <div class="stand-button-group">
		<span class="material-symbols stand-button-group-icon">raven</span>
    </div>
    <div class="stand-button-group">
        <span class="stand-button-group-icon stand-button-group-icon-color-svg"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg></span>
    </div>
    <div class="stand-button-group">
    	<img src="https://uploads.guimcode.co.uk/2026/01/27/f85e2e477ce54f4c3b671faa5cd21673aa9f8072fddb5d70a73e6038dc812eec.jpg" alt="Mahesh Makani" />
    </div>
</div>
`;

// Custom component - JS example
export const componentJs = /* javascript */ `	// for ts/js
		import { componentButtonGroup, componentIcon } from "@guardian/stand";

const buttonGroupStyles = \`
    background-color: \${componentButtonGroup.color.background};
    display: \${componentButtonGroup.display};
    align-items: \${componentButtonGroup["align-items"]};
    justify-content: \${componentButtonGroup["justify-content"]};
    width: \${componentButtonGroup.size};
    height: \${componentButtonGroup.size};
    user-select: \${componentButtonGroup["user-select"]};
\`;

const typographyStyle = \`
    color: \${componentButtonGroup.color.text};
    font: \${componentButtonGroup.typography.font};
    letter-spacing: \${componentButtonGroup.typography.letterSpacing};
    font-variation-settings: 'wdth' \${componentButtonGroup.typography.fontWidth};
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
  color: \${componentButtonGroup.color.text};
\`;

const iconSvgStyles = \`
  width: \${componentIcon.md.size};
  height: \${componentIcon.md.size};
  fill:  \${componentButtonGroup.color.text};
\`;

// e.g. adding to DOM using vanilla JS styles
document.getElementById("app").innerHTML = \`
<div class="container">
  <div style="\${buttonGroupStyles}\${typographyStyle}">C</div>
  <div style="\${buttonGroupStyles}">
	<span class="material-symbols" style="\${iconStyles}">raven</span>
  </div>
  <div style="\${buttonGroupStyles}">
    <span class="material-symbols" style="\${iconStyles}"><svg style="\${iconSvgStyles}" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg></span>
  </div>
  <div style="\${buttonGroupStyles}">
    <img style="\${imgStyle}" src="https://uploads.guimcode.co.uk/2026/01/27/f85e2e477ce54f4c3b671faa5cd21673aa9f8072fddb5d70a73e6038dc812eec.jpg" alt="Mahesh Makani" />
  </div>
\`;
`;
