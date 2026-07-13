import { useEffect, useState } from 'react';
import { HtmlPreview } from './HtmlPreview';
import type { HtmlPreviewLoaderProps } from './types';

export const HtmlPreviewLoader = (props: HtmlPreviewLoaderProps) => {
	const { fetchHtml, ...rest } = props;

	const [html, setHtml] = useState<string>();
	const [error, setError] = useState<unknown>();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect -- ok
		setIsLoading(true);
		void fetchHtml()
			.then(setHtml)
			.catch(setError)
			.finally(() => setIsLoading(false));
	}, [fetchHtml]);

	return (
		<HtmlPreview
			html={html}
			isLoading={isLoading}
			errorMessage={error ? 'failed to load preview' : undefined}
			{...rest}
		/>
	);
};
