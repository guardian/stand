import { Spacing } from './Spacing';

export const BaseSpacing = {
	render: () => <Spacing />,
};

export default {
	title: 'Stand/Tools Design System/Base/Spacing',
	component: Spacing,

	parameters: {
		previewTabs: {
			canvas: {
				hidden: true,
			},
		},

		viewMode: 'docs',
	},
};
