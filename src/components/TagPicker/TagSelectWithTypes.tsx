import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { Option, Select } from '../../Select';
import { TagAutocomplete, type TagAutocompleteProps } from './TagAutocomplete';
import type { Tag } from './types';

type TagSelectWithTypes<T extends Tag = Tag> = {
	search: { (queryText: string, tagType?: string): void };
	tagTypes: Array<{ value: string; name?: string }>;
	label?: string;
	placeholder?: string;
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
	...tagAutocompleteProps
}: TagSelectWithTypes<T>) {
	const [queryText, setQueryText] = useState('');
	const [tagType, setTagType] = useState('');

	useEffect(() => {
		if (queryText && queryText.length > 0) {
			search(queryText, tagType.length === 0 ? undefined : tagType);
		}
	}, [tagType, queryText, search]);

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
					isDisabled={disabled}
					aria-label="select tag type"
					value={tagType}
					placeholder="tag type"
					onChange={(selection) => {
						if (Array.isArray(selection)) {
							return;
						}
						if (selection === null) {
							return setTagType('');
						}
						setTagType(selection.toString());
					}}
				>
					<Option id="">any</Option>
					{tagTypes.map((data, index) => (
						<Option value={data} key={index} id={data.value}>
							{data.name ?? data.value}
						</Option>
					))}
				</Select>
			</div>
		</div>
	);
}
