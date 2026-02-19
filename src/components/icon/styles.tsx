import { css } from '@emotion/react';
import type { ComponentIcon } from '../../styleD/build/typescript/component/icon';
import { componentIcon } from '../../styleD/build/typescript/component/icon';
import type { Prettify } from '../../util/types';
import type { IconProps } from './types';

export type IconTheme = Prettify<ComponentIcon>;

export const defaultIconTheme: IconTheme = componentIcon;

export const iconStyles = (
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
	display: ${theme.shared.display};
	font-size: ${theme[size].size};
	user-select: ${theme.shared['user-select']};
	${fill ? `color: ${fill};` : ''}

	${mode === 'svg'
		? `
		& > svg {
			width: ${theme[size].size};
			height: ${theme[size].size};
            ${fill ? `fill: ${fill};` : ''}
		}
	`
		: ''}
`;
