import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentTopBar } from '../../../styleD/build/typescript/component/topBar';
import { componentTopBar } from '../../../styleD/build/typescript/component/topBar';
import type { DeepPartial, Prettify } from '../../../util/types';
import type { TopBarItemProps } from './types';

export type TopBarItemTheme = Prettify<ComponentTopBar['item']>;
export type PartialTopBarItemTheme = Prettify<DeepPartial<TopBarItemTheme>>;
export const defaultTopBarItemTheme: TopBarItemTheme = componentTopBar.item;

export const topBarItemStyles = (
	theme: TopBarItemTheme,
	alignment: 'left' | 'right',
	{ size }: Required<Pick<TopBarItemProps, 'size'>>,
	_menuOpen?: boolean,
): SerializedStyles => {
	return css`
		display: ${theme.display};
		align-items: ${theme.alignItems};
		height: ${theme.height};
		padding: ${theme[size].padding.top} ${theme[size].padding.right}
			${theme[size].padding.bottom} ${theme[size].padding.left};

		${
			_menuOpen
				? css`
						height: 64px;
						justify-content: center;
						border-bottom: ${theme.border};
					`
				: css`
						${
							alignment === 'left' ? 'border-right' : 'border-left'
						}: ${theme.border};
						${alignment === 'right' && 'margin-left: auto'};
					`
		}
	`;
};
