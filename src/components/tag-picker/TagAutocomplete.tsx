import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ReactElement } from 'react';
import {
	Collection,
	ComboBox,
	Input,
	ListBox,
	ListBoxItem,
	ListBoxLoadMoreItem,
	Popover,
} from 'react-aria-components';
import type { ComponentTagAutocomplete } from '../../styleD/build/typescript/component/tagAutocomplete';
import type { DeepPartial } from '../util';
import {
	listboxInfoStyles,
	listboxItemStyles,
	listboxStyles,
	tagAutocompleteInputStyles,
} from './styles';
import type { Tag } from './types';

interface TagAutocompleteProps<T extends Tag = Tag> {
	addTag: (tag: T) => void;
	loading: boolean;
	onChange: (inputText: string) => void;
	options: T[];
	label: string;
	placeholder: string;
	disabled: boolean;
	value: string;
	'data-testid'?: string;
	loadingIcon?: ReactElement;
	/** `theme` - Used to customise the look and feel of the TagAutocomplete component */
	theme?: DeepPartial<ComponentTagAutocomplete>;
	cssOverrides?: SerializedStyles;
}

export function TagAutocomplete<T extends Tag = Tag>({
	addTag,
	loading,
	onChange,
	options,
	label,
	placeholder,
	disabled,
	value,
	'data-testid': dataTestId,
	loadingIcon,
	theme,
	cssOverrides,
}: TagAutocompleteProps<T>) {
	return (
		<div
			css={[
				css`
					position: relative;
				`,
				cssOverrides,
			]}
		>
			<ComboBox
				aria-label={label}
				inputValue={value}
				onInputChange={onChange}
				onSelectionChange={(key) => {
					const tag = options.find((t) => t.id === key);
					if (tag) {
						addTag(tag);
						onChange('');
					}
				}}
				allowsEmptyCollection
				items={options}
				allowsCustomValue
				menuTrigger="focus"
				shouldFocusWrap
			>
				<Input
					css={tagAutocompleteInputStyles(theme)}
					placeholder={placeholder}
					disabled={disabled}
					data-testid={dataTestId}
				/>
				<Popover
					placement="bottom"
					css={css`
						width: var(--trigger-width);
					`}
					offset={0}
					shouldFlip={false}
				>
					<ListBox
						css={
							(value || options.length || loading) &&
							listboxStyles(theme)
						}
						renderEmptyState={() =>
							// Only show a "no results" box if user has typed
							value &&
							!loading && (
								<div css={listboxInfoStyles(theme)}>
									No results
								</div>
							)
						}
					>
						<Collection items={options}>
							{(item) => (
								<ListBoxItem
									css={listboxItemStyles(theme)}
									value={item}
									key={item.id}
								>
									{item.internalName}
								</ListBoxItem>
							)}
						</Collection>

						<ListBoxLoadMoreItem
							css={listboxInfoStyles(theme)}
							isLoading={loading}
						>
							<span aria-label="Loading">
								{loadingIcon ?? 'Loading...'}
							</span>
						</ListBoxLoadMoreItem>
					</ListBox>
				</Popover>
			</ComboBox>
		</div>
	);
}
