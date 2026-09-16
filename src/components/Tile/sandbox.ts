// Component Name
export const componentName = 'Tile';

// React sandbox example
export const componentTsx = /* javascript */ `import { Tile } from '@guardian/stand/Tile';

export const Component = () => (
	<>
		<Tile href="#" description="Description text">
			Title text
		</Tile>

		<Tile href="#" description="Description text" icon="workspaces" size="sm">
			Workspace
		</Tile>
	</>
);
`;

// Custom component - CSS example
export const componentCss = /* css */ `
/* import tile styles */
@import '@guardian/stand/component/tile.css';
.stand-clickable-tile {
	display: inline-flex;
	align-items: center;
	justify-content: space-between;
	min-height: 3.5rem;
	width: 16rem;
	padding: 0.5rem 0.75rem;
	border: 0.0625rem solid #dcdcdc;
	border-radius: 0.125rem;
	background-color: #ffffff;
	color: #121212;
	text-decoration: none;
	box-sizing: border-box;
}

.stand-clickable-tile-content {
	display: flex;
	align-items: flex-start;
	gap: 0.625rem;
	min-width: 0;
}

.stand-clickable-tile-text {
	display: flex;
	flex-direction: column;
	gap: 0.125rem;
}

.stand-clickable-tile-title {
	font: normal 700 0.875rem/1.3 Open Sans;
}

.stand-clickable-tile-description {
	font: normal 460 0.875rem/1.3 Open Sans;
	color: #545454;
}
`;

export const componentHtml = /* html */ `<div class="container flow-column">
	<a href="#" class="stand-clickable-tile">
		<div class="stand-clickable-tile-content">
			<span aria-hidden="true">[icon]</span>
			<div class="stand-clickable-tile-text">
				<span class="stand-clickable-tile-title">Title text</span>
				<span class="stand-clickable-tile-description">Description text</span>
			</div>
		</div>
		<span aria-hidden="true">-&gt;</span>
	</a>

	<a href="#" class="stand-clickable-tile">
		<div class="stand-clickable-tile-content">
			<span aria-hidden="true">[icon]</span>
			<div class="stand-clickable-tile-text">
				<span class="stand-clickable-tile-title">Workspace</span>
				<span class="stand-clickable-tile-description">Description text</span>
			</div>
		</div>
		<span aria-hidden="true">-&gt;</span>
	</a>
</div>
`;

// Custom component - JS example
export const componentJs = /* javascript */ `import { componentTile } from '@guardian/stand';

const tile = componentTile;

const clickableTileStyles = [
	'display: ' + tile.shared.display + ';',
	'align-items: ' + tile.shared.alignItems + ';',
	'justify-content: ' + tile.shared.justifyContent + ';',
	'min-height: ' + tile.md.minHeight + ';',
	'width: ' + tile.md.width + ';',
	'padding: ' + tile.md.paddingY + ' ' + tile.md.paddingX + ';',
	'border: ' +
		tile.shared.borderWidth +
		' ' +
		tile.shared.borderStyle +
		' ' +
		tile.shared.borderColor +
		';',
	'border-radius: ' + tile.shared.borderRadius + ';',
	'background: ' + tile.shared.backgroundColor + ';',
	'color: ' + tile.shared.color + ';',
	'text-decoration: ' + tile.shared.textDecoration + ';',
	'box-sizing: border-box;',
].join('');

document.getElementById('app').innerHTML =
	'<a href="#" style="' +
	clickableTileStyles +
	'">' +
	'<span style="margin-right: 0.625rem;">[icon]</span>' +
	'<span style="flex: 1;">Title text</span>' +
	'<span aria-hidden="true">-&gt;</span>' +
	'</a>';
`;
