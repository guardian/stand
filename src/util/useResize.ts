import { useEffect, useLayoutEffect, useRef } from 'react';

const useIsomorphicLayoutEffect =
	typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export const useResize = (callback: () => void, debounceMs = 100) => {
	const callbackRef = useRef(callback);

	useIsomorphicLayoutEffect(() => {
		callbackRef.current = callback;
	});

	useEffect(() => {
		if (typeof window === 'undefined') {
			return;
		}

		let timeout: ReturnType<typeof setTimeout> | null = null;

		const handleResize = () => {
			if (timeout) {
				clearTimeout(timeout);
			}

			timeout = setTimeout(() => {
				callbackRef.current();
			}, debounceMs);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			if (timeout) {
				clearTimeout(timeout);
			}
			window.removeEventListener('resize', handleResize);
		};
	}, [debounceMs]);
};
