import type { SerializedStyles } from '@emotion/react';
import { css, keyframes } from '@emotion/react';
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
		position: relative;
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

export const previewFrameStyle = ({
	previewFrame,
}: HtmlPreviewLoaderTheme): SerializedStyles => {
	return css`
		border-color: ${previewFrame.borderColor};
		border-style: ${previewFrame.borderStyle};
		border-width: ${previewFrame.borderWidth};
		background-color: ${previewFrame.backgroundColor};
		padding-top: ${previewFrame.paddingTop};
		padding-bottom: ${previewFrame.paddingBottom};
		padding-left: ${previewFrame.paddingLeft};
		padding-right: ${previewFrame.paddingRight};
		width: 100%;
		display: flex;
		justify-content: center;
		position: relative;
	`;
};

export const iframeStyle = (isNotLoaded: boolean): SerializedStyles => {
	return css`
		border: none;
		transition: 'filter 0.25s';
		${isNotLoaded
			? `
			filter: blur(3px);
			pointer-events: none;	
		`
			: ''}
	`;
};

export const reloadButtonStyle = ({
	previewFrame,
}: HtmlPreviewLoaderTheme): SerializedStyles => {
	return css`
		position: absolute;
		bottom: ${previewFrame.paddingBottom};
		right: ${previewFrame.paddingRight};
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

export const spinAnimationStyle = (): SerializedStyles => {
	const spin = keyframes({
		from: { transform: 'rotate(0deg)' },
		to: { transform: 'rotate(360deg)' },
	});

	return css`
		animation: ${spin} 1s linear infinite;
	`;
};

export const centeredStyle = (): SerializedStyles => {
	return css`
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
	`;
};

export const alertBannerContentsStyle = (): SerializedStyles => {
	return css`
		display: flex;
		gap: 10;
		align-items: center;
	`;
};
