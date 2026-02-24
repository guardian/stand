import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import {
	componentFavicon,
	type ComponentFavicon,
} from '../../styleD/build/typescript/component/favicon';
import type { Prettify } from '../../util/types';
import { convertTypographyToEmotionStringStyle } from '../../utils';

export type FaviconTheme = Prettify<ComponentFavicon>;
export const defaultFaviconTheme: FaviconTheme = componentFavicon;

export const faviconStyles = (theme: FaviconTheme): SerializedStyles => {
	return css`
		background-color: ${theme.color.background};
		display: ${theme.display};
		align-items: ${theme['align-items']};
		justify-content: ${theme['justify-content']};
		width: ${theme.size};
		height: ${theme.size};
		user-select: ${theme['user-select']};
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
