import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentSelect } from '../../styleD/build/typescript/component/select';
import { componentSelect } from '../../styleD/build/typescript/component/select';
import type { DeepPartial, Prettify } from '../../util/types';
import { convertTypographyToEmotionStringStyle } from '../../utils';

export type SelectTheme = Prettify<ComponentSelect>;
export type PartialSelectTheme = DeepPartial<SelectTheme>;

export const defaultSelectTheme: SelectTheme = componentSelect;

export const selectStyles = (theme: SelectTheme): SerializedStyles => {
	return css`
		display: ${theme.shared.display};
		flex-direction: ${theme.shared.flexDirection};
		gap: ${theme.shared.gap};

		max-width: ${theme.shared['max-width']};
		width: ${theme.shared.width};
	`;
};

export const popoverStyles = (theme: SelectTheme): SerializedStyles => {
	return css`
		max-width: ${theme.shared['max-width']};
		width: ${theme.shared.width};
	`;
};

export const listBoxItemStyles = (theme: SelectTheme): SerializedStyles => {
	return css`
		padding-left: ${theme.option.paddingLeft};
		padding-right: ${theme.option.paddingRight};
		padding-top: ${theme.option.paddingTop};
		padding-bottom: ${theme.option.paddingBottom};

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
			outline: ${theme.option.focused.outline};
			outline-offset: ${theme.option.focused['outline-offset']};
			background-color: ${theme.option.focused.backgroundColor};
		}

		/* Must be last to take precedence */
		&[data-pressed] {
			background-color: ${theme.shared.pressed.backgroundColor};
		}
	`;
};

export const listBoxStyles = (theme: SelectTheme): SerializedStyles => {
	return css`
		${convertTypographyToEmotionStringStyle(theme.listBox.typography)}
		background-color: ${theme.listBox.backgroundColor};
		border: ${theme.listBox.border};
		box-shadow: ${theme.listBox.shadow};
		max-width: ${theme.shared['max-width']};
		width: ${theme.shared.width};
		outline: none;
	`;
};

export const labelStyles = (theme: SelectTheme): SerializedStyles => {
	return css`
		color: ${theme.label.color};
		${convertTypographyToEmotionStringStyle(theme.label.typography)};
	`;
};

export const helpTextStyles = (theme: SelectTheme): SerializedStyles => {
	return css`
		color: ${theme.helpText.color};
		${convertTypographyToEmotionStringStyle(theme.helpText.typography)}
	`;
};

export const buttonStyles = (
	theme: SelectTheme,
	isInvalid?: boolean,
): SerializedStyles => {
	return css`
		display: ${theme.button.display};
		justify-content: ${theme.button.justifyContent};
		align-items: ${theme.button.alignItems};
		background-color: ${theme.button.backgroundColor};
		border: ${theme.button.border};
		border-radius: ${theme.button.borderRadius};
		height: ${theme.button.height};
		padding-left: ${theme.button.paddingLeft};
		padding-right: ${theme.button.paddingRight};
		margin-top: ${theme.button.marginTop};
		${convertTypographyToEmotionStringStyle(theme.button.typography)}
		color: ${theme.button.color};

		&[data-hovered] {
			background-color: ${theme.shared.hover.backgroundColor};
		}

		&[data-pressed] {
			background-color: ${theme.shared.pressed.backgroundColor};
		}

		&[data-focus-visible] {
			outline: ${theme.button.focused.outline};
			outline-offset: ${theme.button.focused['outline-offset']};
		}

		&[data-disabled] {
			cursor: ${theme.button.disabled.cursor};
			background-color: ${theme.button.disabled.backgroundColor};
			color: ${theme.button.disabled.color};
			border: ${theme.button.disabled.border};
		}

		${isInvalid ? `border: ${theme.button.error.border};` : ``}
	`;
};
