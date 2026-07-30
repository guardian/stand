// Component Name
export const componentName = 'UserFeedbackSummary';

// React sandbox example
export const componentTsx = /* javascript */ `import { UserFeedbackSummary } from '@guardian/stand/UserFeedbackSummary';

export const Component = () => (
	<>
		{/* error example */}
		<UserFeedbackSummary level="error" title="Please select an audience segment">
			Additional help text can be provided here
		</UserFeedbackSummary>

		{/* warning example */}
		<UserFeedbackSummary level="warning" title="46 characters or fewer preferred">
			Additional help text can be provided here
		</UserFeedbackSummary>

		{/* success example */}
		<UserFeedbackSummary level="success" title="Email newsletter sent" />

		{/* information example */}
		<UserFeedbackSummary level="information" title="Your session will expire soon">
			Additional help text can be provided here
		</UserFeedbackSummary>

		{/* hidden icon example */}
		<UserFeedbackSummary level="information" title="User feedback without icon" hideIcon>
			Additional help text can be provided here
		</UserFeedbackSummary>
	</>
);

`;

// Custom component - CSS example
export const componentCss = /* css */ `
/* import the user feedback summary styles */
@import '@guardian/stand/component/userFeedbackSummary.css';
/* import the icon styles if using icons */
@import "@guardian/stand/component/icon.css";

/* example setup of user feedback summary style */
.stand-user-feedback-summary {
	display: flex;
	gap: var(--component-user-feedback-summary-shared-gap);
	border-width: var(--component-user-feedback-summary-shared-border-width);
	border-style: var(--component-user-feedback-summary-shared-border-style);
	padding-top: var(--component-user-feedback-summary-shared-padding-top);
	padding-right: var(--component-user-feedback-summary-shared-padding-right);
	padding-bottom: var(--component-user-feedback-summary-shared-padding-bottom);
	padding-left: var(--component-user-feedback-summary-shared-padding-left);
	max-width: var(--component-user-feedback-summary-shared-max-width);
}

/* level-specific border colours */
.stand-user-feedback-summary--error {
	border-color: var(--component-user-feedback-summary-error-border-color);
}

.stand-user-feedback-summary--warning {
	border-color: var(--component-user-feedback-summary-warning-border-color);
}

.stand-user-feedback-summary--success {
	border-color: var(--component-user-feedback-summary-success-border-color);
}

.stand-user-feedback-summary--information {
	border-color: var(--component-user-feedback-summary-information-border-color);
}

/* level-specific text/icon colours */
.stand-user-feedback-summary--error .stand-user-feedback-summary__title,
.stand-user-feedback-summary--error .stand-user-feedback-summary__icon {
	color: var(--component-user-feedback-summary-error-color);
}

.stand-user-feedback-summary--warning .stand-user-feedback-summary__title,
.stand-user-feedback-summary--warning .stand-user-feedback-summary__icon {
	color: var(--component-user-feedback-summary-warning-color);
}

.stand-user-feedback-summary--success .stand-user-feedback-summary__title,
.stand-user-feedback-summary--success .stand-user-feedback-summary__icon {
	color: var(--component-user-feedback-summary-success-color);
}

.stand-user-feedback-summary--information .stand-user-feedback-summary__title,
.stand-user-feedback-summary--information .stand-user-feedback-summary__icon {
	color: var(--component-user-feedback-summary-information-color);
}

/* body text colour */
.stand-user-feedback-summary__body {
	color: var(--component-user-feedback-summary-shared-color);
}
`;

export const componentHtml = /* html */ `<!-- error level -->
<div class="stand-user-feedback-summary stand-user-feedback-summary--error">
	<span class="material-symbols stand-user-feedback-summary__icon">warning</span>
	<div class="stand-user-feedback-summary__text">
		<strong class="stand-user-feedback-summary__title">Please select an audience segment</strong>
		<span class="stand-user-feedback-summary__body">Additional help text can be provided here</span>
	</div>
</div>

<!-- success level -->
<div class="stand-user-feedback-summary stand-user-feedback-summary--success">
	<span class="material-symbols stand-user-feedback-summary__icon">sentiment_satisfied_alt</span>
	<div class="stand-user-feedback-summary__text">
		<strong class="stand-user-feedback-summary__title">Email newsletter sent</strong>
	</div>
</div>
`;

// Custom component - JS example
export const componentJs = /* javascript */ `import { componentUserFeedbackSummary } from "@guardian/stand";

// Shared layout styles
const containerStyles = \`
	display: flex;
	gap: \${componentUserFeedbackSummary.shared.gap};
	border-width: \${componentUserFeedbackSummary.shared.borderWidth};
	border-style: \${componentUserFeedbackSummary.shared.borderStyle};
	padding-top: \${componentUserFeedbackSummary.shared.paddingTop};
	padding-right: \${componentUserFeedbackSummary.shared.paddingRight};
	padding-bottom: \${componentUserFeedbackSummary.shared.paddingBottom};
	padding-left: \${componentUserFeedbackSummary.shared.paddingLeft};
	max-width: \${componentUserFeedbackSummary.shared.maxWidth};
\`;

// Level-specific styles
const errorBorderColor = componentUserFeedbackSummary.error.borderColor;
const errorColor = componentUserFeedbackSummary.error.color;

const successBorderColor = componentUserFeedbackSummary.success.borderColor;
const successColor = componentUserFeedbackSummary.success.color;

// Body text colour
const bodyColor = componentUserFeedbackSummary.shared.color;

// e.g. adding to DOM using vanilla JS styles
document.getElementById("app").innerHTML = \`
<div style="\${containerStyles} border-color: \${errorBorderColor};">
	<span class="material-symbols" style="color: \${errorColor};">warning</span>
	<div>
		<strong style="color: \${errorColor};">Please select an audience segment</strong>
		<p style="color: \${bodyColor};">Additional help text can be provided here</p>
	</div>
</div>
<div style="\${containerStyles} border-color: \${successBorderColor};">
	<span class="material-symbols" style="color: \${successColor};">sentiment_satisfied_alt</span>
	<div>
		<strong style="color: \${successColor};">Email newsletter sent</strong>
	</div>
</div>
\`;
`;
