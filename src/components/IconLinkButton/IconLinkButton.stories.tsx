import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { baseColors, baseSpacing } from '../..';
import { tableStyles } from '../../util/storybook/styles';
import { IconLinkButton } from './IconLinkButton';

const meta = {
	title: 'Stand/Tools Design System/Components/IconLinkButton',
	component: IconLinkButton,
	parameters: {},
	args: {
		children: 'IconLinkButton Label',
		isDisabled: false,
	},
} satisfies Meta<typeof IconLinkButton>;

type Story = StoryObj<typeof IconLinkButton>;

export default meta;

const variants = ['primary', 'secondary', 'tertiary'] as const;
const sizes = ['xs', 'sm', 'md', 'lg'] as const;

export const IconLinkButtonTable = {
	name: 'IconLinkButton Variants and Sizes',
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
									<IconLinkButton
										href="#"
										variant={variant}
										size={size}
										ariaLabel="Add"
									>
										add
									</IconLinkButton>
								</td>
							))}
						</tr>
						<tr key={`${variant}-disabled`}>
							<td>
								<code>{variant}</code> (disabled)
							</td>
							{sizes.map((size) => (
								<td key={`${variant}-${size}-disabled`}>
									<IconLinkButton
										href="#"
										variant={variant}
										size={size}
										isDisabled
										ariaLabel="Add"
									>
										add
									</IconLinkButton>
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
		children: 'add',
		variant: 'primary',
		size: 'md',
		ariaLabel: 'Add',
		theme: {
			primary: {
				shared: {
					backgroundColor: baseColors.coolPurple[200],
					color: baseColors.coolPurple[900],
					border: `2px solid ${baseColors.coolPurple[700]}`,
					hover: {
						backgroundColor: baseColors.coolPurple[300],
						border: `2px solid ${baseColors.coolPurple[700]}`,
					},
					active: {
						backgroundColor: baseColors.coolPurple[400],
						border: `2px solid ${baseColors.coolPurple[700]}`,
					},
				},
			},
		},
	},
} satisfies Story;

export const CssOverrides = {
	name: 'cssOverrides',
	args: {
		children: 'add',
		variant: 'primary',
		size: 'md',
		ariaLabel: 'Add',
		cssOverrides: css`
			width: 100%;
			padding-inline: ${baseSpacing['24Rem']};
		`,
	},
} satisfies Story;
