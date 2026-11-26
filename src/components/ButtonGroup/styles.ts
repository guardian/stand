import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { component } from '../../terrazzo/build/stand';
import type { DeepPartial, Prettify } from '../../util/types';
import { from } from '../../utils';

export type ButtonGroupTheme = Prettify<typeof component.buttonGroup>;
export type PartialButtonGroupTheme = Prettify<DeepPartial<ButtonGroupTheme>>;
export const defaultButtonGroupTheme: ButtonGroupTheme = component.buttonGroup;

export const buttonGroupStyles = (
	theme: ButtonGroupTheme,
): SerializedStyles => {
	return css`
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		gap: ${theme.gap};
		width: ${theme.width};
		justify-content: flex-start;
		${from.md} {
			flex-direction: row;
		}
	`;
};
