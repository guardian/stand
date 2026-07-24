import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentSearchInput } from '../../styleD/build/typescript/component/searchInput';
import { componentSearchInput } from '../../styleD/build/typescript/component/searchInput';
import type { Prettify } from '../../util/types';
import { convertTypographyToEmotionStringStyle } from '../../utils';
import type { SearchInputProps } from './types';

export type SearchInputTheme = Prettify<ComponentSearchInput>;

export const defaultSearchInputTheme: SearchInputTheme = componentSearchInput;

export const searchInputStyles = (
	theme: SearchInputTheme,
	{ size, isInvalid }: Required<Pick<SearchInputProps, 'size' | 'isInvalid'>>,
): SerializedStyles => {
	return css`
		${convertTypographyToEmotionStringStyle(theme[size].typography)}
		background-color: ${theme.shared.backgroundColor};
		border-radius: ${theme.shared.borderRadius};
		border: ${theme.shared.border};
		color: ${theme.shared.color};
		cursor: ${theme.shared.cursor};
		height: ${theme[size].height};
		margin-top: ${theme.shared.marginTop};
		padding: ${theme.shared.padding.top} ${theme.shared.padding.right}
			${theme.shared.padding.bottom} ${theme.shared.padding.left};

		::placeholder {
			color: ${theme.shared.placeholderColor};
		}

		&[data-disabled] {
			background-color: ${theme.shared.disabled.backgroundColor};
			border: ${theme.shared.disabled.border};
			color: ${theme.shared.disabled.color};
			cursor: ${theme.shared.disabled.cursor};

			::placeholder {
				color: ${theme.shared.disabled.color};
			}
		}

		&[data-focused] {
			outline: ${theme.shared.focused.outline};
		}

		${
			isInvalid &&
			css`
				border: ${theme.shared.error.border};
			`
		}
	`;
};
