// import { css } from '@emotion/react';
import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { base, semantic } from '../../terrazzo/build/stand';
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

export const CustomTheme = {
	args: {
		theme: {
			gap: semantic.spacing['stackXs'],
		},
	},
} satisfies Story;

export const DangerouslyOverrideCss = {
	args: {
		dangerouslyOverrideCss: css`
			border: ${base.sizing.size2Rem} solid ${base.colors.red[500]};
			margin: ${base.spacing['8Rem']};
			padding: ${base.spacing['8Rem']};
		`,
	},
} satisfies Story;

export default meta;
