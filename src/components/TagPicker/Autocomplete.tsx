import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ReactNode } from 'react';
import { type ReactElement, useState } from 'react';
import {
	Collection,
	ComboBox,
	Input,
	ListBox,
	ListBoxItem,
	ListBoxLoadMoreItem,
	Popover,
} from 'react-aria-components';
import type { IconProps } from '../../Icon';
import { Icon } from '../../Icon';
import type { ComponentAutocomplete } from '../../styleD/build/typescript/component/autocomplete';
import type { DeepPartial } from '../../util/types';
import {
	autocompleteInputStyles,
	iconStyles,
	listboxInfoStyles,
	listboxItemStyles,
	listboxStyles,
} from './styles';

export type AutocompleteOption = {
	id: number | string;
	name: string;
};

export interface AutocompleteProps<
	T extends AutocompleteOption = AutocompleteOption,
> {
	/** `addSelection` - Function called when an option is picked from the dropdown */
	addSelection: (selection: T) => void;
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
	//** `addFirstOnEnter` - Whether to add the first option when the user hits the "Enter" key */
	addFirstOnEnter?: boolean;
	/** `theme` - Used to customise the look and feel of the Autocomplete component */
	theme?: DeepPartial<ComponentAutocomplete>;
	/** `cssOverrides` - Escape hatch for styling that doesn't fall into the theme */
	cssOverrides?: SerializedStyles;

	/** An icon to render to the right of the input */
	icon?: ReactNode;

	/**
	 * Alternative to using the `icon` prop for rendering a Material Symbol icons on the right of the input
	 * you can use the `symbol` prop to specify the icon by its symbol name.
	 */
	symbol?: IconProps['symbol'];
}

/**
 * ## Autocomplete
 *
 * *Status: Testing*
 *
 * Part of the overall TagPicker component, the Autocomplete provides an accessible
 * autocomplete input for selecting tags from a list of options, based on the [React Aria ComboBox](https://react-spectrum.adobe.com/react-aria/ComboBox) component.
 *
 * **Peer dependencies:**
 * - `react-aria-components`
 *
 * See the `peerDependencies` section of the `package.json` for compatible versions to install.
 *
 * ## Usage
 *
 * *Example with synchronous data:*
 *
 * ```tsx
 * import { useState } from 'react';
 * import { Autocomplete } from '@guardian/stand';
 *
 * const exampleFruits = [
 *   { id: 1, name: 'Apple' },
 *   { id: 2, name: 'Banana' },
 *   { id: 3, name: 'Cherry' },
 *   { id: 4, name: 'Date' },
 *   { id: 5, name: 'Elderberry' },
 * ];
 *
 * const FruitPicker = () => {
 *   const [selectedFruits, setSelectedFruits] = useState<{ id: number; name: string }[]>([]);
 *   const [options, setOptions] = useState<{ id: number; name: string }[]>([]);
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
 *       setOptions(exampleFruits);
 *       return;
 *     }
 *
 *     setOptions(
 *       exampleFruits.filter((f) =>
 *         f.name.toLowerCase().includes(inputText.toLowerCase()),
 *       ),
 *     );
 *   };
 *
 *   return (
 *     <>
 *       <Autocomplete
 *         onTextInputChange={onTextInputChange}
 *         options={options}
 *         label="Fruits"
 *         addSelection={(fruit) => setSelectedFruits((prev) => [...prev, fruit])}
 *         loading={false}
 *         placeholder="Search fruits"
 *         disabled={false}
 *         value={value}
 *       />
 *       <ul>
 *         {selectedFruits.map((fruit) => (
 *           <li key={fruit.id}>{fruit.name}</li>
 *         ))}
 *       </ul>
 *     </>
 *   );
 * };
 * ```
 *
 * #### Props
 *
 * See {@link AutocompleteProps} for a full list of props and descriptions.
 *
 * #### Example
 *
 * This is currently still in testing phase, so a production implementation is not yet available.
 */

export function Autocomplete<
	T extends AutocompleteOption = AutocompleteOption,
>({
	addSelection,
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
	addFirstOnEnter,
	symbol,
	icon,
}: AutocompleteProps<T>) {
	const [hoveredItemId, setHoveredItemId] = useState<string | number>();
	const [upOrDownKeyPressed, setUpOrDownKeyPressed] = useState(false);
	const listBoxIsInUse = upOrDownKeyPressed || !!hoveredItemId;

	const iconContent = icon ? (
		<Icon css={iconStyles(theme)}>{icon}</Icon>
	) : symbol ? (
		<Icon symbol={symbol} css={iconStyles(theme)} />
	) : null;

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
				onInputChange={(value) => {
					setUpOrDownKeyPressed(false);
					onTextInputChange(value);
				}}
				onChange={(key) => {
					const tag = options.find((t) => t.id === key);
					if (tag) {
						addSelection(tag);
						onTextInputChange('');
					}
				}}
				allowsEmptyCollection
				items={options}
				allowsCustomValue
				menuTrigger="focus"
				shouldFocusWrap
			>
				<Input
					css={autocompleteInputStyles(!!iconContent, theme)}
					placeholder={placeholder}
					disabled={disabled}
					data-testid={dataTestId}
					onKeyDown={
						addFirstOnEnter
							? (event) => {
									if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
										setUpOrDownKeyPressed(true);
									}
									if (event.key === 'Enter') {
										const [firstOption] = options;
										if (firstOption && !listBoxIsInUse) {
											addSelection(firstOption);
										}
									}
								}
							: undefined
					}
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
						css={(value || options.length || loading) && listboxStyles(theme)}
						autoFocus="first"
						renderEmptyState={() =>
							// Only show a "no results" box if user has typed
							value &&
							!loading && <div css={listboxInfoStyles(theme)}>No results</div>
						}
					>
						<Collection items={options}>
							{(item) => (
								<ListBoxItem
									css={listboxItemStyles(theme)}
									value={item}
									key={item.id}
									onHoverChange={(isHovering) => {
										setHoveredItemId((current) => {
											if (isHovering) {
												return item.id;
											}
											return current === item.id ? undefined : current;
										});
									}}
								>
									{item.name}
								</ListBoxItem>
							)}
						</Collection>

						<ListBoxLoadMoreItem
							css={listboxInfoStyles(theme)}
							isLoading={loading}
						>
							<span aria-label="Loading">{loadingIcon ?? 'Loading...'}</span>
						</ListBoxLoadMoreItem>
					</ListBox>
				</Popover>
				{iconContent}
			</ComboBox>
		</div>
	);
}
