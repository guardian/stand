import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { useCallback, useState } from 'react';
import { Icon } from '../Icon/Icon';
import type { TagManagerObjectRow } from './storybookUtils';
import {
	allTagTypeFilters,
	mappedExampleTags,
	proposeWithoutRationalBasis,
	simulateSearchAsyncSearch,
	tagMatching,
} from './storybookUtils';
import { TagPicker } from './TagPicker';

type StoryArgs = ComponentProps<typeof TagPicker<TagManagerObjectRow>> & {
	intialTags: TagManagerObjectRow[];
	intialProposedTags: TagManagerObjectRow[];
	getProposals?: { (tags: TagManagerObjectRow[]): TagManagerObjectRow[] };
};
type Story = StoryObj<StoryArgs>;

const meta: Meta<StoryArgs> = {
	title: 'Stand/Editorial Components/TagPicker/TagPicker',
	component: TagPicker,
	args: {
		// default props
		tagTypes: allTagTypeFilters,
		canRemove: (tag) => tag.type !== 'Tone',
		removeIcon: <Icon symbol="delete" />,

		// story options
		intialTags: mappedExampleTags.filter((tag) =>
			[
				'williamgibson',
				'lifeandstyle',
				'world',
				'chicken',
				'blogpost',
			].includes(tag.slug),
		),
		intialProposedTags: mappedExampleTags.filter((tag) =>
			['we-love', 'bolivia'].includes(tag.slug),
		),
		getProposals: proposeWithoutRationalBasis,
	},
	render: (args) => {
		const [selectedTags, setSelectedTags] = useState<TagManagerObjectRow[]>(
			args.intialTags,
		);
		const [proposedTags, setProposedTags] = useState<TagManagerObjectRow[]>(
			args.intialProposedTags,
		);
		const [options, setOptions] = useState<TagManagerObjectRow[]>([]);
		const [isLoadingResults, setIsLoadingResults] = useState(false);

		const search = useCallback(
			(queryText: string, tagTypeFilter?: string) => {
				setIsLoadingResults(true);
				void simulateSearchAsyncSearch(queryText, tagTypeFilter)
					.then((searchResults) => {
						setOptions(
							searchResults.filter(
								(tag) => !selectedTags.some(tagMatching(tag)),
							),
						);
					})
					.finally(() => setIsLoadingResults(false));
			},
			[selectedTags],
		);

		const updateProposedTags = (selectedTags: TagManagerObjectRow[]) => {
			if (args.getProposals) {
				setProposedTags(args.getProposals(selectedTags));
			}
		};

		const addTag = (tagObject: TagManagerObjectRow) => {
			if (selectedTags.some(tagMatching(tagObject))) {
				return;
			}
			const newSelectedTags = [...selectedTags, tagObject];
			setSelectedTags(newSelectedTags);
			updateProposedTags(newSelectedTags);
		};

		const removeTag = (tagObject: TagManagerObjectRow) => {
			const newSelectedTags = selectedTags.filter(
				(selectedTag) => selectedTag.internalName !== tagObject.name,
			);
			setSelectedTags(newSelectedTags);
			updateProposedTags(newSelectedTags);
		};

		return (
			<TagPicker
				{...args}
				tags={selectedTags}
				addTag={addTag}
				onReorder={(tags) => setSelectedTags(tags)}
				removeTag={removeTag}
				onSearch={search}
				options={options}
				loading={isLoadingResults}
				proposedTags={proposedTags}
			/>
		);
	},
};

export default meta;
export const Default: Story = {};

export const CannotRemoveKeywords: Story = {
	args: {
		canRemove: (tag) => tag.type !== 'Keyword',
	},
};

export const ContributorSearch: Story = {
	args: {
		intialProposedTags: [],
		intialTags: mappedExampleTags
			.filter((tag) => tag.type === 'Contributor')
			.slice(0, 2),
		getProposals: undefined,
		tagTypes: [{ label: 'Contributor', filter: 'contributor' }],
	},
};

export const NoProposals: Story = {
	args: {
		intialProposedTags: [],
		getProposals: undefined,
	},
};

export const ReadOnly: Story = {
	args: {
		readOnly: true,
	},
};

export const Offline: Story = {
	args: {
		offline: true,
		intialTags: mappedExampleTags.filter((tag) =>
			['lifeandstyle', 'chicken'].includes(tag.slug),
		),
		intialProposedTags: [],
	},
};

export const OfflineWithRetryFunction: Story = {
	args: {
		offline: true,
		retryConnection: () => {},
		intialTags: mappedExampleTags.filter((tag) =>
			['lifeandstyle', 'chicken'].includes(tag.slug),
		),
		intialProposedTags: [],
	},
};

export const OfflineWithBackups: Story = {
	args: {
		offline: true,
		offlineBackupTags: mappedExampleTags.filter((tag) =>
			[
				'tone/reviews',
				'world/world',
				'paid-content-test',
				'australia-news/block-ads--please',
				'lifeandstyle/lifeandstyle',
			].includes(tag.path),
		),
		intialTags: mappedExampleTags.filter((tag) =>
			['lifeandstyle', 'chicken'].includes(tag.slug),
		),
		intialProposedTags: [],
	},
};

export const OfflineWithRetryFunctionAndBackups: Story = {
	args: {
		offline: true,
		offlineBackupTags: mappedExampleTags.filter((tag) =>
			[
				'tone/reviews',
				'world/world',
				'paid-content-test',
				'australia-news/block-ads--please',
				'lifeandstyle/lifeandstyle',
			].includes(tag.path),
		),
		retryConnection: () => {},
		intialTags: mappedExampleTags.filter((tag) =>
			['lifeandstyle', 'chicken'].includes(tag.slug),
		),
		intialProposedTags: [],
	},
};

// hard coding for the sake of reflecting the current composer logic in the example story code
const isLiveblog = true as boolean;

export const ComposerContentTagPicker: Story = {
	args: {
		tagTypes: [
			{
				label: 'All tags',
				filter: 'keyword,tone,series,blog,paidContent,campaign',
			},
			{ label: 'Keyword', filter: 'keyword' },
			{ label: 'Tone', filter: 'tone' },
			{ label: 'Series', filter: 'series' },
			{ label: 'Blog', filter: 'blog' },
			{ label: 'Paid content', filter: 'paidContent' },
			{ label: 'Campaign', filter: 'campaign' },
		],

		highlightLeadingTag: true,
		searchPlaceholder: "Search internal tags (add '*' to match any text)",
		searchLabel: 'Search for tags',
		filterRows: (tag) => tag.type !== 'Tracking',
		canRemove: (tag) =>
			tag.type !== 'Content Type' &&
			!tag.path.startsWith('campaign/callout') &&
			!(isLiveblog && tag.path.startsWith('tone/minutebyminute')),
	},
};
