import { SemanticRadiusTokens } from './Radius';

export const Radius = {
	render: () => <SemanticRadiusTokens />,
};

export default {
	title: 'Stand/Tools Design System/Semantic/Radius',
	component: Radius,

	parameters: {
		previewTabs: {
			canvas: {
				hidden: true,
			},
		},

		viewMode: 'docs',
	},
};
