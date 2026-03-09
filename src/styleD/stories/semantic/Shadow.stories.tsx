import { SemanticShadowTokens } from './Shadow';

export const Shadow = {
	render: () => <SemanticShadowTokens />,
};

export default {
	title: 'Stand/Tools Design System/Semantic/Shadow',
	component: Shadow,

	parameters: {
		previewTabs: {
			canvas: {
				hidden: true,
			},
		},

		viewMode: 'docs',
	},
};
