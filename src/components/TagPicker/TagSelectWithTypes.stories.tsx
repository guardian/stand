import type { Meta, StoryObj } from '@storybook/react-vite';
import { useCallback, useState } from 'react';
import type { TagManagerObjectRow } from './storybookUtils';
import {
	simulateSearchAsyncSearch,
	tagMatching,
	typeOptions,
} from './storybookUtils';
import { TagSelectWithTypes } from './TagSelectWithTypes';
import { TagTable } from './TagTable';

const meta: Meta<typeof TagSelectWithTypes> = {
	title: 'Stand/Editorial Components/TagPicker/TagSelectWithTypes',
	component: TagSelectWithTypes,
};

export default meta;

type Story = StoryObj<typeof TagSelectWithTypes>;

export const Default: Story = {
	args: {},
	render: () => {
		const [selectedTags, setSelectedTags] = useState<TagManagerObjectRow[]>([]);
		const [options, setOptions] = useState<TagManagerObjectRow[]>([]);
		const [isLoadingResults, setIsLoadingResults] = useState(false);

		const search = useCallback(
			(queryText: string, tagType?: string) => {
				setIsLoadingResults(true);
				void simulateSearchAsyncSearch(queryText, tagType)
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
			<>
				<TagSelectWithTypes
					addTag={(tag) => {
						setSelectedTags((tags) => {
							if (tags.some(tagMatching(tag))) {
								return tags;
							}
							return [...tags, tag];
						});
					}}
					search={search}
					disabled={false}
					options={options}
					tagTypes={typeOptions}
					loading={isLoadingResults}
				/>

				<TagTable rows={selectedTags} />
			</>
		);
	},
};
