import type { ButtonProps as RACButtonProps } from 'react-aria-components';
import type { DefaultProps } from '../../util/types';
import type { IconProps } from '../icon/types';
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
	/**
	 * Icon to be rendered within the button. Passed to the Icon component, so can be either a string (for material symbols) or an SVG element.
	 */
	icon?: IconProps['symbol'] | Exclude<IconProps['children'], string>;
}
