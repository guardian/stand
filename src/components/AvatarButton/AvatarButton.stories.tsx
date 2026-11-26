import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { base } from '../../terrazzo/build/stand';
import type { AvatarColors } from '../Avatar/types';
import { avatarColors } from '../Avatar/types';
import { AvatarButton } from './AvatarButton';

const meta = {
	title: 'Stand/Tools Design System/Components/AvatarButton',
	component: AvatarButton,
	parameters: {},
	args: {
		initials: 'AB',
		onPress: () => alert('AvatarButton clicked!'),
	},
} satisfies Meta<typeof AvatarButton>;

type Story = StoryObj<typeof AvatarButton>;

export default meta;

export const Default = {
	args: {
		initials: 'AB',
		size: 'md',
	},
} satisfies Story;

export const Disabled = {
	args: {
		initials: 'AB',
		size: 'md',
		isDisabled: true,
	},
} satisfies Story;

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
						background: base.colors.blue[100],
						text: base.colors.neutral[900],
					},
				},
			},
			md: {
				size: base.sizing.size48Rem,
			},
		},
	},
} satisfies Story;

export const DangerouslyOverrideCss = {
	name: 'dangerouslyOverrideCss',
	args: {
		initials: 'CO',
		size: 'md',
		color: 'red',
		dangerouslyOverrideCss: css`
			border: ${base.sizing.size2Rem} solid ${base.colors.red[500]};
			margin: ${base.spacing['8Rem']};
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
					<AvatarButton initials="AA" size="md" color={color} />
					<code>{color}</code>
				</div>
			))}
		</div>
	),
} satisfies Story;
