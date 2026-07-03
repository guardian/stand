import type { DefaultPropsWithChildren } from '../../util/types';
import type { ButtonTheme } from '../Button/styles';
import type { ButtonGroupTheme } from './styles';

export type ButtonGroupProps = DefaultPropsWithChildren<ButtonGroupTheme> & {
	/**
	 * Size of buttons within the group
	 */
	size?: keyof Omit<ButtonTheme['primary'], 'shared'>;
};
