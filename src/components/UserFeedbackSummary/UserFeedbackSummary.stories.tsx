import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { baseColors } from '../../styleD/build/typescript/base/colors';
import { UserFeedbackSummary } from './UserFeedbackSummary';

const meta = {
	title: 'Stand/Tools Design System/Components/UserFeedbackSummary',
	component: UserFeedbackSummary,
	parameters: {},
} satisfies Meta<typeof UserFeedbackSummary>;

type Story = StoryObj<typeof UserFeedbackSummary>;

export const Error = {
	args: {
		level: 'error',
		title: 'Please select an audience segment',
		children: 'Additional help text can be provided here',
	},
} satisfies Story;

export const Warning = {
	args: {
		level: 'warning',
		title: '46 characters or fewer preferred',
		children: 'Additional help text can be provided here',
	},
} satisfies Story;

export const Success = {
	args: {
		level: 'success',
		title: 'Email newsletter sent',
		children: 'Additional help text can be provided here',
	},
} satisfies Story;

export const Information = {
	args: {
		level: 'information',
		title: 'Your session will expire soon',
		children: 'Additional help text can be provided here',
	},
} satisfies Story;

export const HiddenIcon = {
	args: {
		level: 'information',
		title: 'User feedback without icon',
		children: 'Additional help text can be provided here',
		hideIcon: true,
	},
} satisfies Story;

export const NoHelpText = {
	args: {
		level: 'information',
		title: 'User feedback without additional help text',
	},
} satisfies Story;

export const CustomIcon = {
	args: {
		level: 'success',
		title: 'User feedback with custom icon',
		children: 'Additional help text can be provided here',
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
		level: 'information',
		title: 'Message with custom theme',
		children: 'Additional help text can be provided here',
		theme: {
			information: {
				color: baseColors.orange[400],
				borderColor: baseColors.orange[500],
			},
		},
	},
};

export const CssOverrides = {
	args: {
		level: 'error',
		title: 'Message with CSS overrides',
		children: 'Additional help text can be provided here',
		cssOverrides: css`
			background-color: ${baseColors.red[900]};
			border-radius: 8px;
		`,
	},
};

export default meta;
