// Component Name
export const componentName = 'SearchInput';

// React sandbox example
export const componentTsx = /* javascript */ `import { SearchInput } from '@guardian/stand/SearchInput';

export const Component = () => (
	<>
		{/* default example */}
		<SearchInput />

		{/* custom message example */}
		<SearchInput message="hi there" />

);

`;

// Custom component - CSS example
export const componentCss = /* css */ `
/* import the searchInput styles */
@import '@guardian/stand/component/searchInput.css';
/* import the icon styles if using the icon variant of the searchInput component */
@import "@guardian/stand/component/icon.css";

/* example setup of searchInput style */
.stand-search-input {
	background-color: var(--component-search-input-color-background);
	display: var(--component-search-input-display);
	align-items: var(--component-search-input-align-items);
	justify-content: var(--component-search-input-justify-content);
	width: var(--component-search-input-size);
	height: var(--component-search-input-size);
	user-select: var(--component-search-input-user-select);
	color: var(--component-search-input-color-text);
	font: var(--component-search-input-typography-font);
	letter-spacing: var(--component-search-input-typography-letter-spacing);
	font-variation-settings: "wdth" var(--component-search-input-typography-font-width);
}

.stand-search-input-icon {
	display: var(--component-icon-shared-display);
	user-select: var(--component-icon-shared-user-select);
	font-size: var(--component-icon-md-size);
}

.stand-search-input-icon-color-svg > svg {
	width: var(--component-icon-md-size);
	height: var(--component-icon-md-size);
	fill: var(--component-search-input-color-text);
}

/* example setup for searchInput image */
.stand-search-input > img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
`;

export const componentHtml = /* html */ `<div class="container">
	<div class="stand-search-input">C</div>
    <div class="stand-search-input">
		<span class="material-symbols stand-search-input-icon">raven</span>
    </div>
    <div class="stand-search-input">
        <span class="stand-search-input-icon stand-search-input-icon-color-svg"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg></span>
    </div>
    <div class="stand-search-input">
    	<img src="https://uploads.guimcode.co.uk/2026/01/27/f85e2e477ce54f4c3b671faa5cd21673aa9f8072fddb5d70a73e6038dc812eec.jpg" alt="Mahesh Makani" />
    </div>
</div>
`;

// Custom component - JS example
export const componentJs = /* javascript */ `	// for ts/js
		import { componentSearchInput, componentIcon } from "@guardian/stand";

const searchInputStyles = \`
    background-color: \${componentSearchInput.color.background};
    display: \${componentSearchInput.display};
    align-items: \${componentSearchInput["align-items"]};
    justify-content: \${componentSearchInput["justify-content"]};
    width: \${componentSearchInput.size};
    height: \${componentSearchInput.size};
    user-select: \${componentSearchInput["user-select"]};
\`;

const typographyStyle = \`
    color: \${componentSearchInput.color.text};
    font: \${componentSearchInput.typography.font};
    letter-spacing: \${componentSearchInput.typography.letterSpacing};
    font-variation-settings: 'wdth' \${componentSearchInput.typography.fontWidth};
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
  color: \${componentSearchInput.color.text};
\`;

const iconSvgStyles = \`
  width: \${componentIcon.md.size};
  height: \${componentIcon.md.size};
  fill:  \${componentSearchInput.color.text};
\`;

// e.g. adding to DOM using vanilla JS styles
document.getElementById("app").innerHTML = \`
<div class="container">
  <div style="\${searchInputStyles}\${typographyStyle}">C</div>
  <div style="\${searchInputStyles}">
	<span class="material-symbols" style="\${iconStyles}">raven</span>
  </div>
  <div style="\${searchInputStyles}">
    <span class="material-symbols" style="\${iconStyles}"><svg style="\${iconSvgStyles}" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg></span>
  </div>
  <div style="\${searchInputStyles}">
    <img style="\${imgStyle}" src="https://uploads.guimcode.co.uk/2026/01/27/f85e2e477ce54f4c3b671faa5cd21673aa9f8072fddb5d70a73e6038dc812eec.jpg" alt="Mahesh Makani" />
  </div>
\`;
`;
