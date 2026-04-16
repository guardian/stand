import type { IconProps } from '../../icon';
import type { IconButtonProps } from '../../icon-button';
import type { DefaultPropsWithChildren, Prettify } from '../../util/types';
import type { AlertBannerTheme } from './styles';

export interface AlertBannerProps extends DefaultPropsWithChildren<AlertBannerTheme> {
	/**
	 * The severity level of the AlertBanner, which determines its styling.
	 * This is a required prop.
	 * Levels: 'error', 'success', 'information', 'warning
	 */
	level: keyof Omit<AlertBannerTheme, 'shared'>;
	/**
	 * Indicates whether the AlertBanner has an icon.
	 * Icon is based on the level of the AlertBanner
	 */
	showIcon?: boolean;
	/**
	 * Override the default icon for the message by providing a custom icon, for example when not using material symbols.
	 * This can be either a string (for material symbols) or an SVG element.
	 * Passed to the Icon component, so can be either a string (for material symbols) or an SVG element.
	 */
	icon?: IconProps['symbol'] | Exclude<IconProps['children'], string>;
	/**
	 * Optional props for the close button. If provided, a close button will be rendered in the AlertBanner, and these props will be passed to the IconButton component.
	 */
	closeButtonProps?: Prettify<Partial<IconButtonProps>>;
}
