import { Radius } from './Radius';

export const BaseRadius = {
	render: () => <Radius />,
};

export default {
	title: 'Stand/Tools Design System/Base/Radius',
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
