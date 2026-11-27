import { useState } from 'react';
import type { Key } from 'react-aria-components';
import {
	SegmentedControl,
	SegmentedControlItem,
} from '../src/SegmentedControl';
import type { SegmentedControlProps } from '../src/SegmentedControl';

interface ExampleSegmentedControlProps extends SegmentedControlProps {
	onSelectedValuesChange?: (keys: Key[]) => void;
	disabledItem?: Key;
}

export function DesignReferenceSelector() {
	return (
		<SegmentedControl
			aria-label="Design reference"
			defaultSelectedKeys={['second']}
			disallowEmptySelection
		>
			{['first', 'second', 'third', 'fourth'].map((id) => (
				<SegmentedControlItem key={id} id={id}>
					Label
				</SegmentedControlItem>
			))}
		</SegmentedControl>
	);
}

export function ExampleSegmentedControl({
	onSelectedValuesChange,
	onSelectionChange,
	disabledItem,
	...props
}: ExampleSegmentedControlProps) {
	return (
		<SegmentedControl
			aria-label="View mode"
			defaultSelectedKeys={['board']}
			{...props}
			onSelectionChange={(keys) => {
				onSelectionChange?.(keys);
				onSelectedValuesChange?.([...keys]);
			}}
		>
			<SegmentedControlItem id="list">List</SegmentedControlItem>
			<SegmentedControlItem id="grid" isDisabled={disabledItem === 'grid'}>
				Grid
			</SegmentedControlItem>
			<SegmentedControlItem id="gallery">Gallery</SegmentedControlItem>
			<SegmentedControlItem id="board">Board</SegmentedControlItem>
		</SegmentedControl>
	);
}

export function ControlledSegmentedControl() {
	const [selectedKeys, setSelectedKeys] = useState<Set<Key>>(
		new Set(['board']),
	);
	return (
		<>
			<ExampleSegmentedControl
				selectedKeys={selectedKeys}
				onSelectionChange={setSelectedKeys}
				disallowEmptySelection
			/>
			<output aria-label="Selection">{[...selectedKeys].join(', ')}</output>
			<button onClick={() => setSelectedKeys(new Set(['list']))}>
				Reset selection
			</button>
		</>
	);
}

export function LabelledNumericSelector() {
	const [selectedKeys, setSelectedKeys] = useState<Set<Key>>(new Set([1]));
	return (
		<>
			<span id="density-label">Display density</span>
			<SegmentedControl
				aria-labelledby="density-label"
				selectedKeys={selectedKeys}
				onSelectionChange={setSelectedKeys}
				disallowEmptySelection
			>
				{() => (
					<>
						<SegmentedControlItem id={1}>
							{() => 'Compact'}
						</SegmentedControlItem>
						<SegmentedControlItem
							id={2}
							className={({ isSelected }) =>
								isSelected ? 'selected-item' : 'item'
							}
						>
							Comfortable
						</SegmentedControlItem>
					</>
				)}
			</SegmentedControl>
			<output aria-label="Numeric selection">
				{[...selectedKeys].join(', ')}
			</output>
		</>
	);
}

export function ThemedSelector() {
	return (
		<>
			<SegmentedControl
				aria-label="Theme example"
				theme={{ item: { color: 'rgb(36, 73, 29)' } }}
			>
				<SegmentedControlItem id="one">One</SegmentedControlItem>
				<SegmentedControlItem
					id="two"
					theme={{ item: { color: 'rgb(105, 60, 22)' } }}
				>
					Two
				</SegmentedControlItem>
			</SegmentedControl>
			<ExampleSegmentedControl />
		</>
	);
}
