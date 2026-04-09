import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ReactNode } from 'react';
import { type ReactElement } from 'react';
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
import type { ComponentSelectionTable } from '../../styleD/build/typescript/component/selectionTable';
import type { DeepPartial } from '../../util/types';
import type { AutocompleteOption } from './Autocomplete';
import {
	tagTableAddButtonStyles as addButtonStyles,
	tagTableCellStyles as cellStyles,
	tagTableDragButtonStyles as dragButtonStyles,
	tagTableHeadingStyles as headingStyles,
	tagTableRemoveButtonStyles as removeButtonStyles,
	tagTableRowStyles as rowStyles,
	tagTableStyles,
} from './styles';

export type ColumnDef<
	R extends Record<string, string | number | ReactNode>,
	K extends keyof R = keyof R,
> = {
	key: K;
	label: string;
	css?: SerializedStyles;
	renderCell?: (row: R) => ReactNode;
};

export interface SelectionTableProps<
	R extends AutocompleteOption = AutocompleteOption,
> {
	/** `rows` - The collection of rows */
	rows: R[];
	/** `filterRows` - Function to filter rows from `rows` prop from appearing in the table */
	filterRows: (row: R) => boolean;
	/** `heading` - The table heading, also used as an accessible label for the table */
	heading: string;
	/** `visuallyShowHeading` - Whether to render the heading visually on the page. Defaults to `false`; the heading is always used as the accessible label regardless */
	visuallyShowHeading?: boolean;
	/** `removeAction` - Function called when the Remove button is pressed on a row */
	removeAction?: (item: R) => void;
	/** `addAction` - Function called when the Add button is pressed on a row */
	addAction?: (item: R) => void;
	/** `onReorder` - Function called when a re-ordering of rows through drag and drop is performed */
	onReorder?: (items: R[]) => void;
	/** `canRemove` - Function to determine if a given row can be removed from the table */
	canRemove?: (item: R) => boolean;
	'data-testid'?: string;
	/** `removeIcon` - Icon used in the remove row button */
	removeIcon?: ReactElement;
	/** `gripIcon` - Icon to indicate that a row can be dragged, used in the accessible drag button */
	gripIcon?: ReactElement;
	/** `theme` - Used to customise the look and feel of the SelectionTable component */
	theme?: DeepPartial<ComponentSelectionTable>;
	/** `cssOverrides` - Escape hatch for styling that doesn't fall into the theme */
	cssOverrides?: SerializedStyles;
	/** `columns` - Array of column definitions, defining the content and layout of table columns. By default, a single "name" column is shown. */
	columns?: Array<ColumnDef<R>>;
}

function defaultCanRemove() {
	return true;
}

/**
 * ## SelectionTable
 *
 * *Status: Testing*
 *
 * The underlying generic table used by `TagTable`. Renders a collection of rows with
 * optional remove, add, and drag-to-reorder actions, based on the
 * [React Aria Table](https://react-spectrum.adobe.com/react-aria/Table) component.
 *
 * Prefer `TagTable` from `@guardian/stand` for tag-specific use cases. Use
 * `SelectionTable` directly when you need a generic selectable table with custom columns.
 *
 * **Peer dependencies:**
 * - `react-aria-components`
 *
 * See the `peerDependencies` section of the `package.json` for compatible versions to install.
 *
 * ## Usage
 *
 * ```tsx
 * import { useState } from 'react';
 * import { Autocomplete, SelectionTable } from '@guardian/stand';
 *
 * type Fruit = { id: number; name: string };
 *
 * const exampleFruits: Fruit[] = [
 *   { id: 1, name: 'Apple' },
 *   { id: 2, name: 'Banana' },
 * ];
 *
 * const FruitPicker = () => {
 *   const [selected, setSelected] = useState<Fruit[]>([]);
 *   const [options, setOptions] = useState<Fruit[]>([]);
 *   const [value, setValue] = useState('');
 *
 *   return (
 *     <>
 *       <Autocomplete
 *         onTextInputChange={(text) => {
 *           setValue(text);
 *           setOptions(
 *             exampleFruits.filter((f) =>
 *               f.name.toLowerCase().includes(text.toLowerCase()),
 *             ),
 *           );
 *         }}
 *         options={options}
 *         label="Fruits"
 *         addAction={(fruit) => setSelected((prev) => [...prev, fruit])}
 *         loading={false}
 *         placeholder="Search fruits"
 *         disabled={false}
 *         value={value}
 *       />
 *       <SelectionTable
 *         rows={selected}
 *         filterRows={() => true}
 *         heading="Selected Fruits"
 *         removeAction={(fruit) =>
 *           setSelected((prev) => prev.filter((f) => f.id !== fruit.id))
 *         }
 *       />
 *     </>
 *   );
 * };
 * ```
 *
 * #### Props
 *
 * See {@link SelectionTableProps} for a full list of props and descriptions.
 *
 * #### Example
 *
 * This is currently still in testing phase, so a production implementation is not yet available.
 */
export function SelectionTable<
	R extends AutocompleteOption = AutocompleteOption,
>({
	rows,
	filterRows,
	heading,
	visuallyShowHeading = false,
	removeAction,
	addAction,
	onReorder,
	canRemove = defaultCanRemove,
	'data-testid': dataTestId,
	removeIcon,
	gripIcon,
	theme,
	cssOverrides,
	columns = [
		{
			key: 'name',
			label: 'Name',
		},
	],
}: SelectionTableProps<R>) {
	const canDrag = !!onReorder;

	const filtered = rows.filter(filterRows);

	const { dragAndDropHooks } = useDragAndDrop<R>({
		getItems: (_keys, items) => {
			return items.map((item) => ({
				'text/plain': item.id.toString(),
			}));
		},

		onReorder(e) {
			const draggedElementKey = [...e.keys].at(0);
			if (draggedElementKey === e.target.key) {
				return;
			}

			const localList = [...rows];

			const draggedElementIndex = localList.findIndex(
				(i) => i.id === draggedElementKey,
			);

			const draggedElement = localList.at(draggedElementIndex);

			if (!draggedElement) {
				return;
			}

			localList.splice(draggedElementIndex, 1);

			const targetElementIndex = localList.findIndex(
				(i) => i.id === e.target.key,
			);

			if (e.target.dropPosition === 'before') {
				localList.splice(targetElementIndex, 0, draggedElement);
			} else if (e.target.dropPosition === 'after') {
				localList.splice(targetElementIndex + 1, 0, draggedElement);
			}

			onReorder?.(localList);
		},
	});

	if (filtered.length === 0) {
		return null;
	}

	return (
		<div css={cssOverrides}>
			{visuallyShowHeading && <div css={headingStyles(theme)}>{heading}</div>}
			<Table
				css={tagTableStyles(!!removeAction, theme)}
				aria-label={heading}
				data-testid={dataTestId}
				dragAndDropHooks={onReorder && dragAndDropHooks}
			>
				<TableHeader hidden>
					{onReorder && <Column></Column>}
					{columns.map((column) => (
						<Column
							key={String(column.key)}
							isRowHeader={column.key === 'name'}
						>
							{column.label}
						</Column>
					))}
					{removeAction && <Column></Column>}
					{addAction && <Column></Column>}
				</TableHeader>
				<TableBody items={filtered} dependencies={[rows]}>
					{(item) => (
						<Row
							id={item.id}
							css={rowStyles(canDrag, theme)}
							key={item.id}
							textValue={item.name} // @todo -- is this value correct?
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
							{columns.map((column) => (
								<Cell
									key={String(column.key)}
									css={[cellStyles(theme), column.css]}
								>
									{column.renderCell
										? column.renderCell(item)
										: (item[column.key] as number | string | ReactNode)}
								</Cell>
							))}
							{removeAction && (
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
												removeAction(item);
											}}
											aria-label={`Remove ${item.name}`}
										>
											{removeIcon ?? 'Remove'}
										</Button>
									)}
								</Cell>
							)}
							{addAction && (
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
											addAction(item);
										}}
										aria-label={`Add ${item.name}`}
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
