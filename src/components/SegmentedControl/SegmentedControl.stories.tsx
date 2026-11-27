import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import type { Key } from 'react-aria-components';
import { semanticColors } from '../../styleD/build/typescript/semantic/colors';
import { SegmentedControl, SegmentedControlItem } from './SegmentedControl';

const widths = [320, 375, 425, 650];

const meta = {
	title: 'Stand/Tools Design System/Components/SegmentedControl',
	component: SegmentedControl,
	args: {
		'aria-label': 'Preview width',
		defaultSelectedKey: 425,
		children: widths.map((width) => (
			<SegmentedControlItem key={width} id={width}>
				{width}
			</SegmentedControlItem>
		)),
	},
} satisfies Meta<typeof SegmentedControl>;

type Story = StoryObj<typeof SegmentedControl>;

export const Default = {} satisfies Story;

export const Controlled = {
	render: function ControlledSegmentedControl(args) {
		const [selectedKey, setSelectedKey] = useState<Key>(425);
		return (
			<>
				<SegmentedControl
					{...args}
					selectedKey={selectedKey}
					onSelectionChange={setSelectedKey}
				/>
				<p>Preview width: {selectedKey}px</p>
			</>
		);
	},
} satisfies Story;

export const SelectedPositions = {
	render: (args) => (
		<div css={css({ display: 'grid', gap: '1rem', justifyItems: 'start' })}>
			{widths.map((selected) => (
				<SegmentedControl
					{...args}
					key={selected}
					aria-label={`Preview width, ${selected}px selected`}
					defaultSelectedKey={selected}
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
