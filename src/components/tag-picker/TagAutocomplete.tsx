import type { SerializedStyles } from '@emotion/react';
import type { ReactElement } from 'react';
import type { ComponentAutocomplete } from '../../styleD/build/typescript/component/autocomplete';
import type { DeepPartial } from '../../util/types';
import { Autocomplete } from './Autocomplete';
import type { Tag } from './types';

interface TagAutocompleteProps<T extends Tag = Tag> {
	/** `addTag` - Function called when an option is picked from the dropdown */
	addTag: (tag: T) => void;
	/** `loading` - Whether the component is loading options for the dropdown */
	loading: boolean;
	/** `onTextInputChange` - Function called when the combobox input changes */
	onTextInputChange: (inputText: string) => void;
	/** `options` - The list of options shown in the dropdown */
	options: T[];
	/** `label` - An accessible label for the combobox input */
	label: string;
	/** `placeholder` - A placeholder string for the combobox input */
	placeholder: string;
	/** `disabled` - Whether the combobox input is disabled */
	disabled: boolean;
	/** `value` - The value of the combobox input */
	value: string;
	'data-testid'?: string;
	/** `loadingIcon` - Icon used to show loading happening in the dropdown */
	loadingIcon?: ReactElement;
	/** `theme` - Used to customise the look and feel of the TagAutocomplete component */
	theme?: DeepPartial<ComponentAutocomplete>;
	/** `cssOverrides` - Escape hatch for styling that doesn't fall into the theme */
	cssOverrides?: SerializedStyles;
}

/**
 * ## TagAutocomplete
 *
 * *Status: Testing*
 *
 * Part of the overall TagPicker component, the TagAutocomplete provides an accessible
 * autocomplete input for selecting tags from a list of options, based on the [React Aria ComboBox](https://react-spectrum.adobe.com/react-aria/ComboBox) component.
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
 * // Define a type for your tags — it must include `id` and `name`,
 * // plus any extra fields TagTable needs (type, sectionName)
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
 *   // ...
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
 *     if (inputText === '*') {
 *       setOptions(allTags);
 *       return;
 *     }
 *
 *     // Simple filtering against allTags
 *     const filteredItems = allTags.filter((t) =>
 *       t.name.toLowerCase().includes(inputText.toLowerCase()),
 *     );
 *     setOptions(filteredItems);
 *   };
 *
 *   return (
 *     <>
 *       <div
 *         css={css`
 *           display: flex;
 *         `}
 *       >
 *         <TagAutocomplete
 *           onTextInputChange={onTextInputChange}
 *           options={options}
 *           label="Tags"
 *           addTag={(tag) =>
 *             setSelectedTags((tags) => [...tags, tag])
 *           }
 *           loading={false}
 *           placeholder={''}
 *           disabled={false}
 *           value={value}
 *         />
 *         <select>
 *           <option>All tags</option>
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
 * See {@link TagAutocompleteProps} for a full list of props and descriptions.
 *
 * #### Example
 *
 * This is currently still in testing phase, so a production implementation is not yet available.
 */
export function TagAutocomplete<T extends Tag = Tag>({
	addTag,
	loading,
	onTextInputChange,
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
		<Autocomplete<T>
			onTextInputChange={onTextInputChange}
			options={options}
			label={label}
			addSelection={addTag}
			loading={loading}
			placeholder={placeholder}
			disabled={disabled}
			value={value}
			data-testid={dataTestId}
			loadingIcon={loadingIcon}
			theme={theme}
			cssOverrides={cssOverrides}
		/>
	);
}
