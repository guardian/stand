import type { Meta, StoryObj } from '@storybook/react-vite';
import { baseColors } from '../../styleD/build/typescript/base/colors';
import { Byline } from './Byline';
import { contributors } from './contributors-fixture';
import type { TaggedContributor } from './lib';

const searchContributors = (
	selectedText: string,
): Promise<TaggedContributor[]> => {
	return new Promise<TaggedContributor[]>((resolve) => {
		const results = contributors
			.filter((name) =>
				name.toLowerCase().includes(selectedText.toLowerCase()),
			)
			.map((name, index) => ({
				path: `profile/${name.toLowerCase().replace(/\s/g, '-')}`,
				label: name,
				type: 'Contributor',
				tagId: `${index + 1}`,
				// show internal label for every 5th contributor for testing internalLabel
				internalLabel:
					index % 5 === 0 ? `${name} (internal)` : undefined,
			}))
			.slice(0, 20);

		return resolve(results);
	});
};

const disableSnapshot = {
	parameters: {
		chromatic: { disableSnapshot: true },
	},
};

const meta = {
	title: 'Stand/Byline',
	component: Byline,
	parameters: {},
	args: {
		handleSave: () => {},
		initialValue: [],
		searchContributors,
		enablePreview: true,
	},
} satisfies Meta<typeof Byline>;

type Story = StoryObj<typeof Byline>;

export const Default = {} satisfies Story;

export const WithTheme = {
	args: {
		allowUntaggedContributors: true,
		searchContributors,
		theme: {
			invisiblesColor: 'lightblue',
			color: 'rgba(255, 255, 255, 0.87)',
			backgroundColor: 'rgb(51, 51, 51)',
			borderColor: 'rgb(173, 216, 230)',
			borderWidth: '1px',
			borderStyle: 'solid',
			chip: {
				color: 'initial',
				taggedBackgroundColor: 'rgb(173, 216, 230)',
				borderColor: 'rgb(173, 216, 230)',
				borderWidth: '1px',
				borderStyle: 'solid',
				borderRadius: '3px',
				paddingX: '7px',
				paddingY: '5.5px',
				untaggedColor: 'rgba(255, 255, 255, 0.87)',
			},
			dropdown: {
				backgroundColor: 'rgb(36, 36, 36)',
				li: {
					color: 'rgba(255, 255, 255, 0.87)',
					borderBottomStyle: 'none',
					selectedColor: 'rgba(255, 255, 255, 0.87)',
					selectedBackgroundColor: baseColors['cool-purple'][500],
				},
			},
		},
	},
} satisfies Story;

export const WithUntaggedContributors = {
	args: {
		allowUntaggedContributors: true,
	},
	...disableSnapshot,
} satisfies Story;

export const WithInitialValue = {
	args: {
		allowUntaggedContributors: true,
		initialValue: [
			{
				type: 'contributor',
				value: 'Joe Bloggs',
				tagId: '1',
				path: 'profile/joebloggs',
			},
			{
				type: 'text',
				value: ' in London, ',
			},
			{
				type: 'contributor',
				value: 'Jane Doe',
			},
			{
				type: 'text',
				value: ' in New York',
			},
		],
	},
} satisfies Story;

export const WithNoSearch = {
	args: {
		allowUntaggedContributors: true,
		searchContributors: undefined,
	},
	...disableSnapshot,
} satisfies Story;

export const WithNoSearchAndNoUntagged = {
	args: {
		allowUntaggedContributors: false,
		searchContributors: undefined,
	},
	...disableSnapshot,
} satisfies Story;

export const WithCustomPlaceholder = {
	args: {
		allowUntaggedContributors: true,
		placeholder: 'A custom placeholder...',
	},
} satisfies Story;

export const WithContributorLimit = {
	args: { contributorLimit: 1 },
	...disableSnapshot,
} satisfies Story;

export const WithoutPreview = {
	args: {
		allowUntaggedContributors: true,
		enablePreview: false,
	},
	...disableSnapshot,
} satisfies Story;

export const ReadOnly = {
	args: {
		readOnly: true,
		allowUntaggedContributors: true,
		enablePreview: true,
		initialValue: [
			{
				type: 'contributor',
				value: 'Joe Bloggs',
				tagId: '1',
				path: 'profile/joebloggs',
			},
			{
				type: 'text',
				value: ' in London and ',
			},
			{
				type: 'contributor',
				value: 'Jane Doe',
			},
			{
				type: 'text',
				value: ' in New York',
			},
		],
	},
} satisfies Story;

export default meta;
