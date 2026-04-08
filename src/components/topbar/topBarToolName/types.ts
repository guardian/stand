import type { LinkProps as RACLinkProps } from 'react-aria-components';
import type { DefaultProps } from '../../../util/types';
import type { FaviconProps } from '../../favicon/types';
import type { IconProps } from '../../icon/types';
import type { TopBarToolNameTheme } from './styles';

export interface TopBarToolNameProps
	extends
		DefaultProps<TopBarToolNameTheme, RACLinkProps['className']>,
		Omit<RACLinkProps, 'children'> {
	/**
	 * Name of the tool to display
	 */
	name: string;
	/**
	 * Icon to display
	 */
	favicon: FaviconProps;
	/**
	 * The subsection or type of content that is represented on the page (optional)
	 * */
	subsection?: string;
	/**
	 * Icon that represents the content type (optional)
	 * */
	subsectionIcon?: IconProps['symbol'] | Exclude<IconProps['children'], string>;
	/**
	 * Text to display on hover, labels the link
	 * e.g. 'Back to dashboard'
	 */
	hoverText?: string;
}
