import { SemanticSizingTokens } from './Sizing';

export const Sizing = {
	render: () => <SemanticSizingTokens />,
};

export default {
	title: 'Stand/Tools Design System/Semantic/Sizing',
	component: Sizing,

	parameters: {
		previewTabs: {
			canvas: {
				hidden: true,
			},
		},

		viewMode: 'docs',
	},
};
