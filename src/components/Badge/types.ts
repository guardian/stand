import { component } from '../../terrazzo/build/stand';
import type { DefaultPropsWithChildren } from '../../util/types';
import type { BadgeTheme } from './styles';

export type BadgeColors = keyof typeof component.badge.color;
export type BadgeSizes = keyof typeof component.badge.size;
type BadgeWeights = keyof typeof component.badge.size.md.weight;

export const badgeColors = Object.keys(component.badge.color) as BadgeColors[];
export const badgeSizes = Object.keys(component.badge.size) as BadgeSizes[];

export interface BadgeProps extends DefaultPropsWithChildren<BadgeTheme> {
	/**
	 * Size variant of the badge
	 */
	size?: BadgeSizes;
	/**
	 * Color variant of the badge
	 */
	color?: BadgeColors;
	/**
	 * The weight of the badge can affect both size and color CSS values
	 */
	weight?: BadgeWeights;
}
