export const componentName = 'Toast';

export const componentTsx = /* javascript */ `import { Button } from '@guardian/stand/Button';
import { ToastRegion, toastQueue } from '@guardian/stand/Toast';

export const Component = () => (
	<>
		<Button
			onPress={() =>
				toastQueue.add(
					{
						level: 'success',
						title: 'Changes saved',
						subject: 'Your updates are now available.',
						showIcon: true,
					},
					{ timeout: 5000 },
				)
			}
		>
			Save
		</Button>
		<ToastRegion />
	</>
);
`;
