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
	letter-spacing: var(--component-inline-message-shared-typography-letter-spacing);
	font-variation-settings: "wdth" var(--component-inline-message-shared-typography-font-width);
}

.stand-inline-message > .material-symbols {
	font-size: var(--component-inline-message-shared-icon-size);
}

.stand-inline-message-error {
	color: var(--component-inline-message-error-color);
}

.stand-inline-message-success {
	color: var(--component-inline-message-success-color);
}

.stand-inline-message-information {
	color: var(--component-inline-message-information-color);
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
</div>
`;

// InlineMessage - Custom component - JS example
export const componentJs = /* javascript */ `
import { componentInlineMessage } from "@guardian/stand";

const style = \`
	display: \${componentInlineMessage.shared.display};
\`;

document.getElementById("app").innerHTML = \`
	<div style="\${style}">Hello</div>
\`;
`;
