import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentTopBar } from '../../../styleD/build/typescript/component/TopBar';
import { componentTopBar } from '../../../styleD/build/typescript/component/TopBar';
import type { Prettify } from '../../../util/types';

export type TopBarItemTheme = Prettify<ComponentTopBar['Item']>;

export const defaultTopBarItemTheme: TopBarItemTheme = componentTopBar.Item;

export const topBarItemStyles = (
	theme: TopBarItemTheme,
	alignment: 'left' | 'right',
): SerializedStyles => {
	return css`
		${alignment === 'left' ? 'border-right' : 'border-left'}: ${theme.border};
	`;
};
