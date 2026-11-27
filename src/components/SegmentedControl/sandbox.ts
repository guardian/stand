export const componentName = 'SegmentedControl';

export const componentTsx = /* javascript */ `import { useState } from 'react';
import { SegmentedControl, SegmentedControlItem } from '@guardian/stand/SegmentedControl';

export const Component = () => {
	const [selectedKey, setSelectedKey] = useState('board');

	return (
		<>
			<SegmentedControl
				aria-label="View mode"
				selectedKey={selectedKey}
				onSelectionChange={setSelectedKey}
			>
				{['List', 'Grid', 'Gallery', 'Board'].map((view) => (
					<SegmentedControlItem key={view} id={view.toLowerCase()}>{view}</SegmentedControlItem>
				))}
			</SegmentedControl>
			<p>Selected view: {selectedKey}</p>
		</>
	);
};
`;

export const componentCss = /* css */ `@import '@guardian/stand/component/segmentedControl.css';

.stand-segmented-control {
	display: inline-flex;
	border-radius: var(--component-segmented-control-group-border-radius);
	background: var(--component-segmented-control-group-background-color);
}

.stand-segmented-control > button {
	appearance: none;
	box-sizing: border-box;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	position: relative;
	margin: 0;
	height: var(--component-segmented-control-item-height);
	padding: 0 calc(var(--component-segmented-control-item-padding-inline) - var(--component-segmented-control-item-border-width));
	border: var(--component-segmented-control-item-border-width) solid var(--component-segmented-control-item-border-color);
	border-inline-color: transparent;
	border-radius: 0;
	background: var(--component-segmented-control-group-background-color);
	color: var(--component-segmented-control-item-color);
	font: var(--component-segmented-control-item-typography-font);
	letter-spacing: var(--component-segmented-control-item-typography-letter-spacing);
	font-variation-settings: "wdth" var(--component-segmented-control-item-typography-font-width);
	line-height: var(--component-segmented-control-item-line-height);
	cursor: pointer;
}

.stand-segmented-control > button:first-child {
	border-inline-start-color: var(--component-segmented-control-item-border-color);
	border-start-start-radius: var(--component-segmented-control-group-border-radius);
	border-end-start-radius: var(--component-segmented-control-group-border-radius);
}

.stand-segmented-control > button:last-child {
	border-inline-end-color: var(--component-segmented-control-item-border-color);
	border-start-end-radius: var(--component-segmented-control-group-border-radius);
	border-end-end-radius: var(--component-segmented-control-group-border-radius);
}

.stand-segmented-control > button:not(:last-child)::after {
	content: '';
	position: absolute;
	inset-block: calc(var(--component-segmented-control-item-separator-inset) - var(--component-segmented-control-item-border-width));
	inset-inline-end: 0;
	border-inline-end: var(--component-segmented-control-item-border-width) solid var(--component-segmented-control-item-border-color);
	pointer-events: none;
}

.stand-segmented-control > button[aria-pressed="true"]::after,
.stand-segmented-control > button:has(+ [aria-pressed="true"])::after {
	display: none;
}

.stand-segmented-control > button:hover {
	background: var(--component-segmented-control-item-hover-background-color);
}

.stand-segmented-control > button[aria-pressed="true"] {
	z-index: 1;
	background: var(--component-segmented-control-item-selected-background-color);
	border-color: var(--component-segmented-control-item-selected-border-color);
	color: var(--component-segmented-control-item-selected-color);
}

.stand-segmented-control > button[aria-pressed="true"]:hover {
	background: var(--component-segmented-control-item-selected-hover-background-color);
}

.stand-segmented-control > button:focus-visible {
	z-index: 2;
	outline: var(--component-segmented-control-item-focus-visible-outline-width) solid var(--component-segmented-control-item-focus-visible-outline-color);
	outline-offset: var(--component-segmented-control-item-focus-visible-outline-offset);
}
`;

export const componentHtml = /* html */ `<div class="stand-segmented-control" role="group" aria-label="View mode">
	<button type="button" aria-pressed="false">List</button>
	<button type="button" aria-pressed="false">Grid</button>
	<button type="button" aria-pressed="false">Gallery</button>
	<button type="button" aria-pressed="true">Board</button>
</div>
`;

export const componentJs = /* javascript */ `import { componentSegmentedControl as theme } from '@guardian/stand';

const style = document.createElement('style');
style.textContent = \`
	.stand-segmented-control {
		display: inline-flex;
		background: \${theme.group.backgroundColor};
		border-radius: \${theme.group.borderRadius};
	}
	.stand-segmented-control > button {
		appearance: none;
		box-sizing: border-box;
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		margin: 0;
		height: \${theme.item.height};
		padding: 0 calc(\${theme.item.paddingInline} - \${theme.item.borderWidth});
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
	.stand-segmented-control > button:first-child {
		border-inline-start-color: \${theme.item.borderColor};
		border-start-start-radius: \${theme.group.borderRadius};
		border-end-start-radius: \${theme.group.borderRadius};
	}
	.stand-segmented-control > button:last-child {
		border-inline-end-color: \${theme.item.borderColor};
		border-start-end-radius: \${theme.group.borderRadius};
		border-end-end-radius: \${theme.group.borderRadius};
	}
	.stand-segmented-control > button:not(:last-child)::after {
		content: '';
		position: absolute;
		inset-block: calc(\${theme.item.separatorInset} - \${theme.item.borderWidth});
		inset-inline-end: 0;
		border-inline-end: \${theme.item.borderWidth} solid \${theme.item.borderColor};
		pointer-events: none;
	}
	.stand-segmented-control > button[aria-pressed="true"]::after,
	.stand-segmented-control > button:has(+ [aria-pressed="true"])::after {
		display: none;
	}
	.stand-segmented-control > button:hover {
		background: \${theme.item.hover.backgroundColor};
	}
	.stand-segmented-control > button[aria-pressed="true"] {
		z-index: 1;
		background: \${theme.item.selected.backgroundColor};
		border-color: \${theme.item.selected.borderColor};
		color: \${theme.item.selected.color};
	}
	.stand-segmented-control > button[aria-pressed="true"]:hover {
		background: \${theme.item.selected.hover.backgroundColor};
	}
	.stand-segmented-control > button:focus-visible {
		z-index: 2;
		outline: \${theme.item.focusVisible.outlineWidth} solid \${theme.item.focusVisible.outlineColor};
		outline-offset: \${theme.item.focusVisible.outlineOffset};
	}
\`;
document.head.appendChild(style);
document.getElementById('app').innerHTML = \`${componentHtml}\`;

const group = document.querySelector('.stand-segmented-control');
group.addEventListener('click', (event) => {
	const selected = event.target.closest('button');
	if (!selected) return;
	for (const button of group.querySelectorAll('button')) {
		button.setAttribute('aria-pressed', String(button === selected));
	}
});
`;
