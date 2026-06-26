import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { exampleTags } from '../TagPicker/exampleTags';
import type { TagManagerObjectData } from '../TagPicker/types';
import { TagTable } from './TagTable';

const meta = {
	title: 'Stand/Editorial Components/TagPicker/TagTable',
	component: TagTable<TagManagerObjectData>,
	args: {
		rows: exampleTags.map((tag) => ({
			...tag,
			name: tag.internalName,
			sectionName: tag.section.name,
		})),
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

export const WithHeadingAndSubHeading: Story = {
	args: {
		heading: 'Some Tags',
		subHeading: 'Picked for some reason',
	},
};

export const WithCustomHeader: Story = {
	args: {
		heading: (
			<span css={{ display: 'flex', alignItems: 'center', gap: 5 }}>
				Some Tags
				<Icon
					cssOverrides={css({
						backgroundColor: 'skyblue',
						borderRadius: '50%',
					})}
					symbol="info_i"
					size="sm"
				/>
			</span>
		),
	},
};

export const WithHeadingAndSubHeadingAndHeaderContent: Story = {
	args: {
		heading: 'Some Tags',
		subHeading: 'Picked for some reason',
		headerContent: <Button size="sm">Take some action</Button>,
	},
};

export const WithHeaderContent: Story = {
	args: {
		headerContent: <Button size="sm">Take some action</Button>,
	},
};

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

export const WithTypeAndSectionAndHighlterFirstRow: Story = {
	args: {
		showTagType: true,
		showTagSectionName: true,
		highlightFirstRow: true,
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

export const WithCustomAction: Story = {
	args: {
		showTagType: true,
		showTagSectionName: true,
		renderCustomControl(tag) {
			return (
				<Button
					size="xs"
					aria-label={`see metrics for ${tag.internalName}`}
					onClick={() => alert(`${tag.internalName} has good metrics`)}
				>
					<Icon symbol="vital_signs" />
				</Button>
			);
		},
	},
};

export const KeywordSuggesterEmpty: Story = {
	args: {
		renderWhenEmpty: true,
		heading: (
			<span css={{ display: 'flex', alignItems: 'center', gap: 5 }}>
				Keyword Tag suggestions
				<span
					css={{
						display: 'inline-flex',
						backgroundColor: 'black',
						color: 'white',
						padding: 3,
						borderRadius: '50%',
						alignSelf: 'flex-start',
						lineHeight: 1,
						width: 14,
						height: 14,
						justifyContent: 'center',
						alignItems: 'center',
						fontSize: 10,
						cursor: 'pointer',
					}}
				>
					i
				</span>
			</span>
		),
		addAction: () => {},
		renderCustomControl: (tag) => {
			return (
				<Button
					variant="tertiary"
					size="xs"
					aria-label={`Report issue with suggestion: "${tag.internalName}"`}
					onClick={() => {
						alert(`flagging ${tag.internalName}`);
					}}
				>
					<Icon symbol="flag" />
				</Button>
			);
		},
		showTagSectionName: true,
		showTagType: true,
		subHeading: 'keyword suggestions based on article content',

		headerContent: <Button size="sm">Suggest Keywords</Button>,
		rows: [],
	},
	decorators: (Story) => {
		return (
			<>
				<Story />
				<div
					css={{
						display: 'flex',
						justifyContent: 'center',
						margin: '0 auto',
					}}
				>
					<div css={{ textAlign: 'center' }}>
						<div>
							This tool uses AI to give recommendations. Remember you can search
							and add your own keyword tags.
						</div>
						<div>
							<a href="#">
								Report an issue or give feedback{' '}
								<Icon size="sm" symbol="open_in_new" />
							</a>
						</div>
					</div>
				</div>
			</>
		);
	},
};

export const KeywordSuggesterPopulated: Story = {
	args: {
		...KeywordSuggesterEmpty.args,

		headerContent: <Button size="sm">Refresh Keywords</Button>,
		rows: exampleTags
			.filter((tag) => tag.type == 'Keyword')
			.slice(0, 3)
			.map((tag) => ({
				...tag,
				name: tag.internalName,
				sectionName: tag.section.name,
			})),
	},
	decorators: KeywordSuggesterEmpty.decorators,
};

export default meta;
