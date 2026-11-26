import { css } from '@emotion/react';
import { component } from '../../terrazzo/build/stand';
import type { DeepPartial, Prettify } from '../../util/types';
import type { IconProps } from './types';

export type IconTheme = Prettify<typeof component.icon>;
export type PartialIconTheme = Prettify<DeepPartial<IconTheme>>;

export const defaultIconTheme: IconTheme = component.icon;

export const IconStyles = (
	theme: IconTheme,
	{
		size,
		fill,
		mode,
	}: Required<Pick<IconProps, 'size'>> &
		Pick<IconProps, 'fill'> & {
			mode: 'text' | 'svg';
		},
) => css`
	display: inline-flex;
	font-size: ${theme[size].size};
	user-select: none;
	${fill ? `color: ${fill};` : ''}

	${
		mode === 'svg'
			? `
		& > svg {
			width: ${theme[size].size};
			height: ${theme[size].size};
            ${fill ? `fill: ${fill};` : ''}
		}
	`
			: ''
	}
`;
