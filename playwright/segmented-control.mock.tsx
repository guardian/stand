import { useState } from 'react';
import type { Key } from 'react-aria-components';
import {
	SegmentedControl,
	SegmentedControlItem,
} from '../src/SegmentedControl';
import type { SegmentedControlProps } from '../src/SegmentedControl';

export function ExampleSegmentedControl(props: SegmentedControlProps) {
	return (
		<SegmentedControl
			aria-label="View mode"
			defaultSelectedKeys={['list']}
			{...props}
		>
			<SegmentedControlItem id="list">List</SegmentedControlItem>
			<SegmentedControlItem id="grid">Grid</SegmentedControlItem>
		</SegmentedControl>
	);
}

export function ControlledSegmentedControl() {
	const [selectedKeys, setSelectedKeys] = useState<Set<Key>>(new Set(['list']));

	return (
		<>
			<ExampleSegmentedControl
				selectedKeys={selectedKeys}
				onSelectionChange={setSelectedKeys}
			/>
			<output aria-label="Selected view">{[...selectedKeys].join(', ')}</output>
		</>
	);
}
