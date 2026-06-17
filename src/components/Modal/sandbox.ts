// Component Name
export const componentName = 'Modal';

// React sandbox example
export const componentTsx = /* javascript */ `import { Button } from '@guardian/stand/Button';
import { Dialog, DialogTrigger, Modal } from '@guardian/stand/Modal';

export const Component = () => (
	<DialogTrigger>
		<Button>Open Modal</Button>
		<Modal>
			<Dialog>
				<Dialog.Header element="h2" variant="headingMd">
					Are you sure?
				</Dialog.Header>
				<Dialog.Content>This action cannot be undone.</Dialog.Content>
				<Dialog.Buttons>
					<Button variant="tertiary" slot="close">
						Cancel
					</Button>
					<Button>Confirm</Button>
				</Dialog.Buttons>
			</Dialog>
		</Modal>
	</DialogTrigger>
);
`;
