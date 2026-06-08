import type { ReactNode } from 'react';
import { Button } from '../../Button';
import { TagSelectWithTypes } from './TagSelectWithTypes';
import type { TagTableProps } from './TagTable';
import { TagTable } from './TagTable';
import type { TagRow } from './types';

export type TagPickerProps<T extends TagRow = TagRow> = {
	tags: T[];
	search: { (queryText: string, tagType?: string): void };
	tagTypes: Array<{ value: string; name?: string }>;

	addTag: (tag: T) => void;
	loading: boolean;
	options: T[];
	proposedTags: T[];
	readOnly: boolean;

	offline?: boolean;
	retryConnection?: () => void;
	offlineBackupTags?: T[];

	onReorder: TagTableProps<T>['onReorder'];
	canRemove: TagTableProps<T>['canRemove'];
	removeAction: TagTableProps<T>['removeAction'];
	removeIcon: TagTableProps<T>['removeIcon'];

	children?: ReactNode;
};

export function TagPicker<T extends TagRow = TagRow>({
	tags,
	search,
	tagTypes,

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
	removeAction,
	removeIcon,

	// proposed tag table
	proposedTags,

	children,
}: TagPickerProps<T>) {
	const showBackupListWhenOffline =
		!readOnly && offlineBackupTags && offlineBackupTags.length > 0;

	return (
		<div>
			<TagSelectWithTypes
				search={search}
				addTag={addTag}
				options={options}
				loading={loading}
				tagTypes={tagTypes}
				disabled={readOnly || offline}
			/>

			<TagTable
				rows={tags}
				highlightFirstRow
				showTagType
				showTagSectionName
				canRemove={canRemove}
				removeAction={readOnly ? undefined : removeAction}
				removeIcon={removeIcon}
				onReorder={readOnly ? undefined : onReorder}
				data-testid="selected-tags-table"
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
							rows={offlineBackupTags.filter(
								(backupTag) => !tags.some((tag) => tag.id === backupTag.id),
							)}
							addAction={addTag}
						/>
					)}
				</div>
			)}

			{!readOnly && (
				<TagTable
					heading={'Proposed tags'}
					showTagType
					showTagSectionName
					rows={proposedTags}
					addAction={addTag}
					data-testid="proposed-tags-table"
				/>
			)}

			{children}
		</div>
	);
}
