// Component Name
export const componentName = 'HtmlPreviewLoader';

// React sandbox example
export const componentTsx = /* javascript */ `import { HtmlPreviewLoader } from '@guardian/stand/HtmlPreviewLoader';

export const Component = () => (
	<>
		{/* default example */}
		<HtmlPreviewLoader />

		{/* custom message example */}
		<HtmlPreviewLoader message="hi there" />

);

`;

// Custom component - CSS example
export const componentCss = /* css */ `
/* import the htmlPreviewLoader styles */
@import '@guardian/stand/component/htmlPreviewLoader.css';
/* import the icon styles if using the icon variant of the htmlPreviewLoader component */
@import "@guardian/stand/component/icon.css";

/* example setup of htmlPreviewLoader style */
.stand-html-preview-loader {
	background-color: var(--component-html-preview-loader-color-background);
	display: var(--component-html-preview-loader-display);
	align-items: var(--component-html-preview-loader-align-items);
	justify-content: var(--component-html-preview-loader-justify-content);
	width: var(--component-html-preview-loader-size);
	height: var(--component-html-preview-loader-size);
	user-select: var(--component-html-preview-loader-user-select);
	color: var(--component-html-preview-loader-color-text);
	font: var(--component-html-preview-loader-typography-font);
	letter-spacing: var(--component-html-preview-loader-typography-letter-spacing);
	font-variation-settings: "wdth" var(--component-html-preview-loader-typography-font-width);
}

.stand-html-preview-loader-icon {
	display: var(--component-icon-shared-display);
	user-select: var(--component-icon-shared-user-select);
	font-size: var(--component-icon-md-size);
}

.stand-html-preview-loader-icon-color-svg > svg {
	width: var(--component-icon-md-size);
	height: var(--component-icon-md-size);
	fill: var(--component-html-preview-loader-color-text);
}

/* example setup for htmlPreviewLoader image */
.stand-html-preview-loader > img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
`;

export const componentHtml = /* html */ `<div class="container">
	<div class="stand-html-preview-loader">C</div>
    <div class="stand-html-preview-loader">
		<span class="material-symbols stand-html-preview-loader-icon">raven</span>
    </div>
    <div class="stand-html-preview-loader">
        <span class="stand-html-preview-loader-icon stand-html-preview-loader-icon-color-svg"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg></span>
    </div>
    <div class="stand-html-preview-loader">
    	<img src="https://uploads.guimcode.co.uk/2026/01/27/f85e2e477ce54f4c3b671faa5cd21673aa9f8072fddb5d70a73e6038dc812eec.jpg" alt="Mahesh Makani" />
    </div>
</div>
`;

// Custom component - JS example
export const componentJs = /* javascript */ `	// for ts/js
		import { componentHtmlPreviewLoader, componentIcon } from "@guardian/stand";

const htmlPreviewLoaderStyles = \`
    background-color: \${componentHtmlPreviewLoader.color.background};
    display: \${componentHtmlPreviewLoader.display};
    align-items: \${componentHtmlPreviewLoader["align-items"]};
    justify-content: \${componentHtmlPreviewLoader["justify-content"]};
    width: \${componentHtmlPreviewLoader.size};
    height: \${componentHtmlPreviewLoader.size};
    user-select: \${componentHtmlPreviewLoader["user-select"]};
\`;

const typographyStyle = \`
    color: \${componentHtmlPreviewLoader.color.text};
    font: \${componentHtmlPreviewLoader.typography.font};
    letter-spacing: \${componentHtmlPreviewLoader.typography.letterSpacing};
    font-variation-settings: 'wdth' \${componentHtmlPreviewLoader.typography.fontWidth};
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
  color: \${componentHtmlPreviewLoader.color.text};
\`;

const iconSvgStyles = \`
  width: \${componentIcon.md.size};
  height: \${componentIcon.md.size};
  fill:  \${componentHtmlPreviewLoader.color.text};
\`;

// e.g. adding to DOM using vanilla JS styles
document.getElementById("app").innerHTML = \`
<div class="container">
  <div style="\${htmlPreviewLoaderStyles}\${typographyStyle}">C</div>
  <div style="\${htmlPreviewLoaderStyles}">
	<span class="material-symbols" style="\${iconStyles}">raven</span>
  </div>
  <div style="\${htmlPreviewLoaderStyles}">
    <span class="material-symbols" style="\${iconStyles}"><svg style="\${iconSvgStyles}" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg></span>
  </div>
  <div style="\${htmlPreviewLoaderStyles}">
    <img style="\${imgStyle}" src="https://uploads.guimcode.co.uk/2026/01/27/f85e2e477ce54f4c3b671faa5cd21673aa9f8072fddb5d70a73e6038dc812eec.jpg" alt="Mahesh Makani" />
  </div>
\`;
`;
