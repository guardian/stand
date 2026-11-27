export const componentName = 'SegmentedControl';

export const componentTsx = /* javascript */ `import { useState } from 'react';
import { SegmentedControl, SegmentedControlItem } from '@guardian/stand/SegmentedControl';

export const Component = () => {
	const [selectedKey, setSelectedKey] = useState(425);

	return (
		<>
			<SegmentedControl
				aria-label="Preview width"
				selectedKey={selectedKey}
				onSelectionChange={setSelectedKey}
			>
				{[320, 375, 425, 650].map((width) => (
					<SegmentedControlItem key={width} id={width}>{width}px</SegmentedControlItem>
				))}
			</SegmentedControl>
			<p>Preview width: {selectedKey}px</p>
		</>
	);
};
`;
