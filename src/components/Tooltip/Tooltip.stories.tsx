import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { baseColors } from '../../styleD/build/typescript/base/colors';
import { semanticRadius } from '../../styleD/build/typescript/semantic/radius';
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

export const CustomTheme = {
	args: {
		theme: {
			shared: {
				color: baseColors.orange[900],
				backgroundColor: baseColors.orange[50],
			},
			tooltip: {
				borderRadius: semanticRadius.cornerMd,
			},
		},
	},
} satisfies Story;

export const CssOverrides = {
	args: {
		cssOverrides: css(css`
			span {
				font-size: 1.25rem;
			}
			&[data-placement='right'] {
				margin-left: 1.5rem;
			}
			svg {
				width: 18px;
				height: 28px;
			}
		`),
	},
} satisfies Story;

export default meta;
