import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import {
	componentGridImagePicker,
	type ComponentGridImagePicker,
} from '../../styleD/build/typescript/component/gridImagePicker';
import type { DeepPartial, Prettify } from '../../util/types';

export type GridImagePickerTheme = Prettify<ComponentGridImagePicker>;
export type PartialGridImagePickerTheme = Prettify<
	DeepPartial<ComponentGridImagePicker>
>;
export const defaultGridImagePickerTheme: GridImagePickerTheme =
	componentGridImagePicker;

export const gridImagePickerStyles = (
	theme: GridImagePickerTheme,
): SerializedStyles => {
	return css`
		background-color: ${theme.container.background};
		display: flex;
		gap: ${theme.container.gap};
		padding: ${theme.container.padding};
		align-items: center;
	`;
};

export const imagePreviewStyles = ({
	imagePreview,
}: GridImagePickerTheme): SerializedStyles => {
	return css`
		background-color: ${imagePreview.background};
		padding: ${imagePreview.padding};
		width: ${imagePreview.maxWidth};
		height: ${imagePreview.maxHeight};
		display: flex;
		justify-content: center;
		align-items: center;
		box-sizing: content-box;

		img {
			max-width: ${imagePreview.maxWidth};
			max-height: ${imagePreview.maxHeight};
		}
	`;
};
