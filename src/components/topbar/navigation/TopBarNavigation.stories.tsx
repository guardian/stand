import type { Meta, StoryObj } from '@storybook/react-vite';
import { tableStyles } from '../../../util/storybook/styles';
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

export const Expandable = {
	args: {
		text: 'Navigation',
		icon: 'file_upload',
		expandsMore: true,
	},
} satisfies Story;

export const Selected = {
	args: {
		text: 'Navigation',
		icon: 'file_upload',
		expandsMore: true,
		isSelected: true,
	},
} satisfies Story;

export const Disabled = {
	args: {
		text: 'Navigation',
		icon: 'file_upload',
		expandsMore: true,
		isDisabled: true,
	},
} satisfies Story;
