import { SemanticGridTokens } from './Grid';

export const Grid = {
	render: () => <SemanticGridTokens />,
};

export default {
	title: 'Stand/Tools Design System/Semantic/Grid',
	component: Grid,

	parameters: {
		previewTabs: {
			canvas: {
				hidden: true,
			},
		},

		viewMode: 'docs',
	},
};
