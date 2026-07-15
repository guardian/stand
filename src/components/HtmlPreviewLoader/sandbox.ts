// Component Name
export const componentName = 'HtmlPreviewLoader';

// React sandbox example
export const componentTsx = /* javascript */ `import { HtmlPreviewLoader } from '@guardian/stand/HtmlPreviewLoader';

const fetchHtml = async () => {
	return '<div style="padding: 16px;">Preview content</div>';
};

export const Component = () => (
	<>
		<HtmlPreviewLoader fetchHtml={fetchHtml} title="Preview" />
		<HtmlPreviewLoader
			fetchHtml={fetchHtml}
			title="Preview with reload"
			allowReloading
		/>
		<HtmlPreviewLoader
			fetchHtml={fetchHtml}
			title="Preview with custom widths"
			widthOptions={[200, 400]}
			defaultWidth={400}
		/>
	</>
);
`;

// Custom component - CSS example
export const componentCss = /* css */ `@import '@guardian/stand/component/htmlPreviewLoader.css';

.stand-html-preview-loader {
	padding-top: var(--component-html-preview-loader-padding-top);
	padding-right: var(--component-html-preview-loader-padding-right);
	padding-bottom: var(--component-html-preview-loader-padding-bottom);
	padding-left: var(--component-html-preview-loader-padding-left);
	background: var(--component-html-preview-loader-shared-color-background);
	color: var(--component-html-preview-loader-shared-color-text);
}

.stand-html-preview-loader__frame {
	background: var(--component-html-preview-loader-preview-frame-background-color);
	border-width: var(--component-html-preview-loader-preview-frame-border-width);
	border-style: var(--component-html-preview-loader-preview-frame-border-style);
	border-color: var(--component-html-preview-loader-preview-frame-border-color);
	padding-top: var(--component-html-preview-loader-preview-frame-padding-top);
	padding-right: var(--component-html-preview-loader-preview-frame-padding-right);
	padding-bottom: var(--component-html-preview-loader-preview-frame-padding-bottom);
	padding-left: var(--component-html-preview-loader-preview-frame-padding-left);
}
`;

export const componentHtml = /* html */ `<div class="stand-html-preview-loader">
	<div class="stand-html-preview-loader__title">Preview</div>
	<div class="stand-html-preview-loader__frame">
		<div>Preview content</div>
	</div>
</div>`;

// Custom component - JS example
export const componentJs = /* javascript */ `import { componentHtmlPreviewLoader } from '@guardian/stand';

const styles = \`
	padding-top: \${componentHtmlPreviewLoader.paddingTop};
	padding-right: \${componentHtmlPreviewLoader.paddingRight};
	padding-bottom: \${componentHtmlPreviewLoader.paddingBottom};
	padding-left: \${componentHtmlPreviewLoader.paddingLeft};
	background: \${componentHtmlPreviewLoader.shared.color.background};
	color: \${componentHtmlPreviewLoader.shared.color.text};
\`;

const frameStyles = \`
	background: \${componentHtmlPreviewLoader.previewFrame.backgroundColor};
	border-width: \${componentHtmlPreviewLoader.previewFrame.borderWidth};
	border-style: \${componentHtmlPreviewLoader.previewFrame.borderStyle};
	border-color: \${componentHtmlPreviewLoader.previewFrame.borderColor};
	padding-top: \${componentHtmlPreviewLoader.previewFrame.paddingTop};
	padding-right: \${componentHtmlPreviewLoader.previewFrame.paddingRight};
	padding-bottom: \${componentHtmlPreviewLoader.previewFrame.paddingBottom};
	padding-left: \${componentHtmlPreviewLoader.previewFrame.paddingLeft};
\`;

document.getElementById('app').innerHTML = \`
	<div style="\${styles}">
		<div>Preview</div>
		<div style="\${frameStyles}">
			<div>Preview content</div>
		</div>
	</div>
\`;
`;
