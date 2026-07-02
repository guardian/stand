// import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button/Button';
import { ButtonGroup } from './ButtonGroup';

const meta = {
	title: 'Stand/Tools Design System/Components/ButtonGroup',
	component: ButtonGroup,
	parameters: {},
} satisfies Meta<typeof ButtonGroup>;

type Story = StoryObj<typeof ButtonGroup>;

export const Default = {
	args: {},
	render: (args) => (
		<ButtonGroup {...args}>
			<Button
				variant="tertiary"
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
		</ButtonGroup>
	),
} satisfies Story;

// export const CustomMessage = {
// 	args: {
// 		message: 'hi there',
// 	},
// } satisfies Story;

// export const CustomTheme = {
// 	args: {
// 		theme: {
// 			color: {
// 				background: 'blue',
// 				text: 'lime',
// 			},
// 		},
// 	},
// } satisfies Story;

// export const CssOverrides = {
// 	args: {
// 		cssOverrides: css({
// 			color: 'red',
// 			border: '4px dotted black',
// 			padding: 5,
// 		}),
// 	},
// } satisfies Story;

export default meta;
