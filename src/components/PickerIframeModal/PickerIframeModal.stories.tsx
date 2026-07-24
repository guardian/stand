import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { PickerIframeModal } from './PickerIframeModal';

const meta = {
	title: 'Stand/Tools Design System/Components/PickerIframeModal',
	component: PickerIframeModal,
	parameters: {},
} satisfies Meta<typeof PickerIframeModal>;

type Story = StoryObj<typeof PickerIframeModal>;

type DemoPickerDataType = { symbol: string };

export const Default = {
	args: {
		title: 'You are in an embedded version of the Grid',
		// href: "https://media.test.dev-gutools.co.uk/search",
		href: '/iframe.html?id=stand-tools-design-system-components-demopickeriframe--default&viewMode=story',
		validate: (messageData: unknown): { data?: DemoPickerDataType } => {
			if (
				messageData &&
				typeof messageData === 'object' &&
				'symbol' in messageData &&
				typeof messageData.symbol === 'string'
			) {
				return { data: messageData as DemoPickerDataType };
			}
			return { data: undefined };
		},
		handleData: (data: unknown) =>
			alert(
				`In the Iframe you clicked: ${(data as DemoPickerDataType).symbol}`,
			),
	},
	render: (args) => {
		const absoluteHref = `${location.origin}${args.href}`;
		return <PickerIframeModal {...args} href={absoluteHref} />;
	},
} satisfies Story;

export const CustomTheme = {
	args: {
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
		cssOverrides: css({
			color: 'red',
			border: '4px dotted black',
			padding: 5,
		}),
	},
} satisfies Story;

export default meta;
