import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Grid, Item } from './Grid';

const demoItemStyles = css`
	background: #eff3ff;
	border: 1px solid #b8c9ff;
	border-radius: 6px;
	color: #0f1f4d;
	padding: 16px;
	text-align: center;
`;

const meta = {
	title: 'Stand/Tools Design System/Components/Grid',
	component: Grid,
	parameters: {},
} satisfies Meta<typeof Grid>;

type Story = StoryObj<typeof Grid>;

export default meta;

export const Basic = {
	name: 'Basic',
	render: (args) => (
		<Grid {...args}>
			<Item size={8} cssOverrides={demoItemStyles}>
				size=8
			</Item>
			<Item size={4} cssOverrides={demoItemStyles}>
				size=4
			</Item>
			<Item size={4} cssOverrides={demoItemStyles}>
				size=4
			</Item>
			<Item size={8} cssOverrides={demoItemStyles}>
				size=8
			</Item>
		</Grid>
	),
} satisfies Story;

export const Responsive = {
	name: 'Responsive',
	render: (args) => (
		<Grid {...args}>
			<Item size={{ sm: 12, md: 6, lg: 4 }} cssOverrides={demoItemStyles}>
				sm=12 md=6 lg=4
			</Item>
			<Item size={{ sm: 12, md: 6, lg: 4 }} cssOverrides={demoItemStyles}>
				sm=12 md=6 lg=4
			</Item>
			<Item size={{ sm: 12, md: 6, lg: 4 }} cssOverrides={demoItemStyles}>
				sm=12 md=6 lg=4
			</Item>
		</Grid>
	),
} satisfies Story;

export const AutoSize = {
	name: 'Auto size',
	render: (args) => (
		<Grid {...args}>
			<Item size="auto" cssOverrides={demoItemStyles}>
				size=auto (shrinks to content)
			</Item>
			<Item size={6} cssOverrides={demoItemStyles}>
				size=6
			</Item>
			<Item size="auto" cssOverrides={demoItemStyles}>
				size=auto (shrinks to content)
			</Item>
		</Grid>
	),
} satisfies Story;

export const GrowSize = {
	name: 'Grow size',
	render: (args) => (
		<Grid {...args}>
			<Item size="grow" cssOverrides={demoItemStyles}>
				size=grow
			</Item>
			<Item size={6} cssOverrides={demoItemStyles}>
				size=6
			</Item>
			<Item size="grow" cssOverrides={demoItemStyles}>
				size=grow
			</Item>
		</Grid>
	),
} satisfies Story;

export const Offset = {
	name: 'Offset',
	render: (args) => (
		<Grid {...args}>
			<Item size={6} offset={3} cssOverrides={demoItemStyles}>
				size=6 offset=3
			</Item>
			<Item size={4} offset={4} cssOverrides={demoItemStyles}>
				size=4 offset=4
			</Item>
			<Item size={4} cssOverrides={demoItemStyles}>
				size=4
			</Item>
			<Item size={4} offset="auto" cssOverrides={demoItemStyles}>
				size=4 offset=auto
			</Item>
		</Grid>
	),
} satisfies Story;

export const ResponsiveOffset = {
	name: 'Responsive offset',
	render: (args) => (
		<Grid {...args}>
			<Item
				size={6}
				offset={{ sm: 0, md: 3, lg: 0 }}
				cssOverrides={demoItemStyles}
			>
				size=6 offset=&#123;sm:0 md:3 lg:0&#125;
			</Item>
			<Item
				size={4}
				offset={{ sm: 0, md: 'auto', lg: 4 }}
				cssOverrides={demoItemStyles}
			>
				size=4 offset=&#123;sm:0 md:auto lg:4&#125;
			</Item>
		</Grid>
	),
} satisfies Story;

export const ResponsiveOffsetAndSize = {
	name: 'Responsive offset and size',
	render: (args) => (
		<Grid {...args}>
			<Item
				size={{ sm: 12, md: 6, lg: 4 }}
				offset={{ sm: 0, md: 3, lg: 2 }}
				cssOverrides={demoItemStyles}
			>
				size=&#123;sm:12 md:6 lg:4&#125; offset=&#123;sm:0 md:3 lg:2&#125;
			</Item>
			<Item
				size={{ sm: 12, md: 6, lg: 4 }}
				offset={{ sm: 0, md: 0, lg: 2 }}
				cssOverrides={demoItemStyles}
			>
				size=&#123;sm:12 md:6 lg:4&#125; offset=&#123;sm:0 md:0 lg:2&#125;
			</Item>
		</Grid>
	),
} satisfies Story;

export const CustomTheme = {
	name: 'Custom theme',
	render: (args) => (
		<Grid
			{...args}
			theme={{
				shared: {
					gap: '16px',
					columns: 12,
					justifyContent: 'space-between',
					alignItems: 'flex-start',
				},
			}}
		>
			<Item size={6} cssOverrides={demoItemStyles}>
				Column one
			</Item>
			<Item size={6} cssOverrides={demoItemStyles}>
				Column two
			</Item>
		</Grid>
	),
} satisfies Story;

export const CssOverrides = {
	name: 'CSS overrides',
	render: (args) => (
		<Grid
			{...args}
			cssOverrides={css`
				padding-block: 24px;
			`}
		>
			<Item size={8} cssOverrides={demoItemStyles}>
				Primary content
			</Item>
			<Item size={4} cssOverrides={demoItemStyles}>
				Sidebar
			</Item>
		</Grid>
	),
} satisfies Story;
