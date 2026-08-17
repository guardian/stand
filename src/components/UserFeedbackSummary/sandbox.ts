// Component Name
export const componentName = 'UserFeedbackSummary';

// React sandbox example
export const componentTsx = /* javascript */ `import { UserFeedbackSummary } from '@guardian/stand/UserFeedbackSummary';

export const Component = () => (
	<>
		<UserFeedbackSummary level="error" title="Please select an audience segment">
			Additional help text can be provided here
		</UserFeedbackSummary>

		<UserFeedbackSummary level="warning" title="46 characters or fewer preferred">
			Additional help text can be provided here
		</UserFeedbackSummary>

		<UserFeedbackSummary level="success" title="Email newsletter sent" />

		<UserFeedbackSummary level="information" title="Your session will expire soon">
			Additional help text can be provided here
		</UserFeedbackSummary>

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
@import "@guardian/stand/component/icon.css";
@import '@guardian/stand/semantic/typography.css';
@import '@guardian/stand/base/spacing.css';
@import '@guardian/stand/base/sizing.css';

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

.stand-user-feedback-summary__icon {
	display:  var(--component-icon-shared-display);
	font-size: var(--component-icon-md-size);
}

.stand-user-feedback-summary__text {
	display: flex;
	flex-direction: column;
	gap: var(--base-spacing-4-rem);
	margin-top: var(--base-sizing-size1-rem);
}

.stand-user-feedback-summary__title {
	font: var(--semantic-typography-body-bold-sm-font);
	letter-spacing: var(--semantic-typography-body-bold-sm-letter-spacing);
	font-variation-settings: "wdth" var(--semantic-typography-body-bold-sm-font-width);
}

.stand-user-feedback-summary__help {
	color: var(--component-user-feedback-summary-shared-color);
	font: var(--semantic-typography-body-sm-font);
	letter-spacing: var(--semantic-typography-body-sm-letter-spacing);
	font-variation-settings: "wdth" var(--semantic-typography-body-sm-font-width);
}

.stand-user-feedback-summary--error {
	border-color: var(--component-user-feedback-summary-error-border-color);
	.stand-user-feedback-summary__icon,
	.stand-user-feedback-summary__title {
		color: var(--component-user-feedback-summary-error-color);
	}
}

.stand-user-feedback-summary--success {
	border-color: var(--component-user-feedback-summary-success-border-color);
	.stand-user-feedback-summary__icon,
	.stand-user-feedback-summary__title {
		color: var(--component-user-feedback-summary-success-color);
	}
}
`;

export const componentHtml = /* html */ `
<div class="stand-user-feedback-summary stand-user-feedback-summary--error">
	<span class="material-symbols stand-user-feedback-summary__icon">warning</span>
	<div class="stand-user-feedback-summary__text">
		<span class="stand-user-feedback-summary__title">Please select an audience segment</span>
		<span class="stand-user-feedback-summary__help">Additional help text can be provided here</span>
	</div>
</div>
<div class="stand-user-feedback-summary stand-user-feedback-summary--success">
	<span class="material-symbols stand-user-feedback-summary__icon">sentiment_satisfied_alt</span>
	<div class="stand-user-feedback-summary__text">
		<strong class="stand-user-feedback-summary__title">Email newsletter sent</strong>
	</div>
</div>
`;

// Custom component - JS example
export const componentJs = /* javascript */ `import {
	componentUserFeedbackSummary,
	componentIcon,
	semanticTypography,
	baseSpacing,
	baseSizing
} from "@guardian/stand";

const sheet = new CSSStyleSheet();

sheet.replaceSync(\`
	.js-stand-user-feedback-summary {
		display: flex;
		gap: \${componentUserFeedbackSummary.shared.gap};
		border-width: \${componentUserFeedbackSummary.shared.borderWidth};
		border-style: \${componentUserFeedbackSummary.shared.borderStyle};
		padding-top: \${componentUserFeedbackSummary.shared.paddingTop};
		padding-right: \${componentUserFeedbackSummary.shared.paddingRight};
		padding-bottom: \${componentUserFeedbackSummary.shared.paddingBottom};
		padding-left: \${componentUserFeedbackSummary.shared.paddingLeft};
		max-width: \${componentUserFeedbackSummary.shared.maxWidth};
	}

	.js-stand-user-feedback-summary__icon {
		display: \${componentIcon.shared.display};
		font-size: \${componentIcon.md.size};
	}

	.js-stand-user-feedback-summary__text {
		display: flex;
		flex-direction: column;
		gap: \${baseSpacing['4Rem']};
		margin-top: \${baseSizing['size1Rem']};
	}

	.js-stand-user-feedback-summary__title {
		font: \${semanticTypography.bodyBoldSm.font};
		letter-spacing: \${semanticTypography.bodyBoldSm.letterSpacing};
		font-variation-settings: "wdth" \${semanticTypography.bodyBoldSm.fontWidth};
	}

	.js-stand-user-feedback-summary__help {
		color: \${componentUserFeedbackSummary.shared.color};
		font: \${semanticTypography.bodySm.font};
		letter-spacing: \${semanticTypography.bodySm.letterSpacing};
		font-variation-settings: "wdth" \${semanticTypography.bodySm.fontWidth};
	}

	.js-stand-user-feedback-summary--error {
		border-color: \${componentUserFeedbackSummary.error.borderColor};
		.js-stand-user-feedback-summary__icon,
		.js-stand-user-feedback-summary__title {
			color: \${componentUserFeedbackSummary.error.color};
		}
	}

	.js-stand-user-feedback-summary--success {
		border-color: \${componentUserFeedbackSummary.success.borderColor};
		.js-stand-user-feedback-summary__icon,
		.js-stand-user-feedback-summary__title {
			color: \${componentUserFeedbackSummary.success.color};
		}
	}
\`);

document.adoptedStyleSheets.push(sheet);

// e.g. adding to DOM using vanilla JS styles
document.getElementById("app").innerHTML = \`
<div class="js-stand-user-feedback-summary js-stand-user-feedback-summary--error">
	<span class="material-symbols js-stand-user-feedback-summary__icon">warning</span>
	<div class="js-stand-user-feedback-summary__text">
		<span class="js-stand-user-feedback-summary__title">Please select an audience segment</span>
		<span class="js-stand-user-feedback-summary__help">Additional help text can be provided here</span>
	</div>
</div>
<div class="js-stand-user-feedback-summary js-stand-user-feedback-summary--success">
	<span class="material-symbols js-stand-user-feedback-summary__icon">sentiment_satisfied_alt</span>
	<div class="js-stand-user-feedback-summary__text">
		<strong class="js-stand-user-feedback-summary__title">Email newsletter sent</strong>
	</div>
</div>
\`;
`;
