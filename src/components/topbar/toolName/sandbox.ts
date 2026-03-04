// Component Name
export const componentName = 'TopBarToolName';

// TopBarToolName - React sandbox example
export const componentTsx = /* javascript */ `import { TopBarToolName } from '@guardian/stand/TopBar';

export const Component = () => {
	return (
		<>
			<TopBarToolName
				name="Songwriter"
				favicon={{ type: 'letter', letter: 'S' }}
				subsection="Article"
				subsectionIcon="menu"
			/>
		</>
	);
};
`;

// Toolname - Custom component - CSS example
export const componentCss = /* css */ `@import "@guardian/stand/component/TopBar.css";
	/* import the favicon styles */
	@import '@guardian/stand/component/favicon.css';

    /* example setup of tool name */
    .stand-topbar-toolname {
		display: var(--component-top-bar-tool-name-display);
		align-items: var(--component-top-bar-tool-name-align-items);
		gap: var(--component-top-bar-tool-name-gap);
		font: var(--component-top-bar-tool-name-typography-font);
		letter-spacing: var(--component-top-bar-tool-name-typography-letter-spacing);
		font-variation-settings: "wdth" var(--component-top-bar-tool-name-typography-font-width);
    }

	.stand-topbar-toolname-divider {
		border-right: var(--component-top-bar-tool-name-divider-border);
		height: var(--component-top-bar-tool-name-divider-height);
	}

	.stand-topbar-toolname-subsection {
		display: var(--component-top-bar-tool-name-display);
		align-items: var(--component-top-bar-tool-name-align-items);
		gap: var(--component-top-bar-tool-name-subsection-gap);
		font: var(--component-top-bar-tool-name-subsection-typography-font);
		letter-spacing: var(--component-top-bar-tool-name-subsection-typography-letter-spacing);
		font-variation-settings: "wdth" var(--component-top-bar-tool-name-subsection-typography-font-width)
	}

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

`;

export const componentHtml = /* html */ `<div class="container">
	<div class="stand-topbar-toolname">
		<div class="stand-favicon">S</div>
		<div>Songwriter</div>
		<div class="stand-topbar-toolname-divider">&nbsp;</div>
		 <div class="stand-topbar-toolname-subsection">
			 <div><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg></div>
			 <div>Article</div>
		</div>
	</div>
</div>`;

// Tool name - Custom component - JS example
export const componentJs = /* javascript */ `
	// for ts/js
	import { componentFavicon, componentTopBar, baseColors } from '@guardian/stand';

	const style = \`
		display: \${componentTopBar.ToolName.display};
		align-items: \${componentTopBar.ToolName["align-items"]};
		gap: \${componentTopBar.ToolName.gap};
		font: \${componentTopBar.ToolName.typography.font};
		letter-spacing: \${componentTopBar.ToolName.typography.letterSpacing};
		font-variation-settings: "wdth" \${componentTopBar.ToolName.typography.fontWidth};
	\`;

	const dividerStyle = \`
		border-right: \${componentTopBar.ToolName.divider.border};
		height:  \${componentTopBar.ToolName.divider.height};
	\`;

	const subsectionStyle = \`
		display: \${componentTopBar.ToolName.display};
		align-items: \${componentTopBar.ToolName["align-items"]};
		gap: \${componentTopBar.ToolName.subsection.gap};
		font: \${componentTopBar.ToolName.subsection.typography.font};
		letter-spacing: \${componentTopBar.ToolName.subsection.typography.letterSpacing};
		font-variation-settings: "wdth" \${componentTopBar.ToolName.subsection.typography.fontWidth};
	\`;

	const faviconStyle = \`
		background-color: \${componentFavicon.color.background};
		display: \${componentFavicon.display};
		align-items: \${componentFavicon["align-items"]};
		justify-content: \${componentFavicon["justify-content"]};
		width: \${componentFavicon.size};
		height: \${componentFavicon.size};
		user-select: \${componentFavicon["user-select"]};
		color: \${componentFavicon.color.text};
		font: \${componentFavicon.typography.font};
		letter-spacing: \${componentFavicon.typography.letterSpacing};
		font-variation-settings: "wdth" \${componentFavicon.typography.fontWidth};
	\`;

	// e.g. adding to DOM using vanilla JS styles
	document.getElementById("app").innerHTML = \`

	<div class="container">
		<div style="\${style}">
			<div style="\${faviconStyle}>S</div>
			<div>Songwriter</div>
			<div style="\${dividerStyle}">&nbsp;</div>
			<div style="\${subsectionStyle}">
				<div><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg></div>
				<div>Article</div>
			</div>
		</div>
	</div>
\`;
`;
