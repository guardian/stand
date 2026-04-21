import type { LinkProps as RACLinkProps } from 'react-aria-components';
import type { Breakpoint } from '../../../styleD/utils/semantic/mq';
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
	 * The breakpoint at which the tool name section collapses to only show the favicon. Can be set to any valid breakpoint (e.g. 'sm', 'md', 'lg', etc.).
	 */
	collapseBelow?: Breakpoint;
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
	 * If not provided, `collapsedHoverText` will be used for both expanded and collapsed states
	 */
	hoverText?: string;
	/**
	 * Shorter text to display on hover when collapsed, labels the link
	 * e.g. 'Back' or 'Home'
	 * If not provided, `hoverText` will be used for both expanded and collapsed states
	 */
	collapsedHoverText?: string;
}
