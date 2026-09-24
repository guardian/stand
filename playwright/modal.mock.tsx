import { Dialog, Modal } from '../src/components/Modal/Modal';

export const OpenDialogWithHeader = () => (
	<Modal isOpen>
		<Dialog>
			<Dialog.Header>Dialog title</Dialog.Header>
			<Dialog.Content>Dialog body</Dialog.Content>
			<Dialog.Dismiss ariaLabel="Close" />
		</Dialog>
	</Modal>
);
