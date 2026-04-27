// Component Name
export const componentName = 'TemplateComponent';

// React sandbox example
export const componentTsx = /* javascript */ `import { TemplateComponent } from '@guardian/stand/template-component';

export const Component = () => (
	<>
		{/* default example */}
		<TemplateComponent />

		{/* custom message example */}
		<TemplateComponent message="hi there" />

);

`;

// Custom component - CSS example
export const componentCss = /* css */ `
/* import the templateComponent styles */
@import '@guardian/stand/component/templateComponent.css';
/* import the icon styles if using the icon variant of the templateComponent component */
@import "@guardian/stand/component/icon.css";

/* example setup of templateComponent style */
.stand-template-component {
	background-color: var(--component-template-component-color-background);
	display: var(--component-template-component-display);
	align-items: var(--component-template-component-align-items);
	justify-content: var(--component-template-component-justify-content);
	width: var(--component-template-component-size);
	height: var(--component-template-component-size);
	user-select: var(--component-template-component-user-select);
	color: var(--component-template-component-color-text);
	font: var(--component-template-component-typography-font);
	letter-spacing: var(--component-template-component-typography-letter-spacing);
	font-variation-settings: "wdth" var(--component-template-component-typography-font-width);
}

.stand-template-component-icon {
	display: var(--component-icon-shared-display);
	user-select: var(--component-icon-shared-user-select);
	font-size: var(--component-icon-md-size);
}

.stand-template-component-icon-color-svg > svg {
	width: var(--component-icon-md-size);
	height: var(--component-icon-md-size);
	fill: var(--component-template-component-color-text);
}

/* example setup for templateComponent image */
.stand-template-component > img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
`;

export const componentHtml = /* html */ `<div class="container">
	<div class="stand-template-component">C</div>
    <div class="stand-template-component">
		<span class="material-symbols stand-template-component-icon">raven</span>
    </div>
    <div class="stand-template-component">
        <span class="stand-template-component-icon stand-template-component-icon-color-svg"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg></span>
    </div>
    <div class="stand-template-component">
    	<img src="https://uploads.guimcode.co.uk/2026/01/27/f85e2e477ce54f4c3b671faa5cd21673aa9f8072fddb5d70a73e6038dc812eec.jpg" alt="Mahesh Makani" />
    </div>
</div>
`;

// Custom component - JS example
export const componentJs = /* javascript */ `	// for ts/js
		import { componentTemplateComponent, componentIcon } from "@guardian/stand";

const templateComponentStyles = \`
    background-color: \${componentTemplateComponent.color.background};
    display: \${componentTemplateComponent.display};
    align-items: \${componentTemplateComponent["align-items"]};
    justify-content: \${componentTemplateComponent["justify-content"]};
    width: \${componentTemplateComponent.size};
    height: \${componentTemplateComponent.size};
    user-select: \${componentTemplateComponent["user-select"]};
\`;

const typographyStyle = \`
    color: \${componentTemplateComponent.color.text};
    font: \${componentTemplateComponent.typography.font};
    letter-spacing: \${componentTemplateComponent.typography.letterSpacing};
    font-variation-settings: 'wdth' \${componentTemplateComponent.typography.fontWidth};
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
  color: \${componentTemplateComponent.color.text};
\`;

const iconSvgStyles = \`
  width: \${componentIcon.md.size};
  height: \${componentIcon.md.size};
  fill:  \${componentTemplateComponent.color.text};
\`;

// e.g. adding to DOM using vanilla JS styles
document.getElementById("app").innerHTML = \`
<div class="container">
  <div style="\${templateComponentStyles}\${typographyStyle}">C</div>
  <div style="\${templateComponentStyles}">
	<span class="material-symbols" style="\${iconStyles}">raven</span>
  </div>
  <div style="\${templateComponentStyles}">
    <span class="material-symbols" style="\${iconStyles}"><svg style="\${iconSvgStyles}" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg></span>
  </div>
  <div style="\${templateComponentStyles}">
    <img style="\${imgStyle}" src="https://uploads.guimcode.co.uk/2026/01/27/f85e2e477ce54f4c3b671faa5cd21673aa9f8072fddb5d70a73e6038dc812eec.jpg" alt="Mahesh Makani" />
  </div>
\`;
`;
