import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { baseColors, baseSpacing } from '../..';
import { tableStyles } from '../../util/storybookStyles';
import { Button } from './Button';

const meta = {
	title: 'Stand/Tools Design System/Components/Button',
	component: Button,
	parameters: {},
	args: {
		children: 'Button Label',
		isDisabled: false,
	},
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export default meta;

const variants = [
	'emphasised-primary',
	'emphasised-secondary',
	'neutral-primary',
	'neutral-secondary',
] as const;
const sizes = ['xs', 'sm', 'md', 'lg'] as const;

export const ButtonTable = {
	name: 'Button Variants and Sizes',
	parameters: {
		docs: {
			description: {
				story:
					'This table showcases all Button variants and sizes in both enabled and disabled states.',
			},
		},
	},
	render: () => (
		<table css={tableStyles}>
			<thead>
				<tr>
					<th>
						<code>variant</code> / <code>size</code>
					</th>
					{sizes.map((size) => (
						<th key={size}>
							<code>{size}</code>
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{variants.map((variant) => (
					<>
						<tr key={`${variant}-enabled`}>
							<td>
								<code>{variant}</code> (enabled)
							</td>
							{sizes.map((size) => (
								<td key={`${variant}-${size}-enabled`}>
									<Button variant={variant} size={size}>
										Button Label
									</Button>
								</td>
							))}
						</tr>
						<tr key={`${variant}-disabled`}>
							<td>
								<code>{variant}</code> (disabled)
							</td>
							{sizes.map((size) => (
								<td key={`${variant}-${size}-disabled`}>
									<Button variant={variant} size={size} isDisabled>
										Button Label
									</Button>
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
		children: 'Custom Themed Button',
		variant: 'emphasised-primary',
		size: 'md',
		theme: {
			'emphasised-primary': {
				shared: {
					backgroundColor: baseColors['cool-purple'][200],
					color: baseColors['cool-purple'][900],
					border: `2px solid ${baseColors['cool-purple'][700]}`,
					':hover': {
						backgroundColor: baseColors['cool-purple'][300],
						border: `2px solid ${baseColors['cool-purple'][700]}`,
					},
					':active': {
						backgroundColor: baseColors['cool-purple'][400],
						border: `2px solid ${baseColors['cool-purple'][700]}`,
					},
				},
			},
		},
	},
} satisfies Story;

export const CssOverrides = {
	name: 'cssOverrides',
	args: {
		children: 'CSSOverrides Button',
		variant: 'emphasised-primary',
		size: 'md',
		cssOverrides: css`
			width: 100%;
			text-transform: full-width;
			font-variant: small-caps;
			padding-inline: ${baseSpacing['24-rem']};
		`,
	},
} satisfies Story;

export const WithIconAllVariants = {
	name: 'with icon - all variants and sizes',
	parameters: {
		docs: {
			description: {
				story:
					'This table showcases all Button variants and sizes with icons in both enabled and disabled states.',
			},
		},
	},
	render: () => (
		<table css={tableStyles}>
			<thead>
				<tr>
					<th>
						<code>variant</code> / <code>size</code>
					</th>
					{sizes.map((size) => (
						<th key={size}>
							<code>{size}</code>
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{variants.map((variant) => (
					<>
						<tr key={`${variant}-enabled`}>
							<td>
								<code>{variant}</code> (enabled)
							</td>
							{sizes.map((size) => (
								<td key={`${variant}-${size}-enabled`}>
									<Button variant={variant} size={size} icon="upload">
										Button Label
									</Button>
								</td>
							))}
						</tr>
						<tr key={`${variant}-disabled`}>
							<td>
								<code>{variant}</code> (disabled)
							</td>
							{sizes.map((size) => (
								<td key={`${variant}-${size}-disabled`}>
									<Button
										variant={variant}
										size={size}
										icon="upload"
										isDisabled
									>
										Button Label
									</Button>
								</td>
							))}
						</tr>
					</>
				))}
			</tbody>
		</table>
	),
} satisfies Story;
