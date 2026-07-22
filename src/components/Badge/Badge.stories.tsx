import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { baseColors, baseSpacing } from '../..';
import { tableStyles } from '../../util/storybook/styles';
import { Badge } from './Badge';
import { badgeColors, badgeSizes } from './types';

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
					{badgeSizes.map((size) => (
						<th key={size}>
							<code style={{ fontFamily: 'monospace' }}>{size}</code>
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{badgeColors.map((color) => (
					<>
						<tr key={`${color}`}>
							<td>
								<code style={{ fontFamily: 'monospace', fontWeight: 'bold' }}>
									{color}
								</code>
							</td>
							{badgeSizes.map((size) => (
								<td key={`${color}-${size}-enabled`}>
									<Badge color={color} size={size}>
										Badge text
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

const customThemeParams = {
	color: {
		green: {
			background: baseColors.coolPurple[200],
			color: baseColors.coolPurple[900],
		},
	},
	size: {
		md: {
			padding: {
				left: baseSpacing['8Px'],
				right: baseSpacing['40Px'],
			},
		},
	},
};

export const CustomTheme = {
	name: 'custom theme',
	args: {
		size: 'md',
		color: 'green',
		theme: customThemeParams,
		children: 'Custom theme badge',
	},
} satisfies Story;

export const CssOverrides = {
	name: 'cssOverrides',
	args: {
		size: 'md',
		color: 'green',
		cssOverrides: css`
			font-variant: small-caps;
		`,
		children: 'CSS Override Badge',
	},
} satisfies Story;
