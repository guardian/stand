import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentTopBar } from '../../../styleD/build/typescript/component/TopBar';
import { componentTopBar } from '../../../styleD/build/typescript/component/TopBar';
import type { Prettify } from '../../../util/types';
import type { TopBarItemProps } from './types';

export type TopBarItemTheme = Prettify<ComponentTopBar['Item']>;

export const defaultTopBarItemTheme: TopBarItemTheme = componentTopBar.Item;

export const topBarItemStyles = (
	theme: TopBarItemTheme,
	alignment: 'left' | 'right',
	{ size }: Required<Pick<TopBarItemProps, 'size'>>,
): SerializedStyles => {
	return css`
		display: ${theme.display};
		align-items: ${theme['align-items']};
		height: ${theme.height};
		padding: ${theme[size].padding.top} ${theme[size].padding.right}
			${theme[size].padding.bottom} ${theme[size].padding.left};
		${alignment === 'left' ? 'border-right' : 'border-left'}: ${theme.border};
		${alignment === 'right' && 'margin-left: auto'};
	`;
};
