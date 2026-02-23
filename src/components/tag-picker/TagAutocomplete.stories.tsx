import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useState } from 'react';
import { exampleTags } from './example-tags';
import { TagAutocomplete } from './TagAutocomplete';
import { TagTable } from './TagTable';
import type { TagManagerObjectData } from './types';

const meta = {
	title: 'Stand/Editorial Components/TagPicker/TagAutocomplete',
	component: TagAutocomplete,
	args: {
		addTag: () => {},
		loading: false,
		onChange: () => {},
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

export const TagPicker = {
	render: () => {
		const [selectedTags, setSelectedTags] = useState<TagManagerObjectData[]>(
			[],
		);

		const [options, setOptions] = useState<TagManagerObjectData[]>([]);
		const [value, setValue] = useState('');
		const onChange = (inputText: string) => {
			setValue(inputText);
			if (inputText === '') {
				setOptions([]);
				return;
			}

			if (inputText === '*') {
				setOptions(exampleTags);
				return;
			}

			// Simple filtering against exampleTags
			const filteredItems = exampleTags.filter((t) =>
				t.internalName.toLowerCase().includes(inputText.toLowerCase()),
			);

			return setOptions(filteredItems);
		};

		return (
			<>
				<div
					css={css`
						display: flex;
					`}
				>
					<TagAutocomplete
						onChange={onChange}
						options={options}
						label="Tags"
						addTag={(tag) =>
							setSelectedTags((tags) => {
								return [...tags, tag];
							})
						}
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
					setOptions(exampleTags);
					return;
				}

				// Simple filtering against exampleTags
				const filteredItems = exampleTags.filter((t) =>
					t.internalName.toLowerCase().includes(value.toLowerCase()),
				);

				setOptions(filteredItems);
				return;
			};

			loadData().catch(console.error);
		}, [value]);

		const onChange = (inputText: string) => {
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
						onChange={onChange}
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
