import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography } from './Typography';

const meta = {
	title: 'Stand/Tools Design System/Components/Typography',
	component: Typography,
	parameters: {},
	args: {
		element: 'div',
		variant: 'body-md',
		children: 'Text',
	},
} satisfies Meta<typeof Typography>;

type Story = StoryObj<typeof Typography>;

export const Body = {
	args: {
		element: 'div',
		variant: 'body-md',
		children: 'Body',
	},
} satisfies Story;

export const CustomTheme = {
	args: {
		theme: {
			color: 'red',
		},
	},
} satisfies Story;

export const HeadingCompact = {
	args: {
		element: 'h1',
		variant: 'heading-compact-2xl',
		children: 'Heading Compact',
	},
} satisfies Story;

export const Nested = {
	render: () => {
		return (
			<Typography element="div" variant="body-md">
				Some text, with{' '}
				<Typography element="i" variant="body-italic-md">
					even more text
				</Typography>
			</Typography>
		);
	},
} satisfies Story;

export default meta;
