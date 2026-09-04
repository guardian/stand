import { componentBadge } from '../../styleD/build/typescript/component/badge';
import type { DefaultPropsWithChildren } from '../../util/types';
import type { BadgeTheme } from './styles';

export type BadgeColors = keyof typeof componentBadge.color;
export type BadgeSizes = keyof typeof componentBadge.size;
type BadgeWeights = keyof typeof componentBadge.size.md.weight;

export const badgeColors = Object.keys(componentBadge.color) as BadgeColors[];
export const badgeSizes = Object.keys(componentBadge.size) as BadgeSizes[];

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
