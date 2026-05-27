import { SemanticSpacingTokens } from './Spacing';

export const Spacing = {
	render: () => <SemanticSpacingTokens />,
};

export default {
	title: 'Stand/Tools Design System/Semantic/Spacing',
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
