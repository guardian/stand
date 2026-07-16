import type { DefaultPropsWithChildren } from '../../util/types';
import type { TooltipTheme } from './styles';

export type TooltipProps = DefaultPropsWithChildren<TooltipTheme> & {
	placement?: 'top' | 'bottom' | 'start' | 'end';
};
