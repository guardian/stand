import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { baseColors } from '../../styleD/build/typescript/base/colors';
import { Tile } from './Tile';

const meta = {
	title: 'Stand/Editorial Components/Tile',
	component: Tile,
	parameters: {},
} satisfies Meta<typeof Tile>;

type Story = StoryObj<typeof Tile>;

export default meta;

export const DefaultMedium = {
	args: {
		href: '#',
		children: 'Title text',
		description: 'Description text',
		size: 'md',
	},
} satisfies Story;

export const Small = {
	args: {
		href: '#',
		children: 'Title text',
		description: 'Description text',
		size: 'sm',
	},
} satisfies Story;

export const ExtraSmall = {
	args: {
		href: '#',
		children: 'Title text',
		description: 'Description text',
		size: 'xs',
	},
} satisfies Story;

export const AllSizes = {
	render: () => (
		<div
			css={css`
				display: flex;
				flex-direction: column;
				gap: 1rem;
				max-width: 48rem;
			`}
		>
			<Tile href="#" description="Extra small" size="xs">
				XSmall
			</Tile>
			<Tile href="#" description="Small" size="sm">
				Small
			</Tile>
			<Tile href="#" description="Medium" size="md">
				Medium
			</Tile>
		</div>
	),
} satisfies Story;

export const WithCustomIcon = {
	args: {
		href: '#',
		children: 'Title text',
		description: 'Description text',
		icon: 'mail',
		size: 'md',
	},
} satisfies Story;

export const WithDifferentBackgroundColor = {
	args: {
		href: '#',
		children: 'Title text',
		description: 'Description text',
		icon: 'mail',
		size: 'md',
		theme: {
			shared: {
				backgroundColor: baseColors.magenta[900],
			},
		},
	},
} satisfies Story;

export const WithALinkAdded = {
	args: {
		href: 'https://www.guardian.co.uk',
		children: 'Title text with a link',
		description: 'Description text with a link',
		size: 'md',
	},
} satisfies Story;

export const IsTileDisabled = {
	args: {
		href: '#',
		children: 'Title text',
		description: 'Description text',
		icon: 'mail',
		size: 'md',
		isDisabled: true,
	},
} satisfies Story;
