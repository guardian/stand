import type { DefaultProps } from '../../../util/types';
import type { TopBarItemTheme } from './styles';

export interface TopBarItemProps extends DefaultProps<TopBarItemTheme> {
	children?: React.ReactNode;
	/**
	 * Determines the alignment of the item within the top bar
	 */
	alignment?: 'left' | 'right';
}
