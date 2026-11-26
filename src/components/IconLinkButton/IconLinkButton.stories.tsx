import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { base } from '../../terrazzo/build/stand';
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
					backgroundColor: base.colors.coolPurple[200],
					color: base.colors.coolPurple[900],
					border: `2px solid ${base.colors.coolPurple[700]}`,
					hover: {
						backgroundColor: base.colors.coolPurple[300],
						border: `2px solid ${base.colors.coolPurple[700]}`,
					},
					active: {
						backgroundColor: base.colors.coolPurple[400],
						border: `2px solid ${base.colors.coolPurple[700]}`,
					},
				},
			},
		},
	},
} satisfies Story;

export const DangerouslyOverrideCss = {
	name: 'dangerouslyOverrideCss',
	args: {
		children: 'add',
		variant: 'primary',
		size: 'md',
		ariaLabel: 'Add',
		dangerouslyOverrideCss: css`
			width: 100%;
			padding-inline: ${base.spacing['24Rem']};
		`,
	},
} satisfies Story;
