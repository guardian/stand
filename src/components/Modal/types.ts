import type {
	DialogProps as ReactAriaDialogProps,
	DialogTriggerProps as ReactAriaDialogTriggerProps,
	ModalOverlayProps as ReactAriaModalProps,
} from 'react-aria-components';
import type {
	DeepPartial,
	DefaultProps,
	DefaultPropsWithChildren,
} from '../../util/types';
import type { TypographyProps } from '../Typography/types';
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
export type DialogHeaderProps = Omit<TypographyProps, 'theme'> & {
	theme?: DeepPartial<DialogTheme['title']>;
};
export type DialogButtonsProps = DefaultPropsWithChildren<DialogTheme['ctas']>;
export type DialogContentProps = DefaultPropsWithChildren<
	DialogTheme['children']
>;
export type DialogDismissProps = {
	theme?: DeepPartial<DialogTheme['dismiss']>;
};

export type DialogTriggerProps = ReactAriaDialogTriggerProps;
