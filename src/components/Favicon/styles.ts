import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import {
	componentFavicon,
	type ComponentFavicon,
} from '../../styleD/build/typescript/component/favicon';
import type { DeepPartial, Prettify } from '../../util/types';

export type FaviconTheme = Prettify<ComponentFavicon>;
export type PartialFaviconTheme = Prettify<DeepPartial<FaviconTheme>>;
export const defaultFaviconTheme: FaviconTheme = componentFavicon;

export const faviconStyles = (): SerializedStyles => {
	return css`
		background-color: var(--component-favicon-color-background);
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: var(--component-favicon-size);
		height: var(--component-favicon-size);
		user-select: none;
	`;
};

export const faviconTypographyStyles = (): SerializedStyles => {
	return css`
		color: var(--component-favicon-color-text);
		font: normal var(--component-favicon-typography-font-font-weight)
			var(--component-favicon-typography-font-font-size)/var(
				--component-favicon-typography-font-line-height
			)
			var(--component-favicon-typography-font-font-family);
		letter-spacing: var(--component-favicon-typography-font-letter-spacing);
		font-variation-settings: 'wdth'
			var(--component-favicon-typography-font-width);
	`;
};

export const faviconImageStyles = css`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
