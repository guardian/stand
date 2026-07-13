import type { ReactNode } from 'react';
import type { DefaultProps } from '../../util/types';
import type { HtmlPreviewLoaderTheme } from './styles';

export type HtmlPreviewLoaderProps = DefaultProps<HtmlPreviewLoaderTheme> & {
	fetchHtml: { (): Promise<string> };
	minHeight?: number;
	title: ReactNode;
	widthOptions?: number[];
	defaultWidth?: number;
};
