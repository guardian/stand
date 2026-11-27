import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import type { Key } from 'react-aria-components';
import { semanticColors } from '../../styleD/build/typescript/semantic/colors';
import { SegmentedControl, SegmentedControlItem } from './SegmentedControl';

const meta = {
	title: 'Stand/Tools Design System/Components/SegmentedControl',
	component: SegmentedControl,
	args: {
		'aria-label': 'Preview width',
		defaultSelectedKeys: ['650'],
		disallowEmptySelection: true,
		children: ['320', '375', '425', '650'].map((width) => (
			<SegmentedControlItem key={width} id={width}>
				{width}
			</SegmentedControlItem>
		)),
	},
} satisfies Meta<typeof SegmentedControl>;

type Story = StoryObj<typeof SegmentedControl>;

export const Default = {
	name: 'Newsletter preview widths',
} satisfies Story;

export const FigmaDesign = {
	name: 'Small condensed (Figma)',
	args: {
		'aria-label': 'Design reference',
		defaultSelectedKeys: ['second'],
		children: ['first', 'second', 'third', 'fourth'].map((id) => (
			<SegmentedControlItem key={id} id={id}>
				Label
			</SegmentedControlItem>
		)),
	},
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
				<SegmentedControl
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
				<SegmentedControlItem id="day">Day</SegmentedControlItem>
				<SegmentedControlItem id="week">Week</SegmentedControlItem>
				<SegmentedControlItem id="month">Month</SegmentedControlItem>
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
				<SegmentedControlItem id="320">320</SegmentedControlItem>
				<SegmentedControlItem id="375" isDisabled>
					375
				</SegmentedControlItem>
				<SegmentedControlItem id="425">425</SegmentedControlItem>
				<SegmentedControlItem id="650">650</SegmentedControlItem>
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
				<SegmentedControl
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
