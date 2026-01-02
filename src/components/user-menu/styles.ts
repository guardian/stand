import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentUserMenu } from '../../styleD/build/typescript/component/userMenu';
import { componentUserMenu } from '../../styleD/build/typescript/component/userMenu';
import { type DeepPartial, mergeDeep } from '../util';

export const userMenuStyles = (
	partialTheme: DeepPartial<ComponentUserMenu> = {},
): SerializedStyles => {
	const { container } = mergeDeep(componentUserMenu, partialTheme);

	return css`
		background-color: ${container.backgroundColor};
		display: flex;
		flex-direction: column;
		width: ${container.width};
		padding-left: ${container.paddingX};
		padding-right: ${container.paddingX};
		padding-top: ${container.paddingY};
		padding-bottom: ${container.paddingY};
	`;
};

export const userMenuHeadingStyles = (
	partialTheme: DeepPartial<ComponentUserMenu> = {},
): SerializedStyles => {
	const { heading } = mergeDeep(componentUserMenu, partialTheme);

	return css`
		font-weight: ${heading.fontWeight};
		font-size: ${heading.fontSize};
		text-align: ${heading.textAlign};
		padding-left: ${heading.paddingLeft};
		padding-right: ${heading.paddingRight};
		padding-top: ${heading.paddingTop};
		padding-bottom: ${heading.paddingBottom};
	`;
};

export const toggleButtonStackedGroupStyles = (
	partialTheme: DeepPartial<ComponentUserMenu> = {},
): SerializedStyles => {
	const { toggleButton } = mergeDeep(componentUserMenu, partialTheme);
	return css`
		display: flex;
		flex-direction: column;
		gap: ${toggleButton.gap};
	`;
};

export const toggleButtonRowsGroupStyles = (
	partialTheme: DeepPartial<ComponentUserMenu> = {},
): SerializedStyles => {
	const { toggleButton } = mergeDeep(componentUserMenu, partialTheme);
	return css`
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: ${toggleButton.gap};
	`;
};

export const toggleButtonStyles = (
	partialTheme: DeepPartial<ComponentUserMenu> = {},
): SerializedStyles => {
	const { toggleButton } = mergeDeep(componentUserMenu, partialTheme);

	return css`
		border-radius: 0;
		border-style: solid;
		border-color: ${toggleButton.baseBorderColor};
		background-color: ${toggleButton.basebackgroundColor};

		&[data-disabled] {
			background-color: ${toggleButton.disabledbackgroundColor};
		}

		&[data-focus-visible] {
			outline-offset: 1px;
			outline: 2px solid blue;
		}

		&[data-selected] {
			border-color: ${toggleButton.selectedBorderColor};
		}
	`;
};
