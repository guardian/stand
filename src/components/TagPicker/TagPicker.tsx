import type { SerializedStyles } from '@emotion/react';
import type { ReactElement } from 'react';
import { Button } from '../../Button';
import type { ComponentSelect } from '../../Select';
import type { ComponentTagPicker } from '../../styleD/build/typescript/component/tagPicker';
import type { ComponentAutocomplete, ComponentTagTable } from '../../TagPicker';
import type { DeepPartial } from '../../util/types';
import { tagPickerStyles } from './styles';
import { TagSelectWithTypes } from './TagSelectWithTypes';
import { TagTable } from './TagTable';
import type { FilterOption, TagRow } from './types';

export type TagPickerProps<T extends TagRow = TagRow> = {
	/** `addTag` - Function called when a tag is selected from the dropdown or proposal list */
	addTag: (tag: T) => void;
	/** `loading` - Whether the component is loading options for the dropdown */
	loading: boolean;
	/** `offline` - Whether the component has failed to fetch a list of options, indicating either that the service is offline or cannot be reached */
	offline?: boolean;
	/** `onReorder -  Function called when a selected tag is moved in the tag table */
	onReorder: (tags: T[]) => void;
	/** `onReorder -  Function called the user enters a query or selects a tag type filter */
	onSearch: (queryText: string, tagTypeFilter?: string) => void;
	/** `options` - The list of options shown in the dropdown */
	options: T[];
	/** `proposedTags` - A list of "proposed tags" that the user can add */
	proposedTags: T[];
	/** `readOnly` - Whether the interactions modifying the list of tags shoudl be prevented */
	readOnly?: boolean;
	/** `addTag` - Function called when a tag is removed from selected tags list */
	removeTag: (tag: T) => void;
	/** `retryConnection -  Function called to check if the service to fetch tag options is available again */
	retryConnection?: () => void;
	/** `tags` - The list of selected tags */
	tags: T[];
	/** `canRemove -  A filter function that determines if the user is able to remove the tag from the selected tags */
	canRemove?: (tag: T) => boolean;
	/** `filterRows -  A filter function that determines if the tag should be excluded from the selected and proposed tag tables  */
	filterRows?: (tag: T) => boolean;
	/** `tagTypes` - the list of options for filtering the search by tag type */
	tagTypes: FilterOption[];
	/** `offlineBackupTags` - A list of tags that the user can select if the service is offline */
	offlineBackupTags?: T[];

	highlightLeadingTag?: boolean;
	searchPlaceholder?: string;
	searchLabel?: string;
	removeIcon: ReactElement;
	searchIcon?: ReactElement;
	showTagType?: boolean;
	showTagSectionName?: boolean;

	/** `theme` - Used to customise the look and feel of the TagPicker component */
	theme?: DeepPartial<ComponentTagPicker>;
	tagTableTheme?: DeepPartial<ComponentTagTable>;
	proposedTagTableTheme?: DeepPartial<ComponentTagTable>;
	autoCompleteTheme?: DeepPartial<ComponentAutocomplete>;
	selectTheme?: DeepPartial<ComponentSelect>;

	/** `cssOverrides` - Escape hatch for styling that doesn't fall into the theme */
	cssOverrides?: SerializedStyles;
};

/**
 * ## TagPicker
 *
 * *Status: Testing*
 *
 * **Peer dependencies:**
 * - `react-aria-components`
 *
 * See the `peerDependencies` section of the `package.json` for compatible versions to install.
 *
 *
 * #### Props
 *
 * See {@link TagPickerProps} for a full list of props and descriptions.
 *
 * #### Example
 *
 * This is currently still in testing phase, so a production implementation is not yet available.
 */
export function TagPicker<T extends TagRow = TagRow>({
	addTag,
	loading,
	offline = false,
	onReorder,
	onSearch,
	options,
	proposedTags,
	readOnly = false,
	removeTag,
	retryConnection,
	tags,
	canRemove,
	filterRows,
	tagTypes,
	offlineBackupTags,

	highlightLeadingTag,
	searchPlaceholder = 'Search for tags',
	searchLabel = 'Search for tags',
	removeIcon,
	searchIcon,
	showTagType,
	showTagSectionName,

	theme,
	tagTableTheme,
	proposedTagTableTheme,
	autoCompleteTheme,
	selectTheme,
	cssOverrides,
}: TagPickerProps<T>) {
	const selectedTagIds = tags.map(({ id }) => id);
	const proposedTagsWithoutSelected = proposedTags.filter(
		({ id }) => !selectedTagIds.includes(id),
	);
	const backupTagsWithoutSelected =
		offlineBackupTags?.filter(({ id }) => !selectedTagIds.includes(id)) ?? [];

	const showBackupListWhenOffline =
		!readOnly && offlineBackupTags && backupTagsWithoutSelected.length > 0;

	return (
		<div css={[tagPickerStyles(theme), cssOverrides]}>
			<TagSelectWithTypes
				icon={searchIcon}
				search={onSearch}
				addTag={addTag}
				options={options}
				loading={loading}
				tagTypes={tagTypes}
				disabled={readOnly || offline}
				label={searchLabel}
				placeholder={searchPlaceholder}
				data-testid="tag-picker-search-input"
				symbol="search"
				theme={theme}
				autoCompleteTheme={autoCompleteTheme}
				selectTheme={selectTheme}
			/>

			{offline && (
				<div>
					<span>
						Unfortunately, we can&apos;t fetch tag information.{' '}
						{showBackupListWhenOffline && 'Choose from the following tags'}
						{showBackupListWhenOffline && retryConnection && <> or </>}
						{retryConnection && (
							<Button
								size="sm"
								variant="secondary"
								onClick={() => retryConnection()}
							>
								Retry connection
							</Button>
						)}
					</span>

					{showBackupListWhenOffline && (
						<TagTable
							heading="Offline backup tags"
							showTagType={showTagType}
							showTagSectionName={showTagSectionName}
							rows={backupTagsWithoutSelected}
							addAction={addTag}
						/>
					)}
				</div>
			)}

			<TagTable
				rows={tags}
				canRemove={canRemove}
				removeAction={readOnly ? undefined : removeTag}
				filterRows={filterRows}
				onReorder={readOnly ? undefined : onReorder}
				data-testid="selected-tags-table"
				highlightFirstRow={highlightLeadingTag}
				showTagType={showTagType}
				showTagSectionName={showTagSectionName}
				removeIcon={removeIcon}
				theme={tagTableTheme}
			/>

			{!readOnly && (
				<TagTable
					heading={'Proposed Tags'}
					theme={proposedTagTableTheme}
					filterRows={filterRows}
					showTagType={showTagType}
					showTagSectionName={showTagSectionName}
					rows={proposedTagsWithoutSelected}
					addAction={addTag}
					data-testid="proposed-tags-table"
				/>
			)}
		</div>
	);
}
