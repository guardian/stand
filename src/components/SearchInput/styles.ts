import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { component } from '../../terrazzo/build/stand';
import type { DeepPartial, Prettify } from '../../util/types';
import { convertTypographyToCssString } from '../../utils';
import type { SearchInputProps } from './types';

export type SearchInputTheme = Prettify<typeof component.searchInput>;
export type PartialSearchInputTheme = Prettify<
	DeepPartial<typeof component.searchInput>
>;

export const defaultSearchInputTheme: SearchInputTheme = component.searchInput;

export const searchInputStyles = (
	theme: SearchInputTheme,
	{ size, isInvalid }: Required<Pick<SearchInputProps, 'size' | 'isInvalid'>>,
): SerializedStyles => {
	return css`
		${convertTypographyToCssString(theme[size].typography)}
		background-color: ${theme.shared.backgroundColor};
		border-radius: ${theme.shared.borderRadius};
		border: ${theme.shared.border};
		color: ${theme.shared.color};
		cursor: text;
		height: ${theme[size].height};
		margin-top: ${theme.shared.marginTop};
		padding: ${theme.shared.padding.top} ${theme.shared.padding.right}
			${theme.shared.padding.bottom} ${theme.shared.padding.left};

		display: inline-flex;
		justify-content: flex-start;
		align-items: center;

		::placeholder {
			color: ${theme.shared.placeholderColor};
		}

		& input {
			${convertTypographyToCssString(theme[size].typography)}
			background-color: transparent;
			border-radius: 0;
			border: 0;
			color: ${theme.shared.color};
			cursor: text;
			height: ${theme[size].height};
			margin: 0;
			padding: 0;
			width: 100%;

			::placeholder {
				color: ${theme.shared.placeholderColor};
			}

			&[data-disabled] {
				color: ${theme.shared.disabled.color};
				cursor: not-allowed;

				::placeholder {
					color: ${theme.shared.disabled.color};
				}
			}

			&[data-focused] {
				outline: none;
			}
		}

		& .search-icon {
			margin-right: 8px;
		}

		&:focus-within {
			outline: ${theme.shared.focused.outline};
		}

		${
			isInvalid &&
			css`
				border: ${theme.shared.error.border};
			`
		}

		&:has(:disabled) {
			background-color: ${theme.shared.disabled.backgroundColor};
			border: ${theme.shared.disabled.border};
			color: ${theme.shared.disabled.color};
			cursor: not-allowed;

			::placeholder {
				color: ${theme.shared.disabled.color};
			}

			& svg {
				stroke: ${theme.shared.disabled.color};
			}
		}
	`;
};
