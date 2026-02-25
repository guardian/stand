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
	title: 'Stand/Tools Design System/Semantic/Color',
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
