import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import type { Key } from 'react-aria-components';
import { semanticColors } from '../../styleD/build/typescript/semantic/colors';
import { ToggleButton, ToggleButtonGroup } from './ToggleButtonGroup';

const meta = {
	title: 'Stand/Tools Design System/Components/ToggleButtonGroup',
	component: ToggleButtonGroup,
	args: {
		'aria-label': 'Preview width',
		defaultSelectedKeys: ['650'],
		disallowEmptySelection: true,
		children: ['320', '375', '425', '650'].map((width) => (
			<ToggleButton key={width} id={width}>
				{width}
			</ToggleButton>
		)),
	},
} satisfies Meta<typeof ToggleButtonGroup>;

type Story = StoryObj<typeof ToggleButtonGroup>;

export const Default = {
	name: 'Newsletter preview widths',
} satisfies Story;

export const OptionalSelection = {
	args: {
		defaultSelectedKeys: [],
		disallowEmptySelection: false,
	},
} satisfies Story;

export const Controlled = {
	render: function ControlledGroup(args) {
		const [selectedKeys, setSelectedKeys] = useState<Set<Key>>(
			new Set(['650']),
		);
		return (
			<>
				<ToggleButtonGroup
					{...args}
					selectedKeys={selectedKeys}
					onSelectionChange={setSelectedKeys}
				/>
				<p>Selected width: {[...selectedKeys].join(', ')}</p>
			</>
		);
	},
} satisfies Story;

export const OtherLabels = {
	args: {
		'aria-label': 'Time period',
		defaultSelectedKeys: ['week'],
		children: (
			<>
				<ToggleButton id="day">Day</ToggleButton>
				<ToggleButton id="week">Week</ToggleButton>
				<ToggleButton id="month">Month</ToggleButton>
			</>
		),
	},
} satisfies Story;

export const Disabled = {
	args: { isDisabled: true },
} satisfies Story;

export const DisabledItem = {
	args: {
		children: (
			<>
				<ToggleButton id="320">320</ToggleButton>
				<ToggleButton id="375" isDisabled>
					375
				</ToggleButton>
				<ToggleButton id="425">425</ToggleButton>
				<ToggleButton id="650">650</ToggleButton>
			</>
		),
	},
} satisfies Story;

export const DisabledSelectedItem = {
	args: {
		defaultSelectedKeys: ['375'],
		children: DisabledItem.args.children,
	},
} satisfies Story;

export const SelectedPositions = {
	render: (args) => (
		<div css={css({ display: 'grid', gap: '1rem', justifyItems: 'start' })}>
			{['320', '375', '425', '650'].map((selected) => (
				<ToggleButtonGroup
					{...args}
					key={selected}
					aria-label={`Preview width, ${selected} selected`}
					defaultSelectedKeys={[selected]}
				/>
			))}
		</div>
	),
} satisfies Story;

export const CustomTheme = {
	args: {
		theme: {
			item: {
				selected: {
					backgroundColor: semanticColors.fill.greenWeak,
					borderColor: semanticColors.border.success,
					color: semanticColors.text.green,
				},
			},
		},
	},
} satisfies Story;

export const CssOverrides = {
	args: {
		cssOverrides: css({
			width: '100%',
			'> button': { flex: 1 },
		}),
	},
} satisfies Story;

export default meta;
