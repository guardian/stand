// Component Name
export const componentName = 'PickerIframeModal';

// React sandbox example
export const componentTsx = /* javascript */ `
import { useState } from 'react';
import { PickerIframeModal } from '@guardian/stand/PickerIframeModal';

export const Component = () => {
	const [href, setHref] = useState(undefined);

	return (
		<>
			<button onClick={() => setHref('https://example.com/picker')}>
				Open example.com
			</button>
			<PickerIframeModal
				title="example.com"
				href={href}
				validate={(messageData) => {
					if (
						messageData &&
						typeof messageData === 'object' &&
						'symbol' in messageData &&
						typeof messageData.symbol === 'string'
					) {
						return { data: messageData.symbol };
					}
					return { data: undefined };
				}}
				handleData={(data) => {
					console.log(data);
				}}
				closeModal={() => setHref(undefined)}
				showOpenInNewTabButton
			/>
		</>
	);
};
`;
