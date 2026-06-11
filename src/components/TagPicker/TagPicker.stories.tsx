import { css } from '@emotion/react';
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

export const WithRemoveIcon: Story = {
	args: {
		removeIcon: <Icon symbol="delete" />,
	},
};

export const CannotRemoveKeywords: Story = {
	args: {
		canRemove: (tag) => tag.type !== 'Keyword',
	},
};

export const WithTypesAndSectionNames: Story = {
	args: {
		showTagSectionName: true,
		showTagType: true,
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
		searchIcon: (
			<svg
				viewBox="0 0 18 18"
				xmlns="http://www.w3.org/2000/svg"
				role="presentation"
			>
				<path
					fill="#DCDCDC"
					d="M 6.5,0 A 6.5,6.5 0 0 0 0,6.5 6.5,6.5 0 0 0 6.5,13 6.5,6.5 0 0 0 9.90625,12.027344 L 15.878906,18 18,15.878906 12.027344,9.90625 A 6.5,6.5 0 0 0 13,6.5 6.5,6.5 0 0 0 6.5,0 Z m 0,2 A 4.5,4.5 0 0 1 11,6.5 4.5,4.5 0 0 1 6.5,11 4.5,4.5 0 0 1 2,6.5 4.5,4.5 0 0 1 6.5,2 Z"
				></path>
			</svg>
		),
		removeIcon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="18"
				height="18"
				viewBox="0 0 18 18"
			>
				<g fill="#666666">
					<polygon points="14.38,0.668 11.149,0.668 11.149,0 9.001,0 8.992,0 7.228,0 7.228,0.668 3.629,0.668 2.734,1.544 2.734,3.026 15.448,3.026 15.448,1.544 15.452,1.544"></polygon>
					<polygon points="9.001,4.125 2.548,4.125 3.623,16.941 3.641,16.941 4.699,18 8.992,18 13.29,18 14.353,16.941 14.362,16.941 14.362,16.933 14.37,16.924 14.362,16.924 15.448,4.125"></polygon>
				</g>
			</svg>
		),
		showTagSectionName: true,
		showTagType: true,
		highlightLeadingTag: true,
		searchPlaceholder: "Search internal tags (add '*' to match any text)",
		searchLabel: 'Search for tags',
		filterRows: (tag) => tag.type !== 'Tracking',
		canRemove: (tag) =>
			tag.type !== 'Content Type' &&
			!tag.path.startsWith('campaign/callout') &&
			!(isLiveblog && tag.path.startsWith('tone/minutebyminute')),
	},
	decorators: [
		(Story) => {
			return (
				<section
					css={{
						width: 670,
						padding: '15px 30px 30px',
					}}
				>
					<div
						css={{
							fontWeight: 700,
							marginBottom: 10,
						}}
					>
						Tags
					</div>
					<Story />
				</section>
			);
		},
	],
};

export const WithTheme: Story = {
	args: {
		theme: {
			shared: {
				width: '600px',
				gap: '2rem',
			},
		},

		autoCompleteTheme: {
			input: {
				backgroundColor: 'pink',
				borderColor: 'crimson',
				borderWidth: '3px',
			},
		},

		selectTheme: {
			shared: {
				button: {
					backgroundColor: 'pink',
					border: '3px solid crimson',
					typography: {
						font: 'italic 1.2rem fantasy',
					},
				},
			},
		},

		tagTableTheme: {
			row: {
				backgroundColor: 'pink',
				backgroundHoverColor: 'red',
			},
			cell: {
				borderBetweenCells: {
					borderColor: 'crimson',
					borderStyle: 'groove',
					borderWidth: '4px',
				},
			},
		},

		proposedTagTableTheme: {
			heading: {
				backgroundColor: 'pink',
			},
		},
	},
};

export const WithCssOverrides: Story = {
	args: {
		cssOverrides: css({
			borderTop: '4px dashed lavender',
			borderBottom: '4px dashed lavender',
			padding: 5,
			fontFamily: 'cursive',
			'button, input': {
				fontFamily: 'cursive',
			},

			td: {
				backgroundColor: 'lavenderblush',
				border: '2px solid lavender',
			},
		}),
	},
};
