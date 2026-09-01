import type { CSSProperties, ReactNode } from 'react';
import type { DefaultProps } from '../../util/types';
import type { PartialHtmlPreviewLoaderTheme } from './styles';

type CommonProps = {
	minHeight?: number;
	title: ReactNode;
	widthOptions?: number[];
	defaultWidth?: number;
	frameBackground?: CSSProperties['background'];
	allowReloading?: boolean;
};

export type HtmlPreviewLoaderProps =
	DefaultProps<PartialHtmlPreviewLoaderTheme> &
		CommonProps & {
			fetchHtml: { (): Promise<string> };
		};

export type HtmlPreviewProps = DefaultProps<PartialHtmlPreviewLoaderTheme> &
	CommonProps & {
		html?: string;
		isLoading?: boolean;
		errorMessage?: string;
		attemptLoad?: { (): void };
	};
