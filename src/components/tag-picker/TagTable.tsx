import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { type ReactElement, useEffect, useRef, useState } from 'react';
import {
	Button,
	Cell,
	Column,
	Row,
	Table,
	TableBody,
	TableHeader,
	useDragAndDrop,
} from 'react-aria-components';
import type { ComponentTagTable } from '../../styleD/build/typescript/component/tagTable';
import type { DeepPartial } from '../util';
import {
	tagTableAddButtonStyles as addButtonStyles,
	tagTableCellStyles as cellStyles,
	tagTableDragButtonStyles as dragButtonStyles,
	tagTableHeadingStyles as headingStyles,
	tagTableRemoveButtonStyles as removeButtonStyles,
	tagTableRowStyles as rowStyles,
	tagTableStyles,
	tagTableTypeBadgeStyles as typeBadgeStyles,
} from './styles';
import type { TagRow } from './types';

type Row = TagRow | { tag: TagRow };
const rowToTag = (row: Row): TagRow => ('tag' in row ? row.tag : row);

export interface TagTableProps<R extends Row> {
	/** `rows` - The collection of rows */
	rows: R[];
	/** `filterRows` - Function to filter rows from `rows` prop from appearing in the table */
	filterRows: (row: R) => boolean;
	/** `heading` - The table heading */
	heading?: string;
	/** `showTagType` - Whether to show tags' type in table */
	showTagType?: boolean;
	/** `showTagSectionName` - Whether to show tags' section name in table */
	showTagSectionName?: boolean;
	/** `removeAction` - Function called when the Remove button is pressed on a row */
	removeAction?: (tag: R) => void;
	/** `addAction` - Function called when the Add button is pressed on a row */
	addAction?: (tag: R) => void;
	/** `onReorder` - Function called when a re-ordering of rows through drag and drop is performed */
	onReorder?: (tags: R[]) => void;
	/** `canRemove` - Function to determine if a given row can be removed from the table */
	canRemove?: (tag: R) => boolean;
	'data-testid'?: string;
	/** `removeIcon` - Icon used in the remove row button */
	removeIcon?: ReactElement;
	/** `gripIcon` - Icon to indicate that a row can be dragged, used in the accessible drag button */
	gripIcon?: ReactElement;
	/** `theme` - Used to customise the look and feel of the TagTable component */
	theme?: DeepPartial<ComponentTagTable>;
	/** `cssOverrides` - Escape hatch for styling that doesn't fall into the theme */
	cssOverrides?: SerializedStyles;
}

const TypeBadge = (type: string, theme?: DeepPartial<ComponentTagTable>) => {
	return <span css={typeBadgeStyles(theme)}>{type}</span>;
};
const defaultCanRemove = () => true;

export function TagTable<R extends Row>({
	rows,
	filterRows,
	heading,
	showTagType,
	showTagSectionName,
	removeAction: removeTag,
	addAction: addTag,
	onReorder,
	canRemove = defaultCanRemove,
	'data-testid': dataTestId,
	removeIcon,
	gripIcon,
	theme,
	cssOverrides,
}: TagTableProps<R>) {
	const canDrag = !!onReorder;

	// Local copy of row data, so we can reorder as needed
	const [localRows, setLocalRows] = useState(() => [...rows]);
	// Ref to local row data, so we can access up-to-date state within callbacks
	const localRowsRef = useRef(localRows);
	// eslint-disable-next-line react-hooks/refs -- need to update the ref with latest local copy
	localRowsRef.current = localRows;

	useEffect(() => {
		// Keep local row data tags in sync with row prop
		setLocalRows([...rows]);
	}, [rows]);

	const filtered = localRows.filter(filterRows);

	const { dragAndDropHooks } = useDragAndDrop<R>({
		getItems: (_keys, items) => {
			return items.map((item) => ({
				'text/plain': rowToTag(item).id.toString(),
			}));
		},

		onReorder(e) {
			const draggedElementKey = [...e.keys].at(0);
			if (draggedElementKey === e.target.key) {
				return;
			}

			const localList = [...localRows];

			const draggedElementIndex = localList.findIndex(
				(i) => rowToTag(i).id === draggedElementKey,
			);

			const draggedElement = localList.at(draggedElementIndex);

			if (!draggedElement) {
				return;
			}

			localList.splice(draggedElementIndex, 1);

			const targetElementIndex = localList.findIndex(
				(i) => rowToTag(i).id === e.target.key,
			);

			if (e.target.dropPosition === 'before') {
				localList.splice(targetElementIndex, 0, draggedElement);
			} else if (e.target.dropPosition === 'after') {
				localList.splice(targetElementIndex + 1, 0, draggedElement);
			}

			setLocalRows(localList);
			onReorder?.(localList);
		},
	});

	if (filtered.length === 0) {
		return null;
	}

	return (
		<div css={cssOverrides}>
			{heading && <div css={headingStyles(theme)}>{heading}</div>}
			<Table
				css={tagTableStyles(!!removeTag, theme)}
				aria-label="Tag Table"
				data-testid={dataTestId}
				dragAndDropHooks={onReorder && dragAndDropHooks}
			>
				<TableHeader hidden>
					{onReorder && <Column></Column>}
					{showTagType && <Column>Type</Column>}
					<Column isRowHeader>Name</Column>
					{showTagSectionName && <Column>Section</Column>}
					{removeTag && <Column></Column>}
					{addTag && <Column></Column>}
				</TableHeader>
				<TableBody items={filtered} dependencies={[localRows]}>
					{(item) => (
						<Row
							id={rowToTag(item).id}
							css={rowStyles(canDrag, theme)}
							key={rowToTag(item).id}
							textValue={rowToTag(item).internalName}
						>
							{onReorder && (
								<Cell
									css={[
										css`
											width: 1%;
										`,
									]}
								>
									<Button slot="drag" css={dragButtonStyles}>
										{gripIcon}
									</Button>
								</Cell>
							)}
							{showTagType && (
								<Cell
									css={[
										cellStyles(theme),
										css`
											position: relative;
											width: 15%;
										`,
									]}
								>
									{TypeBadge(rowToTag(item).type)}
								</Cell>
							)}
							<Cell
								css={[
									cellStyles(theme),
									css`
										width: 50%;
									`,
								]}
								data-testid={`tags-table-item-${filtered.indexOf(item)}-name`}
							>
								{rowToTag(item).internalName}
							</Cell>
							{showTagSectionName && (
								<Cell
									css={[
										cellStyles(theme),
										css`
											width: 20%;
										`,
									]}
								>
									{rowToTag(item).section.name}
								</Cell>
							)}
							{removeTag && (
								<Cell
									css={[
										cellStyles(theme),
										css`
											text-align: center;
											width: 10%;
										`,
									]}
								>
									{canRemove(item) && (
										<Button
											css={removeButtonStyles}
											onPress={() => {
												removeTag(item);
											}}
											aria-label={`Remove ${rowToTag(item).internalName}`}
										>
											{removeIcon ?? 'Remove'}
										</Button>
									)}
								</Cell>
							)}
							{addTag && (
								<Cell
									css={[
										cellStyles(theme),
										css`
											text-align: center;
											width: 10%;
										`,
									]}
								>
									<Button
										css={addButtonStyles(theme)}
										onPress={() => {
											addTag(item);
										}}
										aria-label={`Add ${rowToTag(item).internalName}`}
									>
										Add
									</Button>
								</Cell>
							)}
						</Row>
					)}
				</TableBody>
			</Table>
		</div>
	);
}
