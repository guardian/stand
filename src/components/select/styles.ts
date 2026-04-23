import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentSelect } from '../../styleD/build/typescript/component/select';
import { componentSelect } from '../../styleD/build/typescript/component/select';
import type { DeepPartial, Prettify } from '../../util/types';
import { convertTypographyToEmotionStringStyle } from '../../utils';

export type SelectTheme = Prettify<ComponentSelect>;
export type PartialSelectTheme = Prettify<DeepPartial<SelectTheme>>;

export const defaultSelectTheme: SelectTheme = componentSelect;

export const popoverStyles = (theme: SelectTheme): SerializedStyles => {
	return css`
		width: ${theme.shared.width};
	`;
};

export const listBoxItemStyles = (theme: SelectTheme): SerializedStyles => {
	return css`
		padding-left: ${theme.shared.option.paddingLeft};
		padding-right: ${theme.shared.option.paddingRight};
		padding-top: ${theme.shared.option.paddingTop};
		padding-bottom: ${theme.shared.option.paddingBottom};

		&[data-hovered] {
			outline: ${theme.shared.hover.outline};
		}

		/* Hovering adds data-focused and the item stays focused after hovering away */
		&[data-focused] {
			background-color: ${theme.shared.hover.backgroundColor};
		}

		/* Override default browser focus behaviour */
		:focus-visible {
			outline: none;
		}

		&[data-focus-visible] {
			outline: ${theme.shared.option.focused.outline};
			outline-offset: ${theme.shared.option.focused['outline-offset']};
			background-color: ${theme.shared.option.focused.backgroundColor};
		}

		/* Must be last to take precedence */
		&[data-pressed] {
			background-color: ${theme.shared.pressed.backgroundColor};
		}
	`;
};

export const listBoxStyles = (theme: SelectTheme): SerializedStyles => {
	return css`
		${convertTypographyToEmotionStringStyle(theme.shared.listBox.typography)}
		background-color: ${theme.shared.listBox.backgroundColor};
		border: ${theme.shared.listBox.border};
		box-shadow: ${theme.shared.listBox.shadow};
		width: ${theme.shared.width};
		outline: none;
	`;
};

export const buttonStyles = (
	theme: SelectTheme,
	isInvalid?: boolean,
): SerializedStyles => {
	return css`
		display: ${theme.shared.button.display};
		justify-content: ${theme.shared.button.justifyContent};
		align-items: ${theme.shared.button.alignItems};
		background-color: ${theme.shared.button.backgroundColor};
		border: ${theme.shared.button.border};
		border-radius: ${theme.shared.button.borderRadius};
		height: ${theme.shared.button.height};
		padding-left: ${theme.shared.button.paddingLeft};
		padding-right: ${theme.shared.button.paddingRight};
		margin-top: ${theme.shared.button.marginTop};
		${convertTypographyToEmotionStringStyle(theme.shared.button.typography)}
		color: ${theme.shared.button.color};

		&[data-hovered] {
			background-color: ${theme.shared.hover.backgroundColor};
		}

		&[data-pressed] {
			background-color: ${theme.shared.pressed.backgroundColor};
		}

		&[data-focus-visible] {
			outline: ${theme.shared.button.focused.outline};
			outline-offset: ${theme.shared.button.focused['outline-offset']};
		}

		&[data-disabled] {
			cursor: ${theme.shared.button.disabled.cursor};
			background-color: ${theme.shared.button.disabled.backgroundColor};
			color: ${theme.shared.button.disabled.color};
			border: ${theme.shared.button.disabled.border};
		}

		${isInvalid ? `border: ${theme.shared.button.error.border};` : ``}
	`;
};
