import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import {
	componentTemplateComponent,
	type ComponentTemplateComponent,
} from '../../styleD/build/typescript/component/templateComponent';
import type { Prettify } from '../../util/types';

export type TemplateComponentTheme = Prettify<ComponentTemplateComponent>;
export const defaultTemplateComponentTheme: TemplateComponentTheme =
	componentTemplateComponent;

export const templateComponentStyles = (
	theme: TemplateComponentTheme,
): SerializedStyles => {
	return css`
		background-color: ${theme.color.background};
		color: ${theme.color.text};
	`;
};
