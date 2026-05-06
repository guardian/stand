import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { baseColors } from '../../styleD/build/typescript/base/colors';
import { Link } from './Link';

const meta = {
	title: 'Stand/Tools Design System/Components/Link',
	component: Link,
	parameters: {},
	args: {},
} satisfies Meta<typeof Link>;

type Story = StoryObj<typeof Link>;

export default meta;

export const Default = {
	name: 'Default',
	args: {
		children: 'Link',
		href: 'https://www.theguardian.com',
	},
} satisfies Story;

export const Disabled = {
	args: {
		children: 'Link',
		isDisabled: true,
		href: 'https://www.theguardian.com',
	},
} satisfies Story;

export const BodyItalicBold = {
	args: {
		children: 'Link',
		href: 'https://www.theguardian.com',
		typography: 'body-italic-bold-sm',
	},
} satisfies Story;

export const BodyBold = {
	args: {
		children: 'Link',
		href: 'https://www.theguardian.com',
		typography: 'body-bold-sm',
	},
} satisfies Story;

export const CssOverrides = {
	args: {
		children: 'Link',
		href: 'https://www.theguardian.com',
		cssOverrides: css`
			text-decoration: none;
			color: ${baseColors.orange[400]};
		`,
	},
} satisfies Story;

export const CustomTheme = {
	args: {
		children: 'Link',
		href: 'https://www.theguardian.com',
		typography: 'body-bold-sm',
		theme: {
			shared: {
				hover: {
					color: 'hotpink',
				},
			},
		},
	},
} satisfies Story;
