import { css } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';
import type { ComponentSelect } from '../../Select';
import { Option, Select } from '../../Select';
import type { ComponentAutocomplete } from '../../styleD/build/typescript/component/autocomplete';
import type { ComponentTagPicker } from '../../styleD/build/typescript/component/tagPicker';
import type { DeepPartial } from '../../util/types';
import type { AutocompleteProps } from './Autocomplete';
import { Autocomplete } from './Autocomplete';
import {
	filterSelectCssOverrides,
	modifyFilterSelectTheme,
	tagSearchWithFilterStyles,
} from './styles';
import type { FilterOption, Tag } from './types';

type TagSearchWithFiltersProps<T extends Tag = Tag> = {
	onSearch: { (queryText: string, filterValue?: string): void };
	filterOptions?: FilterOption[];
	theme?: DeepPartial<ComponentTagPicker>;
	autoCompleteTheme?: DeepPartial<ComponentAutocomplete>;
	selectTheme?: DeepPartial<ComponentSelect>;
} & Omit<
	AutocompleteProps<T>,
	'onTextInputChange' | 'value' | 'theme' | 'cssOverrides'
>;

export function TagSearchWithFilters<T extends Tag = Tag>({
	addSelection,
	onSearch,
	filterOptions,
	disabled,
	theme,
	autoCompleteTheme,
	selectTheme = {},
	...tagAutocompleteProps
}: TagSearchWithFiltersProps<T>) {
	const [queryText, setQueryText] = useState('');
	const [filterValue, setFilterValue] = useState<string | undefined>(
		filterOptions?.[0]?.filter,
	);

	// the onSearch function may not be a stable callback
	// use a ref so changes to onSearch do not trigger the
	// effect that calls it.
	const onSearchRef = useRef(onSearch);
	useEffect(() => {
		onSearchRef.current = onSearch;
	}, [onSearch]);

	useEffect(() => {
		if (queryText && queryText.length > 0) {
			onSearchRef.current(
				queryText,
				filterValue && filterValue.length > 0 ? filterValue : undefined,
			);
		}
	}, [filterValue, queryText]);

	const shouldRenderSelect = filterOptions && filterOptions.length > 1;

	return (
		<div css={tagSearchWithFilterStyles(theme)}>
			<Autocomplete
				cssOverrides={css({ flex: 1 })}
				onTextInputChange={setQueryText}
				addSelection={(tag) => {
					addSelection(tag);
					setQueryText('');
				}}
				value={queryText}
				{...tagAutocompleteProps}
				disabled={disabled}
				theme={autoCompleteTheme}
				addFirstOnEnter={true}
			/>
			{shouldRenderSelect && (
				<Select
					theme={modifyFilterSelectTheme(selectTheme)}
					cssOverrides={filterSelectCssOverrides(theme)}
					isDisabled={disabled}
					value={filterValue}
					placement="bottom right"
					shouldFlip={false}
					onChange={(selection) => {
						if (Array.isArray(selection) || selection === null) {
							return;
						}
						setFilterValue(selection.toString());
					}}
				>
					{filterOptions.map((data, index) => (
						<Option value={data} key={index} id={data.filter}>
							{data.label}
						</Option>
					))}
				</Select>
			)}
		</div>
	);
}
