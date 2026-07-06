import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import {
	componentButtonGroup,
	type ComponentButtonGroup,
} from '../../styleD/build/typescript/component/buttonGroup';
import type { DeepPartial, Prettify } from '../../util/types';
import { from } from '../../utils';

export type ButtonGroupTheme = Prettify<ComponentButtonGroup>;
export type PartialButtonGroupTheme = Prettify<DeepPartial<ButtonGroupTheme>>;
export const defaultButtonGroupTheme: ButtonGroupTheme = componentButtonGroup;

export const buttonGroupStyles = (
	theme: ButtonGroupTheme,
): SerializedStyles => {
	return css`
		display: ${theme.display};
		flex-direction: ${theme.flexDirection};
		flex-wrap: ${theme.flexWrap};
		gap: ${theme.gap};
		justify-content: ${theme.justifyContent};
		${from.md} {
			flex-direction: ${theme.md.flexDirection};
		}
	`;
};
