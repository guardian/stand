import { useEffect, useState } from 'react';
import { ToastQueue, ToastRegion } from '../src/components/Toast/Toast';
import type { ToastContent } from '../src/components/Toast/types';

export const DismissibleToast = () => {
	const [queue] = useState(() => new ToastQueue<ToastContent>());

	useEffect(() => {
		const key = queue.add({
			level: 'success',
			title: 'Changes saved',
			subject: 'Your updates are now available.',
			showIcon: true,
		});
		return () => queue.close(key);
	}, [queue]);

	return <ToastRegion queue={queue} />;
};