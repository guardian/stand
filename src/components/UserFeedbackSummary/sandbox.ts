// Component Name
export const componentName = 'UserFeedbackSummary';

// React sandbox example
export const componentTsx = /* javascript */ `import { UserFeedbackSummary } from '@guardian/stand/UserFeedbackSummary';

export const Component = () => (
	<>
		{/* default example */}
		<UserFeedbackSummary />

		{/* custom message example */}
		<UserFeedbackSummary message="hi there" />

);

`;

// Custom component - CSS example
export const componentCss = /* css */ `
/* import the userFeedbackSummary styles */
@import '@guardian/stand/component/userFeedbackSummary.css';
/* import the icon styles if using the icon variant of the userFeedbackSummary component */
@import "@guardian/stand/component/icon.css";

/* example setup of userFeedbackSummary style */
.stand-user-feedback-summary {
	background-color: var(--component-user-feedback-summary-color-background);
	display: var(--component-user-feedback-summary-display);
	align-items: var(--component-user-feedback-summary-align-items);
	justify-content: var(--component-user-feedback-summary-justify-content);
	width: var(--component-user-feedback-summary-size);
	height: var(--component-user-feedback-summary-size);
	user-select: var(--component-user-feedback-summary-user-select);
	color: var(--component-user-feedback-summary-color-text);
	font: var(--component-user-feedback-summary-typography-font);
	letter-spacing: var(--component-user-feedback-summary-typography-letter-spacing);
	font-variation-settings: "wdth" var(--component-user-feedback-summary-typography-font-width);
}

.stand-user-feedback-summary-icon {
	display: var(--component-icon-shared-display);
	user-select: var(--component-icon-shared-user-select);
	font-size: var(--component-icon-md-size);
}

.stand-user-feedback-summary-icon-color-svg > svg {
	width: var(--component-icon-md-size);
	height: var(--component-icon-md-size);
	fill: var(--component-user-feedback-summary-color-text);
}

/* example setup for userFeedbackSummary image */
.stand-user-feedback-summary > img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
`;

export const componentHtml = /* html */ `<div class="container">
	<div class="stand-user-feedback-summary">C</div>
    <div class="stand-user-feedback-summary">
		<span class="material-symbols stand-user-feedback-summary-icon">raven</span>
    </div>
    <div class="stand-user-feedback-summary">
        <span class="stand-user-feedback-summary-icon stand-user-feedback-summary-icon-color-svg"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg></span>
    </div>
    <div class="stand-user-feedback-summary">
    	<img src="https://uploads.guimcode.co.uk/2026/01/27/f85e2e477ce54f4c3b671faa5cd21673aa9f8072fddb5d70a73e6038dc812eec.jpg" alt="Mahesh Makani" />
    </div>
</div>
`;

// Custom component - JS example
export const componentJs = /* javascript */ `	// for ts/js
		import { componentUserFeedbackSummary, componentIcon } from "@guardian/stand";

const userFeedbackSummaryStyles = \`
    background-color: \${componentUserFeedbackSummary.color.background};
    display: \${componentUserFeedbackSummary.display};
    align-items: \${componentUserFeedbackSummary["align-items"]};
    justify-content: \${componentUserFeedbackSummary["justify-content"]};
    width: \${componentUserFeedbackSummary.size};
    height: \${componentUserFeedbackSummary.size};
    user-select: \${componentUserFeedbackSummary["user-select"]};
\`;

const typographyStyle = \`
    color: \${componentUserFeedbackSummary.color.text};
    font: \${componentUserFeedbackSummary.typography.font};
    letter-spacing: \${componentUserFeedbackSummary.typography.letterSpacing};
    font-variation-settings: 'wdth' \${componentUserFeedbackSummary.typography.fontWidth};
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
  color: \${componentUserFeedbackSummary.color.text};
\`;

const iconSvgStyles = \`
  width: \${componentIcon.md.size};
  height: \${componentIcon.md.size};
  fill:  \${componentUserFeedbackSummary.color.text};
\`;

// e.g. adding to DOM using vanilla JS styles
document.getElementById("app").innerHTML = \`
<div class="container">
  <div style="\${userFeedbackSummaryStyles}\${typographyStyle}">C</div>
  <div style="\${userFeedbackSummaryStyles}">
	<span class="material-symbols" style="\${iconStyles}">raven</span>
  </div>
  <div style="\${userFeedbackSummaryStyles}">
    <span class="material-symbols" style="\${iconStyles}"><svg style="\${iconSvgStyles}" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg></span>
  </div>
  <div style="\${userFeedbackSummaryStyles}">
    <img style="\${imgStyle}" src="https://uploads.guimcode.co.uk/2026/01/27/f85e2e477ce54f4c3b671faa5cd21673aa9f8072fddb5d70a73e6038dc812eec.jpg" alt="Mahesh Makani" />
  </div>
\`;
`;
