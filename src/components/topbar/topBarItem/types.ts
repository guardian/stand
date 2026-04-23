import type { DefaultProps } from '../../../util/types';
import type { TopBarItemTheme } from './styles';

export interface TopBarItemProps
	extends DefaultProps<TopBarItemTheme>, React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode;
	/**
	 * Determines the alignment of the item within the top bar
	 */
	alignment?: 'left' | 'right';
	/**
	 * Determines how much width the item takes up in the top bar, defaults to `'md'`
	 */
	size?: 'sm' | 'md' | 'lg';
	/**
	 * This is an internal prop used to determine if the item is within an open menu, which affects the styling of the item.
	 * It is not intended to be set by consumers of the component.
	 */
	_menuOpen?: boolean;
}
