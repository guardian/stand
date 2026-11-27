export const componentName = 'SegmentedControl';

export const componentTsx = /* javascript */ `import { useState } from 'react';
import { SegmentedControl, SegmentedControlItem } from '@guardian/stand/SegmentedControl';

export const Component = () => {
	const [selectedKey, setSelectedKey] = useState('board');

	return (
		<>
			<SegmentedControl
				aria-label="View mode"
				selectedKey={selectedKey}
				onSelectionChange={setSelectedKey}
			>
				{['List', 'Grid', 'Gallery', 'Board'].map((view) => (
					<SegmentedControlItem key={view} id={view.toLowerCase()}>{view}</SegmentedControlItem>
				))}
			</SegmentedControl>
			<p>Selected view: {selectedKey}</p>
		</>
	);
};
`;
