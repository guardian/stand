import type { DefaultProps } from '../../util/types';
import type { BadgeTheme } from './styles';

export type BadgeProps = DefaultProps<BadgeTheme> & {
	message?: string;
};
