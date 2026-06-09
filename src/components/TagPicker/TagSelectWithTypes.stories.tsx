import type { Meta, StoryObj } from '@storybook/react-vite';
import { useCallback, useState } from 'react';
import type { TagManagerObjectRow } from './storybookUtils';
import {
	allTagTypeFilters,
	simulateSearchAsyncSearch,
	tagMatching,
} from './storybookUtils';
import { TagSelectWithTypes } from './TagSelectWithTypes';

const meta: Meta<typeof TagSelectWithTypes> = {
	title: 'Stand/Editorial Components/TagPicker/TagSelectWithTypes',
	component: TagSelectWithTypes,
	args: {
		tagTypes: allTagTypeFilters,
	},
	render: (args) => {
		const [selectedTags, setSelectedTags] = useState<TagManagerObjectRow[]>([]);
		const [options, setOptions] = useState<TagManagerObjectRow[]>([]);
		const [isLoadingResults, setIsLoadingResults] = useState(false);

		const search = useCallback(
			(queryText: string, tagTypeFilter?: string) => {
				setIsLoadingResults(true);
				void simulateSearchAsyncSearch(queryText, tagTypeFilter)
					.then((searchResults) => {
						return setOptions(
							searchResults.filter(
								(tag) => !selectedTags.some(tagMatching(tag)),
							),
						);
					})
					.finally(() => setIsLoadingResults(false));
			},
			[selectedTags],
		);

		return (
			<TagSelectWithTypes
				{...args}
				addTag={(tag) => {
					setSelectedTags((tags) => {
						if (tags.some(tagMatching(tag))) {
							return tags;
						}
						return [...tags, tag];
					});
				}}
				search={search}
				options={options}
				loading={isLoadingResults}
			/>
		);
	},
};

export default meta;

type Story = StoryObj<typeof TagSelectWithTypes>;

export const Default: Story = {};

export const Disabled: Story = {
	args: {
		disabled: true,
	},
};

export const CustomIcon: Story = {
	args: {
		icon: (
			<svg
				viewBox="0 0 18 18"
				xmlns="http://www.w3.org/2000/svg"
				role="presentation"
			>
				<path
					fill="blue"
					d="M 6.5,0 A 6.5,6.5 0 0 0 0,6.5 6.5,6.5 0 0 0 6.5,13 6.5,6.5 0 0 0 9.90625,12.027344 L 15.878906,18 18,15.878906 12.027344,9.90625 A 6.5,6.5 0 0 0 13,6.5 6.5,6.5 0 0 0 6.5,0 Z m 0,2 A 4.5,4.5 0 0 1 11,6.5 4.5,4.5 0 0 1 6.5,11 4.5,4.5 0 0 1 2,6.5 4.5,4.5 0 0 1 6.5,2 Z"
				></path>
			</svg>
		),
	},
};
