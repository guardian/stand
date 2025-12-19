import { baseColors } from '../../build/typescript/base/colors';
import { ColorItem, ColorPalette } from './storybookColorPalette';

export const BasePalette = {
	render: () => (
		<ColorPalette>
			{Object.entries(baseColors).map(([category, shades]) => {
				return (
					<ColorItem
						key={category}
						title={category}
						colors={shades}
					/>
				);
			})}
		</ColorPalette>
	),
};

export default {
	title: 'Stand/Editorial Design System/Base/Color Palette',
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
