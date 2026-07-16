// import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip } from './Tooltip';

const meta = {
	title: 'Stand/Tools Design System/Components/Tooltip',
	component: Tooltip,
	args: {
		children:
			'Which region (AUS, UK, US or EUR) is the newsletter targeted at?',
	},
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Tooltip>;

type Story = StoryObj<typeof Tooltip>;

export const Default = {
	name: 'Default - Placement End',
} satisfies Story;

export const PlacementStart = {
	args: {
		placement: 'start',
	},
} satisfies Story;

export const PlacementTop = {
	args: {
		placement: 'top',
	},
} satisfies Story;

export const PlacementBottom = {
	args: {
		placement: 'bottom',
	},
} satisfies Story;

// export const CustomTheme = {
// 	args: {
// 		theme: {
// 			color: {
// 				background: 'blue',
// 				text: 'lime',
// 			},
// 		},
// 	},
// } satisfies Story;

// export const CssOverrides = {
// 	args: {
// 		cssOverrides: css({
// 			color: 'red',
// 			border: '4px dotted black',
// 			padding: 5,
// 		}),
// 	},
// } satisfies Story;

export default meta;
