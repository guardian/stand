import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { baseColors } from '../../../styleD/build/typescript/base/colors';
import { semanticColors } from '../../../styleD/build/typescript/semantic/colors';
import { tableStyles } from '../../../util/storybook/styles';
import { MenuItem, MenuSection } from '../../menu/Menu';
import { TopBarNavigation } from './TopBarNavigation';
import type { TopBarNavigationProps } from './types';

const meta = {
	title: 'Stand/Tools Design System/Components/TopBar/Navigation',
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
	<table css={tableStyles}>
		<thead>
			<tr>
				<th>Small</th>
				<th>Medium</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>
					<TopBarNavigation {...props} size="sm" />
				</td>
				<td>
					<TopBarNavigation {...props} size="md" />
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
				color: baseColors.blue[200],
				'border-bottom': `5px solid ${baseColors['cool-purple'][700]}`,
			},
		},
	},
} satisfies Story;

export const CssOverrides = {
	args: {
		text: 'Navigation',
		icon: 'file_upload',
		isSelected: true,
		cssOverrides: css`
			background-color: ${semanticColors.surface['dark-1']};
			color: ${semanticColors.text['inverse-default']};
		`,
	},
} satisfies Story;
