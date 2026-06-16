import React from 'react';
import {
	Dialog as ReactAriaDialog,
	DialogTrigger as ReactAriaDialogTrigger,
	Modal as ReactAriaModal,
	ModalOverlay as ReactAriaModalOverlay,
} from 'react-aria-components';
import { mergeDeep } from '../../util/mergeDeep';
import { AvatarButton } from '../AvatarButton/AvatarButton';
import { Button } from '../Button/Button';
import { IconButton } from '../IconButton/IconButton';
import { Typography } from '../Typography/Typography';
import {
	defaultDialogTheme,
	defaultModalTheme,
	dialogButtonsStyles,
	dialogContentStyles,
	dialogDismissStyles,
	dialogHeadingStyles,
	dialogStyles,
	modalOverlayStyles,
	modalStyles,
} from './styles';
import type {
	DialogButtonsProps,
	DialogContentProps,
	DialogDismissProps,
	DialogHeaderProps,
	DialogProps,
	DialogTriggerProps,
	ModalProps,
} from './types';

export const Modal = ({
	theme = {},
	children,
	cssOverrides,
	...props
}: ModalProps) => {
	const mergedTheme = mergeDeep(defaultModalTheme, theme);

	return (
		<ReactAriaModalOverlay css={modalOverlayStyles(mergedTheme)} {...props}>
			<ReactAriaModal css={[modalStyles(mergedTheme), cssOverrides]}>
				{children}
			</ReactAriaModal>
		</ReactAriaModalOverlay>
	);
};

export const DialogTrigger = (props: DialogTriggerProps) => {
	return <ReactAriaDialogTrigger {...props} />;
};

const DialogRoot = ({
	children,
	theme = {},
	cssOverrides,
	...props
}: DialogProps) => {
	const mergedTheme = mergeDeep(defaultDialogTheme.container, theme);

	const filteredChildren = React.Children.toArray(
		// React.Children.toArray doesn't accept a render-prop function; pass undefined if children is a function
		// In all cases anyway we'll be passing in component children and not a render-prop function, so this is just to satisfy the type checker
		typeof children === 'function' ? undefined : children,
	)
		.map((child) => {
			if (!React.isValidElement(child)) {
				return false;
			}

			switch (child.type) {
				case Dialog.Header:
				case Dialog.Buttons:
				case Dialog.Content:
				case Dialog.Dismiss:
					return child;
				default:
					return false;
			}
		})
		.filter((child) => child !== false);

	return (
		<ReactAriaDialog css={[dialogStyles(mergedTheme), cssOverrides]} {...props}>
			{filteredChildren}
		</ReactAriaDialog>
	);
};

const DialogHeader = ({
	variant = 'headingLg',
	element = 'h2',
	theme = {},
	cssOverrides,
	...props
}: DialogHeaderProps) => {
	const mergedTheme = mergeDeep(defaultDialogTheme.title, theme);
	return (
		<Typography
			slot="title"
			variant={variant}
			element={element}
			cssOverrides={[
				dialogHeadingStyles(mergedTheme),
				...(cssOverrides == null
					? []
					: Array.isArray(cssOverrides)
						? cssOverrides
						: [cssOverrides]),
			]}
			{...props}
		/>
	);
};

const DialogButtons = ({
	children,
	theme = {},
	cssOverrides,
	...props
}: DialogButtonsProps) => {
	const mergedTheme = mergeDeep(defaultDialogTheme.ctas, theme);
	const buttons = React.Children.toArray(children)
		.map((child) => {
			if (!React.isValidElement<{ slot?: string }>(child)) {
				return false;
			}

			switch (child.type) {
				case Button:
				case AvatarButton:
				case IconButton:
					return child;
				default:
					return false;
			}
		})
		.filter((child) => child !== false);

	return (
		<div css={[dialogButtonsStyles(mergedTheme), cssOverrides]} {...props}>
			{buttons}
		</div>
	);
};

const DialogContent = ({
	children,
	theme = {},
	cssOverrides,
	...props
}: DialogContentProps) => {
	const mergedTheme = mergeDeep(defaultDialogTheme.children, theme);
	return (
		<div css={[dialogContentStyles(mergedTheme), cssOverrides]} {...props}>
			{children}
		</div>
	);
};

const DialogDismiss = ({
	theme = {},
	size = 'lg',
	symbol = 'close',
	variant = 'tertiary',
	...props
}: DialogDismissProps) => {
	const mergedTheme = mergeDeep(defaultDialogTheme.dismiss, theme);
	return (
		<IconButton
			size={size}
			symbol={symbol}
			variant={variant}
			cssOverrides={dialogDismissStyles(mergedTheme)}
			slot="close"
			{...props}
		/>
	);
};

interface DialogCompound {
	(props: DialogProps): React.ReactElement;
	Header: (props: DialogHeaderProps) => React.ReactElement;
	Buttons: (props: DialogButtonsProps) => React.ReactElement;
	Content: (props: DialogContentProps) => React.ReactElement;
	Dismiss: (props: DialogDismissProps) => React.ReactElement;
}

export const Dialog: DialogCompound = Object.assign(DialogRoot, {
	Header: DialogHeader,
	Buttons: DialogButtons,
	Content: DialogContent,
	Dismiss: DialogDismiss,
});
