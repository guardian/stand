import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { baseColors } from '../../styleD/build/typescript/base/colors';
import { baseRadius } from '../../styleD/build/typescript/base/radius';
import { baseSizing } from '../../styleD/build/typescript/base/sizing';
import { semanticTypography } from '../../styleD/build/typescript/semantic/typography';
import { ToolName } from './ToolName';

const meta = {
	title: 'Stand/Editorial Design System/Components/ToolName',
	component: ToolName,
	parameters: {},
} satisfies Meta<typeof ToolName>;

type Story = StoryObj<typeof ToolName>;

export const WithName = {
	args: {
		name: 'Songwriter',
		favicon: {
			letter: 'S',
		},
	},
} satisfies Story;

export const WithContentType = {
	args: {
		name: 'Songwriter',
		favicon: {
			letter: 'S',
		},
		contentType: 'Article',
		contentTypeIcon: 'menu',
	},
} satisfies Story;

export const CustomTheme = {
	args: {
		name: 'Songwriter',
		contentType: 'Article',
		contentTypeIcon: 'menu',
		favicon: {
			letter: 'S',
			theme: {
				color: {
					background: baseColors['cool-purple'][700],
					text: baseColors.orange[300],
				},
				typography: semanticTypography['body-italic-lg'],
			},
		},
		theme: {
			gap: baseSizing['size-1-px'],
			typography: semanticTypography['article-body-bold-italic-md'],
			contentType: {
				typography: semanticTypography['meta-compact-md'],
			},
		},
	},
} satisfies Story;

export const CssOverrides = {
	name: 'cssOverrides',
	args: {
		name: 'Songwriter',
		favicon: {
			letter: 'S',
		},
		cssOverrides: css`
			border: ${baseSizing['size-2-rem']} solid ${baseColors.red[500]};
			background-color: ${baseColors.orange[700]};
			color: ${baseColors['warm-purple'][300]};
			border-radius: ${baseRadius['corner-4-px']};
		`,
	},
} satisfies Story;

export default meta;
