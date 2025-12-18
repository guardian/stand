import { Typography } from './Typography';

export const Presets = {
	render: () => <Typography />,
	name: 'presets',
};

export default {
	title: 'Stand/Editorial Design System/Base/Typography',
	component: Presets,

	parameters: {
		previewTabs: {
			canvas: {
				hidden: true,
			},
		},

		viewMode: 'docs',
	},
};
