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
	color: var(--component-toggle-switch-shared-color);
	font: var(--component-toggle-switch-md-typography-font);
	letter-spacing: var(--component-toggle-switch-md-typography-letter-spacing);
	font-variation-settings: "wdth" var(--component-toggle-switch-md-typography-font-width);
}

.stand-toggle-switch.sm {
	font: var(--component-toggle-switch-sm-typography-font);
	letter-spacing: var(--component-toggle-switch-sm-typography-letter-spacing);
	font-variation-settings: "wdth" var(--component-toggle-switch-sm-typography-font-width);
}

.stand-toggle-switch input {
	position: absolute;
	opacity: 0;
}

.stand-toggle-switch-track {
	display: var(--component-toggle-switch-shared-track-display);
	align-items: var(--component-toggle-switch-shared-track-align-items);
	flex-shrink: 0;
	width: var(--component-toggle-switch-md-track-width);
	height: var(--component-toggle-switch-md-track-height);
	padding: var(--component-toggle-switch-shared-track-padding);
	border-radius: var(--component-toggle-switch-shared-track-border-radius);
	background-color: var(--component-toggle-switch-shared-track-background-color);
	transition: var(--component-toggle-switch-shared-track-transition);
}

.stand-toggle-switch.sm .stand-toggle-switch-track {
	width: var(--component-toggle-switch-sm-track-width);
	height: var(--component-toggle-switch-sm-track-height);
}

.stand-toggle-switch-thumb {
	display: flex;
	align-items: center;
	justify-content: center;
	width: var(--component-toggle-switch-md-thumb-size);
	height: var(--component-toggle-switch-md-thumb-size);
	border-radius: var(--component-toggle-switch-shared-thumb-border-radius);
	background-color: var(--component-toggle-switch-shared-thumb-background-color);
	color: var(--component-toggle-switch-shared-thumb-color);
	transition: var(--component-toggle-switch-shared-thumb-transition);
}

.stand-toggle-switch.sm .stand-toggle-switch-thumb {
	width: var(--component-toggle-switch-sm-thumb-size);
	height: var(--component-toggle-switch-sm-thumb-size);
}

.stand-toggle-switch-check {
	opacity: 0;
	line-height: 1;
	font-size: var(--component-toggle-switch-md-thumb-icon-size);
}

.stand-toggle-switch.sm .stand-toggle-switch-check {
	font-size: var(--component-toggle-switch-sm-thumb-icon-size);
}

.stand-toggle-switch-label {
	display: var(--component-toggle-switch-shared-label-display);
	flex-direction: var(--component-toggle-switch-shared-label-flex-direction);
	align-items: var(--component-toggle-switch-shared-label-align-items);
	padding-block: var(--component-toggle-switch-shared-label-padding-block);
}

.stand-toggle-switch-description {
	color: var(--component-toggle-switch-shared-description-color);
	font: var(--component-toggle-switch-shared-description-typography-font);
	letter-spacing: var(--component-toggle-switch-shared-description-typography-letter-spacing);
	font-variation-settings: "wdth" var(--component-toggle-switch-shared-description-typography-font-width);
}

.stand-toggle-switch input:checked + .stand-toggle-switch-track {
	background-color: var(--component-toggle-switch-shared-track-selected-background-color);
}

.stand-toggle-switch input:checked + .stand-toggle-switch-track .stand-toggle-switch-thumb {
	transform: translateX(var(--component-toggle-switch-md-thumb-translate-x));
}

.stand-toggle-switch.sm input:checked + .stand-toggle-switch-track .stand-toggle-switch-thumb {
	transform: translateX(var(--component-toggle-switch-sm-thumb-translate-x));
}

.stand-toggle-switch input:checked + .stand-toggle-switch-track .stand-toggle-switch-check {
	opacity: 1;
}

.stand-toggle-switch input:focus-visible + .stand-toggle-switch-track {
	outline: var(--component-toggle-switch-shared-track-focus-visible-outline);
	outline-offset: var(--component-toggle-switch-shared-track-focus-visible-outline-offset);
}

.stand-toggle-switch:has(input:disabled) {
	color: var(--component-toggle-switch-shared-disabled-color);
	cursor: var(--component-toggle-switch-shared-disabled-cursor);
}

.stand-toggle-switch input:disabled + .stand-toggle-switch-track {
	background-color: var(--component-toggle-switch-shared-track-disabled-background-color);
}

.stand-toggle-switch input:disabled + .stand-toggle-switch-track .stand-toggle-switch-thumb {
	color: var(--component-toggle-switch-shared-thumb-disabled-color);
}
`;

export const componentHtml = /* html */ `<div class="container flow-column">
	<label class="stand-toggle-switch">
		<input type="checkbox" />
		<span class="stand-toggle-switch-track"><span class="stand-toggle-switch-thumb"><span class="material-symbols stand-toggle-switch-check" aria-hidden="true">check</span></span></span>
		<span class="stand-toggle-switch-label">Camera access<span class="stand-toggle-switch-description">App has an access to your camera</span></span>
	</label>
	<label class="stand-toggle-switch">
		<input type="checkbox" checked />
		<span class="stand-toggle-switch-track"><span class="stand-toggle-switch-thumb"><span class="material-symbols stand-toggle-switch-check" aria-hidden="true">check</span></span></span>
		<span class="stand-toggle-switch-label">Notifications</span>
	</label>
	<label class="stand-toggle-switch sm">
		<input type="checkbox" />
		<span class="stand-toggle-switch-track"><span class="stand-toggle-switch-thumb"><span class="material-symbols stand-toggle-switch-check" aria-hidden="true">check</span></span></span>
		<span class="stand-toggle-switch-label">Location access</span>
	</label>
</div>`;

export const componentJs = /* javascript */ `
import { componentToggleSwitch } from '@guardian/stand';

const sheet = new CSSStyleSheet();

sheet.replaceSync(\`
	.js-stand-toggle-switch {
		display: \${componentToggleSwitch.shared.display};
		align-items: \${componentToggleSwitch.shared.alignItems};
		gap: \${componentToggleSwitch.shared.gap};
		cursor: \${componentToggleSwitch.shared.cursor};
		color: \${componentToggleSwitch.shared.color};
		font: \${componentToggleSwitch.md.typography.font};
		letter-spacing: \${componentToggleSwitch.md.typography.letterSpacing};
		font-variation-settings: "wdth" \${componentToggleSwitch.md.typography.fontWidth};
	}

	.js-stand-toggle-switch input { position: absolute; opacity: 0; }

	.js-stand-toggle-switch.sm {
		font: \${componentToggleSwitch.sm.typography.font};
		letter-spacing: \${componentToggleSwitch.sm.typography.letterSpacing};
		font-variation-settings: "wdth" \${componentToggleSwitch.sm.typography.fontWidth};
	}

	.js-stand-toggle-switch-track {
		display: \${componentToggleSwitch.shared.track.display};
		align-items: \${componentToggleSwitch.shared.track.alignItems};
		flex-shrink: 0;
		width: \${componentToggleSwitch.md.track.width};
		height: \${componentToggleSwitch.md.track.height};
		padding: \${componentToggleSwitch.shared.track.padding};
		border-radius: \${componentToggleSwitch.shared.track.borderRadius};
		background-color: \${componentToggleSwitch.shared.track.backgroundColor};
		transition: \${componentToggleSwitch.shared.track.transition};
	}

	.js-stand-toggle-switch.sm .js-stand-toggle-switch-track {
		width: \${componentToggleSwitch.sm.track.width};
		height: \${componentToggleSwitch.sm.track.height};
	}

	.js-stand-toggle-switch-thumb {
		display: flex;
		align-items: center;
		justify-content: center;
		width: \${componentToggleSwitch.md.thumb.size};
		height: \${componentToggleSwitch.md.thumb.size};
		border-radius: \${componentToggleSwitch.shared.thumb.borderRadius};
		background-color: \${componentToggleSwitch.shared.thumb.backgroundColor};
		color: \${componentToggleSwitch.shared.thumb.color};
		transition: \${componentToggleSwitch.shared.thumb.transition};
	}

	.js-stand-toggle-switch.sm .js-stand-toggle-switch-thumb {
		width: \${componentToggleSwitch.sm.thumb.size};
		height: \${componentToggleSwitch.sm.thumb.size};
	}

	.js-stand-toggle-switch-check {
		opacity: 0;
		line-height: 1;
		font-size: \${componentToggleSwitch.md.thumb.iconSize};
	}

	.js-stand-toggle-switch.sm .js-stand-toggle-switch-check {
		font-size: \${componentToggleSwitch.sm.thumb.iconSize};
	}

	.js-stand-toggle-switch-label {
		display: \${componentToggleSwitch.shared.label.display};
		flex-direction: \${componentToggleSwitch.shared.label.flexDirection};
		align-items: \${componentToggleSwitch.shared.label.alignItems};
		padding-block: \${componentToggleSwitch.shared.label.paddingBlock};
	}

	.js-stand-toggle-switch-description {
		color: \${componentToggleSwitch.shared.description.color};
		font: \${componentToggleSwitch.shared.description.typography.font};
		letter-spacing: \${componentToggleSwitch.shared.description.typography.letterSpacing};
		font-variation-settings: "wdth" \${componentToggleSwitch.shared.description.typography.fontWidth};
	}

	.js-stand-toggle-switch input:checked + .js-stand-toggle-switch-track {
		background-color: \${componentToggleSwitch.shared.track.selected.backgroundColor};
	}

	.js-stand-toggle-switch input:checked + .js-stand-toggle-switch-track .js-stand-toggle-switch-thumb {
		transform: translateX(\${componentToggleSwitch.md.thumb.translateX});
	}

	.js-stand-toggle-switch.sm input:checked + .js-stand-toggle-switch-track .js-stand-toggle-switch-thumb {
		transform: translateX(\${componentToggleSwitch.sm.thumb.translateX});
	}

	.js-stand-toggle-switch input:checked + .js-stand-toggle-switch-track .js-stand-toggle-switch-check { opacity: 1; }

	.js-stand-toggle-switch input:focus-visible + .js-stand-toggle-switch-track {
		outline: \${componentToggleSwitch.shared.track.focusVisible.outline};
		outline-offset: \${componentToggleSwitch.shared.track.focusVisible.outlineOffset};
	}

	.js-stand-toggle-switch:has(input:disabled) {
		color: \${componentToggleSwitch.shared.disabled.color};
		cursor: \${componentToggleSwitch.shared.disabled.cursor};
	}

	.js-stand-toggle-switch input:disabled + .js-stand-toggle-switch-track {
		background-color: \${componentToggleSwitch.shared.track.disabled.backgroundColor};
	}

	.js-stand-toggle-switch input:disabled + .js-stand-toggle-switch-track .js-stand-toggle-switch-thumb {
		color: \${componentToggleSwitch.shared.thumb.disabled.color};
	}
\`);

document.adoptedStyleSheets.push(sheet);

document.getElementById('app').innerHTML = \`
	<div class="container flow-column">
		<label class="js-stand-toggle-switch">
			<input type="checkbox" />
			<span class="js-stand-toggle-switch-track"><span class="js-stand-toggle-switch-thumb"><span class="material-symbols js-stand-toggle-switch-check" aria-hidden="true">check</span></span></span>
			<span class="js-stand-toggle-switch-label">Camera access<span class="js-stand-toggle-switch-description">App has an access to your camera</span></span>
		</label>
		<label class="js-stand-toggle-switch">
			<input type="checkbox" checked />
			<span class="js-stand-toggle-switch-track"><span class="js-stand-toggle-switch-thumb"><span class="material-symbols js-stand-toggle-switch-check" aria-hidden="true">check</span></span></span>
			<span class="js-stand-toggle-switch-label">Notifications</span>
		</label>
		<label class="js-stand-toggle-switch sm">
			<input type="checkbox" />
			<span class="js-stand-toggle-switch-track"><span class="js-stand-toggle-switch-thumb"><span class="material-symbols js-stand-toggle-switch-check" aria-hidden="true">check</span></span></span>
			<span class="js-stand-toggle-switch-label">Location access</span>
		</label>
	</div>
\`;
`;
