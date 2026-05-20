import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import {
	componentFavicon,
	type ComponentFavicon,
} from '../../styleD/build/typescript/component/favicon';
import type { DeepPartial, Prettify } from '../../util/types';
import { convertTypographyToEmotionStringStyle } from '../../utils';

export type FaviconTheme = Prettify<ComponentFavicon>;
export type PartialFaviconTheme = Prettify<DeepPartial<FaviconTheme>>;
export const defaultFaviconTheme: FaviconTheme = componentFavicon;

export const faviconStyles = (theme: FaviconTheme): SerializedStyles => {
	return css`
		background-color: ${theme.color.background};
		display: ${theme.display};
		align-items: ${theme.alignItems};
		justify-content: ${theme.justifyContent};
		width: ${theme.size};
		height: ${theme.size};
		user-select: ${theme.userSelect};
	`;
};

export const faviconTypographyStyles = (
	theme: FaviconTheme,
): SerializedStyles => {
	return css`
		color: ${theme.color.text};
		${convertTypographyToEmotionStringStyle(theme.typography)}
	`;
};

export const faviconImageStyles = css`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
