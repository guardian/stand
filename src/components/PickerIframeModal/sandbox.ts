// Component Name
export const componentName = 'PickerIframeModal';

// React sandbox example
export const componentTsx = /* javascript */ `import { useState } from 'react';
import { PickerIframeModal } from '@guardian/stand/PickerIframeModal';

export const Component = () => {
	const [href, setHref] = useState('https://example.com/picker');
	const [selection, setSelection] = useState('');

	return (
		<>
			<button onClick={() => setHref('https://example.com/picker')}>
				Open picker
			</button>
			<PickerIframeModal
				title="Pick a food"
				href={href}
				validate={(messageData) => {
					if (
						messageData &&
						typeof messageData === 'object' &&
						'symbol' in messageData &&
						typeof messageData.symbol === 'string'
					) {
						return { data: messageData.symbol };
					}
					return { data: undefined };
				}}
				handleData={(data) => {
					setSelection(data);
				}}
				closeModal={() => setHref(undefined)}
				showOpenInNewTabButton
			/>
			<div>{selection || 'No selection yet'}</div>
		</>
	);
};
`;

// Custom component - CSS example
export const componentCss = /* css */ `
/* import the pickerIframeModal styles */
@import '@guardian/stand/component/pickerIframeModal.css';
/* import the icon styles if using the icon variant of the pickerIframeModal component */
@import "@guardian/stand/component/icon.css";

/* example setup of pickerIframeModal style */
.stand-picker-iframe-modal {
	background-color: var(--component-picker-iframe-modal-color-background);
	display: var(--component-picker-iframe-modal-display);
	align-items: var(--component-picker-iframe-modal-align-items);
	justify-content: var(--component-picker-iframe-modal-justify-content);
	width: var(--component-picker-iframe-modal-size);
	height: var(--component-picker-iframe-modal-size);
	user-select: var(--component-picker-iframe-modal-user-select);
	color: var(--component-picker-iframe-modal-color-text);
	font: var(--component-picker-iframe-modal-typography-font);
	letter-spacing: var(--component-picker-iframe-modal-typography-letter-spacing);
	font-variation-settings: "wdth" var(--component-picker-iframe-modal-typography-font-width);
}

.stand-picker-iframe-modal-icon {
	display: var(--component-icon-shared-display);
	user-select: var(--component-icon-shared-user-select);
	font-size: var(--component-icon-md-size);
}

.stand-picker-iframe-modal-icon-color-svg > svg {
	width: var(--component-icon-md-size);
	height: var(--component-icon-md-size);
	fill: var(--component-picker-iframe-modal-color-text);
}

/* example setup for pickerIframeModal image */
.stand-picker-iframe-modal > img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
`;

export const componentHtml = /* html */ `<div class="container">
	<div class="stand-picker-iframe-modal">C</div>
    <div class="stand-picker-iframe-modal">
		<span class="material-symbols stand-picker-iframe-modal-icon">raven</span>
    </div>
    <div class="stand-picker-iframe-modal">
        <span class="stand-picker-iframe-modal-icon stand-picker-iframe-modal-icon-color-svg"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg></span>
    </div>
    <div class="stand-picker-iframe-modal">
    	<img src="https://uploads.guimcode.co.uk/2026/01/27/f85e2e477ce54f4c3b671faa5cd21673aa9f8072fddb5d70a73e6038dc812eec.jpg" alt="Mahesh Makani" />
    </div>
</div>
`;

// Custom component - JS example
export const componentJs = /* javascript */ `	// for ts/js
		import { componentPickerIframeModal, componentIcon } from "@guardian/stand";

const pickerIframeModalStyles = \`
    background-color: \${componentPickerIframeModal.color.background};
    display: \${componentPickerIframeModal.display};
    align-items: \${componentPickerIframeModal["align-items"]};
    justify-content: \${componentPickerIframeModal["justify-content"]};
    width: \${componentPickerIframeModal.size};
    height: \${componentPickerIframeModal.size};
    user-select: \${componentPickerIframeModal["user-select"]};
\`;

const typographyStyle = \`
    color: \${componentPickerIframeModal.color.text};
    font: \${componentPickerIframeModal.typography.font};
    letter-spacing: \${componentPickerIframeModal.typography.letterSpacing};
    font-variation-settings: 'wdth' \${componentPickerIframeModal.typography.fontWidth};
\`;

const imgStyle = \`
  width: 100%;
  height: 100%;
  object-fit: cover;
\`;

const iconStyles = \`
  display: \${componentIcon.shared.display};
  user-select: \${componentIcon.shared["user-select"]};
  font-size: \${componentIcon.md.size};
  color: \${componentPickerIframeModal.color.text};
\`;

const iconSvgStyles = \`
  width: \${componentIcon.md.size};
  height: \${componentIcon.md.size};
  fill:  \${componentPickerIframeModal.color.text};
\`;

// e.g. adding to DOM using vanilla JS styles
document.getElementById("app").innerHTML = \`
<div class="container">
  <div style="\${pickerIframeModalStyles}\${typographyStyle}">C</div>
  <div style="\${pickerIframeModalStyles}">
	<span class="material-symbols" style="\${iconStyles}">raven</span>
  </div>
  <div style="\${pickerIframeModalStyles}">
    <span class="material-symbols" style="\${iconStyles}"><svg style="\${iconSvgStyles}" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg></span>
  </div>
  <div style="\${pickerIframeModalStyles}">
    <img style="\${imgStyle}" src="https://uploads.guimcode.co.uk/2026/01/27/f85e2e477ce54f4c3b671faa5cd21673aa9f8072fddb5d70a73e6038dc812eec.jpg" alt="Mahesh Makani" />
  </div>
\`;
`;
