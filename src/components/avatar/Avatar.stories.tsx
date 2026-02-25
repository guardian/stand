import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { baseColors, baseSizing, baseSpacing } from '../..';
import { Avatar } from './Avatar';
import type { AvatarColors } from './types';
import { avatarColors } from './types';

const meta = {
	title: 'Stand/Tools Design System/Components/Avatar',
	component: Avatar,
	parameters: {},
	args: {
		initials: 'AB',
	},
} satisfies Meta<typeof Avatar>;

type Story = StoryObj<typeof Avatar>;

export default meta;

export const InitialsSm = {
	name: 'initials - sm',
	args: {
		initials: 'AB',
		size: 'sm',
	},
} satisfies Story;

export const InitialsMd = {
	name: 'initials - md',
	args: {
		initials: 'AB',
		size: 'md',
	},
} satisfies Story;

export const ImageSm = {
	name: 'image - sm',
	args: {
		src: 'https://uploads.guimcode.co.uk/2026/01/27/f85e2e477ce54f4c3b671faa5cd21673aa9f8072fddb5d70a73e6038dc812eec.jpg',
		alt: 'Mahesh Makani',
		size: 'sm',
	},
} satisfies Story;

export const ImageMd = {
	name: 'image - md',
	args: {
		src: 'https://uploads.guimcode.co.uk/2026/01/27/f85e2e477ce54f4c3b671faa5cd21673aa9f8072fddb5d70a73e6038dc812eec.jpg',
		alt: 'Mahesh Makani',
		size: 'md',
	},
} satisfies Story;

export const SingleInitial = {
	name: 'single initial - md',
	args: {
		initials: 'Z',
		size: 'md',
	},
} satisfies Story;

export const ImageWithFallback = {
	name: 'image with fallback - md',
	args: {
		src: 'https://example.com/image.jpg',
		initials: 'FB',
		alt: 'User avatar with fallback',
		size: 'md',
	},
} satisfies Story;

export const CustomTheme = {
	name: 'custom theme',
	args: {
		color: 'blue',
		initials: 'CT',
		size: 'md',
		theme: {
			shared: {
				color: {
					blue: {
						background: baseColors.blue[100],
						text: baseColors.neutral[900],
					},
				},
			},
			md: {
				size: baseSizing['size-48-rem'],
			},
		},
	},
} satisfies Story;

export const CssOverrides = {
	name: 'cssOverrides',
	args: {
		initials: 'CO',
		size: 'md',
		color: 'red',
		cssOverrides: css`
			border: ${baseSizing['size-2-rem']} solid ${baseColors.red[500]};
			margin: ${baseSpacing['8-rem']};
		`,
	},
} satisfies Story;

export const DefaultColors = {
	name: 'all default colors',
	render: () => (
		<div
			css={css`
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
				gap: 16px;
			`}
		>
			{['outlined' as AvatarColors, ...avatarColors].map((color) => (
				<div
					key={color}
					css={css`
						display: flex;
						align-items: center;
						gap: 12px;
					`}
				>
					<Avatar initials="AA" size="md" color={color} />
					<code>{color}</code>
				</div>
			))}
		</div>
	),
} satisfies Story;
