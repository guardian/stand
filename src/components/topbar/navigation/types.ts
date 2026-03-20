import type { ReactNode } from 'react';
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
	 * Menu sections and items to render in the dropdown menu - only children of type MenuSection and MenuItem will be rendered.
	 * `href` and `onPress` will be ignored if this prop is supplied.
	 */
	menuChildren?: ReactNode;
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
