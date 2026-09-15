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
	 * The interaction behavior of the Tile.
	 * @default 'clickable'
	 */
	interactionMode?: TileInteractionMode;
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
		href: string;
	};

type SelectionTileBaseProps = TileBaseProps &
	Omit<RACButtonProps, 'children' | 'onPress' | 'value'> & {
		/** Value identifying this Tile in a selection. */
		value: string;
		/** Whether this tile is currently selected. */
		isSelected: boolean;
	};

export type SelectionTileProps = SelectionTileBaseProps &
	(
		| {
				interactionMode: Extract<TileInteractionMode, 'selectable'>;
				/** Called when this Tile is selected. */
				onSelectionChange: (value: string) => void;
		  }
		| {
				interactionMode: Extract<TileInteractionMode, 'multi-select'>;
				/** Called with the next selected state when this Tile is pressed. */
				onSelectionChange: (value: string, isSelected: boolean) => void;
		  }
	);

export type SelectableTileProps = Extract<
	SelectionTileProps,
	{ interactionMode: 'selectable' }
>;

export type MultiSelectTileProps = Extract<
	SelectionTileProps,
	{ interactionMode: 'multi-select' }
>;

export type TileProps = ClickableTileProps | SelectionTileProps;

export type TileContentProps = Pick<
	TileProps,
	| 'children'
	| 'description'
	| 'descriptionTypography'
	| 'icon'
	| 'size'
	| 'typography'
> & {
	interactionMode: TileInteractionMode;
	isSelected?: boolean;
	theme: TileTheme;
};
