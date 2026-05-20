import type { LinkProps as RACLinkProps } from 'react-aria-components';
import type { DefaultPropsWithChildren } from '../../util/types';
import type { TypographyVariant } from '../Typography/types';
import type { LinkTheme } from './styles';

export interface LinkProps
	extends
		Omit<RACLinkProps, 'children'>,
		DefaultPropsWithChildren<LinkTheme, RACLinkProps['className']> {
	/**
	 * to change the typography of the link, you can pass a variant from semanticTypography.
	 * By default, it is set to "body-sm".
	 */
	typography?: TypographyVariant;
}
