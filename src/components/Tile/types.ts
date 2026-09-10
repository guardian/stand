import type {
	ButtonProps as RACButtonProps,
	LinkProps as RACLinkProps,
} from 'react-aria-components';
import type { DefaultPropsWithChildren } from '../../util/types';
import type { IconProps } from '../Icon/types';
import type { TypographyVariant } from '../Typography/types';
import type { TileTheme } from './styles';

export type TileInteractionMode = 'clickable' | 'selectable' | 'multi-select';

interface TileBaseProps extends DefaultPropsWithChildren<TileTheme> {
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
	 * Title typography variant.
	 * @default 'bodyBoldSm'
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
	icon?: IconProps['symbol'] | '' | Exclude<IconProps['children'], string>;
}

export type ClickableTileProps = TileBaseProps &
	Omit<RACLinkProps, 'children' | 'href'> & {
		/**
		 * The interaction behavior of the tile.
		 * @default 'clickable'
		 */
		interactionMode?: Extract<TileInteractionMode, 'clickable'>;
		href: string;
	};

export type SelectableTileProps = TileBaseProps &
	Omit<RACButtonProps, 'children' | 'onPress' | 'value'> & {
		interactionMode: Extract<TileInteractionMode, 'selectable'>;
		/** Value passed to onSelectionChange when this tile is selected. */
		value: string;
		/** Whether this tile is currently selected. */
		isSelected: boolean;
		/** Called when the tile is selected. */
		onSelectionChange: (value: string) => void;
		href?: never;
	};

export type MultiSelectTileProps = TileBaseProps &
	Omit<RACButtonProps, 'children' | 'onPress' | 'value'> & {
		interactionMode: Extract<TileInteractionMode, 'multi-select'>;
		/** Value identifying this tile in a multi-selection. */
		value: string;
		/** Whether this tile is currently selected. */
		isSelected: boolean;
		/** Called with the next selected state when the tile is pressed. */
		onSelectionChange: (value: string, isSelected: boolean) => void;
		href?: never;
	};

export type TileProps =
	ClickableTileProps | SelectableTileProps | MultiSelectTileProps;
