import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import type { ComponentSelect } from '../../Select';
import { Option, Select } from '../../Select';
import type { ComponentAutocomplete } from '../../TagPicker';
import type { DeepPartial } from '../../util/types';
import { TagAutocomplete, type TagAutocompleteProps } from './TagAutocomplete';
import type { FilterOption, Tag } from './types';

type TagSelectWithTypes<T extends Tag = Tag> = {
	search: { (queryText: string, filterValue?: string): void };
	tagTypes: FilterOption[];
	label?: string;
	placeholder?: string;
	autoCompleteTheme?: DeepPartial<ComponentAutocomplete>;
	selectTheme?: DeepPartial<ComponentSelect>;
} & Omit<
	TagAutocompleteProps<T>,
	| 'onTextInputChange'
	| 'value'
	| 'theme'
	| 'cssOverrides'
	| 'label'
	| 'placeholder'
>;

export function TagSelectWithTypes<T extends Tag = Tag>({
	addTag,
	search,
	tagTypes,
	symbol = 'search',
	label = 'tags',
	placeholder = 'search tags',
	disabled,
	autoCompleteTheme,
	selectTheme,
	...tagAutocompleteProps
}: TagSelectWithTypes<T>) {
	const [queryText, setQueryText] = useState('');
	const [filterValue, setFilterValue] = useState(tagTypes[0]?.filter ?? '');

	useEffect(() => {
		if (queryText && queryText.length > 0) {
			search(queryText, filterValue.length === 0 ? undefined : filterValue);
		}
	}, [filterValue, queryText, search]);

	return (
		<div
			css={css`
				display: flex;
				gap: 15px;
			`}
		>
			<div css={{ flex: 3 }}>
				<TagAutocomplete
					onTextInputChange={setQueryText}
					addTag={(tag) => {
						addTag(tag);
						setQueryText('');
					}}
					value={queryText}
					{...tagAutocompleteProps}
					symbol={symbol}
					label={label}
					placeholder={placeholder}
					disabled={disabled}
					theme={autoCompleteTheme}
				/>
			</div>
			<div
				css={{
					position: 'relative',
					flex: 1,
					button: {
						margin: 0,
					},
				}}
			>
				<Select
					isDisabled={disabled || tagTypes.length == 1}
					aria-label="select tag type"
					value={filterValue}
					placeholder="tag type"
					placement="bottom"
					shouldFlip={false}
					onChange={(selection) => {
						if (Array.isArray(selection) || selection === null) {
							return;
						}
						setFilterValue(selection.toString());
					}}
					theme={selectTheme}
				>
					{tagTypes.map((data, index) => (
						<Option value={data} key={index} id={data.filter}>
							{data.label}
						</Option>
					))}
				</Select>
			</div>
		</div>
	);
}
