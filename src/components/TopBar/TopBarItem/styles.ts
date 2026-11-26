import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { component } from '../../../terrazzo/build/stand';
import type { DeepPartial, Prettify } from '../../../util/types';
import type { TopBarItemProps } from './types';

export type TopBarItemTheme = Prettify<(typeof component.topBar)['item']>;
export type PartialTopBarItemTheme = Prettify<DeepPartial<TopBarItemTheme>>;
export const defaultTopBarItemTheme: TopBarItemTheme = component.topBar.item;

export const topBarItemStyles = (
	theme: TopBarItemTheme,
	alignment: 'left' | 'right',
	{ size }: Required<Pick<TopBarItemProps, 'size'>>,
	_menuOpen?: boolean,
): SerializedStyles => {
	return css`
		display: flex;
		align-items: center;
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
