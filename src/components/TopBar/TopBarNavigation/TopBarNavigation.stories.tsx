import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { base, semantic } from '../../../terrazzo/build/stand';
import { tableStyles } from '../../../util/storybook/styles';
import { MenuItem, MenuSection } from '../../Menu/Menu';
import { TopBarNavigation } from './TopBarNavigation';
import type { TopBarNavigationProps } from './types';

const meta = {
	title: 'Stand/Tools Design System/Components/TopBar/TopBarNavigation',
	component: TopBarNavigation,
	parameters: {},
	args: {
		onPress: () => {},
	},
	render: (props) => renderBothSizes(props),
} satisfies Meta<typeof TopBarNavigation>;

type Story = StoryObj<typeof TopBarNavigation>;

export default meta;

// render a sm and md size side by side
const renderBothSizes = (props: TopBarNavigationProps) => (
	<table
		css={[
			tableStyles,
			css`
				tr:hover {
					background: unset;
				}
			`,
		]}
	>
		<thead>
			<tr>
				<th>Small</th>
				<th>Medium</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td
					css={css`
						height: 100px;
					`}
				>
					<TopBarNavigation {...props} size="sm" />
				</td>
				<td
					css={css`
						height: 100px;
					`}
				>
					<TopBarNavigation {...props} size="md" />
				</td>
			</tr>
			<tr>
				<td
					css={css`
						height: 100px;
					`}
				>
					<TopBarNavigation {...props} size="sm" _menuOpen />
				</td>
				<td
					css={css`
						height: 100px;
					`}
				>
					<TopBarNavigation {...props} size="md" _menuOpen />
				</td>
			</tr>
		</tbody>
	</table>
);

export const Default = {
	name: 'Default',
	args: {
		text: 'Navigation',
	},
} satisfies Story;

export const WithIcon = {
	args: {
		text: 'Navigation',
		icon: 'file_upload',
	},
} satisfies Story;

export const WithMenu = {
	args: {
		text: 'Navigation',
		icon: 'file_upload',
		menuChildren: (
			<MenuSection name="Menu section">
				<MenuItem label="Menu item 1" />
				<MenuItem label="Menu item 2" />
			</MenuSection>
		),
	},
} satisfies Story;

export const WithMenuDisabled = {
	args: {
		text: 'Navigation',
		icon: 'file_upload',
		isDisabled: true,
		menuChildren: (
			<MenuSection name="Menu section">
				<MenuItem label="Menu item 1" />
				<MenuItem label="Menu item 2" />
			</MenuSection>
		),
	},
} satisfies Story;

export const Selected = {
	args: {
		text: 'Navigation',
		icon: 'file_upload',
		isSelected: true,
	},
} satisfies Story;

export const Disabled = {
	args: {
		text: 'Navigation',
		icon: 'file_upload',
		isDisabled: true,
	},
} satisfies Story;

export const CustomTheme = {
	args: {
		text: 'Navigation',
		icon: 'file_upload',
		isSelected: true,
		theme: {
			selected: {
				color: base.colors.blue[200],
				borderBottom: `1px solid ${base.colors.coolPurple[700]}`,
			},
		},
	},
} satisfies Story;

export const DangerouslyOverrideCss = {
	args: {
		text: 'Navigation',
		icon: 'file_upload',
		isSelected: true,
		dangerouslyOverrideCss: css`
			background-color: ${semantic.colors.fill.strongHover};
			color: ${semantic.colors.text.strongInverse};
		`,
	},
} satisfies Story;
