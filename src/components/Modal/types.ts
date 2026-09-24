import type {
	DialogProps as ReactAriaDialogProps,
	DialogTriggerProps as ReactAriaDialogTriggerProps,
	HeadingProps as ReactAriaHeadingProps,
	ModalOverlayProps as ReactAriaModalProps,
} from 'react-aria-components';
import type {
	DeepPartial,
	DefaultProps,
	DefaultPropsWithChildren,
} from '../../util/types';
import type { IconButtonProps } from '../IconButton/types';
import type { TypographyVariant } from '../Typography/types';
import type { DialogTheme, ModalTheme } from './styles';

export type ModalProps = DefaultProps<
	ModalTheme,
	ReactAriaModalProps['className']
> &
	ReactAriaModalProps;

export type DialogProps = DefaultProps<
	DialogTheme['container'],
	ReactAriaDialogProps['className']
> &
	ReactAriaDialogProps;
export type DialogHeaderElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type DialogHeaderProps = DefaultProps<
	DialogTheme['title'],
	ReactAriaHeadingProps['className']
> &
	Omit<ReactAriaHeadingProps, 'slot' | 'level' | 'className'> & {
		/**
		 * Heading element to render
		 */
		element?: DialogHeaderElement;
		/**
		 * Font variant to apply as a CSS style to the heading
		 */
		variant?: TypographyVariant;
	};
export type DialogButtonsProps = DefaultPropsWithChildren<DialogTheme['ctas']>;
export type DialogContentProps = DefaultPropsWithChildren<
	DialogTheme['children']
>;
export type DialogDismissProps = Omit<IconButtonProps, 'theme'> & {
	theme?: DeepPartial<DialogTheme['dismiss']>;
};

export type DialogTriggerProps = ReactAriaDialogTriggerProps;
