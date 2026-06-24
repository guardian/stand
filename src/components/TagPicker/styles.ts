import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentTagPicker } from '../../styleD/build//typescript/component/tagPicker';
import { componentTagPicker } from '../../styleD/build//typescript/component/tagPicker';
import {
	type ComponentAutocomplete,
	componentAutocomplete,
} from '../../styleD/build/typescript/component/autocomplete';
import type { ComponentSelect } from '../../styleD/build/typescript/component/select';
import { mergeDeep } from '../../util/mergeDeep';
import type { DeepPartial } from '../../util/types';

export const autocompleteInputStyles = (
	hasIcon: boolean,
	partialTheme: DeepPartial<ComponentAutocomplete> = {},
): SerializedStyles => {
	const theme = mergeDeep(componentAutocomplete, partialTheme);

	return css`
		width: 100%;
		box-sizing: border-box;
		padding: ${theme.input.padding};
		color: ${theme.input.color};
		background-color: ${theme.input.backgroundColor};
		border-color: ${theme.input.borderColor};
		border-width: ${theme.input.borderWidth};
		border-style: ${theme.input.borderStyle};
		border-radius: ${theme.input.borderRadius};

		${hasIcon &&
		`
		padding-right: calc(${theme.icon.paddingX} + ${theme.icon.size} + ${theme.icon.paddingX});
		min-height: calc(${theme.icon.size});
		`}

		&[data-hovered] {
			background-color: ${theme.input.hover.backgroundColor};
		}

		&[data-focus-visible] {
			outline: ${theme.input.focused.outline};
			outline-offset: ${theme.input.focused.outlineOffset};
		}

		&[data-disabled] {
			cursor: ${theme.input.disabled.cursor};
			background-color: ${theme.input.disabled.backgroundColor};
			color: ${theme.input.disabled.color};
			border: ${theme.input.disabled.border};
		}
	`;
};

export const listboxStyles = (
	partialTheme: DeepPartial<ComponentAutocomplete> = {},
) => {
	const theme = mergeDeep(componentAutocomplete, partialTheme);

	return css`
		padding: ${theme.listbox.paddingY} ${theme.listbox.paddingX};
		max-height: 320px;
		overflow-y: auto;
		background-color: ${theme.listbox.backgroundColor};
		border-color: ${theme.listbox.borderColor};
		border-width: ${theme.listbox.borderWidth};
		border-style: ${theme.listbox.borderStyle};
	`;
};

export const listboxItemStyles = (
	partialTheme: DeepPartial<ComponentAutocomplete> = {},
): SerializedStyles => {
	const theme = mergeDeep(componentAutocomplete, partialTheme);

	return css`
		padding: ${theme.listbox.item.paddingY} ${theme.listbox.item.paddingX};
		cursor: pointer;
		color: ${theme.listbox.item.color};
		&:hover {
			background-color: ${theme.listbox.item.backgroundHoverColor};
			color: ${theme.listbox.item.colorHover};
		}
		&[data-focused] {
			background-color: ${theme.listbox.item.backgroundFocusedColor};
			color: ${theme.listbox.item.colorFocused};
		}
	`;
};

export const listboxInfoStyles = (
	partialTheme: DeepPartial<ComponentAutocomplete> = {},
): SerializedStyles => {
	const theme = mergeDeep(componentAutocomplete, partialTheme);

	return css`
		padding: ${theme.listbox.item.paddingY} ${theme.listbox.item.paddingX};
	`;
};

export const iconStyles = (
	partialTheme: DeepPartial<ComponentAutocomplete> = {},
): SerializedStyles => {
	const theme = mergeDeep(componentAutocomplete, partialTheme);

	return css`
		pointer-events: none;
		position: absolute;
		right: ${theme.icon.paddingX};
		color: ${theme.icon.color};
		top: 50%;
		transform: translateY(-50%);
		font-size: ${theme.icon.size};
	`;
};

export const tagPickerStyles = (
	partialTheme: DeepPartial<ComponentTagPicker> = {},
): SerializedStyles => {
	const theme = mergeDeep(componentTagPicker, partialTheme);

	return css`
		display: flex;
		flex-direction: column;
		width: ${theme.shared.width};
		gap: ${theme.shared.gap};
	`;
};

export const offlineSectionStyles = (
	partialTheme: DeepPartial<ComponentTagPicker> = {},
): SerializedStyles => {
	const theme = mergeDeep(componentTagPicker, partialTheme);
	return css`
		display: flex;
		flex-direction: column;
		gap: ${theme.offlineSection.gap};
	`;
};

export const tagSearchWithFilterStyles = (
	partialTheme: DeepPartial<ComponentTagPicker> = {},
): SerializedStyles => {
	const theme = mergeDeep(componentTagPicker, partialTheme);

	return css`
		width: ${theme.search.width};
		display: flex;
		gap: ${theme.shared.gap};
	`;
};

export const filterSelectCssOverrides = (
	partialTheme: DeepPartial<ComponentTagPicker> = {},
): SerializedStyles => {
	const theme = mergeDeep(componentTagPicker, partialTheme);

	return css`
		flex-basis: ${theme.select.flexBasis};
		display: flex;
		button {
			height: 100%;
		}
	`;
};

export const modifyFilterSelectTheme = (
	selectTheme: DeepPartial<ComponentSelect>,
): DeepPartial<ComponentSelect> => {
	return mergeDeep(
		{
			shared: {
				width: undefined,
				button: {
					marginTop: '0',
				},
			},
		},
		selectTheme,
	);
};
