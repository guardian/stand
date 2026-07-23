import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import {
	componentSearchInput,
	type ComponentSearchInput,
} from '../../styleD/build/typescript/component/searchInput';
import type { DeepPartial, Prettify } from '../../util/types';

export type SearchInputTheme = Prettify<ComponentSearchInput>;
export type PartialSearchInputTheme = Prettify<DeepPartial<SearchInputTheme>>;
export const defaultSearchInputTheme: SearchInputTheme = componentSearchInput;

export const searchInputStyles = (
	theme: SearchInputTheme,
): SerializedStyles => {
	return css`
		background-color: ${theme.color.background};
		color: ${theme.color.text};
	`;
};
