import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tile } from './Tile';

const meta = {
	title: 'Stand/Editorial Components/Tile',
	component: Tile,
	parameters: {},
} satisfies Meta<typeof Tile>;

type Story = StoryObj<typeof Tile>;

export default meta;

export const Default = {
	args: {
		href: '#',
		children: 'Title text',
		description: 'Description text',
	},
} satisfies Story;

export const WithCustomIcon = {
	args: {
		href: '#',
		children: 'Title text',
		description: 'Description text',
		icon: 'mail',
	},
} satisfies Story;

export const RowLayout = {
	render: () => (
		<div
			css={css`
				display: flex;
				gap: 0.25rem;
				max-width: 48rem;
			`}
		>
			{Array.from({ length: 3 }).map((_, index) => (
				<Tile key={index} href="#" description="Description text">
					Title text
				</Tile>
			))}
		</div>
	),
} satisfies Story;
