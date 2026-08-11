// Component Name
export const componentName = 'TextListInput';

// React sandbox example
export const componentTsx = /* javascript */ `import { TextListInput } from '@guardian/stand/TextListInput';

export const Component = () => (
	<>
		{/* default example */}
		<TextListInput />

		{/* custom message example */}
		<TextListInput message="hi there" />

);

`;

// Custom component - CSS example
export const componentCss = /* css */ `
/* import the textListInput styles */
@import '@guardian/stand/component/textListInput.css';
/* import the icon styles if using the icon variant of the textListInput component */
@import "@guardian/stand/component/icon.css";

/* example setup of textListInput style */
.stand-text-list-input {
	background-color: var(--component-text-list-input-color-background);
	display: var(--component-text-list-input-display);
	align-items: var(--component-text-list-input-align-items);
	justify-content: var(--component-text-list-input-justify-content);
	width: var(--component-text-list-input-size);
	height: var(--component-text-list-input-size);
	user-select: var(--component-text-list-input-user-select);
	color: var(--component-text-list-input-color-text);
	font: var(--component-text-list-input-typography-font);
	letter-spacing: var(--component-text-list-input-typography-letter-spacing);
	font-variation-settings: "wdth" var(--component-text-list-input-typography-font-width);
}

.stand-text-list-input-icon {
	display: var(--component-icon-shared-display);
	user-select: var(--component-icon-shared-user-select);
	font-size: var(--component-icon-md-size);
}

.stand-text-list-input-icon-color-svg > svg {
	width: var(--component-icon-md-size);
	height: var(--component-icon-md-size);
	fill: var(--component-text-list-input-color-text);
}

/* example setup for textListInput image */
.stand-text-list-input > img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
`;

export const componentHtml = /* html */ `<div class="container">
	<div class="stand-text-list-input">C</div>
    <div class="stand-text-list-input">
		<span class="material-symbols stand-text-list-input-icon">raven</span>
    </div>
    <div class="stand-text-list-input">
        <span class="stand-text-list-input-icon stand-text-list-input-icon-color-svg"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg></span>
    </div>
    <div class="stand-text-list-input">
    	<img src="https://uploads.guimcode.co.uk/2026/01/27/f85e2e477ce54f4c3b671faa5cd21673aa9f8072fddb5d70a73e6038dc812eec.jpg" alt="Mahesh Makani" />
    </div>
</div>
`;

// Custom component - JS example
export const componentJs = /* javascript */ `	// for ts/js
		import { componentTextListInput, componentIcon } from "@guardian/stand";

const textListInputStyles = \`
    background-color: \${componentTextListInput.color.background};
    display: \${componentTextListInput.display};
    align-items: \${componentTextListInput["align-items"]};
    justify-content: \${componentTextListInput["justify-content"]};
    width: \${componentTextListInput.size};
    height: \${componentTextListInput.size};
    user-select: \${componentTextListInput["user-select"]};
\`;

const typographyStyle = \`
    color: \${componentTextListInput.color.text};
    font: \${componentTextListInput.typography.font};
    letter-spacing: \${componentTextListInput.typography.letterSpacing};
    font-variation-settings: 'wdth' \${componentTextListInput.typography.fontWidth};
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
  color: \${componentTextListInput.color.text};
\`;

const iconSvgStyles = \`
  width: \${componentIcon.md.size};
  height: \${componentIcon.md.size};
  fill:  \${componentTextListInput.color.text};
\`;

// e.g. adding to DOM using vanilla JS styles
document.getElementById("app").innerHTML = \`
<div class="container">
  <div style="\${textListInputStyles}\${typographyStyle}">C</div>
  <div style="\${textListInputStyles}">
	<span class="material-symbols" style="\${iconStyles}">raven</span>
  </div>
  <div style="\${textListInputStyles}">
    <span class="material-symbols" style="\${iconStyles}"><svg style="\${iconSvgStyles}" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg></span>
  </div>
  <div style="\${textListInputStyles}">
    <img style="\${imgStyle}" src="https://uploads.guimcode.co.uk/2026/01/27/f85e2e477ce54f4c3b671faa5cd21673aa9f8072fddb5d70a73e6038dc812eec.jpg" alt="Mahesh Makani" />
  </div>
\`;
`;
