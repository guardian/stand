import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { semanticColors } from '../../styleD/build/typescript/semantic/colors';
import { semanticSpacing } from '../../styleD/build/typescript/semantic/spacing';
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

export const WithOwnTabButton = {
	args: {
		title: 'With new tab button',
		showOpenInNewTabButton: true,
	},
} satisfies Story;

export const CustomModalTheme = {
	args: {
		title: 'CustomModalTheme',
		modalTheme: {
			modal: {
				width: '600px',
				maxWidth: '60vw',
				backgroundColor: semanticColors.fill.tealWeak,
				boxShadow: '16px 8px 6px 6px rgba(0, 0, 0, 0.50)',
				padding: {
					bottom: semanticSpacing.stackSm,
				},
			},
			overlay: {
				backgroundColor: 'rgba(0, 255, 0, 0.10)',
			},
		},
	},
} satisfies Story;

export const CustomDialogTheme = {
	args: {
		title: 'CustomDialogTheme',
		dialogTheme: {
			title: {
				marginBottom: semanticSpacing.stackXl,
			},
			children: {
				marginBottom: semanticSpacing.stackXl,
			},
			dismiss: {
				border: `4px solid ${semanticColors.border.weak}`,
				hovered: {
					border: `4px solid ${semanticColors.border.selected}`,
				},
			},
		},
	},
} satisfies Story;

export const CustomTheme = {
	args: {
		title: 'CustomTheme',
		theme: {
			iframe: {
				width: '50%',
				height: '800px',
				backgroundColor: semanticColors.fill.tealWeak,
				margin: {
					left: 'auto',
					right: 'auto',
				},
			},
			iframeContainer: {
				padding: {
					bottom: semanticSpacing.stackMd,
				},
			},
		},
	},
} satisfies Story;

export const CssOverrides = {
	args: {
		title: 'CssOverrides',
		cssOverrides: css({
			border: '8px dotted black',
			background: 'repeating-linear-gradient(45deg, yellow, skyblue 100px)',
			borderTopLeftRadius: 50,
			borderBottomRightRadius: 50,
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
					<div css={{ display: 'flex', gap: semanticSpacing.stackXl }}>
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
