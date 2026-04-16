// Component Name
export const componentName = 'AlertBanner';

// AlertBanner - React sandbox example
export const componentTsx = /* javascript */ `import { AlertBanner } from '@guardian/stand/alert-banner';

export const Component = () => (
	<>
		<AlertBanner level="information">
			You are working in the CODE Environment
		</AlertBanner>
		<AlertBanner level="success" showIcon>
			Your changes have been published.
		</AlertBanner>
		<AlertBanner
			level="error"
			showIcon
			closeButtonProps={{ onPress: () => alert('Dismissed') }}
		>
			Unable to save changes.
		</AlertBanner>
	</>
);
`;

// AlertBanner - Custom component - CSS example
export const componentCss = /* css */ `
/* import the alertbanner styles */
@import '@guardian/stand/component/alertBanner.css';

.stand-alert-banner {
	display: var(--component-alertBanner-shared-display);
	align-items: var(--component-alertBanner-shared-align-items);
	justify-content: var(--component-alertBanner-shared-justify-content);
	padding: var(--component-alertBanner-shared-padding-top)
		var(--component-alertBanner-shared-padding-right)
		var(--component-alertBanner-shared-padding-bottom)
		var(--component-alertBanner-shared-padding-left);
	width: var(--component-alertBanner-shared-width);
	height: var(--component-alertBanner-shared-height);
}

.stand-alert-banner-content {
	display: var(--component-alertBanner-shared-content-display);
	justify-content: var(--component-alertBanner-shared-content-justify-content);
	gap: var(--component-alertBanner-shared-content-gap);
	flex: var(--component-alertBanner-shared-content-flex);
	height: var(--component-alertBanner-shared-content-height);
	align-items: var(--component-alertBanner-shared-content-align-items);
	color: var(--component-alertBanner-shared-content-color);
	font: var(--component-alertBanner-shared-content-typography-font);
	letter-spacing: var(--component-alertBanner-shared-content-typography-letter-spacing);
	font-variation-settings: 'wdth'
		var(--component-alertBanner-shared-content-typography-font-width);
}

.stand-alert-banner-content > .material-symbols {
	font-size: 1rem;
	color: var(--component-alertBanner-shared-content-icon-color);
}

.stand-alert-banner-information {
	background-color: var(--component-alertBanner-information-background-color);
}

.stand-alert-banner-success {
	background-color: var(--component-alertBanner-success-background-color);
}

.stand-alert-banner-warning {
	background-color: var(--component-alertBanner-warning-background-color);
}

.stand-alert-banner-error {
	background-color: var(--component-alertBanner-error-background-color);
}

.stand-alert-banner-close {
	border: 0;
	background: transparent;
	cursor: pointer;
	padding: 0.125rem;
}
`;

export const componentHtml = /* html */ `<div class="container flow-column">
	<div class="stand-alert-banner stand-alert-banner-information">
		<div class="stand-alert-banner-content">
			You are working in the CODE Environment
		</div>
	</div>

	<div class="stand-alert-banner stand-alert-banner-success">
		<div class="stand-alert-banner-content">
			<span class="material-symbols">sentiment_satisfied</span>
			Your changes have been published.
		</div>
	</div>

	<div class="stand-alert-banner stand-alert-banner-error">
		<div class="stand-alert-banner-content">
			<span class="material-symbols">warning</span>
			Unable to save changes.
		</div>
		<button class="stand-alert-banner-close" aria-label="Close alert banner">x</button>
	</div>
</div>
`;

// AlertBanner - Custom component - JS example
export const componentJs = /* javascript */ `
import { componentAlertBanner } from "@guardian/stand";

const sheet = new CSSStyleSheet();

sheet.replaceSync(\`
	.js-stand-alert-banner {
		display: \${componentAlertBanner.shared.display};
		align-items: \${componentAlertBanner.shared['align-items']};
		justify-content: \${componentAlertBanner.shared['justify-content']};
		padding: \${componentAlertBanner.shared.padding.top}
			\${componentAlertBanner.shared.padding.right}
			\${componentAlertBanner.shared.padding.bottom}
			\${componentAlertBanner.shared.padding.left};
		width: \${componentAlertBanner.shared.width};
		height: \${componentAlertBanner.shared.height};
	}

	.js-stand-alert-banner-content {
		display: \${componentAlertBanner.shared.content.display};
		justify-content: \${componentAlertBanner.shared.content['justify-content']};
		gap: \${componentAlertBanner.shared.content.gap};
		flex: \${componentAlertBanner.shared.content.flex};
		height: \${componentAlertBanner.shared.content.height};
		align-items: \${componentAlertBanner.shared.content['align-items']};
		color: \${componentAlertBanner.shared.content.color};
		font: \${componentAlertBanner.shared.content.typography.font};
		letter-spacing: \${componentAlertBanner.shared.content.typography.letterSpacing};
		font-variation-settings: 'wdth' \${componentAlertBanner.shared.content.typography.fontWidth};
	}

	.js-stand-alert-banner-content > .material-symbols {
		font-size: 1rem;
		color: \${componentAlertBanner.shared.content.icon.color};
	}

	.js-stand-alert-banner-information {
		background-color: \${componentAlertBanner.information['background-color']};
	}

	.js-stand-alert-banner-success {
		background-color: \${componentAlertBanner.success['background-color']};
	}

	.js-stand-alert-banner-error {
		background-color: \${componentAlertBanner.error['background-color']};
	}

	.js-stand-alert-banner-close {
		border: 0;
		background: transparent;
		cursor: pointer;
		padding: 0.125rem;
	}
\`);

document.adoptedStyleSheets.push(sheet);

document.getElementById("app").innerHTML = \`
	<div class="container flow-column">
		<div class="js-stand-alert-banner js-stand-alert-banner-information">
			<div class="js-stand-alert-banner-content">
				You are working in the CODE Environment
			</div>
		</div>

		<div class="js-stand-alert-banner js-stand-alert-banner-success">
			<div class="js-stand-alert-banner-content">
				<span class="material-symbols">sentiment_satisfied</span>
				Your changes have been published.
			</div>
		</div>

		<div class="js-stand-alert-banner js-stand-alert-banner-error">
			<div class="js-stand-alert-banner-content">
				<span class="material-symbols">warning</span>
				Unable to save changes.
			</div>
			<button class="js-stand-alert-banner-close" aria-label="Close alert banner">x</button>
		</div>
	</div>
\`;
`;
