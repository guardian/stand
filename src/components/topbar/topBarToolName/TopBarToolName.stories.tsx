import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { baseColors } from '../../../styleD/build/typescript/base/colors';
import { baseRadius } from '../../../styleD/build/typescript/base/radius';
import { baseSizing } from '../../../styleD/build/typescript/base/sizing';
import { semanticTypography } from '../../../styleD/build/typescript/semantic/typography';
import { TopBarToolName } from './TopBarToolName';

const meta = {
	title: 'Stand/Tools Design System/Components/TopBar/TopBarToolName',
	component: TopBarToolName,
	parameters: {},
	render: (args) => {
		return (
			<div
				css={css`
					display: flex;
				`}
			>
				<TopBarToolName {...args} />
			</div>
		);
	},
} satisfies Meta<typeof TopBarToolName>;

type Story = StoryObj<typeof TopBarToolName>;

export const WithName = {
	args: {
		name: 'Songwriter',
		favicon: {
			letter: 'S',
		},
	},
} satisfies Story;

export const WithSubsection = {
	args: {
		name: 'Songwriter',
		favicon: {
			letter: 'S',
		},
		subsection: 'Article',
		subsectionIcon: 'menu',
	},
} satisfies Story;

export const WithLink = {
	args: {
		name: 'Songwriter',
		favicon: {
			letter: 'S',
		},
		subsection: 'Article',
		subsectionIcon: 'menu',
		href: '#',
		hoverText: 'Back to dashboard',
		collapsedHoverText: 'Back',
	},
} satisfies Story;

export const CustomTheme = {
	args: {
		name: 'Songwriter',
		subsection: 'Article',
		subsectionIcon: 'menu',
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
			typography: semanticTypography['article-body-bold-italic-md'],
			subsection: {
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
