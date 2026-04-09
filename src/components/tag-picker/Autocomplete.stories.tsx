import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useState } from 'react';
import type { AutocompleteOption } from './Autocomplete';
import { Autocomplete } from './Autocomplete';
import { SelectionTable } from './SelectionTable';

const meta = {
	title: 'Stand/Editorial Components/TagPicker/Autocomplete',
	component: Autocomplete,
	args: {
		addSelection: () => {},
		loading: false,
		onTextInputChange: () => {},
		options: [],
		label: 'tag',
		placeholder: 'Choose a tag',
		disabled: false,
		value: '',
	},
} satisfies Meta<typeof Autocomplete>;

type Story = StoryObj<typeof Autocomplete>;

export const Default = {} satisfies Story;

export const Disabled = {
	args: { disabled: true },
} satisfies Story;

const exampleFruits: AutocompleteOption[] = [
	{ id: 1, name: 'Apple' },
	{ id: 2, name: 'Banana' },
	{ id: 3, name: 'Cherry' },
	{ id: 4, name: 'Date' },
	{ id: 5, name: 'Elderberry' },
];

export const FruitPicker = {
	render: () => {
		const [selectedTags, setSelectedTags] = useState<AutocompleteOption[]>([]);

		const [options, setOptions] = useState<AutocompleteOption[]>([]);
		const [value, setValue] = useState('');
		const onChange = (inputText: string) => {
			setValue(inputText);
			if (inputText === '') {
				setOptions([]);
				return;
			}

			if (inputText === '*') {
				setOptions(exampleFruits);
				return;
			}

			// Simple filtering against exampleFruits
			const filteredItems = exampleFruits.filter((t) =>
				t.name.toLowerCase().includes(inputText.toLowerCase()),
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
					<Autocomplete
						onTextInputChange={onChange}
						options={options}
						label="Tags"
						addSelection={(tag) =>
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
						<option>All fruits</option>
					</select>
				</div>
				<SelectionTable
					heading="Selected Fruits"
					rows={selectedTags}
					filterRows={() => true}
					onReorder={(newTags) => {
						setSelectedTags([...newTags]);
					}}
				/>
			</>
		);
	},
} satisfies Story;

export const Async = {
	render: () => {
		const [options, setOptions] = useState<AutocompleteOption[]>([]);
		const [value, setValue] = useState('');
		const [loading, setLoading] = useState(false);
		const [selectedFruits, setSelectedFruits] = useState<AutocompleteOption[]>(
			[],
		);

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
					setOptions(exampleFruits);
					return;
				}

				// Simple filtering against exampleFruits
				const filteredItems = exampleFruits.filter((t) =>
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

		const onAddSelection = (fruit: AutocompleteOption) => {
			setSelectedFruits((fruits) => [...fruits, fruit]);
		};

		return (
			<>
				<div
					css={css`
						display: flex;
					`}
				>
					<Autocomplete
						onTextInputChange={onTextInputChange}
						options={options}
						label="Fruits"
						addSelection={onAddSelection}
						loading={loading}
						placeholder={''}
						disabled={false}
						value={value}
					/>
					<select>
						<option>All fruits</option>
					</select>
				</div>
				<SelectionTable
					heading="Selected Fruits"
					rows={selectedFruits}
					filterRows={() => true}
				/>
			</>
		);
	},
} satisfies Story;

export default meta;
