import type { Breakpoint } from '../../terrazzo/utils/mq';
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
	/**
	 * Distance in pixels between the collapsed navigation popover and its trigger.
	 * Default: 1
	 */
	offset?: number;
	/**
	 * Minimum distance in pixels between the collapsed navigation popover and its container.
	 * Default: 0
	 */
	containerPadding?: number;
	/**
	 * Accessible label for the main navigation landmarks.
	 * Default: 'Top bar'
	 */
	navAriaLabel?: string;
};
