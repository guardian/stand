import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { base, semantic } from '../../../terrazzo/build/stand';
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
					background: base.colors.coolPurple[700],
					text: base.colors.orange[300],
				},
				// typography: semanticTypography.bodyItalicLg,
			},
		},
		theme: {
			typography: semantic.typography.articleBodyBoldItalicMd,
			subsection: {
				typography: semantic.typography.metaCompactMd,
			},
		},
	},
} satisfies Story;

export const DangerouslyOverrideCss = {
	name: 'dangerouslyOverrideCss',
	args: {
		name: 'Songwriter',
		favicon: {
			letter: 'S',
		},
		dangerouslyOverrideCss: css`
			border: ${base.sizing.size2Rem} solid ${base.colors.red[500]};
			background-color: ${base.colors.orange[700]};
			color: ${base.colors.warmPurple[300]};
			border-radius: ${base.radius.corner4Px};
		`,
	},
} satisfies Story;

export default meta;
