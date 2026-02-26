// Component Name
export const componentName = 'Favicon';

// React sandbox example
export const componentTsx = /* javascript */ `import { Favicon } from '@guardian/stand/favicon';

export const Component = () => (
	<>
		{/* letter example */}
		<Favicon letter="C" />

		{/* icon example */}
		<Favicon icon="raven" />

		{/* svg icon example */}
		<Favicon
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#1f1f1f"
            >
              <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
            </svg>
          }
        />

		{/* image example */}
		<Favicon
          src="https://uploads.guimcode.co.uk/2026/01/27/f85e2e477ce54f4c3b671faa5cd21673aa9f8072fddb5d70a73e6038dc812eec.jpg"
          alt="Mahesh Makani"
        />
	</>
);

`;

// Custom component - CSS example
export const componentCss = /* css */ `
/* import the favicon styles */
@import '@guardian/stand/component/favicon.css';
/* import the icon styles if using the icon variant of the favicon component */
@import "@guardian/stand/component/icon.css";

/* example setup of favicon style */
.stand-favicon {
	background-color: var(--component-favicon-color-background);
	display: var(--component-favicon-display);
	align-items: var(--component-favicon-align-items);
	justify-content: var(--component-favicon-justify-content);
	width: var(--component-favicon-size);
	height: var(--component-favicon-size);
	user-select: var(--component-favicon-user-select);
	color: var(--component-favicon-color-text);
	font: var(--component-favicon-typography-font);
	letter-spacing: var(--component-favicon-typography-letter-spacing);
	font-variation-settings: "wdth" var(--component-favicon-typography-font-width);
}

.stand-favicon-icon {
	display: var(--component-icon-shared-display);
	user-select: var(--component-icon-shared-user-select);
	font-size: var(--component-icon-md-size);
}

.stand-favicon-icon-color-svg > svg {
	width: var(--component-icon-md-size);
	height: var(--component-icon-md-size);
	fill: var(--component-favicon-color-text);
}

/* example setup for favicon image */
.stand-favicon > img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
`;

export const componentHtml = /* html */ `<div class="container">
	<div class="stand-favicon">C</div>
    <div class="stand-favicon">
		<span class="material-symbols stand-favicon-icon">raven</span>
    </div>
    <div class="stand-favicon">
        <span class="stand-favicon-icon stand-favicon-icon-color-svg"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg></span>
    </div>
    <div class="stand-favicon">
    	<img src="https://uploads.guimcode.co.uk/2026/01/27/f85e2e477ce54f4c3b671faa5cd21673aa9f8072fddb5d70a73e6038dc812eec.jpg" alt="Mahesh Makani" />
    </div>
</div>
`;

// Custom component - JS example
export const componentJs = /* javascript */ `	// for ts/js
		import { componentFavicon, componentIcon } from "@guardian/stand";

const faviconStyles = \`
    background-color: \${componentFavicon.color.background};
    display: \${componentFavicon.display};
    align-items: \${componentFavicon["align-items"]};
    justify-content: \${componentFavicon["justify-content"]};
    width: \${componentFavicon.size};
    height: \${componentFavicon.size};
    user-select: $\{componentFavicon["user-select"]};
\`;

const typographyStyle = \`
    color: \${componentFavicon.color.text};
    font: $\{componentFavicon.typography.font};
    letter-spacing: \${componentFavicon.typography.letterSpacing};
    font-variation-settings: 'wdth' \${componentFavicon.typography.fontWidth};
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
  color: \${componentFavicon.color.text};
\`;

const iconSvgStyles = \`
  width: \${componentIcon.md.size};
  height: \${componentIcon.md.size};
  fill:  \${componentFavicon.color.text};
\`;

// e.g. adding to DOM using vanilla JS styles
document.getElementById("app").innerHTML = \`
<div class="container">
  <div style="\${faviconStyles}\${typographyStyle}">C</div>
  <div style="\${faviconStyles}">
	<span class="material-symbols" style="\${iconStyles}">raven</span>
  </div>
  <div style="\${faviconStyles}">
    <span class="material-symbols" style="\${iconStyles}"><svg style="\${iconSvgStyles}" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg></span>
  </div>
  <div style="\${faviconStyles}">
    <img style="\${imgStyle}" src="https://uploads.guimcode.co.uk/2026/01/27/f85e2e477ce54f4c3b671faa5cd21673aa9f8072fddb5d70a73e6038dc812eec.jpg" alt="Mahesh Makani" />
  </div>
\`;
`;
