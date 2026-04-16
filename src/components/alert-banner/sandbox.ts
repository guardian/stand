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
	display: var(--component-alert-banner-shared-display);
	align-items: var(--component-alert-banner-shared-align-items);
	justify-content: var(--component-alert-banner-shared-justify-content);
	padding: var(--component-alert-banner-shared-padding-top)
		var(--component-alert-banner-shared-padding-right)
		var(--component-alert-banner-shared-padding-bottom)
		var(--component-alert-banner-shared-padding-left);
	width: var(--component-alert-banner-shared-width);
	height: var(--component-alert-banner-shared-height);
}

.stand-alert-banner-content {
	display: var(--component-alert-banner-shared-content-display);
	justify-content: var(--component-alert-banner-shared-content-justify-content);
	gap: var(--component-alert-banner-shared-content-gap);
	flex: var(--component-alert-banner-shared-content-flex);
	height: var(--component-alert-banner-shared-content-height);
	align-items: var(--component-alert-banner-shared-content-align-items);
	color: var(--component-alert-banner-shared-content-color);
	font: var(--component-alert-banner-shared-content-typography-font);
	letter-spacing: var(--component-alert-banner-shared-content-typography-letter-spacing);
	font-variation-settings: 'wdth'
		var(--component-alert-banner-shared-content-typography-font-width);
}

.stand-alert-banner-content > .material-symbols {
	font-size: 1rem;
	color: var(--component-alert-banner-shared-content-icon-color);
}

.stand-alert-banner-information {
	background-color: var(--component-alert-banner-information-background-color);
}

.stand-alert-banner-success {
	background-color: var(--component-alert-banner-success-background-color);
}

.stand-alert-banner-warning {
	background-color: var(--component-alert-banner-warning-background-color);
}

.stand-alert-banner-error {
	background-color: var(--component-alert-banner-error-background-color);
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
