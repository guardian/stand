import * as React from 'react';

let nextId = 0;

type ReactWithUseId = typeof React & {
	useId?: () => string;
};

const reactUseId = (React as ReactWithUseId).useId;

/**
 * Uses React's SSR-safe ID hook when available, falling back to a named counter
 * for React 17 compatibility.
 */
export const useId = (fallbackName: string) => {
	const [fallbackId] = React.useState(() => `${fallbackName}-${nextId++}`);

	return reactUseId?.() ?? fallbackId;
};
