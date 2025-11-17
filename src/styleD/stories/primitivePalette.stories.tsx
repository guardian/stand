import { tokens } from '../build/typescript/tokens';
import { ColorItem, ColorPalette } from './storybookColorPalette';

export const PrimitivePalette = {
	render: () => (
		<ColorPalette>
			{Object.entries(tokens).map(([category, shades]) => {
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
	title: 'Stand/Primitive palette',
	component: PrimitivePalette,

	parameters: {
		previewTabs: {
			canvas: {
				hidden: true,
			},
		},

		viewMode: 'docs',
	},
};
