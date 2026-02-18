import type { ButtonProps as RACButtonProps } from 'react-aria-components';
import type { DefaultProps } from '../../util/types';
import type { ButtonTheme } from './styles';

export interface ButtonProps
	extends
		DefaultProps<ButtonTheme, RACButtonProps['className']>,
		RACButtonProps {
	/**
	 * Size variant of the button
	 */
	size?: keyof Omit<ButtonTheme['emphasised-primary'], 'shared'>;
	/**
	 * Variant of the button
	 */
	variant?: keyof Omit<ButtonTheme, 'shared'>;
}
