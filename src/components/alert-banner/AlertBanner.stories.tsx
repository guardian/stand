import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { baseColors } from '../../styleD/build/typescript/base/colors';
import { AlertBanner } from './AlertBanner';

const meta = {
	title: 'Stand/Tools Design System/Components/AlertBanner',
	component: AlertBanner,
	parameters: {},
	args: {},
} satisfies Meta<typeof AlertBanner>;

type Story = StoryObj<typeof AlertBanner>;

export default meta;

export const Information = {
	name: 'Information',
	args: {
		level: 'information',
		children: 'This is an alert message for the top banner',
	},
} satisfies Story;

export const InformationWithIcon = {
	name: 'Information with Icon',
	args: {
		level: 'information',
		showIcon: true,
		children: 'This is an information alert message for the top banner',
	},
} satisfies Story;

export const InformationWithCloseButton = {
	name: 'Information with Close Button',
	args: {
		level: 'information',
		children: 'This is an information alert message for the top banner',
		closeButtonProps: {
			onPress: () => alert('Close button pressed'),
		},
	},
} satisfies Story;

export const InformationWithIconAndCloseButton = {
	name: 'Information with Icon and Close Button',
	args: {
		level: 'information',
		showIcon: true,
		children: 'This is an information alert message for the top banner',
		closeButtonProps: {
			onPress: () => alert('Close button pressed'),
		},
	},
} satisfies Story;

export const Error = {
	name: 'Error',
	args: {
		level: 'error',
		children: 'This is an error alert message for the top banner',
	},
} satisfies Story;

export const ErrorWithIcon = {
	name: 'Error with Icon',
	args: {
		level: 'error',
		showIcon: true,
		children: 'This is an error alert message for the top banner',
	},
} satisfies Story;

export const ErrorWithCloseButton = {
	name: 'Error with Close Button',
	args: {
		level: 'error',
		children: 'This is an error alert message for the top banner',
		closeButtonProps: {
			onPress: () => alert('Close button pressed'),
		},
	},
} satisfies Story;

export const ErrorWithIconAndCloseButton = {
	name: 'Error with Icon and Close Button',
	args: {
		level: 'error',
		showIcon: true,
		children: 'This is an error alert message for the top banner',
		closeButtonProps: {
			onPress: () => alert('Close button pressed'),
		},
	},
} satisfies Story;

export const Success = {
	name: 'Success',
	args: {
		level: 'success',
		children: 'This is a success alert message for the top banner',
	},
} satisfies Story;

export const SuccessWithIcon = {
	name: 'Success with Icon',
	args: {
		level: 'success',
		showIcon: true,
		children: 'This is a success alert message for the top banner',
	},
} satisfies Story;

export const SuccessWithCloseButton = {
	name: 'Success with Close Button',
	args: {
		level: 'success',
		children: 'This is a success alert message for the top banner',
		closeButtonProps: {
			onPress: () => alert('Close button pressed'),
		},
	},
} satisfies Story;

export const SuccessWithIconAndCloseButton = {
	name: 'Success with Icon and Close Button',
	args: {
		level: 'success',
		showIcon: true,
		children: 'This is a success alert message for the top banner',
		closeButtonProps: {
			onPress: () => alert('Close button pressed'),
		},
	},
} satisfies Story;

export const Warning = {
	name: 'Warning',
	args: {
		level: 'warning',
		children: 'This is a warning alert message for the top banner',
	},
} satisfies Story;

export const WarningWithIcon = {
	name: 'Warning with Icon',
	args: {
		level: 'warning',
		showIcon: true,
		children: 'This is a warning alert message for the top banner',
	},
} satisfies Story;

export const WarningWithCloseButton = {
	name: 'Warning with Close Button',
	args: {
		level: 'warning',
		children: 'This is a warning alert message for the top banner',
		closeButtonProps: {
			onPress: () => alert('Close button pressed'),
		},
	},
} satisfies Story;

export const WarningWithIconAndCloseButton = {
	name: 'Warning with Icon and Close Button',
	args: {
		level: 'warning',
		showIcon: true,
		children: 'This is a warning alert message for the top banner',
		closeButtonProps: {
			onPress: () => alert('Close button pressed'),
		},
	},
} satisfies Story;

export const CustomTheme = {
	name: 'Custom Theme',
	args: {
		level: 'error',
		children: 'Unable to save changes.',
		theme: {
			error: {
				'background-color': baseColors.red[100],
			},
			shared: {
				content: {
					color: baseColors.red[700],
				},
			},
		},
	},
} satisfies Story;

export const CssOverrides = {
	name: 'CSS Overrides',
	args: {
		level: 'success',
		children: 'Changes published successfully.',
		cssOverrides: css`
			box-shadow: inset 0 -2px 0 currentColor;
			text-transform: uppercase;
			letter-spacing: 0.04em;
		`,
	},
} satisfies Story;
