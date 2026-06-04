import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useCallback, useEffect, useState } from 'react';
import { exampleTags } from './exampleTags';
import { TagAutocomplete } from './TagAutocomplete';
import { TagTable } from './TagTable';
import type { TagManagerObjectData, TagRow } from './types';

type TagManagerObjectRow = TagManagerObjectData & TagRow;

const meta = {
	title: 'Stand/Editorial Components/TagPicker/TagAutocomplete',
	component: TagAutocomplete,
	args: {
		addTag: () => {},
		loading: false,
		onTextInputChange: () => {},
		options: [],
		label: 'tag',
		placeholder: 'Choose a tag',
		disabled: false,
		value: '',
	},
} satisfies Meta<typeof TagAutocomplete>;

type Story = StoryObj<typeof TagAutocomplete>;

export const Default = {} satisfies Story;

export const Disabled = {
	args: { disabled: true },
} satisfies Story;

const mappedExampleTags: TagManagerObjectRow[] = exampleTags.map((tag) => ({
	...tag,
	type: tag.type || 'Unknown',
	sectionName: tag.section.name || 'Unknown',
	name: tag.internalName || 'Unknown',
	id: tag.id,
}));

// Approximates the tagmanager API's search behaviour.
const simulateSearch = (inputText: string): TagManagerObjectRow[] => {
	if (inputText === '') {
		return [];
	}

	if (inputText.includes('*')) {
		const startsWithQueryPatternRegExp = new RegExp(
			'^' + inputText.toLowerCase().split('*').join('.*'),
		);
		return mappedExampleTags.filter((tag) =>
			startsWithQueryPatternRegExp.test(tag.name.toLowerCase()),
		);
	}

	return mappedExampleTags.filter((tag) =>
		tag.name.toLowerCase().startsWith(inputText.toLowerCase()),
	);
};

const tagMatching =
	(tag: TagManagerObjectRow) => (existingTag: TagManagerObjectRow) =>
		existingTag.path === tag.path;

export const TagPicker = {
	render: () => {
		const [selectedTags, setSelectedTags] = useState<TagManagerObjectRow[]>([]);
		const [options, setOptions] = useState<TagManagerObjectRow[]>([]);
		const [value, setValue] = useState('');

		const onTextInputChange = useCallback(
			(inputText: string) => {
				setValue(inputText);
				const searchResults = simulateSearch(inputText);
				return setOptions(
					searchResults.filter((tag) => !selectedTags.some(tagMatching(tag))),
				);
			},
			[selectedTags],
		);

		return (
			<>
				<div
					css={css`
						display: flex;
					`}
				>
					<TagAutocomplete
						onTextInputChange={onTextInputChange}
						options={options}
						label="Tags"
						addTag={(tag) => {
							setSelectedTags((tags) => {
								if (tags.some(tagMatching(tag))) {
									return tags;
								}
								return [...tags, tag];
							});
							setValue('');
						}}
						loading={false}
						placeholder={''}
						disabled={false}
						value={value}
					/>
					<select>
						<option>All tags</option>
					</select>
				</div>
				<TagTable rows={selectedTags} filterRows={() => true} />
			</>
		);
	},
} satisfies Story;

export const Async = {
	render: () => {
		const [options, setOptions] = useState<TagManagerObjectData[]>([]);
		const [value, setValue] = useState('');
		const [loading, setLoading] = useState(false);

		useEffect(() => {
			const loadData = async () => {
				setLoading(true);
				setOptions([]);
				await new Promise((res) => setTimeout(res, 1000));
				setLoading(false);

				if (!value) {
					setOptions([]);
					return;
				}

				if (value === '*') {
					setOptions(mappedExampleTags);
					return;
				}

				// Simple filtering against mappedExampleTags
				const filteredItems = mappedExampleTags.filter((t) =>
					t.name.toLowerCase().includes(value.toLowerCase()),
				);

				setOptions(filteredItems);
				return;
			};

			loadData().catch(console.error);
		}, [value]);

		const onTextInputChange = (inputText: string) => {
			setValue(inputText);
		};

		return (
			<>
				<div
					css={css`
						display: flex;
					`}
				>
					<TagAutocomplete
						onTextInputChange={onTextInputChange}
						options={options}
						label="Tags"
						addTag={(tag) => console.log('Tag added:', tag)}
						loading={loading}
						placeholder={''}
						disabled={false}
						value={value}
					/>
					<select>
						<option>All tags</option>
					</select>
				</div>
				<div>Some content below</div>
			</>
		);
	},
} satisfies Story;

export default meta;
