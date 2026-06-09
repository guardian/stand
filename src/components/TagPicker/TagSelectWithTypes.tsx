import { useEffect, useState } from 'react';
import type { ComponentSelect } from '../../Select';
import { Option, Select } from '../../Select';
import type { ComponentTagPicker } from '../../styleD/build/typescript/component/tagPicker';
import type { ComponentAutocomplete } from '../../TagPicker';
import type { DeepPartial } from '../../util/types';
import { tagSelectWithTypesStyles } from './styles';
import { TagAutocomplete, type TagAutocompleteProps } from './TagAutocomplete';
import type { FilterOption, Tag } from './types';

type TagSelectWithTypes<T extends Tag = Tag> = {
	search: { (queryText: string, filterValue?: string): void };
	tagTypes: FilterOption[];
	theme?: DeepPartial<ComponentTagPicker>;
	autoCompleteTheme?: DeepPartial<ComponentAutocomplete>;
	selectTheme?: DeepPartial<ComponentSelect>;
} & Omit<
	TagAutocompleteProps<T>,
	'onTextInputChange' | 'value' | 'theme' | 'cssOverrides'
>;

const modifySelectTheme = (
	selectTheme: DeepPartial<ComponentSelect>,
): DeepPartial<ComponentSelect> => {
	return {
		...selectTheme,
		shared: {
			...(selectTheme.shared ?? {}),
			width: undefined,
			button: {
				marginTop: '0',
			},
		},
	};
};

export function TagSelectWithTypes<T extends Tag = Tag>({
	addTag,
	search,
	tagTypes,
	disabled,
	theme,
	autoCompleteTheme,
	selectTheme = {},
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
		<div css={tagSelectWithTypesStyles(theme)}>
			<div css={{ flex: 3 }}>
				<TagAutocomplete
					onTextInputChange={setQueryText}
					addTag={(tag) => {
						addTag(tag);
						setQueryText('');
					}}
					value={queryText}
					{...tagAutocompleteProps}
					disabled={disabled}
					theme={autoCompleteTheme}
				/>
			</div>
			<div css={{ flex: 1 }}>
				<Select
					isDisabled={disabled || tagTypes.length == 1}
					aria-label="select tag type"
					value={filterValue}
					placeholder="tag type"
					placement="bottom right"
					shouldFlip={false}
					onChange={(selection) => {
						if (Array.isArray(selection) || selection === null) {
							return;
						}
						setFilterValue(selection.toString());
					}}
					theme={modifySelectTheme(selectTheme)}
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
