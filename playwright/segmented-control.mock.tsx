import { useState } from 'react';
import type { Key } from 'react-aria-components';
import {
	SegmentedControl,
	SegmentedControlItem,
} from '../src/SegmentedControl';
import type { SegmentedControlProps } from '../src/SegmentedControl';

interface WidthSelectorProps extends SegmentedControlProps {
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

export function WidthSelector({
	onSelectedValuesChange,
	onSelectionChange,
	disabledItem,
	...props
}: WidthSelectorProps) {
	return (
		<SegmentedControl
			aria-label="Preview width"
			defaultSelectedKeys={['650']}
			{...props}
			onSelectionChange={(keys) => {
				onSelectionChange?.(keys);
				onSelectedValuesChange?.([...keys]);
			}}
		>
			<SegmentedControlItem id="320">320</SegmentedControlItem>
			<SegmentedControlItem id="375" isDisabled={disabledItem === '375'}>
				375
			</SegmentedControlItem>
			<SegmentedControlItem id="425">425</SegmentedControlItem>
			<SegmentedControlItem id="650">650</SegmentedControlItem>
		</SegmentedControl>
	);
}

export function ControlledWidthSelector() {
	const [selectedKeys, setSelectedKeys] = useState<Set<Key>>(new Set(['650']));
	return (
		<>
			<WidthSelector
				selectedKeys={selectedKeys}
				onSelectionChange={setSelectedKeys}
				disallowEmptySelection
			/>
			<output aria-label="Selection">{[...selectedKeys].join(', ')}</output>
			<button onClick={() => setSelectedKeys(new Set(['320']))}>
				Reset selection
			</button>
		</>
	);
}

export function LabelledNumericSelector() {
	const [selectedKeys, setSelectedKeys] = useState<Set<Key>>(new Set([320]));
	return (
		<>
			<span id="width-label">Display size</span>
			<SegmentedControl
				aria-labelledby="width-label"
				selectedKeys={selectedKeys}
				onSelectionChange={setSelectedKeys}
				disallowEmptySelection
			>
				{() => (
					<>
						<SegmentedControlItem id={320}>
							{() => 'Compact'}
						</SegmentedControlItem>
						<SegmentedControlItem
							id={650}
							className={({ isSelected }) =>
								isSelected ? 'selected-item' : 'item'
							}
						>
							Full width
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
			<WidthSelector />
		</>
	);
}
