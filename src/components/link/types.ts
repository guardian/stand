import type { LinkProps as RACLinkProps } from 'react-aria-components';
import type { SemanticTypography } from '../../styleD/build/typescript/semantic/typography';
import type { DefaultProps } from '../../util/types';
import type { LinkTheme } from './styles';

export interface LinkProps
	extends
		Omit<RACLinkProps, 'children'>,
		DefaultProps<LinkTheme, RACLinkProps['className']> {
	/**
	 * to change the typography of the link, you can pass a variant from semanticTypography.
	 * By default, it is set to "body-sm".
	 */
	typography?: keyof SemanticTypography;
	children?: React.ReactNode;
}
