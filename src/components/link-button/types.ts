import type { LinkProps as RACLinkProps } from 'react-aria-components';
import type { DefaultProps } from '../../util/types';
import type { IconProps } from '../icon/types';
import type { LinkButtonTheme } from './styles';

export interface LinkButtonProps
	extends
		DefaultProps<LinkButtonTheme, RACLinkProps['className']>,
		RACLinkProps {
	/**
	 * Size variant of the link button
	 */
	size?: keyof Omit<LinkButtonTheme['emphasised-primary'], 'shared'>;
	/**
	 * Variant of the button
	 */
	variant?: keyof Omit<LinkButtonTheme, 'shared'>;
	/**
	 * Icon to be rendered within the button. Passed to the Icon component, so can be either a string (for material symbols) or an SVG element.
	 */
	icon?: IconProps['symbol'] | Exclude<IconProps['children'], string>;
}
