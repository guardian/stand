import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { exampleTags } from './example-tags';
import { TagTable } from './TagTable';
import type { TagManagerObjectData } from './types';

const meta = {
	title: 'Stand/TagTable',
	component: TagTable<TagManagerObjectData>,
	args: {
		rows: exampleTags,
		filterRows: () => true,
		'data-testid': 'storybook',
		removeIcon: <>🗑️</>,
		gripIcon: <>⣿</>,
	},
} satisfies Meta<typeof TagTable<TagManagerObjectData>>;

type Story = StoryObj<typeof TagTable<TagManagerObjectData>>;

const getHandleRemove = (
	tags: TagManagerObjectData[],
	setTags: React.Dispatch<React.SetStateAction<TagManagerObjectData[]>>,
) => {
	return (tag: TagManagerObjectData) => {
		console.log('Remove tag:', tag);

		const index = tags.findIndex((t) => t.id === tag.id);
		if (index !== -1) {
			tags.splice(index, 1);
			setTags([...tags]);
		}
	};
};

export const Default: Story = {} satisfies Story;

export const WithType: Story = {
	args: {
		showTagType: true,
	},
} satisfies Story;

export const WithSection: Story = {
	args: {
		showTagSectionName: true,
	},
} satisfies Story;

export const WithTypeAndSection: Story = {
	args: {
		showTagType: true,
		showTagSectionName: true,
	},
} satisfies Story;

export const WithReorder: Story = {
	render: (args) => {
		const [tags, setTags] = useState(args.rows);

		return (
			<TagTable
				{...meta.args}
				rows={tags}
				showTagType
				showTagSectionName
				onReorder={(newTags) => {
					console.log('Reordered tags', newTags);
					setTags([...newTags]);
				}}
			/>
		);
	},
} satisfies Story;

export const WithRemove: Story = {
	render: (args) => {
		const [tags, setTags] = useState(args.rows);

		const handleRemove = getHandleRemove(tags, setTags);

		return (
			<TagTable<TagManagerObjectData>
				{...meta.args}
				rows={tags}
				showTagType
				showTagSectionName
				removeAction={handleRemove}
				onReorder={(newTags) => {
					console.log('Reordered tags', newTags);
					setTags([...newTags]);
				}}
			/>
		);
	},
} satisfies Story;

export const WithAddAndHeading: Story = {
	args: {
		showTagType: true,
		showTagSectionName: true,
		heading: 'Proposed tags',
		addAction: (tag) => {
			console.log('Added tag', tag);
		},
	},
};

export const WithFilter: Story = {
	args: {
		showTagType: true,
		showTagSectionName: true,
		filterRows: (row) => row.section.slug === 'lifeandstyle',
	},
} satisfies Story;

export default meta;
