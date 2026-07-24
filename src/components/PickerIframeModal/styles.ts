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

export const pickerIframeModalStyles = (
	theme: PickerIframeModalTheme,
): SerializedStyles => {
	return css`
		background-color: ${theme.color.background};
		color: ${theme.color.text};
	`;
};
