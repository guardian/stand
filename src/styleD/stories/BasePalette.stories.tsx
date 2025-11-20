import { base } from '../build/typescript/base';
import { ColorItem, ColorPalette } from './storybookColorPalette';

export const BasePalette = {
	render: () => (
		<ColorPalette>
			{Object.entries(base.colors).map(([category, shades]) => {
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
	title: 'Stand/Base Palette',
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
