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
	alignment: 'left' | 'right',
	{ size }: Required<Pick<TopBarItemProps, 'size'>>,
	_menuOpen?: boolean,
): SerializedStyles => {
	return css`
		display: flex;
		align-items: center;
		height: var(--component-top-bar-item-height);
		padding: var(--component-top-bar-item-${size}-padding-top)
			var(--component-top-bar-item-${size}-padding-right)
			var(--component-top-bar-item-${size}-padding-bottom)
			var(--component-top-bar-item-${size}-padding-left);

		${
			_menuOpen
				? css`
						height: 64px;
						justify-content: center;
						border-bottom: var(--component-top-bar-item-border);
					`
				: css`
						${
							alignment === 'left' ? 'border-right' : 'border-left'
						}: var(--component-top-bar-item-border);
						${alignment === 'right' && 'margin-left: auto'};
					`
		}
	`;
};
