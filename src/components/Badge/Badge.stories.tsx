// import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
// import { baseColors, baseSpacing } from '../..';
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
	args: {
		// children: 'Custom Themed Button',
		// variant: 'primary',
		// size: 'md',
		// theme: {
		// 	primary: {
		// 		shared: {
		// 			backgroundColor: baseColors.coolPurple[200],
		// 			color: baseColors.coolPurple[900],
		// 			border: `2px solid ${baseColors.coolPurple[700]}`,
		// 			hover: {
		// 				backgroundColor: baseColors.coolPurple[300],
		// 				border: `2px solid ${baseColors.coolPurple[700]}`,
		// 			},
		// 			active: {
		// 				backgroundColor: baseColors.coolPurple[400],
		// 				border: `2px solid ${baseColors.coolPurple[700]}`,
		// 			},
		// 		},
		// 	},
		// },
	},
} satisfies Story;

export const CssOverrides = {
	name: 'cssOverrides',
	args: {
		// children: 'CSSOverrides Button',
		// variant: 'primary',
		// size: 'md',
		// cssOverrides: css`
		// 	width: 100%;
		// 	text-transform: full-width;
		// 	font-variant: small-caps;
		// 	padding-inline: ${baseSpacing['24Rem']};
		// `,
	},
} satisfies Story;
