// Component Name
export const componentName = 'Grid';

// Grid - React sandbox example
export const componentTsx = /* javascript */ `import { Grid, Item } from '@guardian/stand/grid';

export const Component = () => (
	<Grid>
		<Item size={{ sm: 12, md: 8, lg: 6 }}>Main content - sm:12, md:8, lg:6</Item>
		<Item size={{ sm: 12, md: 4, lg: 3 }} offset={{ md: 1, lg: 2 }}>
			More content - sm:12, md:4, lg:3, offset md:1, lg:2
		</Item>
		<Item size="auto">Auto width</Item>
		<Item size="grow">Grows to fill</Item>
	</Grid>
);
`;

// Grid - Custom component - CSS example
export const componentCss = /* css */ `
/* import the grid styles */
@import '@guardian/stand/component/grid.css';

.stand-grid-container {
	--gap: var(--component-grid-sm-gap);
	display: var(--component-grid-shared-display);
	flex-direction: var(--component-grid-shared-direction);
	flex-wrap: var(--component-grid-shared-wrap);
	justify-content: var(--component-grid-shared-justify-content);
	align-items: var(--component-grid-shared-align-items);
	gap: var(--gap);
	padding: 0 var(--component-grid-sm-padding);
}

@media (min-width: 830px) {
	.stand-grid-container {
		--gap: var(--component-grid-md-gap);
		padding: 0 var(--component-grid-md-padding);
	}
}

@media (min-width: 1056px) {
	.stand-grid-container {
		--gap: var(--component-grid-lg-gap);
		padding: 0 var(--component-grid-lg-padding);
	}
}

.stand-grid-item {
	box-sizing: border-box;
	padding: 16px;
	background: #eff3ff;
	border: 1px solid #b8c9ff;
	border-radius: 6px;
	text-align: center;
}

/* 6-column span: ((100% - 11 * gap) * 6 / 12) + 5 * gap */
.stand-grid-item--main {
	flex: 0 0 calc(((100% - 11 * var(--gap)) * 6 / 12) + 5 * var(--gap));
}

/* 3-column span with 1-column offset */
.stand-grid-item--sidebar {
	flex: 0 0 calc(((100% - 11 * var(--gap)) * 3 / 12) + 2 * var(--gap));
	margin-left: calc(((100% - 11 * var(--gap)) * 1 / 12) + 1 * var(--gap));
}

.stand-grid-item--auto {
	flex: 0 0 auto;
	width: auto;
	max-width: none;
	white-space: nowrap;
}

.stand-grid-item--grow {
	flex-basis: 0;
	flex-grow: 1;
	max-width: 100%;
}
`;

export const componentHtml = /* html */ `<div class="container">
	<div class="stand-grid-container">
		<div class="stand-grid-item stand-grid-item--main">Main content</div>
		<div class="stand-grid-item stand-grid-item--sidebar">Sidebar</div>
		<div class="stand-grid-item stand-grid-item--auto">Auto width</div>
		<div class="stand-grid-item stand-grid-item--grow">Grows to fill</div>
	</div>
</div>
`;

// Grid - Custom component - JS example
export const componentJs = /* javascript */ `
import { componentGrid } from "@guardian/stand";

const { shared, sm } = componentGrid;

const containerStyle = \`
	display: \${shared.display};
	flex-direction: \${shared.direction};
	flex-wrap: \${shared.wrap};
	justify-content: \${shared.justifyContent};
	align-items: \${shared.alignItems};
	gap: \${sm.gap};
	padding: 0 \${sm.padding};
\`;

const itemStyle = \`
	box-sizing: border-box;
	padding: 16px;
	background: #eff3ff;
	border: 1px solid #b8c9ff;
	border-radius: 6px;
	text-align: center;
\`;

// 6-column span: ((100% - (columns - 1) * gap) * size / columns) + (size - 1) * gap
const mainWidth = \`calc(((100% - (\${sm.columns} - 1) * \${sm.gap}) * 6 / \${sm.columns}) + 5 * \${sm.gap})\`;
// 3-column span with 1-column offset
const sidebarWidth = \`calc(((100% - (\${sm.columns} - 1) * \${sm.gap}) * 3 / \${sm.columns}) + 2 * \${sm.gap})\`;
const sidebarOffset = \`calc(((100% - (\${sm.columns} - 1) * \${sm.gap}) * 1 / \${sm.columns}) + 1 * \${sm.gap})\`;

document.getElementById("app").innerHTML = \`
	<div style="\${containerStyle}">
		<div style="\${itemStyle}; flex: 0 0 \${mainWidth};">Main content</div>
		<div style="\${itemStyle}; flex: 0 0 \${sidebarWidth}; margin-left: \${sidebarOffset};">Sidebar</div>
		<div style="\${itemStyle}; flex: 0 0 auto; width: auto; max-width: none; white-space: nowrap;">Auto width</div>
		<div style="\${itemStyle}; flex-basis: 0; flex-grow: 1; max-width: 100%;">Grows to fill</div>
	</div>
\`;
`;
