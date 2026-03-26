import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { baseColors } from '../../styleD/build/typescript/base/colors';
import { InlineMessage } from './InlineMessage';

const meta = {
	title: 'Stand/Tools Design System/Components/InlineMessage',
	component: InlineMessage,
	parameters: {},
	args: {},
} satisfies Meta<typeof InlineMessage>;

type Story = StoryObj<typeof InlineMessage>;

export default meta;

export const Error = {
	name: 'Error',
	args: {
		children: 'Something went wrong',
		level: 'error',
	},
} satisfies Story;

export const Success = {
	name: 'Success',
	args: {
		children: 'Changes saved successfully',
		level: 'success',
	},
} satisfies Story;

export const Information = {
	name: 'Information',
	args: {
		children: 'Your session will expire soon',
		level: 'information',
	},
} satisfies Story;

export const HideIcon = {
	name: 'Hide Icon',
	args: {
		children: 'Message without icon',
		level: 'information',
		hideIcon: true,
	},
} satisfies Story;

export const CustomIcon = {
	name: 'Custom Icon',
	args: {
		children: 'Message with custom icon',
		level: 'success',
		icon: (
			<svg viewBox="-3 -3 30 30" xmlns="http://www.w3.org/2000/svg">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M12.36 2.5h-.905l-7.6 7.69-.905.905v.453h.905v9.056l.904.896h5.872v-6.333h2.715V21.5h5.89l.904-.932v-9.02h.905v-.453l-1.357-1.357-.001.005zm5.97 8.447-6.412-6.34-6.254 6.326v8.758h3.158V13.81l.452-.453h5.438l.443.453v5.88h3.176z"
				/>
			</svg>
		),
	},
} satisfies Story;

export const CustomTheme = {
	args: {
		children: 'Message with custom theme',
		level: 'error',
		theme: {
			error: {
				color: baseColors.orange[400],
			},
		},
	},
};

export const CssOverrides = {
	args: {
		children: 'Message with CSS overrides',
		level: 'success',
		cssOverrides: css`
			background-color: ${baseColors.green[50]};
			padding: 16px;
			border-radius: 4px;
		`,
	},
};
