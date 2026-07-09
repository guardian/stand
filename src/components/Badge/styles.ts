import { 
	css,
	type SerializedStyles,
} from '@emotion/react';

import {
	componentBadge,
	type ComponentBadge,
} from '../../styleD/build/typescript/component/badge';

import { convertTypographyToEmotionStringStyle } from '../../styleD/utils/semantic/typography';

import type { DeepPartial, Prettify } from '../../util/types';
import type { BadgeProps } from './types';

export type BadgeTheme = Prettify<ComponentBadge>;
export type PartialBadgeTheme = Prettify<DeepPartial<BadgeTheme>>;
export const defaultBadgeTheme: BadgeTheme = componentBadge;

export const badgeStyles = (
	theme: BadgeTheme,
	{ size, color }: Required<Pick<BadgeProps, 'size' | 'color'>>,
): SerializedStyles => {
	return css`
		display: ${theme[size].display};
		align-items: ${theme[size].alignItems};
		justify-content: ${theme[size].justifyContent};
		padding-top: ${theme[size].padding.top};
		padding-right: ${theme[size].padding.right};
		padding-bottom: ${theme[size].padding.bottom};
		padding-left: ${theme[size].padding.left};
		${convertTypographyToEmotionStringStyle(theme[size].typography)}
		color: ${theme.color[color].color};
		background-color: ${theme.color[color].background};
	`;
};
