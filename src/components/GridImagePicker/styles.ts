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
		display: grid;
		width: ${theme.container.width};
		column-gap: ${theme.container.columnGap};
		row-gap: ${theme.container.rowGap};
		padding: ${theme.container.padding};
		align-items: center;

		grid-template-columns: repeat(2, 1fr);
		grid-auto-rows: min-content;

		grid-template-areas:
			'image image'
			'crop  crop'
			'link  copy'
			'error error';
	`;
};

export const imagePreviewStyles = ({
	container,
	imagePreview,
}: GridImagePickerTheme): SerializedStyles => {
	return css`
		padding: ${imagePreview.padding};
		width: ${imagePreview.maxWidth};
		max-width: ${container.width};
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

export const copyButtonStyles = {
	gridArea: 'copy',
	display: 'flex',
	button: {
		flex: 1,
	},
};

export const linkButtonStyles = css({
	gridArea: 'link',
});

export const cropButtonStyles = css({
	gridArea: 'crop',
});

export const imageButtonStyles = css({
	gridArea: 'image',
});

export const errorStyles = css({
	gridArea: 'error',
});
