import type { DefaultProps } from '../../util/types';
import type { TooltipTheme } from './styles';

export type TooltipProps = DefaultProps<TooltipTheme> & {
	message?: string;
};
