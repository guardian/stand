import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import {
	type Components,
	components as componentsTheme,
} from '../../styleD/build/typescript/components';
import { type DeepPartial, mergeDeep } from '../util';


export const userMenuHeadingStyles = (
	partialTheme: DeepPartial<Components['userMenu']> = {},
): SerializedStyles => {
	const theme = mergeDeep(componentsTheme['userMenu'], partialTheme);

	return css`
		background-color: ${theme.heading.backgroundColor};
		font-weight: ${theme.heading.fontWeight};
		padding: ${theme.heading.padding};
	`
}
