import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import {
	componentFavicon as componentTemplateComponent,
	type ComponentFavicon as ComponentTemplateComponent,
} from '../../styleD/build/typescript/component/favicon';
import type { DeepPartial, Prettify } from '../../util/types';

export type TemplateComponentTheme = Prettify<ComponentTemplateComponent>;
export type PartialTemplateComponentTheme = Prettify<
	DeepPartial<TemplateComponentTheme>
>;
export const defaultTemplateComponentTheme: TemplateComponentTheme =
	componentTemplateComponent;

export const templateComponentStyles = (
	theme: TemplateComponentTheme,
): SerializedStyles => {
	return css`
		background-color: ${theme.color.background};
	`;
};
