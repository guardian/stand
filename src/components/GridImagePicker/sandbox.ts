// Component Name
export const componentName = 'GridImagePicker';

// React sandbox example
export const componentTsx = /* javascript */ `import { GridImagePicker } from '@guardian/stand/GridImagePicker';

export const Component = () => (
	<>
		{/* default example */}
		<GridImagePicker />

		{/* custom message example */}
		<GridImagePicker message="hi there" />

);

`;

// Custom component - CSS example
export const componentCss = /* css */ `
/* import the gridImagePicker styles */
@import '@guardian/stand/component/gridImagePicker.css';
/* import the icon styles if using the icon variant of the gridImagePicker component */
@import "@guardian/stand/component/icon.css";

/* example setup of gridImagePicker style */
.stand-grid-image-picker {
	background-color: var(--component-grid-image-picker-color-background);
	display: var(--component-grid-image-picker-display);
	align-items: var(--component-grid-image-picker-align-items);
	justify-content: var(--component-grid-image-picker-justify-content);
	width: var(--component-grid-image-picker-size);
	height: var(--component-grid-image-picker-size);
	user-select: var(--component-grid-image-picker-user-select);
	color: var(--component-grid-image-picker-color-text);
	font: var(--component-grid-image-picker-typography-font);
	letter-spacing: var(--component-grid-image-picker-typography-letter-spacing);
	font-variation-settings: "wdth" var(--component-grid-image-picker-typography-font-width);
}

.stand-grid-image-picker-icon {
	display: var(--component-icon-shared-display);
	user-select: var(--component-icon-shared-user-select);
	font-size: var(--component-icon-md-size);
}

.stand-grid-image-picker-icon-color-svg > svg {
	width: var(--component-icon-md-size);
	height: var(--component-icon-md-size);
	fill: var(--component-grid-image-picker-color-text);
}

/* example setup for gridImagePicker image */
.stand-grid-image-picker > img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
`;

export const componentHtml = /* html */ `<div class="container">
	<div class="stand-grid-image-picker">C</div>
    <div class="stand-grid-image-picker">
		<span class="material-symbols stand-grid-image-picker-icon">raven</span>
    </div>
    <div class="stand-grid-image-picker">
        <span class="stand-grid-image-picker-icon stand-grid-image-picker-icon-color-svg"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg></span>
    </div>
    <div class="stand-grid-image-picker">
    	<img src="https://uploads.guimcode.co.uk/2026/01/27/f85e2e477ce54f4c3b671faa5cd21673aa9f8072fddb5d70a73e6038dc812eec.jpg" alt="Mahesh Makani" />
    </div>
</div>
`;

// Custom component - JS example
export const componentJs = /* javascript */ `	// for ts/js
		import { componentGridImagePicker, componentIcon } from "@guardian/stand";

const gridImagePickerStyles = \`
    background-color: \${componentGridImagePicker.color.background};
    display: \${componentGridImagePicker.display};
    align-items: \${componentGridImagePicker["align-items"]};
    justify-content: \${componentGridImagePicker["justify-content"]};
    width: \${componentGridImagePicker.size};
    height: \${componentGridImagePicker.size};
    user-select: \${componentGridImagePicker["user-select"]};
\`;

const typographyStyle = \`
    color: \${componentGridImagePicker.color.text};
    font: \${componentGridImagePicker.typography.font};
    letter-spacing: \${componentGridImagePicker.typography.letterSpacing};
    font-variation-settings: 'wdth' \${componentGridImagePicker.typography.fontWidth};
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
  color: \${componentGridImagePicker.color.text};
\`;

const iconSvgStyles = \`
  width: \${componentIcon.md.size};
  height: \${componentIcon.md.size};
  fill:  \${componentGridImagePicker.color.text};
\`;

// e.g. adding to DOM using vanilla JS styles
document.getElementById("app").innerHTML = \`
<div class="container">
  <div style="\${gridImagePickerStyles}\${typographyStyle}">C</div>
  <div style="\${gridImagePickerStyles}">
	<span class="material-symbols" style="\${iconStyles}">raven</span>
  </div>
  <div style="\${gridImagePickerStyles}">
    <span class="material-symbols" style="\${iconStyles}"><svg style="\${iconSvgStyles}" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg></span>
  </div>
  <div style="\${gridImagePickerStyles}">
    <img style="\${imgStyle}" src="https://uploads.guimcode.co.uk/2026/01/27/f85e2e477ce54f4c3b671faa5cd21673aa9f8072fddb5d70a73e6038dc812eec.jpg" alt="Mahesh Makani" />
  </div>
\`;
`;
