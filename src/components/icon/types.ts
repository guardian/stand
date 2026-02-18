import type { MaterialSymbol } from '../../fonts/material-symbols-types';
import type { DefaultPropsWithChildren } from '../../util/types';
import type { IconTheme } from './styles';

export type { MaterialSymbol } from '../../fonts/material-symbols-types';

export interface IconProps extends DefaultPropsWithChildren<
	IconTheme,
	undefined,
	MaterialSymbol | Exclude<React.ReactNode, string>
> {
	/**
	 * Size variant of the icon
	 */
	size?: keyof Omit<IconTheme, 'shared'>;
	/**
	 * Fill/color of the icon. Default is to inherit from text color or icon defaults.
	 */
	fill?: string;
	/**
	 * Alternative text for the icon, used for accessibility.
	 * This must be provided if the icon is not purely decorative, and should describe the meaning or function of the icon.
	 */
	alt?: string;
	/**
	 * Alternative to using the `children` prop for rendering Material Symbol icons,
	 * you can use the `symbol` prop to specify the icon by its symbol name.
	 * This is a convenience for font icons, allowing you to simply provide the symbol name in a type-safe way without needing to pass it as a child string.
	 * For example, instead of `<Icon>home</Icon>`, you can use `<Icon symbol="home" />`.
	 * This prop is mutually exclusive with `children` when rendering font icons, and takes precedence over `children` if both are provided.
	 */
	symbol?: MaterialSymbol;
}
