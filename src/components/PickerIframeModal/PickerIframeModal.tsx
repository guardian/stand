import { useCallback, useEffect, useState } from 'react';
import { mergeDeep } from '../../util/mergeDeep';
import { LinkButton } from '../LinkButton/LinkButton';
import { Dialog, Modal } from '../Modal/Modal';
import { defaultDialogTheme, defaultModalTheme } from '../Modal/styles';
import {
	defaultPickerIframeModalTheme,
	headerContentsStyles,
	iframeContainerStyle,
	iframeStyles,
	newTabContainerStyles,
} from './styles';
import type { PickerIframeModalProps } from './types';

const safeGetOrigin = (href: string | undefined) => {
	if (!href) {
		return null;
	}
	try {
		return new URL(href).origin;
	} catch {
		return null;
	}
};

export function PickerIframeModal<DataType>({
	theme = {},
	title,
	href,
	validate,
	handleData,
	closeModal,
	closeAfterHandling = true,
	cssOverrides,
	showOpenInNewTabButton,
	modalTheme = {
		overlay: { position: 'fixed' },
		modal: {
			width: '800px',
			maxWidth: '80vw',
			position: 'absolute',
		},
	},
	dialogTheme = {
		children: {
			marginBottom: '0',
		},
	},
}: PickerIframeModalProps<DataType>) {
	const mergedTheme = mergeDeep(defaultPickerIframeModalTheme, theme);
	const mergedModalTheme = mergeDeep(defaultModalTheme, modalTheme);
	const mergedDialogTheme = mergeDeep(defaultDialogTheme, dialogTheme);

	const [iframeRef, setIframeRef] = useState<HTMLIFrameElement | null>(null);
	const expectedOrigin = safeGetOrigin(href);

	const messageHandler = useCallback(
		(message: MessageEvent) => {
			if (!expectedOrigin || message.origin !== expectedOrigin) {
				return;
			}

			if (!(
				message.source &&
				'document' in message.source &&
				iframeRef?.contentDocument === message.source.document
			)) {
				return;
			}

			const { data } = validate(message.data);

			if (data) {
				handleData(data);
				if (closeAfterHandling) {
					closeModal();
				}
			}
		},
		[
			expectedOrigin,
			iframeRef?.contentDocument,
			validate,
			handleData,
			closeAfterHandling,
			closeModal,
		],
	);

	useEffect(() => {
		window.addEventListener('message', messageHandler);
		return () => {
			window.removeEventListener('message', messageHandler);
		};
	}, [messageHandler]);

	return (
		<Modal
			isOpen={!!href}
			onOpenChange={(isOpen) => {
				if (!isOpen) {
					closeModal();
				}
			}}
			theme={mergedModalTheme}
			cssOverrides={cssOverrides}
		>
			<Dialog theme={mergedDialogTheme.container}>
				<Dialog.Dismiss
					theme={mergedDialogTheme.dismiss}
					ariaLabel="Close Modal"
				/>
				<Dialog.Header theme={mergedDialogTheme.title}>
					<div css={headerContentsStyles(mergedTheme)}>{title}</div>
				</Dialog.Header>
				<Dialog.Content theme={mergedDialogTheme.children}>
					{showOpenInNewTabButton && (
						<div css={newTabContainerStyles()}>
							<LinkButton href={href} target="_blank" icon="open_in_new">
								Open standalone page
							</LinkButton>
						</div>
					)}
					<div css={iframeContainerStyle(mergedTheme)}>
						<iframe
							ref={setIframeRef}
							src={href}
							css={iframeStyles(mergedTheme)}
						/>
					</div>
				</Dialog.Content>
			</Dialog>
		</Modal>
	);
}
