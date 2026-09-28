import { useCallback, useEffect } from 'react';
import { mergeDeep } from '../../util/mergeDeep';
import { LinkButton } from '../LinkButton/LinkButton';
import { Dialog, Modal } from '../Modal/Modal';
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

	const expectedOrigin = safeGetOrigin(href);

	const messageHandler = useCallback(
		(message: MessageEvent) => {
			if (!expectedOrigin || message.origin !== expectedOrigin) {
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
		[expectedOrigin, validate, handleData, closeAfterHandling, closeModal],
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
			theme={modalTheme}
			cssOverrides={cssOverrides}
		>
			<Dialog theme={dialogTheme.container}>
				<Dialog.Dismiss theme={dialogTheme.dismiss} ariaLabel="Close Modal" />
				<Dialog.Header theme={dialogTheme.title}>
					<div css={headerContentsStyles(mergedTheme)}>{title}</div>
				</Dialog.Header>
				<Dialog.Content theme={dialogTheme.children}>
					{showOpenInNewTabButton && (
						<div css={newTabContainerStyles()}>
							<LinkButton href={href} target="_blank" icon="open_in_new">
								Open standalone page
							</LinkButton>
						</div>
					)}
					<div css={iframeContainerStyle(mergedTheme)}>
						<iframe src={href} css={iframeStyles(mergedTheme)} />
					</div>
				</Dialog.Content>
			</Dialog>
		</Modal>
	);
}
