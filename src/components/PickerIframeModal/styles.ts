import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import {
	componentPickerIframeModal,
	type ComponentPickerIframeModal,
} from '../../styleD/build/typescript/component/pickerIframeModal';
import type { DeepPartial, Prettify } from '../../util/types';

export type PickerIframeModalTheme = Prettify<ComponentPickerIframeModal>;
export type PartialPickerIframeModalTheme = Prettify<
	DeepPartial<PickerIframeModalTheme>
>;
export const defaultPickerIframeModalTheme: PickerIframeModalTheme =
	componentPickerIframeModal;

export const iframeStyles = (
	theme: PickerIframeModalTheme,
): SerializedStyles => {
	const { iframe } = theme;
	return css`
		width: ${iframe.width};
		height: ${iframe.height};
		max-height: ${iframe.maxHeight};
		background-color: ${iframe.backgroundColor};
		margin-top: ${iframe.margin.top};
		margin-right: ${iframe.margin.right};
		margin-bottom: ${iframe.margin.bottom};
		margin-left: ${iframe.margin.left};
	`;
};
export const iframeContainerStyle = (
	theme: PickerIframeModalTheme,
): SerializedStyles => {
	const {
		iframeContainer: { padding },
	} = theme;
	return css`
		display: flex;
		padding-top: ${padding.top};
		padding-left: ${padding.left};
		padding-right: ${padding.right};
		padding-bottom: ${padding.bottom};
	`;
};

export const headerContentsStyles = (
	theme: PickerIframeModalTheme,
): SerializedStyles => {
	const {
		headerContents: { display, alignItems, justifyContent },
	} = theme;
	return css`
		display: ${display};
		align-items: ${alignItems};
		justify-content: ${justifyContent};
	`;
};
