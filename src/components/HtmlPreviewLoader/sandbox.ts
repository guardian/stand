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
	display: var(--component-html-preview-loader-display);
	flex-direction: var(--component-html-preview-loader-flex-direction);
	gap: var(--component-html-preview-loader-gap);
	padding: var(--component-html-preview-loader-padding);
	background: var(--component-html-preview-loader-color-background);
	color: var(--component-html-preview-loader-color-text);
}

.stand-html-preview-loader__frame {
	border: var(--component-html-preview-loader-preview-frame-border);
	background: var(--component-html-preview-loader-preview-frame-background-color);
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
	display: \${componentHtmlPreviewLoader.display};
	flex-direction: \${componentHtmlPreviewLoader.flexDirection};
	gap: \${componentHtmlPreviewLoader.gap};
	padding: \${componentHtmlPreviewLoader.padding};
	background: \${componentHtmlPreviewLoader.color.background};
	color: \${componentHtmlPreviewLoader.color.text};
\`;

const frameStyles = \`
	border: \${componentHtmlPreviewLoader.previewFrame.border};
	background: \${componentHtmlPreviewLoader.previewFrame.backgroundColor};
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
