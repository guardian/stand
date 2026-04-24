import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { TemplateComponent } from './TemplateComponent';

const meta = {
	title: 'Stand/Tools Design System/Components/TemplateComponent',
	component: TemplateComponent,
	parameters: {},
} satisfies Meta<typeof TemplateComponent>;

type Story = StoryObj<typeof TemplateComponent>;

export const Default = {
	args: {},
} satisfies Story;

export const CustomMessage = {
	args: {
		message: 'hi there',
	},
} satisfies Story;

export const CustomTheme = {
	args: {
		theme: {
			color: {
				background: 'pink',
			},
		},
	},
} satisfies Story;

export const CssOverrides = {
	args: {
		cssOverrides: css({
			color: 'lime',
			border: '2px dotted skyblue',
		}),
	},
} satisfies Story;

export default meta;
