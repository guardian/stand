import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { type ReactElement } from 'react';
import type { ComponentTagTable } from '../../styleD/build/typescript/component/tagTable';
import type { DeepPartial } from '../../util/types';
import type { ColumnDef } from './SelectionTable';
import { SelectionTable } from './SelectionTable';
import { tagTableTypeBadgeStyles as typeBadgeStyles } from './styles';
import type { TagRow } from './types';

export interface TagTableProps<R extends TagRow> {
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

/**
 * ## TagTable
 *
 * *Status: Testing*
 *
 * Part of the overall TagPicker component, the TagTable provides an accessible
 * table for displaying tags, with options to add, remove, and reorder tags via drag and drop,
 * based on the [React Aria Table](https://react-spectrum.adobe.com/react-aria/Table) component.
 *
 * **Peer dependencies:**
 * - `react-aria-components`
 *
 * See the `peerDependencies` section of the `package.json` for compatible versions to install.
 *
 * ## Usage
 *
 * *Example with TagAutocomplete and TagTable combined:*
 *
 * ```tsx
 * import { TagAutocomplete, TagTable } from '@guardian/stand';
 *
 * const Component = () => {
 *   const [selectedTags, setSelectedTags] = useState<
 *     TagManagerObjectData[] // TagManagerObjectData is an internal type representing a Tag
 *   >([]);

 *   const [options, setOptions] = useState<TagManagerObjectData[]>([]);
 *   const [value, setValue] = useState('');
 *   const onChange = (inputText: string) => {
 *     setValue(inputText);
 *     if (inputText === '') {
 *       setOptions([]);
 *       return;
 *     }
 *
 *     if (inputText === '*') {
 *       setOptions(exampleTags); // exampleTags is an array of Tags
 *       return;
 *     }
 *
 *     // Simple filtering against exampleTags
 *     const filteredItems = exampleTags.filter((t) =>
 *       t.internalName.toLowerCase().includes(inputText.toLowerCase()),
 *     );
 *     return setOptions(filteredItems);
 *   };

 *   return (
 *     <>
 *       <div
 *         css={css`
 *             display: flex;
 *         `}
 *       >
 *         <TagAutocomplete
 *           onChange={onChange}
 *           options={options}
 *           label="Tags"
 *           addTag={(tag) =>
 *               setSelectedTags((tags) => {
 *                   return [...tags, tag];
 *               })
 *           }
 *           loading={false}
 *           placeholder={''}
 *           disabled={false}
 *           value={value}
 *         />
 *         <select>
 *            option>All tags</option>
 *         </select>
 *       </div>
 *       <TagTable rows={selectedTags} filterRows={() => true} />
 *     </>
 *   );
 * };
 * ```
 *
 * #### Props
 *
 * See {@link TagTableProps} for a full list of props and descriptions.
 *
 * #### Example
 *
 * This is currently still in testing phase, so a production implementation is not yet available.
 */

export function TagTable<R extends TagRow>({
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
	const columns: Array<ColumnDef<R>> = [
		...(showTagType
			? [
					{
						key: 'type' as const,
						label: 'Type',
						css: css`
							position: relative;
							width: 15%;
						`,
						renderCell: (row: R) => TypeBadge(row.type, theme),
					},
				]
			: []),
		{
			key: 'name' as const,
			label: 'Name',
			css: css`
				width: 50%;
			`,
		},
		...(showTagSectionName
			? [
					{
						key: 'sectionName' as const,
						label: 'Section',
						css: css`
							width: 20%;
						`,
						renderCell: (row: R) => <span>{row.sectionName}</span>,
					},
				]
			: []),
	];

	return (
		<SelectionTable<R>
			rows={rows}
			filterRows={filterRows}
			heading={heading}
			removeAction={removeTag}
			addAction={addTag}
			onReorder={onReorder}
			canRemove={canRemove}
			data-testid={dataTestId}
			removeIcon={removeIcon}
			gripIcon={gripIcon}
			theme={theme}
			cssOverrides={cssOverrides}
			columns={columns}
		/>
	);
}
