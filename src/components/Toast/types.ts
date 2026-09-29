import type {
	ToastProps as ReactAriaToastProps,
	ToastRegionProps as ReactAriaToastRegionProps,
} from 'react-aria-components';
import type { IconButtonProps } from '../../IconButton';
import type { DefaultProps, Prettify } from '../../util/types';
import type { IconProps } from '../Icon/types';
import type { ToastLevel, ToastTheme } from './styles';

export type { ToastLevel } from './styles';

export interface ToastContent {
	/**
	 * Semantic status used to style the toast and choose its default icon.
	 */
	level: ToastLevel;
	/**
	 * Short summary of the notification.
	 */
	title: React.ReactNode;
	/**
	 * Main notification message.
	 */
	subject: React.ReactNode;
	/**
	 * Optional supporting information displayed after the subject.
	 */
	additionalInfo?: React.ReactNode;
	/**
	 * Optional thumbnail displayed in a 4rem square before the text.
	 * Images use object-fit: cover. Takes precedence over the icon.
	 */
	thumbnail?: React.ReactNode;
	/**
	 * Displays the icon associated with the semantic level.
	 */
	showIcon?: boolean;
	/**
	 * Optional replacement for the semantic level icon. Supports a Material Symbol
	 * name or an SVG element, matching the Icon component API.
	 */
	icon?: IconProps['symbol'] | Exclude<IconProps['children'], string>;
	/**
	 * Optional props for the dismiss button.
	 */
	dismissButtonProps?: Prettify<Partial<IconButtonProps>>;
}

export interface ToastProps
	extends
		DefaultProps<ToastTheme, ReactAriaToastProps<ToastContent>['className']>,
		Omit<ReactAriaToastProps<ToastContent>, 'children' | 'className'> {}

export interface ToastRegionProps extends Omit<
	ReactAriaToastRegionProps<ToastContent>,
	'children' | 'queue'
> {
	/**
	 * The queue to display. Defaults to the shared Stand toast queue.
	 */
	queue?: ReactAriaToastRegionProps<ToastContent>['queue'];
	/**
	 * Props applied to every toast in this region.
	 */
	toastProps?: Omit<ToastProps, 'toast'>;
}
