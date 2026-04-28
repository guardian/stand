import {
	BetweenDemo,
	FromDemo,
	SemanticBreakpointTokens,
	UntilDemo,
} from './Breakpoints';

export const Breakpoints = {
	render: () => <SemanticBreakpointTokens />,
};

export const From = {
	render: () => <FromDemo />,
	parameters: {
		previewTabs: { canvas: { hidden: false } },
		viewMode: 'story',
	},
};

export const Until = {
	render: () => <UntilDemo />,
	parameters: {
		previewTabs: { canvas: { hidden: false } },
		viewMode: 'story',
	},
};

export const Between = {
	render: () => <BetweenDemo />,
	parameters: {
		previewTabs: { canvas: { hidden: false } },
		viewMode: 'story',
	},
};

export default {
	title: 'Stand/Tools Design System/Semantic/Breakpoints',
	component: Breakpoints,

	parameters: {
		previewTabs: {
			canvas: {
				hidden: true,
			},
		},

		viewMode: 'docs',
	},
};
