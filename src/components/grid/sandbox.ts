// Component Name
export const componentName = 'Grid';

// Grid - React sandbox example
export const componentTsx = /* javascript */ `import { Grid, Item } from '@guardian/stand/grid';

export const Component = () => (
	<Grid
		theme={{
			gap: '16px',
			columns: 12,
			direction: 'row',
			wrap: 'wrap',
			justifyContent: 'flex-start',
			alignItems: 'stretch',
		}}
	>
		<Item size={{ sm: 12, md: 8, lg: 6 }}>Main content</Item>
		<Item size={{ sm: 12, md: 4, lg: 3 }} offset={{ lg: 1 }}>
			Sidebar
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
	display: var(--component-grid-shared-display);
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: stretch;
	gap: 16px;
}

.stand-grid-item {
	box-sizing: border-box;
	padding: 16px;
	background: #eff3ff;
	border: 1px solid #b8c9ff;
	border-radius: 6px;
	text-align: center;
}

.stand-grid-item--main {
	flex: 0 0 calc(((100% - 11 * 16px) * 6 / 12) + 5 * 16px);
}

.stand-grid-item--sidebar {
	flex: 0 0 calc(((100% - 11 * 16px) * 3 / 12) + 2 * 16px);
	margin-left: calc(((100% - 11 * 16px) * 1 / 12) + 1 * 16px);
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

const containerStyle = \`
	display: \${componentGrid.shared.display};
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: stretch;
	gap: 16px;
\`;

const itemStyle = \`
	box-sizing: border-box;
	padding: 16px;
	background: #eff3ff;
	border: 1px solid #b8c9ff;
	border-radius: 6px;
	text-align: center;
\`;

document.getElementById("app").innerHTML = \`
	<div style="\${containerStyle}">
		<div style="\${itemStyle}; flex: 0 0 calc(((100% - 11 * 16px) * 6 / 12) + 5 * 16px);">Main content</div>
		<div style="\${itemStyle}; flex: 0 0 calc(((100% - 11 * 16px) * 3 / 12) + 2 * 16px); margin-left: calc(((100% - 11 * 16px) * 1 / 12) + 1 * 16px);">Sidebar</div>
		<div style="\${itemStyle}; flex: 0 0 auto; width: auto; max-width: none; white-space: nowrap;">Auto width</div>
		<div style="\${itemStyle}; flex-basis: 0; flex-grow: 1; max-width: 100%;">Grows to fill</div>
	</div>
\`;
`;
