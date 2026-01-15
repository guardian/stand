import { Spacing } from './Spacing';

export const BaseSpacing = {
	render: () => <Spacing />,
};

export default {
	title: 'Stand/Editorial Design System/Base/Spacing',
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
