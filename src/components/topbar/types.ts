import type { Breakpoint } from '../../styleD/utils/semantic/mq';
import type { DefaultPropsWithChildren } from '../../util/types';
import type { TopBarTheme } from './styles';

export type TopBarProps = DefaultPropsWithChildren<TopBarTheme> & {
	/**
	 * Will collapse the designated section of the top bar below the specified breakpoint. For example, if `toolName` is set to `lg`, the section will collapse at the `md` breakpoint and below (i.e. on smaller screens).
	 */
	collapseBelow?: {
		toolName?: Breakpoint;
		containerLeft?: Breakpoint;
	};
};
