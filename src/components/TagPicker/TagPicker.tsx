import { Button } from '../../Button';
import { TagSelectWithTypes } from './TagSelectWithTypes';
import type { TagTableProps } from './TagTable';
import { TagTable } from './TagTable';
import type { FilterOption, TagRow } from './types';

export type TagPickerProps<T extends TagRow = TagRow> = {
	addTag: (tag: T) => void;
	loading: boolean;
	offline?: boolean;
	onReorder: TagTableProps<T>['onReorder'];
	onSearch: { (queryText: string, tagTypeFilter?: string): void };
	options: T[];
	proposedTags: T[];
	readOnly?: boolean;
	removeTag: TagTableProps<T>['removeAction'];
	retryConnection?: () => void;
	tags: T[];

	highlightLeadingTag?: boolean;
	searchPlaceholder?: string;
	searchLabel?: string;
	filterRows?: { (tag: T): boolean };
	tagTypes: FilterOption[];
	offlineBackupTags?: T[];
	canRemove: TagTableProps<T>['canRemove'];
	removeIcon: TagTableProps<T>['removeIcon'];
};

function filterOutSelectedTags<T extends TagRow = TagRow>(
	tagList: T[],
	selectedTags: T[],
) {
	const selectedTagIds = selectedTags.map(({ id }) => id);
	return tagList.filter(({ id }) => !selectedTagIds.includes(id));
}

export function TagPicker<T extends TagRow = TagRow>({
	tags,
	onSearch,
	tagTypes,
	filterRows,

	searchLabel = 'Search for tags',
	searchPlaceholder = 'Search for tags',

	addTag,
	loading,
	options,

	readOnly = false,
	offline = false,
	retryConnection,
	offlineBackupTags,

	// selected tag table
	onReorder,
	canRemove,
	removeTag,
	removeIcon,
	highlightLeadingTag,

	// proposed tag table
	proposedTags,
}: TagPickerProps<T>) {
	const showBackupListWhenOffline =
		!readOnly && offlineBackupTags && offlineBackupTags.length > 0;

	const proposedTagsWithoutSelected = filterOutSelectedTags(proposedTags, tags);
	const backupTagsWithoutSelected = filterOutSelectedTags(
		offlineBackupTags ?? [],
		tags,
	);

	return (
		<>
			<TagSelectWithTypes
				search={onSearch}
				addTag={addTag}
				options={options}
				loading={loading}
				tagTypes={tagTypes}
				disabled={readOnly || offline}
				label={searchLabel}
				placeholder={searchPlaceholder}
				data-testid="tag-picker-search-input"
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
							showTagType
							showTagSectionName
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
				showTagType
				showTagSectionName
				removeIcon={removeIcon}
			/>

			{!readOnly && (
				<TagTable
					heading={'Proposed Tags'}
					filterRows={filterRows}
					showTagType
					showTagSectionName
					rows={proposedTagsWithoutSelected}
					addAction={addTag}
					data-testid="proposed-tags-table"
				/>
			)}
		</>
	);
}
