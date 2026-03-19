import type { DefaultProps } from '../../../util/types';
import type { TopBarItemTheme } from './styles';

export interface TopBarItemProps extends DefaultProps<TopBarItemTheme> {
	children?: React.ReactNode;
	/**
	 * Determines the alignment of the item within the top bar
	 */
	alignment?: 'left' | 'right';
	/**
	 * Determines how much width the item takes up in the top bar, defaults to `'md'`
	 */
	size?: 'sm' | 'md' | 'lg';
}
