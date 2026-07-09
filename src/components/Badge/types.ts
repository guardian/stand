import { 
	type ComponentBadge,
	componentBadge,
} from '../../styleD/build/typescript/component/badge';

import type { DefaultProps } from '../../util/types';
import type { BadgeTheme } from './styles';

export type BadgeColors = keyof ComponentBadge['color'];
export type BadgeSizes = keyof ComponentBadge['size'];

export const badgeColors: BadgeColors[] = Object.keys(componentBadge.color);
export const badgeSizes: BadgeSizes[] = Object.keys(componentBadge.size);

export interface BadgeProps extends DefaultProps<BadgeTheme> {
	/**
	 * Size variant of the badge
	 */
	size?: BadgeSizes;
	/**
	 * Color variant of the badge
	 */
	color?: BadgeColors;
};
