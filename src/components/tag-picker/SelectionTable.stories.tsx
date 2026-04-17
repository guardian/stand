import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import type { AutocompleteOption } from './Autocomplete';
import { SelectionTable } from './SelectionTable';

type FruitWithCategory = AutocompleteOption & {
	category: string;
	emoji: string;
};

const exampleFruits: FruitWithCategory[] = [
	{ id: 1, name: 'Apple', category: 'Pome', emoji: '🍏' },
	{ id: 2, name: 'Tomato', category: 'Berry', emoji: '🍅' },
	{ id: 3, name: 'Lemon', category: 'Citrus', emoji: '🍋' },
	{ id: 4, name: 'Date', category: 'Drupe', emoji: '🌴' },
	{ id: 5, name: 'Blueberry', category: 'Berry', emoji: '🫐' },
	{ id: 6, name: 'Strawberry', category: 'Berry', emoji: '🍓' },
];

const meta = {
	title: 'Stand/Editorial Components/TagPicker/SelectionTable',
	component: SelectionTable<FruitWithCategory>,
	args: {
		rows: exampleFruits,
		filterRows: () => true,
		'data-testid': 'storybook',
		removeIcon: <>🗑️</>,
		gripIcon: <>⣿</>,
	},
} satisfies Meta<typeof SelectionTable<FruitWithCategory>>;

type Story = StoryObj<typeof SelectionTable<FruitWithCategory>>;

const getHandleRemove = (
	fruits: FruitWithCategory[],
	setFruits: React.Dispatch<React.SetStateAction<FruitWithCategory[]>>,
) => {
	return (fruit: FruitWithCategory) => {
		console.log('Remove fruit:', fruit);

		const index = fruits.findIndex((f) => f.id === fruit.id);
		if (index !== -1) {
			fruits.splice(index, 1);
			setFruits([...fruits]);
		}
	};
};

export const Default: Story = {} satisfies Story;

export const WithHeading: Story = {
	args: {
		heading: 'Selected fruits',
	},
} satisfies Story;

export const WithRemove: Story = {
	render: (args) => {
		const [fruits, setFruits] = useState(args.rows);

		const handleRemove = getHandleRemove(fruits, setFruits);

		return (
			<SelectionTable
				{...meta.args}
				rows={fruits}
				removeAction={handleRemove}
			/>
		);
	},
} satisfies Story;

export const WithReorder: Story = {
	render: (args) => {
		const [fruits, setFruits] = useState(args.rows);

		return (
			<SelectionTable
				{...meta.args}
				rows={fruits}
				onReorder={(newFruits) => {
					setFruits([...newFruits]);
				}}
			/>
		);
	},
} satisfies Story;

export const WithRemoveAndReorder: Story = {
	render: (args) => {
		const [fruits, setFruits] = useState(args.rows);

		const handleRemove = getHandleRemove(fruits, setFruits);

		return (
			<SelectionTable
				{...meta.args}
				rows={fruits}
				removeAction={handleRemove}
				onReorder={(newFruits) => {
					setFruits([...newFruits]);
				}}
			/>
		);
	},
} satisfies Story;

export const WithAddAndHeading: Story = {
	args: {
		heading: 'Proposed fruits',
		addAction: (fruit) => {
			console.log('Added fruit', fruit);
		},
	},
} satisfies Story;

export const WithFilter: Story = {
	args: {
		filterRows: (row) => row.category.toLowerCase().startsWith('berry'),
		columns: [
			{ key: 'name', label: 'Name' },
			{ key: 'category', label: 'Category' },
		],
	},
} satisfies Story;

export const WithCustomColumns: Story = {
	render: () => {
		const [fruits, setFruits] = useState(exampleFruits);

		return (
			<SelectionTable<FruitWithCategory>
				{...meta.args}
				rows={fruits}
				columns={[
					{ key: 'name', label: 'Name' },
					{
						key: 'category',
						label: 'Category',
						renderCell: (item) => (
							<i
								css={css`
									font-style: italic;
								`}
							>
								{item.category}
							</i>
						),
					},
					{ key: 'emoji', label: 'Emoji' },
				]}
				removeAction={(fruit) =>
					setFruits((prev) => prev.filter((f) => f.id !== fruit.id))
				}
			/>
		);
	},
} satisfies Story;

export default meta;
