// import { css } from '@emotion/react';
import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { baseColors } from '../../styleD/build/typescript/base/colors';
import { baseSizing } from '../../styleD/build/typescript/base/sizing';
import { baseSpacing } from '../../styleD/build/typescript/base/spacing';
import { Button } from '../Button/Button';
import { ButtonGroup } from './ButtonGroup';

const meta = {
	title: 'Stand/Tools Design System/Components/ButtonGroup',
	component: ButtonGroup,
	parameters: {},
	render: (args) => (
		<ButtonGroup {...args}>
			<Button variant="tertiary">Stay on this step</Button>
			<Button>Discard changes and skip</Button>
		</ButtonGroup>
	),
} satisfies Meta<typeof ButtonGroup>;

type Story = StoryObj<typeof ButtonGroup>;

export const Default = {
	args: {},
} satisfies Story;

export const Small = {
	args: { size: 'sm' },
} satisfies Story;

export const MultipleButtons = {
	args: { size: 'lg' },
	render: (args) => (
		<ButtonGroup {...args}>
			<Button>Button one</Button>
			<Button>Button two</Button>
			<Button>Button three</Button>
			<Button>Button four</Button>
			<Button>Button five</Button>
			<Button>Button six</Button>
			<Button>Button seven</Button>
			<Button>Button eight</Button>
		</ButtonGroup>
	),
} satisfies Story;

export const CustomTheme = {
	args: {
		theme: {
			gap: '2rem',
		},
	},
} satisfies Story;

export const CssOverrides = {
	args: {
		cssOverrides: css`
			border: ${baseSizing.size2Rem} solid ${baseColors.red[500]};
			margin: ${baseSpacing['8Rem']};
			padding: ${baseSpacing['8Rem']};
		`,
	},
} satisfies Story;

export default meta;
