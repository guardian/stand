import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography } from './Typography';

const meta = {
	title: 'Stand/Tools Design System/Components/Typography',
	component: Typography,
	parameters: {},
	args: {
		element: 'div',
		variant: 'bodyMd',
		children: 'Text',
	},
} satisfies Meta<typeof Typography>;

type Story = StoryObj<typeof Typography>;

export const Body = {
	args: {
		element: 'div',
		variant: 'bodyMd',
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
		variant: 'headingCompact2Xl',
		children: 'Heading Compact',
	},
} satisfies Story;

export const Nested = {
	render: () => {
		return (
			<Typography element="div" variant="bodyMd">
				Some text, with{' '}
				<Typography element="i" variant="bodyItalicMd">
					even more text
				</Typography>
			</Typography>
		);
	},
} satisfies Story;

export default meta;
