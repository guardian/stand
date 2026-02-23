import { semanticColors } from '../../build/typescript/semantic/colors';
import { ColorItem, ColorPalette } from '../base/storybookColorPalette';

export const SemanticPalette = {
	render: () => (
		<ColorPalette>
			{Object.entries(semanticColors).map(([category, shades]) => {
				return <ColorItem key={category} title={category} colors={shades} />;
			})}
		</ColorPalette>
	),
};

export default {
	title: 'Stand/Editorial Design System/Semantic/Color Palette',
	component: SemanticPalette,

	parameters: {
		previewTabs: {
			canvas: {
				hidden: true,
			},
		},

		viewMode: 'docs',
	},
};
