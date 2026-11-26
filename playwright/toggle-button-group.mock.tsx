import { useState } from 'react';
import type { Key } from 'react-aria-components';
import {
	ToggleButton,
	ToggleButtonGroup,
} from '../src/components/ToggleButtonGroup/ToggleButtonGroup';
import type { ToggleButtonGroupProps } from '../src/components/ToggleButtonGroup/types';

interface WidthSelectorProps extends ToggleButtonGroupProps {
	onSelectedValuesChange?: (keys: Key[]) => void;
	disabledItem?: Key;
}

export function WidthSelector({
	onSelectedValuesChange,
	onSelectionChange,
	disabledItem,
	...props
}: WidthSelectorProps) {
	return (
		<ToggleButtonGroup
			aria-label="Preview width"
			defaultSelectedKeys={['650']}
			{...props}
			onSelectionChange={(keys) => {
				onSelectionChange?.(keys);
				onSelectedValuesChange?.([...keys]);
			}}
		>
			<ToggleButton id="320">320</ToggleButton>
			<ToggleButton id="375" isDisabled={disabledItem === '375'}>
				375
			</ToggleButton>
			<ToggleButton id="425">425</ToggleButton>
			<ToggleButton id="650">650</ToggleButton>
		</ToggleButtonGroup>
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
			<ToggleButtonGroup
				aria-labelledby="width-label"
				selectedKeys={selectedKeys}
				onSelectionChange={setSelectedKeys}
				disallowEmptySelection
			>
				{() => (
					<>
						<ToggleButton id={320}>{() => 'Compact'}</ToggleButton>
						<ToggleButton
							id={650}
							className={({ isSelected }) =>
								isSelected ? 'selected-item' : 'item'
							}
						>
							Full width
						</ToggleButton>
					</>
				)}
			</ToggleButtonGroup>
			<output aria-label="Numeric selection">
				{[...selectedKeys].join(', ')}
			</output>
		</>
	);
}

export function ThemedSelector() {
	return (
		<>
			<ToggleButtonGroup
				aria-label="Theme example"
				theme={{ item: { color: 'rgb(36, 73, 29)' } }}
			>
				<ToggleButton id="one">One</ToggleButton>
				<ToggleButton id="two" theme={{ item: { color: 'rgb(105, 60, 22)' } }}>
					Two
				</ToggleButton>
			</ToggleButtonGroup>
			<WidthSelector />
		</>
	);
}
