import { useEffect, useState } from 'react';
import { mergeDeep } from '../../util/mergeDeep';
import { HtmlPreview } from './HtmlPreview';
import {
	defaultHtmlPreviewLoaderTheme,
	htmlPreviewLoaderStyles,
} from './styles';
import type { HtmlPreviewLoaderProps } from './types';

export const HtmlPreviewLoader = (props: HtmlPreviewLoaderProps) => {
	const mergedTheme = mergeDeep(
		defaultHtmlPreviewLoaderTheme,
		props.theme ?? {},
	);
	const {
		fetchHtml,
		minHeight = 600,
		title,
		widthOptions,
		defaultWidth,
	} = props;

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
		<div css={[htmlPreviewLoaderStyles(mergedTheme), props.cssOverrides]}>
			<HtmlPreview
				title={title}
				theme={mergedTheme}
				html={html}
				isLoading={isLoading}
				minHeight={minHeight}
				errorMessage={error ? 'failed to load preview' : undefined}
				widthOptions={widthOptions}
				defaultWidth={defaultWidth}
			/>
		</div>
	);
};
