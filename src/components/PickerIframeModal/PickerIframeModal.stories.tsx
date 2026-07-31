import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Button } from '../Button/Button';
import { Typography } from '../Typography/Typography';
import { PickerIframeModal } from './PickerIframeModal';

const meta = {
	title: 'Stand/Tools Design System/Components/PickerIframeModal',
	component: PickerIframeModal,
	parameters: {},
	args: {
		handleData(data: unknown) {
			console.log('data', data);
		},
		validate(): { data?: boolean } {
			return { data: undefined };
		},
		closeModal() {},
	},
	render: (args) => {
		const absoluteHref = `${location.origin}${DEMO_IFRAME_PATH}`;
		return <PickerIframeModal {...args} href={absoluteHref} />;
	},
} satisfies Meta<typeof PickerIframeModal>;

type Story = StoryObj<typeof PickerIframeModal>;

type DemoPickerDataType = { symbol: string };

const DEMO_IFRAME_PATH =
	'/iframe.html?id=stand-tools-design-system-components-demopickeriframe--default&viewMode=story';

export const Default = {
	args: {
		title: 'Default',
	},
} satisfies Story;

export const CustomTheme = {
	args: {
		title: 'CustomTheme',
		theme: {
			color: {
				background: 'blue',
				text: 'lime',
			},
		},
	},
} satisfies Story;

export const CssOverrides = {
	args: {
		title: 'CssOverrides',
		cssOverrides: css({
			color: 'red',
			border: '4px dotted black',
			padding: 5,
		}),
	},
} satisfies Story;

export const InteractiveExample = {
	render: () => {
		const absoluteHref = `${location.origin}${DEMO_IFRAME_PATH}`;
		const [href, setHref] = useState<string | undefined>(absoluteHref);
		const [selection, setSelection] = useState<string>();

		return (
			<>
				<div>
					<Typography variant="heading2Xl" element="h2">
						Pick food
					</Typography>
					<div css={{ display: 'flex', justifyContent: 'space-between' }}>
						<Button onPress={() => setHref(absoluteHref)}>Open modal</Button>
						<div>
							<Typography variant="bodyBoldXl">
								{selection ?? '[none]'}
							</Typography>
						</div>
					</div>
				</div>
				<PickerIframeModal
					title={'pick a food choice'}
					validate={(messageData) => {
						if (
							messageData &&
							typeof messageData === 'object' &&
							'symbol' in messageData &&
							typeof messageData.symbol === 'string'
						) {
							return { data: messageData as DemoPickerDataType };
						}
						return { data: undefined };
					}}
					handleData={(data: DemoPickerDataType) => {
						setSelection(data.symbol);
					}}
					closeModal={() => {
						setHref(undefined);
					}}
					href={href}
				/>
			</>
		);
	},
} satisfies Story;

export default meta;
