import { css, type SerializedStyles } from '@emotion/react';
import {
	componentBadge,
	type ComponentBadge,
} from '../../styleD/build/typescript/component/badge';
import { convertTypographyToEmotionStringStyle } from '../../styleD/utils/semantic/typography';
import type { DeepPartial, Prettify } from '../../util/types';
import type { BadgeProps } from './types';

export type BadgeTheme = Prettify<Pick<ComponentBadge, 'size' | 'color'>>;
export type PartialBadgeTheme = Prettify<DeepPartial<BadgeTheme>>;
export const defaultBadgeTheme: BadgeTheme = componentBadge;

export const badgeStyles = (
	theme: BadgeTheme,
	{ size, color }: Required<Pick<BadgeProps, 'size' | 'color'>>,
): SerializedStyles => {
	const sizeVariant = theme.size[size];
	const colorVariant = theme.color[color];

	return css`
		display: ${sizeVariant.display};
		align-items: ${sizeVariant.alignItems};
		justify-content: ${sizeVariant.justifyContent};
		padding-top: ${sizeVariant.padding.top};
		padding-right: ${sizeVariant.padding.right};
		padding-bottom: ${sizeVariant.padding.bottom};
		padding-left: ${sizeVariant.padding.left};
		${convertTypographyToEmotionStringStyle(sizeVariant.typography)}
		color: ${colorVariant.color};
		background-color: ${colorVariant.background};
	`;
};
