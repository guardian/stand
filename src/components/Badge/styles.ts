import { css, type SerializedStyles } from '@emotion/react';
import { component } from '../../terrazzo/build/stand';
import type { DeepPartial, Prettify } from '../../util/types';
import { convertTypographyToCssString } from '../../utils';
import type { BadgeProps } from './types';

export type BadgeTheme = Prettify<
	Pick<typeof component.badge, 'size' | 'color'>
>;
export type PartialBadgeTheme = Prettify<DeepPartial<BadgeTheme>>;
export const defaultBadgeTheme: BadgeTheme = component.badge;

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
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding-top: ${padding.top};
		padding-right: ${padding.right};
		padding-bottom: ${padding.bottom};
		padding-left: ${padding.left};
		${convertTypographyToCssString(typography)}
		color: ${colorVariant.color};
		background-color: ${colorVariant.background};
	`;
};
