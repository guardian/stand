import { baseColors } from '../../build/typescript/base/colors';
import { ColorItem, ColorPalette } from './StorybookColorPalette';

export const BasePalette = {
	render: () => (
		<ColorPalette>
			{Object.entries(baseColors).map(([category, shades]) => {
				// ignore transparent color
				if (shades === '#00000000') {
					return null;
				}
				return <ColorItem key={category} title={category} colors={shades} />;
			})}
		</ColorPalette>
	),
};

export default {
	title: 'Stand/Tools Design System/Base/Color',
	component: BasePalette,

	parameters: {
		previewTabs: {
			canvas: {
				hidden: true,
			},
		},

		viewMode: 'docs',
	},
};
