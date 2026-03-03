import type { DefaultProps } from '../../util/types';
import type { MenuTheme } from './styles';

export interface MenuProps extends DefaultProps<MenuTheme> {
	/**
	 * TODO: Add component-specific props here
	 */
	children?: React.ReactNode;
}
