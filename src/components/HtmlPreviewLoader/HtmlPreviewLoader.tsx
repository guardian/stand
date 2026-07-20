import { useCallback, useEffect, useState } from 'react';
import { HtmlPreview } from './HtmlPreview';
import type { HtmlPreviewLoaderProps } from './types';

export const HtmlPreviewLoader = (props: HtmlPreviewLoaderProps) => {
	const { fetchHtml, ...rest } = props;

	const [html, setHtml] = useState<string>();
	const [error, setError] = useState<unknown>();
	const [isLoading, setIsLoading] = useState(true);

	const attemptLoad = useCallback(() => {
		setIsLoading(true);
		setError(undefined);
		void fetchHtml()
			.then(setHtml)
			.catch(setError)
			.finally(() => setIsLoading(false));
	}, [fetchHtml]);

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect -- is okay
		attemptLoad();
	}, [attemptLoad]);

	return (
		<HtmlPreview
			html={html}
			isLoading={isLoading}
			errorMessage={error ? 'failed to load' : undefined}
			attemptLoad={attemptLoad}
			{...rest}
		/>
	);
};
