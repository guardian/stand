import type { LinkProps as RACLinkProps } from 'react-aria-components';
import type { DefaultProps } from '../../util/types';
import type { LinkTheme } from './styles';

export interface LinkProps extends DefaultProps<
	LinkTheme,
	RACLinkProps['className']
> {
	/**
	 * TODO: Add component-specific props here
	 */
	children?: React.ReactNode;
}
