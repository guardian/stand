import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { semanticColors } from '../../styleD/build/typescript/semantic/colors';
import { Button } from '../Button/Button';
import { Dialog, DialogTrigger, Modal } from './Modal';
import type {
	PartialModalTheme as ModalTheme,
	PartialDialogTheme,
} from './styles';

const meta = {
	title: 'Stand/Tools Design System/Components/Modal',
	component: Modal,
	parameters: {},
} satisfies Meta<typeof Modal>;

type Story = StoryObj<typeof Modal>;

export const Default = {
	args: {},
	render: (args) => (
		<DialogTrigger>
			<Button>Open Modal</Button>
			<Modal {...args}>
				<Dialog>
					<Dialog.Dismiss ariaLabel="Close Modal" />
					<Dialog.Header element="h2" variant="headingMd">
						Discard changes to Launch/Promotion dates?
					</Dialog.Header>
					<Dialog.Content>
						Skipping to “Name & frequency” will discard the changes made on
						“CurrentStepLabel”.
					</Dialog.Content>
					<Dialog.Buttons>
						<Button
							variant="tertiary"
							slot="close"
							onPress={() => {
								console.log('cancel');
							}}
						>
							Stay on this step
						</Button>
						<Button
							onPress={() => {
								console.log('confirm');
							}}
						>
							Discard changes and skip
						</Button>
					</Dialog.Buttons>
				</Dialog>
			</Modal>
		</DialogTrigger>
	),
} satisfies Story;

export const IsOpen = {
	args: {
		isOpen: true,
	},
	render: (args) => (
		<Modal {...args}>
			<Dialog aria-label="Discard changes to Launch/Promotion dates?">
				<Dialog.Dismiss ariaLabel="Close Modal" />
				<Dialog.Header element="h2" variant="headingMd">
					Discard changes to Launch/Promotion dates?
				</Dialog.Header>
				<Dialog.Content>
					Skipping to “Name & frequency” will discard the changes made on
					“CurrentStepLabel”.
				</Dialog.Content>
				<Dialog.Buttons>
					<Button
						variant="tertiary"
						slot="close"
						onPress={() => {
							console.log('cancel');
						}}
					>
						Stay on this step
					</Button>
					<Button
						onPress={() => {
							console.log('confirm');
						}}
					>
						Discard changes and skip
					</Button>
				</Dialog.Buttons>
			</Dialog>
		</Modal>
	),
} satisfies Story;

export const Controlled = {
	args: {},
	render: (args) => {
		const [isOpen, setIsOpen] = React.useState(false);

		return (
			<>
				<Button onPress={() => setIsOpen(true)}>Open Modal</Button>
				<Modal
					{...args}
					isOpen={isOpen}
					onOpenChange={(isOpen) => {
						console.log('onOpenChange', isOpen);
						setIsOpen(isOpen);
					}}
				>
					<Dialog>
						<Dialog.Dismiss ariaLabel="Close Modal" />
						<Dialog.Header element="h2" variant="headingMd">
							Discard changes to Launch/Promotion dates?
						</Dialog.Header>
						<Dialog.Content>
							Skipping to “Name & frequency” will discard the changes made on
							“CurrentStepLabel”.
						</Dialog.Content>
						<Dialog.Buttons>
							<Button
								variant="tertiary"
								slot="close"
								onPress={() => {
									console.log('cancel');
									setIsOpen(false);
								}}
							>
								Stay on this step
							</Button>
							<Button
								onPress={() => {
									console.log('confirm');
									setIsOpen(false);
								}}
							>
								Discard changes and skip
							</Button>
						</Dialog.Buttons>
					</Dialog>
				</Modal>
			</>
		);
	},
} satisfies Story;

export const CustomTheme = {
	args: {},
	render: (args) => {
		const modalTheme: ModalTheme = {
			overlay: {
				backgroundColor: 'rgba(150, 50, 150, 0.5)',
			},
			modal: {
				backgroundColor: semanticColors.bg.raisedLevel1,
			},
		};

		const dismissTheme: PartialDialogTheme['dismiss'] = {
			marginLeft: '0',
		};

		const contentTheme: PartialDialogTheme['children'] = {
			marginBottom: '1rem',
		};

		const buttonsTheme: PartialDialogTheme['ctas'] = {
			gap: '1rem',
			justifyContent: 'flex-start',
			md: {
				flexDirection: 'row-reverse',
			},
		};

		return (
			<DialogTrigger>
				<Button>Open Modal</Button>
				<Modal {...args} theme={modalTheme}>
					<Dialog>
						<Dialog.Dismiss theme={dismissTheme} ariaLabel="Close Modal" />
						<Dialog.Header element="h2" variant="headingMd">
							Discard changes to Launch/Promotion dates?
						</Dialog.Header>
						<Dialog.Content theme={contentTheme}>
							Skipping to “Name & frequency” will discard the changes made on
							“CurrentStepLabel”.
						</Dialog.Content>
						<Dialog.Buttons theme={buttonsTheme}>
							<Button
								variant="tertiary"
								slot="close"
								onPress={() => {
									console.log('cancel');
								}}
							>
								Stay on this step
							</Button>
							<Button
								onPress={() => {
									console.log('confirm');
								}}
							>
								Discard changes and skip
							</Button>
						</Dialog.Buttons>
					</Dialog>
				</Modal>
			</DialogTrigger>
		);
	},
} satisfies Story;

export const CssOverrides = {
	args: {},
	render: (args) => (
		<DialogTrigger>
			<Button>Open Modal</Button>
			<Modal
				{...args}
				cssOverrides={css`
					border: 2px solid red;
				`}
			>
				<Dialog
					cssOverrides={css`
						font-family: monospace;
					`}
				>
					<Dialog.Dismiss ariaLabel="Close Modal" />
					<Dialog.Header element="h2" variant="headingMd">
						Discard changes to Launch/Promotion dates?
					</Dialog.Header>
					<Dialog.Content>
						Skipping to “Name & frequency” will discard the changes made on
						“CurrentStepLabel”.
					</Dialog.Content>
					<Dialog.Buttons>
						<Button
							variant="tertiary"
							slot="close"
							onPress={() => {
								console.log('cancel');
							}}
						>
							Stay on this step
						</Button>
						<Button
							onPress={() => {
								console.log('confirm');
							}}
						>
							Discard changes and skip
						</Button>
					</Dialog.Buttons>
				</Dialog>
			</Modal>
		</DialogTrigger>
	),
} satisfies Story;

export default meta;
