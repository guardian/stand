import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentUserMenu } from '../../styleD/build/typescript/component/userMenu';
import  { componentUserMenu } from '../../styleD/build/typescript/component/userMenu';
import { type DeepPartial, mergeDeep } from '../util';

export const userMenuStyles = (
	partialTheme: DeepPartial<ComponentUserMenu> = {},
): SerializedStyles => {
	const theme = mergeDeep(componentUserMenu, partialTheme);

	return css`
		background-color: ${theme.backgroundColor};
		display: flex;
		flex-direction: column;
		width: 300px;
		padding: 5px;
	`;
};

export const userMenuHeadingStyles = (
	partialTheme: DeepPartial<ComponentUserMenu> = {},
): SerializedStyles => {
	const theme = mergeDeep(componentUserMenu, partialTheme);

	return css`
		font-weight: ${theme.heading.fontWeight};
		padding: ${theme.heading.padding};
	`;
};

export const toggleButtonStackedGroupStyles = (
	// _partialTheme: DeepPartial<ComponentUserMenu> = {},
): SerializedStyles => {
	// const theme = mergeDeep(componentsTheme['userMenu'], partialTheme);
	return css`
		display: flex;
		flex-direction: column;
		gap: 5px;
	`;
};

export const toggleButtonRowsGroupStyles = (
	// _partialTheme: DeepPartial<ComponentUserMenu> = {},
): SerializedStyles => {
	// const theme = mergeDeep(componentsTheme['userMenu'], partialTheme);
	return css`
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 5px;
	`;
};

export const toggleButtonStyles = (
	partialTheme: DeepPartial<ComponentUserMenu> = {},
): SerializedStyles => {
	const theme = mergeDeep(componentUserMenu, partialTheme);

	return css`
		border-radius: 0;
		border-style: solid;
		border-color: ${theme.toggleButton.baseBorderColor};
		background-color: ${theme.toggleButton.basebackgroundColor};

		&[data-disabled] {
			background-color: ${theme.toggleButton.disabledbackgroundColor};
		}

		&[data-focus-visible] {
			outline-offset: 1px;
			outline: 2px solid blue;
		}

		&[data-selected] {
			border-color: ${theme.toggleButton.selectedBorderColor};
		}
	`;
};
