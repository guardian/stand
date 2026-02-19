import type { LinkProps as RACLinkProps } from 'react-aria-components';
import type { DefaultPropsWithChildren } from '../../util/types';
import type { IconProps, MaterialSymbol } from '../icon/types';
import type { IconLinkButtonTheme } from './styles';

export interface IconLinkButtonProps
	extends
		DefaultPropsWithChildren<
			IconLinkButtonTheme,
			RACLinkProps['className'],
			IconProps['children']
		>,
		Omit<RACLinkProps, 'children'> {
	/**
	 * Size variant of the avatar
	 */
	size?: keyof Omit<IconLinkButtonTheme['emphasised-primary'], 'shared'>;
	/**
	 * Variant of the button
	 */
	variant?: keyof Omit<IconLinkButtonTheme, 'shared'>;
	/**
	 * Alternative to using the `children` prop for rendering Material Symbol icons,
	 * you can use the `symbol` prop to specify the icon by its symbol name.
	 * This is a convenience for font icons, allowing you to simply provide the symbol name in a type-safe way without needing to pass it as a child string.
	 * For example, instead of `<Icon>home</Icon>`, you can use `<Icon symbol="home" />`.
	 * This prop is mutually exclusive with `children` when rendering font icons, and takes precedence over `children` if both are provided.
	 */
	symbol?: MaterialSymbol;
	/**
	 * Accessible label for the icon button. Required for accessibility.
	 */
	ariaLabel: string;
}
