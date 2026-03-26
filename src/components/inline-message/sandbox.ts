// Component Name
export const componentName = 'InlineMessage';

// InlineMessage - React sandbox example
export const componentTsx = /* javascript */ `import { InlineMessage } from '@guardian/stand/inline-message';

export const Component = () => (
  <>
	<InlineMessage level="error">Something went wrong</InlineMessage>
	<InlineMessage level="success">Changes saved successfully</InlineMessage>
	<InlineMessage level="information">
		Your session will expire soon
	</InlineMessage>
	<InlineMessage level="error" hideIcon>
		This message has no icon
	</InlineMessage>
	<InlineMessage
	level="success"
	icon={
		<svg viewBox="-3 -3 30 30" xmlns="http://www.w3.org/2000/svg">
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M12.36 2.5h-.905l-7.6 7.69-.905.905v.453h.905v9.056l.904.896h5.872v-6.333h2.715V21.5h5.89l.904-.932v-9.02h.905v-.453l-1.357-1.357-.001.005zm5.97 8.447-6.412-6.34-6.254 6.326v8.758h3.158V13.81l.452-.453h5.438l.443.453v5.88h3.176z"
		/>
		</svg>
	}
	>
	This message uses a custom svg icon
	</InlineMessage>
  </>
);
`;

// InlineMessage - Custom component - CSS example
export const componentCss = /* css */ `
/* import the inlinemessage styles */
@import '@guardian/stand/component/inlineMessage.css';

.stand-inline-message {
  display: var(--component-inline-message-shared-display);
  align-items: var(--component-inline-message-shared-align-items);
  gap: var(--component-inline-message-shared-gap);
  font: var(--component-inline-message-shared-typography-font);
  letter-spacing: var(
    --component-inline-message-shared-typography-letter-spacing
  );
  font-variation-settings: "wdth"
    var(--component-inline-message-shared-typography-font-width);
}

.stand-inline-message > .material-symbols {
  font-size: var(--component-inline-message-shared-icon-size);
}

.stand-inline-message > svg {
  width: var(--component-inline-message-shared-icon-size);
  height: var(--component-inline-message-shared-icon-size);
}

.stand-inline-message-error {
  color: var(--component-inline-message-error-color);
  fill: var(--component-inline-message-error-color);
}

.stand-inline-message-success {
  color: var(--component-inline-message-success-color);
  fill: var(--component-inline-message-success-color);
}

.stand-inline-message-information {
  color: var(--component-inline-message-information-color);
  fill: var(--component-inline-message-information-color);
}
`;

export const componentHtml = /* html */ `<div class="container flow-column">
	<span class="stand-inline-message stand-inline-message-error">
		<span class="material-symbols">warning</span> Something went wrong
	</span>
	<span class="stand-inline-message stand-inline-message-success">
		<span class="material-symbols">check_circle</span> Changes saved successfully
	</span>
	<span class="stand-inline-message stand-inline-message-information">
		<span class="material-symbols">info</span> Your session will expire soon
	</span>
	<span class="stand-inline-message stand-inline-message-error">
		This message has no icon
	</span>
	<span class="stand-inline-message stand-inline-message-success">
		<svg viewBox="-3 -3 30 30" xmlns="http://www.w3.org/2000/svg">
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M12.36 2.5h-.905l-7.6 7.69-.905.905v.453h.905v9.056l.904.896h5.872v-6.333h2.715V21.5h5.89l.904-.932v-9.02h.905v-.453l-1.357-1.357-.001.005zm5.97 8.447-6.412-6.34-6.254 6.326v8.758h3.158V13.81l.452-.453h5.438l.443.453v5.88h3.176z"
		/>
		</svg>
		This message uses a custom svg icon
	</span>
</div>
`;

// InlineMessage - Custom component - JS example
export const componentJs = /* javascript */ `
import { componentInlineMessage } from "@guardian/stand";

// example of creating a stylesheet in js
const sheet = new CSSStyleSheet();

// apply the rules to the sheet
sheet.replaceSync(\`
	.js-stand-inline-message {
		display: \${componentInlineMessage.shared.display};
		align-items: \${componentInlineMessage.shared['align-items']};
		gap: \${componentInlineMessage.shared.gap};
		font: \${componentInlineMessage.shared.typography.font};
		letter-spacing: \${componentInlineMessage.shared.typography.letterSpacing};
		font-variation-settings: "wdth" \${componentInlineMessage.shared.typography.fontWidth};
	}

	.js-stand-inline-message > .material-symbols {
		font-size: \${componentInlineMessage.shared.icon.size};
	}

	.js-stand-inline-message > svg {
		width: \${componentInlineMessage.shared.icon.size};
		height: \${componentInlineMessage.shared.icon.size};
	}

	.js-stand-inline-message-error {
		color: \${componentInlineMessage.error.color};
		fill: \${componentInlineMessage.error.color};
	}

	.js-stand-inline-message-success {
		color: \${componentInlineMessage.success.color};
		fill: \${componentInlineMessage.success.color};
	}

	.js-stand-inline-message-information {
		color: \${componentInlineMessage.information.color};
		fill: \${componentInlineMessage.information.color};
	}
\`);

// update the document with the sheet
document.adoptedStyleSheets.push(sheet);

// modify the dom with the button components using the generated stylesheet
document.getElementById("app").innerHTML = \`
<div class="container flow-column">
	<span class="js-stand-inline-message js-stand-inline-message-error">
		<span class="material-symbols">warning</span> Something went wrong
	</span>
	<span class="js-stand-inline-message js-stand-inline-message-success">
		<span class="material-symbols">check_circle</span> Changes saved successfully
	</span>
	<span class="js-stand-inline-message js-stand-inline-message-information">
		<span class="material-symbols">info</span> Your session will expire soon
	</span>
	<span class="js-stand-inline-message js-stand-inline-message-error">
		This message has no icon
	</span>
	<span class="js-stand-inline-message js-stand-inline-message-success">
		<svg viewBox="-3 -3 30 30" xmlns="http://www.w3.org/2000/svg">
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M12.36 2.5h-.905l-7.6 7.69-.905.905v.453h.905v9.056l.904.896h5.872v-6.333h2.715V21.5h5.89l.904-.932v-9.02h.905v-.453l-1.357-1.357-.001.005zm5.97 8.447-6.412-6.34-6.254 6.326v8.758h3.158V13.81l.452-.453h5.438l.443.453v5.88h3.176z"
		/>
		</svg>
		This message uses a custom svg icon
	</span>
</div>
\`;
`;
