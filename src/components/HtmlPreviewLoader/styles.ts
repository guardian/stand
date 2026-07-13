import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import {
	componentHtmlPreviewLoader,
	type ComponentHtmlPreviewLoader,
} from '../../styleD/build/typescript/component/htmlPreviewLoader';
import type { DeepPartial, Prettify } from '../../util/types';

export type HtmlPreviewLoaderTheme = Prettify<ComponentHtmlPreviewLoader>;
export type PartialHtmlPreviewLoaderTheme = Prettify<
	DeepPartial<HtmlPreviewLoaderTheme>
>;
export const defaultHtmlPreviewLoaderTheme: HtmlPreviewLoaderTheme =
	componentHtmlPreviewLoader;

export const htmlPreviewLoaderStyles = (
	theme: HtmlPreviewLoaderTheme,
): SerializedStyles => {
	return css`
		background-color: ${theme.shared.color.background};
		color: ${theme.shared.color.text};
		padding-top: ${theme.paddingTop};
		padding-bottom: ${theme.paddingBottom};
		padding-left: ${theme.paddingLeft};
		padding-right: ${theme.paddingRight};
	`;
};

export const headerStyles = (): SerializedStyles => {
	return css`
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		justify-content: space-between;
	`;
};

export const previewFrameStyle = (
	{ previewFrame }: HtmlPreviewLoaderTheme,
	isLoading: boolean,
): SerializedStyles => {
	return css`
		border-color: ${previewFrame.borderColor};
		border-style: ${previewFrame.borderStyle};
		border-width: ${previewFrame.borderWidth};
		background-color: ${previewFrame.backgroundColor};
		padding-top: ${previewFrame.paddingTop};
		padding-bottom: ${previewFrame.paddingBottom};
		padding-left: ${previewFrame.paddingLeft};
		padding-right: ${previewFrame.paddingRight};
		${isLoading ? 'backdrop-filter: blur(3px);' : ''}
		transition: backdrop-filter 0.25s;
		width: 100%;
		display: flex;
		justify-content: center;
	`;
};

export const loadingIconStyle = ({
	loadingIcon,
}: HtmlPreviewLoaderTheme): SerializedStyles => {
	return css`
		font-size: ${loadingIcon.size};
		color: ${loadingIcon.color};
	`;
};
