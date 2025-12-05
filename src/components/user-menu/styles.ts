import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import {
	type Components,
	components as componentsTheme,
} from '../../styleD/build/typescript/components';
import { type DeepPartial, mergeDeep } from '../util';

export const userMenuStyles = (
	partialTheme: DeepPartial<Components['userMenu']> = {},
): SerializedStyles => {
	const theme = mergeDeep(componentsTheme['userMenu'], partialTheme);

	return css`
		background-color: ${theme.backgroundColor};
		display: flex;
		flex-direction: column;
		width: 300px;
		padding: 5px;
	`;
};

export const userMenuHeadingStyles = (
	partialTheme: DeepPartial<Components['userMenu']> = {},
): SerializedStyles => {
	const theme = mergeDeep(componentsTheme['userMenu'], partialTheme);

	return css`
		font-weight: ${theme.heading.fontWeight};
		padding: ${theme.heading.padding};
	`;
};

export const toggleButtonGroupStyles = (
	partialTheme: DeepPartial<Components['userMenu']> = {},
): SerializedStyles => {
	const theme = mergeDeep(componentsTheme['userMenu'], partialTheme);

	return css`
		display: flex;
		flex-direction: column;
		gap: 5px;

		> button {
			border-radius: 0;
			background-color: ${theme.toggleButton.basebackgroundColor};

			&[data-disabled] {
				background-color: ${theme.toggleButton.disabledbackgroundColor};
			}

			&[data-focus-visible] {
				outline: 3px solid blue;
			}

			&[data-selected] {
				background-color: ${theme.toggleButton.selectedbackgroundColor};
			}
		}
	`;
};
