// import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip } from './Tooltip';

const meta = {
	title: 'Stand/Tools Design System/Components/Tooltip',
	component: Tooltip,
	parameters: { layout: 'centered' },
} satisfies Meta<typeof Tooltip>;

type Story = StoryObj<typeof Tooltip>;

export const Default = {
	args: {},
} satisfies Story;

// export const CustomMessage = {
// 	args: {
// 		message: 'hi there',
// 	},
// } satisfies Story;

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
