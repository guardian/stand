import type { LinkProps as RACLinkProps } from 'react-aria-components';
import type { DefaultPropsWithChildren } from '../../util/types';
import type { IconProps } from '../Icon/types';
import type { TypographyVariant } from '../Typography/types';
import type { TileTheme } from './styles';

export interface TileProps
	extends
		Omit<RACLinkProps, 'children'>,
		DefaultPropsWithChildren<TileTheme, RACLinkProps['className']> {
	/**
	 * Size variant of the tile.
	 * @default 'md'
	 */
	size?: keyof Omit<TileTheme, 'shared'>;
	/**
	 * Supporting text rendered below the title.
	 */
	description?: React.ReactNode;
	/**
	 * to change the typography of the link, you can pass a variant from semanticTypography.
	 * By default, it is set to "body-bold-sm".
	 */
	typography?: TypographyVariant;
	/**
	 * to change the typography of the description, you can pass a variant from semanticTypography.
	 * By default, it is set to "body-sm".
	 */
	descriptionTypography?: TypographyVariant;
	/**
	 * Optional leading icon rendered before the title.
	 */
	icon?: IconProps['symbol'] | Exclude<IconProps['children'], string>;
}
