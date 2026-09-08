import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
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

export const WithoutDescription = {
	args: {
		href: '#',
		children: 'Title text only,no description',
		icon: 'owl',
		size: 'md',
	},
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

export const WithoutIcon = {
	args: {
		href: '#',
		children: 'Title text',
		description: 'Description text',
		icon: '',
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

function SelectableExample() {
	const [selectedValue, setSelectedValue] = useState('editorial');

	return (
		<div
			role="group"
			aria-label="Department"
			css={css`
				display: flex;
				gap: 1rem;
			`}
		>
			{['editorial', 'commercial', 'digital'].map((value) => (
				<Tile
					key={value}
					interactionMode="selectable"
					value={value}
					isSelected={selectedValue === value}
					onSelectionChange={setSelectedValue}
					description={`Select the ${value} option`}
					icon={
						value === 'editorial'
							? 'editor_choice'
							: value === 'commercial'
								? 'business_center'
								: 'computer'
					}
				>
					{value === 'editorial'
						? 'Editorial'
						: value === 'commercial'
							? 'Commercial'
							: 'Digital'}
				</Tile>
			))}
		</div>
	);
}

export const Selectable = {
	args: {
		interactionMode: 'selectable',
		value: 'editorial',
		isSelected: true,
		onSelectionChange: () => undefined,
	},
	render: () => <SelectableExample />,
} satisfies Story;

function MultiSelectExample() {
	const [selectedValues, setSelectedValues] = useState(() => new Set(['news']));

	return (
		<div
			role="group"
			aria-label="Sections"
			css={css`
				display: flex;
				gap: 1rem;
			`}
		>
			{['news', 'sport', 'science'].map((value) => (
				<Tile
					key={value}
					interactionMode="multi-select"
					value={value}
					isSelected={selectedValues.has(value)}
					onSelectionChange={(changedValue, isSelected) => {
						setSelectedValues((currentValues) => {
							const nextValues = new Set(currentValues);
							if (isSelected) {
								nextValues.add(changedValue);
							} else {
								nextValues.delete(changedValue);
							}
							return nextValues;
						});
					}}
					description={`Include ${value}`}
					icon={
						value === 'news'
							? 'breaking_news'
							: value === 'sport'
								? 'sports_football'
								: 'science'
					}
				>
					{value === 'news' ? 'News' : value === 'sport' ? 'Sport' : 'Science'}
				</Tile>
			))}
		</div>
	);
}

export const MultiSelect = {
	args: {
		interactionMode: 'multi-select',
		value: 'news',
		isSelected: true,
		onSelectionChange: () => undefined,
	},
	render: () => <MultiSelectExample />,
} satisfies Story;

export const SelectedDisabled = {
	args: {
		interactionMode: 'multi-select',
		value: 'news',
		isSelected: true,
		onSelectionChange: () => undefined,
		children: 'News',
		description: 'Selected and unavailable',
		isDisabled: true,
	},
} satisfies Story;

export const MultiSelectTileSelectedWithColor = {
	args: {
		interactionMode: 'multi-select',
		value: 'news',
		isSelected: true,
		onSelectionChange: () => undefined,
		children: 'News',
		icon: 'breaking_news',
		description: 'Selected with a custom background',
		cssOverrides: css`
			&[data-selected] {
				background-color: ${baseColors.magenta[900]};
			}
			&[data-hovered][data-selected] {
				background-color: ${baseColors.magenta[700]};
			}
		`,
	},
} satisfies Story;
