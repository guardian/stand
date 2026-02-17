import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { baseColors, baseSpacing } from '../..';
import { tableStyles } from '../../util/storybookStyles';
import { LinkButton } from './LinkButton';

const meta = {
	title: 'Stand/Editorial Design System/Components/LinkButton',
	component: LinkButton,
	parameters: {},
	args: {
		href: '#',
		children: 'LinkButton Label',
		isDisabled: false,
	},
} satisfies Meta<typeof LinkButton>;

type Story = StoryObj<typeof LinkButton>;

export default meta;

const variants = [
	'emphasised-primary',
	'emphasised-secondary',
	'neutral-primary',
	'neutral-secondary',
] as const;
const sizes = ['xs', 'sm', 'md', 'lg'] as const;

export const LinkButtonTable = {
	name: 'Button Variants and Sizes',
	parameters: {
		docs: {
			description: {
				story: 'This table showcases all Button variants and sizes in both enabled and disabled states.',
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
									<LinkButton
										href="#"
										variant={variant}
										size={size}
									>
										LinkButton Label
									</LinkButton>
								</td>
							))}
						</tr>
						<tr key={`${variant}-disabled`}>
							<td>
								<code>{variant}</code> (disabled)
							</td>
							{sizes.map((size) => (
								<td key={`${variant}-${size}-disabled`}>
									<LinkButton
										href="#"
										variant={variant}
										size={size}
										isDisabled
									>
										LinkButton Label
									</LinkButton>
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
		children: 'Custom Themed LinkButton',
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
		children: 'CSSOverrides LinkButton',
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
