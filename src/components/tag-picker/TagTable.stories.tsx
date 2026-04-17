import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { exampleTags } from './example-tags';
import { TagTable } from './TagTable';
import type { TagManagerObjectData, TagRow } from './types';

type TagManagerRow = TagManagerObjectData & TagRow;

const meta = {
	title: 'Stand/Editorial Components/TagPicker/TagTable',
	component: TagTable<TagManagerRow>,
	args: {
		rows: exampleTags.map((tag) => ({
			...tag,
			type: tag.type || 'Unknown',
			sectionName: tag.section.name || 'Unknown',
			name: tag.internalName || 'Unknown',
			id: tag.id,
		})),
		filterRows: () => true,
		'data-testid': 'storybook',
		removeIcon: <>🗑️</>,
		gripIcon: <>⣿</>,
	},
} satisfies Meta<typeof TagTable<TagManagerRow>>;

type Story = StoryObj<typeof TagTable<TagManagerRow>>;

const getHandleRemove = (
	tags: TagManagerRow[],
	setTags: React.Dispatch<React.SetStateAction<TagManagerRow[]>>,
) => {
	return (tag: TagManagerRow) => {
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
			<TagTable<TagManagerRow>
				{...meta.args}
				rows={tags}
				showTagType
				showTagSectionName
				removeAction={handleRemove}
				onReorder={(newTags) => {
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
