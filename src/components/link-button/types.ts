import type { LinkProps as RACLinkProps } from 'react-aria-components';
import type { DefaultProps } from '../../util/types';
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
}
