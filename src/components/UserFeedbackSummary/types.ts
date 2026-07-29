import type { DefaultPropsWithChildren } from '../../util/types';
import type { IconProps } from '../Icon/types';
import type { UserFeedbackSummaryTheme } from './styles';

export type UserFeedbackSummaryProps =
	DefaultPropsWithChildren<UserFeedbackSummaryTheme> & {
		/**
		 * The severity level of the message, which determines its styling.
		 * This is a required prop.
		 * Levels: 'error', 'warning', 'success', 'information'
		 */
		level: 'error' | 'warning' | 'success' | 'information'; //keyof Omit<UserFeedbackSummaryTheme, 'shared'>;
		/**
		 * Title of feedback summary message. This is a required prop.
		 */
		title: string;
		/**
		 * Optional prop to hide the default icon associated with the message level.
		 */
		hideIcon?: boolean;
		/**
		 * Override the default icon for the message by providing a custom icon, for example when not using material symbols.
		 * This can be either a string (for material symbols) or an SVG element.
		 * Passed to the Icon component, so can be either a string (for material symbols) or an SVG element.
		 */
		icon?: IconProps['symbol'] | Exclude<IconProps['children'], string>;
	};
