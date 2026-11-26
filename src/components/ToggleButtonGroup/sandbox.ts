export const componentName = 'ToggleButtonGroup';

export const componentTsx = /* javascript */ `import { useState } from 'react';
import { ToggleButtonGroup, ToggleButton } from '@guardian/stand/ToggleButtonGroup';

export const Component = () => {
	const [selectedKeys, setSelectedKeys] = useState(new Set(['650']));

	return (
		<>
			<ToggleButtonGroup
				aria-label="Preview width"
				selectedKeys={selectedKeys}
				onSelectionChange={setSelectedKeys}
				disallowEmptySelection
			>
				{['320', '375', '425', '650'].map((width) => (
					<ToggleButton key={width} id={width}>{width}</ToggleButton>
				))}
			</ToggleButtonGroup>
			<p>Selected width: {[...selectedKeys].join(', ')}</p>
		</>
	);
};
`;

export const componentCss = /* css */ `@import '@guardian/stand/component/toggleButtonGroup.css';

.stand-toggle-button-group {
	display: inline-flex;
	border-radius: var(--component-toggle-button-group-group-border-radius);
	background: var(--component-toggle-button-group-group-background-color);
}

.stand-toggle-button-group > button {
	appearance: none;
	box-sizing: border-box;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	position: relative;
	margin: 0;
	height: var(--component-toggle-button-group-item-height);
	padding: 0 var(--component-toggle-button-group-item-padding-inline);
	border: var(--component-toggle-button-group-item-border-width) solid var(--component-toggle-button-group-item-border-color);
	border-inline-color: transparent;
	border-radius: 0;
	background: var(--component-toggle-button-group-group-background-color);
	color: var(--component-toggle-button-group-item-color);
	font: var(--component-toggle-button-group-item-typography-font);
	letter-spacing: var(--component-toggle-button-group-item-typography-letter-spacing);
	font-variation-settings: "wdth" var(--component-toggle-button-group-item-typography-font-width);
	line-height: var(--component-toggle-button-group-item-line-height);
	cursor: pointer;
}

.stand-toggle-button-group > button + button {
	margin-inline-start: calc(-1 * var(--component-toggle-button-group-item-border-width));
}

.stand-toggle-button-group > button:first-child {
	border-inline-start-color: var(--component-toggle-button-group-item-border-color);
	border-start-start-radius: var(--component-toggle-button-group-group-border-radius);
	border-end-start-radius: var(--component-toggle-button-group-group-border-radius);
}

.stand-toggle-button-group > button:last-child {
	border-inline-end-color: var(--component-toggle-button-group-item-border-color);
	border-start-end-radius: var(--component-toggle-button-group-group-border-radius);
	border-end-end-radius: var(--component-toggle-button-group-group-border-radius);
}

.stand-toggle-button-group > button:not(:last-child)::after {
	content: '';
	position: absolute;
	inset-block: calc(var(--component-toggle-button-group-item-separator-inset) - var(--component-toggle-button-group-item-border-width));
	inset-inline-end: 0;
	border-inline-end: var(--component-toggle-button-group-item-border-width) solid var(--component-toggle-button-group-item-border-color);
	pointer-events: none;
}

.stand-toggle-button-group > button[aria-pressed="true"]::after,
.stand-toggle-button-group > button:has(+ [aria-pressed="true"])::after {
	display: none;
}

.stand-toggle-button-group > button:hover {
	background: var(--component-toggle-button-group-item-hover-background-color);
}

.stand-toggle-button-group > button[aria-pressed="true"] {
	z-index: 1;
	background: var(--component-toggle-button-group-item-selected-background-color);
	border-color: var(--component-toggle-button-group-item-selected-border-color);
	color: var(--component-toggle-button-group-item-selected-color);
	font: var(--component-toggle-button-group-item-selected-typography-font);
}

.stand-toggle-button-group > button[aria-pressed="true"]:hover {
	background: var(--component-toggle-button-group-item-selected-hover-background-color);
}

.stand-toggle-button-group > button:focus-visible {
	z-index: 2;
	outline: var(--component-toggle-button-group-item-focus-visible-outline-width) solid var(--component-toggle-button-group-item-focus-visible-outline-color);
	outline-offset: var(--component-toggle-button-group-item-focus-visible-outline-offset);
}

.stand-toggle-button-group > button:disabled {
	background: var(--component-toggle-button-group-item-disabled-background-color);
	border-color: var(--component-toggle-button-group-item-disabled-border-color);
	color: var(--component-toggle-button-group-item-disabled-color);
	cursor: not-allowed;
}
`;

export const componentHtml = /* html */ `<div class="stand-toggle-button-group" role="group" aria-label="Preview width">
	<button type="button" aria-pressed="false">320</button>
	<button type="button" aria-pressed="false">375</button>
	<button type="button" aria-pressed="false">425</button>
	<button type="button" aria-pressed="true">650</button>
</div>
`;

export const componentJs = /* javascript */ `import { componentToggleButtonGroup as theme } from '@guardian/stand';

const style = document.createElement('style');
style.textContent = \`
	.stand-toggle-button-group {
		display: inline-flex;
		background: \${theme.group.backgroundColor};
		border-radius: \${theme.group.borderRadius};
	}
	.stand-toggle-button-group > button {
		appearance: none;
		box-sizing: border-box;
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		margin: 0;
		height: \${theme.item.height};
		padding: 0 \${theme.item.paddingInline};
		border: \${theme.item.borderWidth} solid \${theme.item.borderColor};
		border-inline-color: transparent;
		border-radius: 0;
		background: \${theme.group.backgroundColor};
		color: \${theme.item.color};
		font: \${theme.item.typography.font};
		font-variation-settings: "wdth" \${theme.item.typography.fontWidth};
		letter-spacing: \${theme.item.typography.letterSpacing};
		line-height: \${theme.item.lineHeight};
		cursor: pointer;
	}
	.stand-toggle-button-group > button + button {
		margin-inline-start: calc(-1 * \${theme.item.borderWidth});
	}
	.stand-toggle-button-group > button:first-child {
		border-inline-start-color: \${theme.item.borderColor};
		border-start-start-radius: \${theme.group.borderRadius};
		border-end-start-radius: \${theme.group.borderRadius};
	}
	.stand-toggle-button-group > button:last-child {
		border-inline-end-color: \${theme.item.borderColor};
		border-start-end-radius: \${theme.group.borderRadius};
		border-end-end-radius: \${theme.group.borderRadius};
	}
	.stand-toggle-button-group > button:not(:last-child)::after {
		content: '';
		position: absolute;
		inset-block: calc(\${theme.item.separatorInset} - \${theme.item.borderWidth});
		inset-inline-end: 0;
		border-inline-end: \${theme.item.borderWidth} solid \${theme.item.borderColor};
		pointer-events: none;
	}
	.stand-toggle-button-group > button[aria-pressed="true"]::after,
	.stand-toggle-button-group > button:has(+ [aria-pressed="true"])::after {
		display: none;
	}
	.stand-toggle-button-group > button:hover {
		background: \${theme.item.hover.backgroundColor};
	}
	.stand-toggle-button-group > button[aria-pressed="true"] {
		z-index: 1;
		background: \${theme.item.selected.backgroundColor};
		border-color: \${theme.item.selected.borderColor};
		color: \${theme.item.selected.color};
		font: \${theme.item.selected.typography.font};
	}
	.stand-toggle-button-group > button[aria-pressed="true"]:hover {
		background: \${theme.item.selected.hover.backgroundColor};
	}
	.stand-toggle-button-group > button:focus-visible {
		z-index: 2;
		outline: \${theme.item.focusVisible.outlineWidth} solid \${theme.item.focusVisible.outlineColor};
		outline-offset: \${theme.item.focusVisible.outlineOffset};
	}
\`;
document.head.appendChild(style);
document.getElementById('app').innerHTML = \`${componentHtml}\`;

const group = document.querySelector('.stand-toggle-button-group');
group.addEventListener('click', (event) => {
	const selected = event.target.closest('button');
	if (!selected || selected.disabled) return;
	for (const button of group.querySelectorAll('button')) {
		button.setAttribute('aria-pressed', String(button === selected));
	}
});
`;
