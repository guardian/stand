import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
// import { baseColors, baseSizing } from '../..';
import { tableStyles } from '../../util/storybook/styles';
import { Badge } from './Badge';

const meta = {
	title: 'Stand/Tools Design System/Components/Badge',
	component: Badge,
	parameters: {},
	args: {
		children: 'Badge Label',
	},
} satisfies Meta<typeof Badge>;

type Story = StoryObj<typeof Badge>;

export default meta;

const colors = [
	'green',
	'yellow',
	'grey',
	'orange',
	'warmPurple',
	'red',
] as const;
const sizes = ['xs', 'sm', 'md'] as const;

export const BadgeTable = {
	name: 'Badge Colors and Sizes',
	parameters: {
		docs: {
			description: {
				story: 'This table showcases all Badge colors and sizes.',
			},
		},
	},
	render: () => (
		<table css={tableStyles}>
			<thead>
				<tr>
					<th>
						<code>color</code> / <code>size</code>
					</th>
					{sizes.map((size) => (
						<th key={size}>
							<code style={{ fontFamily: 'monospace' }}>{size}</code>
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{colors.map((color) => (
					<>
						<tr key={`${color}`}>
							<td>
								<code style={{ fontFamily: 'monospace', fontWeight: 'bold' }}>
									{color}
								</code>
							</td>
							{sizes.map((size) => (
								<td key={`${color}-${size}-enabled`}>
									<Badge color={color} size={size}>
										Badge Label
									</Badge>
								</td>
							))}
						</tr>
					</>
				))}
			</tbody>
		</table>
	),
} satisfies Story;

export const CustomTheme = {
	name: 'custom theme',
	// 	theme: {
	// 		size: {
	// 			md: {
	// 				// display: 'inline-flex',
	// 				// alignItems: 'center',
	// 				// justifyContent: 'center',
	// 				// padding: {
	// 				// 	top: '4px',
	// 				// 	right: '12px',
	// 				// 	bottom: '4px',
	// 				// 	left: '12px',
	// 				// },
	// 				// typography: {
	// 				// 	font: 'normal 700 1rem/1.15 Open Sans',
	// 				// 	letterSpacing: '-0.03125rem',
	// 				// 	fontWidth: 95,
	// 				// },
	// 				fontSize: baseSizing.size48Rem,
	// 			},
	// 		color: {
	// 			green: {
	// 				color: baseColors.coolPurple[900],
	// 			}
	// 		}
	// 	},
	// },
} satisfies Story;

export const CssOverrides = {
	name: 'cssOverrides',
	args: {
		size: 'md',
		color: 'green',
		cssOverrides: css`
			font-variant: small-caps;
		`,
	},
} satisfies Story;
