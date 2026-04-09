import { css } from '@emotion/react';
import type { ComponentSelectionTable } from '../../styleD/build/typescript/component/selectionTable';
import type { DeepPartial } from '../../util/types';
import type { ColumnDef, SelectionTableProps } from './SelectionTable';
import { SelectionTable } from './SelectionTable';
import { tagTableTypeBadgeStyles as typeBadgeStyles } from './styles';
import type { TagRow } from './types';

export interface TagTableProps<
	R extends TagRow,
> extends SelectionTableProps<R> {
	/** `showTagType` - Whether to show tags' type in table */
	showTagType?: boolean;
	/** `showTagSectionName` - Whether to show tags' section name in table */
	showTagSectionName?: boolean;
}

const TypeBadge = (
	type: string,
	theme?: DeepPartial<ComponentSelectionTable>,
) => {
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
 * import { useState } from 'react';
 * import { TagAutocomplete, TagTable } from '@guardian/stand';
 *
 * // Your tag type must satisfy `TagRow`: { id, name, type, sectionName }
 * type MyTag = {
 *   id: number;
 *   name: string;
 *   type: string;
 *   sectionName: string;
 * };
 *
 * const allTags: MyTag[] = [
 *   { id: 1, name: 'UK news', type: 'Keyword', sectionName: 'World' },
 *   { id: 2, name: 'US politics', type: 'Keyword', sectionName: 'Politics' },
 * ];
 *
 * const Component = () => {
 *   const [selectedTags, setSelectedTags] = useState<MyTag[]>([]);
 *   const [options, setOptions] = useState<MyTag[]>([]);
 *   const [value, setValue] = useState('');
 *
 *   const onTextInputChange = (inputText: string) => {
 *     setValue(inputText);
 *     if (inputText === '') {
 *       setOptions([]);
 *       return;
 *     }
 *
 *     setOptions(
 *       allTags.filter((t) =>
 *         t.name.toLowerCase().includes(inputText.toLowerCase()),
 *       ),
 *     );
 *   };
 *
 *   return (
 *     <>
 *       <TagAutocomplete
 *         onTextInputChange={onTextInputChange}
 *         options={options}
 *         label="Tags"
 *         addTag={(tag) => setSelectedTags((tags) => [...tags, tag])}
 *         loading={false}
 *         placeholder="Search tags"
 *         disabled={false}
 *         value={value}
 *       />
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
	visuallyShowHeading = false,
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
			visuallyShowHeading={visuallyShowHeading}
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
