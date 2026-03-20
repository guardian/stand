// Component Name
export const componentName = 'TopBarNavigation';

// TopBarNavigation - React sandbox example
export const componentTsx = /* javascript */ `import { TopBarNavigation } from '@guardian/stand/TopBar';

export const Component = () => (
	<TopBarNavigation text="Recipe" icon="yakitori" />
);
`;

// TopBarNavigation - Custom component - CSS example
export const componentCss = /* css */ `
/* import the topbarnavigation styles */
@import '@guardian/stand/component/TopBar.css';

.stand-top-bar-navigation {
	display: var(--component-top-bar-navigation-shared-display);
	align-items: var(--component-top-bar-navigation-shared-align-items);
	color: var(--component-top-bar-navigation-unselected-color);
	height: var(--component-top-bar-navigation-shared-height);
	padding-top: var(--component-top-bar-navigation-shared-padding-top);
	padding-right: var(--component-top-bar-navigation-shared-padding-right);
	padding-bottom: var(--component-top-bar-navigation-shared-padding-bottom);
	padding-left: var(--component-top-bar-navigation-shared-padding-left);
	text-decoration: var(--component-top-bar-navigation-shared-text-decoration);

	border-top: var(--component-top-bar-navigation-shared-border-top);
	border-bottom: var(--component-top-bar-navigation-unselected-border-bottom);

	&[data-hovered],
	&:hover {
		border-bottom: var(--component-top-bar-navigation-selected-border-bottom);
		cursor: var(--component-top-bar-navigation-shared-cursor);
	}

	&[data-focus-visible],
	&:focus-visible {
		outline: var(--component-top-bar-navigation-shared-focus-visible-outline);
		border-bottom: var(--component-top-bar-navigation-selected-border-bottom);
		outline-offset: var(--component-top-bar-navigation-shared-focus-visible-outline-offset);
	}

	&[data-disabled] {
		cursor: var(--component-top-bar-navigation-shared-disabled-cursor);
		color: var(--component-top-bar-navigation-shared-disabled-color);
	}

	font: var(--component-top-bar-navigation-md-typography-font);
	letter-spacing: var(--component-top-bar-navigation-md-typography-letter-spacing);
	font-variation-settings: 'wdth'
		var(--component-top-bar-navigation-md-typography-font-width);
}

.stand-navigation-text {
	margin-left: var(--component-top-bar-navigation-text-margin-left);
}

.stand-expand-more {
	margin-top: var(--component-top-bar-navigation-expand-more-padding-top);
	margin-left: var(--component-top-bar-navigation-expand-more-padding-left);
}
`;

export const componentHtml = /* html */ `<div class="container">
	<span class="stand-top-bar-navigation">
		<span class="material-symbols " >file_upload</span>
		<span class="stand-navigation-text">Navigation</span>
		<div class="stand-expand-more">
			<span class="material-symbols" >keyboard_arrow_down</span>
		</div>
	</span>
</div>
`;

// TopBarNavigation - Custom component - JS example
export const componentJs = /* javascript */ `
import { componentTopBar } from "@guardian/stand";

const style = \`
	display: \${componentTopBar.Navigation.shared.display};
	align-items: \${componentTopBar.Navigation.shared['align-items']};
	color: \${componentTopBar.Navigation.unselected.color};
	height: \${componentTopBar.Navigation.shared.height};
	padding-top: \${componentTopBar.Navigation.shared.padding.top};
	padding-right: \${componentTopBar.Navigation.shared.padding.right};
	padding-bottom: \${componentTopBar.Navigation.shared.padding.bottom};
	padding-left: \${componentTopBar.Navigation.shared.padding.left};
	text-decoration: \${componentTopBar.Navigation.shared['text-decoration']};

	font: \${componentTopBar.Navigation.md.typography.font};
	letter-spacing: \${componentTopBar.Navigation.md.typography.letterSpacing};
	font-variation-settings: 'wdth'
		\${componentTopBar.Navigation.md.typography.fontWidth};

	&:hover {
		border-bottom: \${componentTopBar.Navigation.selected['border-bottom']};
		cursor: \${componentTopBar.Navigation.shared.cursor};
	}

	&:focus-visible {
		outline: \${componentTopBar.Navigation.shared[':focus-visible'].outline};
		border-bottom: \${componentTopBar.Navigation.selected['border-bottom']};
		outline-offset: \${componentTopBar.Navigation.shared[':focus-visible']['outline-offset']};
	}

	&[data-disabled] {
		cursor: \${componentTopBar.Navigation.shared[':disabled'].cursor};
		color: \${componentTopBar.Navigation.shared[':disabled'].color};
	}
\`;

const textStyle = \`margin-left: \${componentTopBar.Navigation.text.margin.left};
\`;

const expandMoreStyle = \`
	margin-top: \${componentTopBar.Navigation.menuIndicator.margin.top};
	margin-left: \${componentTopBar.Navigation.menuIndicator.margin.left};
\`;

document.getElementById("app").innerHTML = \`
	<span style="\${style}">
		<span class="material-symbols">file_upload</span>
		<span style="\${textStyle}">Navigation</span>
		<div style="\${expandMoreStyle}">
			<span class="material-symbols">keyboard_arrow_down</span>
		</div>
	</span>
\`;
`;
