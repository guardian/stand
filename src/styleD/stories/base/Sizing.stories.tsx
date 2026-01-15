import { Sizing } from './Sizing';

export const BaseSizing = {
	render: () => <Sizing />,
};

export default {
	title: 'Stand/Editorial Design System/Base/Sizing',
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
