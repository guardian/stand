export const componentName = 'SidebarStepperNavigation';

export const componentTsx = /* javascript */ `import { SidebarStepperNavigation } from '@guardian/stand/SidebarStepperNavigation';
import { useState } from 'react';

const stepNavConfig = {
	isNonLinear: true,
	steps: [
		{
			id: 'details',
			label: 'Details',
			canSkipFrom: true,
			canSkipTo: true,
			stepStatus: 'complete',
		},
		{ id: 'review', label: 'Review', canSkipTo: true },
		{ id: 'submit', label: 'Submit', canSkipTo: false },
	],
};

export const Component = () => {
	const [currentStepId, setCurrentStepId] = useState('details');

	return (
		<SidebarStepperNavigation
			currentStepId={currentStepId}
			stepNavConfig={stepNavConfig}
			onPress={setCurrentStepId}
		/>
	);
};
`;
