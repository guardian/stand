import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentUserMenu } from '../../styleD/build/typescript/component/userMenu';
import { componentUserMenu } from '../../styleD/build/typescript/component/userMenu';
import { mergeDeep } from '../../util/mergeDeep';
import type { DeepPartial } from '../../util/types';

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

export const radioGroupLabelStyles = (
	partialTheme: DeepPartial<ComponentUserMenu> = {},
): SerializedStyles => {
	const { label } = mergeDeep(componentUserMenu, partialTheme);

	return css`
		font-weight: ${label.fontWeight};
		font-size: ${label.fontSize};
		text-align: ${label.textAlign};
		padding-left: ${label.paddingLeft};
		padding-right: ${label.paddingRight};
		padding-top: ${label.paddingTop};
		padding-bottom: ${label.paddingBottom};
	`;
};

export const toggleButtonRowsGroupStyles = (
	partialTheme: DeepPartial<ComponentUserMenu> = {},
): SerializedStyles => {
	const { toggleButton } = mergeDeep(componentUserMenu, partialTheme);
	return css`
		display: flex;
		flex-direction: row;
		justify-content: space-between;
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
		background-color: ${toggleButton.baseBackgroundColor};

		&[data-disabled] {
			background-color: ${toggleButton.disabledBackgroundColor};
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
