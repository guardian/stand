export const componentName = 'ToggleSwitch';

export const componentTsx = /* javascript */ `import { ToggleSwitch } from '@guardian/stand/ToggleSwitch';

export const Component = () => (
	<>
		<ToggleSwitch description="App has an access to your camera">
			Camera access
		</ToggleSwitch>
		<ToggleSwitch defaultSelected>Notifications</ToggleSwitch>
		<ToggleSwitch size="sm">Location access</ToggleSwitch>
	</>
);
`;

export const componentCss = /* css */ `
@import "@guardian/stand/component/toggleSwitch.css";

.stand-toggle-switch {
	display: var(--component-toggle-switch-shared-display);
	align-items: var(--component-toggle-switch-shared-align-items);
	gap: var(--component-toggle-switch-shared-gap);
	cursor: var(--component-toggle-switch-shared-cursor);
}

.stand-toggle-switch-track {
	width: var(--component-toggle-switch-md-track-width);
	height: var(--component-toggle-switch-md-track-height);
	padding: var(--component-toggle-switch-shared-track-padding);
	border-radius: var(--component-toggle-switch-shared-track-border-radius);
	background-color: var(--component-toggle-switch-shared-track-background-color);
}

.stand-toggle-switch input:checked + .stand-toggle-switch-track {
	background-color: var(--component-toggle-switch-shared-track-selected-background-color);
}
`;

export const componentHtml = /* html */ `<label class="stand-toggle-switch">
	<input type="checkbox" />
	<span class="stand-toggle-switch-track"></span>
	Camera access
</label>`;

export const componentJs = /* javascript */ `
import { componentToggleSwitch } from '@guardian/stand';

const track = document.querySelector('.stand-toggle-switch-track');

if (track) {
	track.style.width = componentToggleSwitch.md.track.width;
	track.style.height = componentToggleSwitch.md.track.height;
}
`;
