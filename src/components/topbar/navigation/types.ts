import type { PressEvent } from 'react-aria-components';
import type { DefaultProps } from '../../../util/types';
import type { IconProps } from '../../icon/types';
import type { TopBarNavigationTheme } from './styles';

export interface TopBarNavigationProps extends DefaultProps<TopBarNavigationTheme> {
	/**
	 * Text to display in navigation
	 */
	text: string;
	/**
	 * Size of the text and icons
	 */
	size?: 'md' | 'sm';
	/**
	 * Whether the component is the currently selected navigation
	 */
	isSelected?: boolean;
	/**
	 * Icon to display in navigation
	 */
	icon?: IconProps['symbol'] | Exclude<IconProps['children'], string>;

	/**
	 * Whether the navigation expands more to show a menu
	 */
	expandsMore?: boolean;
	/**
	 * Link to navigate to
	 */
	href?: string;
	/**
	 * Handler for navigation on press
	 */
	onPress?: (e: PressEvent) => void;
	/**
	 * Whether the navigation is disabled
	 */
	isDisabled?: boolean;
}
