import { css, type SerializedStyles } from '@emotion/react';
import {
	componentBadge,
	type ComponentBadge,
} from '../../styleD/build/typescript/component/badge';
import { convertTypographyToEmotionStringStyle } from '../../styleD/utils/semantic/typography';
import type { DeepPartial, Prettify } from '../../util/types';
import type { BadgeProps } from './types';

export type BadgeTheme = Prettify<
	Pick<ComponentBadge, 'size' | 'color' | 'weight'>
>;
export type PartialBadgeTheme = Prettify<DeepPartial<BadgeTheme>>;
export const defaultBadgeTheme: BadgeTheme = componentBadge;

export const badgeStyles = (
	theme: BadgeTheme,
	{
		size = 'md',
		color = 'green',
		weight = 'strong',
	}: Required<Pick<BadgeProps, 'size' | 'color' | 'weight'>>,
): SerializedStyles => {
	const sizeVariant = theme.size[size];
	const padding = sizeVariant.padding;
	const typography = sizeVariant.weight[weight].typography;
	const colorVariant = theme.color[color].weight[weight];

	return css`
		display: ${theme.shared.display};
		align-items: ${theme.shared.alignItems};
		justify-content: ${theme.shared.justifyContent};
		padding-top: ${padding.top};
		padding-right: ${padding.right};
		padding-bottom: ${padding.bottom};
		padding-left: ${padding.left};
		${convertTypographyToEmotionStringStyle(typography)}
		color: ${colorVariant.color};
		background-color: ${colorVariant.background};
	`;
};
