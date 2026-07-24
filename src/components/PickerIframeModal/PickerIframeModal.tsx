import { useCallback, useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import { LinkButton } from '../LinkButton/LinkButton';
import { Dialog, DialogTrigger, Modal } from '../Modal/Modal';
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
	// theme,
	title,
	href,
	validate,
	handleData,
}: PickerIframeModalProps<DataType>) {
	// const mergedTheme = mergeDeep(defaultPickerIframeModalTheme, theme ?? {});

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
				console.log('picker handler', data);
				handleData(data);
			}
		},
		[expectedOrigin, iframeRef, validate, handleData],
	);

	useEffect(() => {
		window.addEventListener('message', messageHandler);
		return () => {
			window.removeEventListener('message', messageHandler);
		};
	}, [messageHandler]);

	return (
		<DialogTrigger>
			<Button isDisabled={!href}>Open Modal</Button>
			<Modal
				theme={{
					modal: { maxWidth: '90vw', maxHeight: '90vh', width: '1000px' },
				}}
			>
				<Dialog theme={{}}>
					<Dialog.Dismiss theme={{}} ariaLabel="Close Modal" />
					<Dialog.Header element="h2" variant="headingMd">
						<div
							css={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
							}}
						>
							{title}
							<LinkButton href={href} target="_blank">
								Open standalone page
							</LinkButton>
						</div>
					</Dialog.Header>
					<Dialog.Content theme={{}}>
						<iframe
							ref={setIframeRef}
							src={href}
							css={{
								width: '100%',
								maxHeight: '70vh',
								height: 600,
							}}
						/>
					</Dialog.Content>
				</Dialog>
			</Modal>
		</DialogTrigger>
	);
}
