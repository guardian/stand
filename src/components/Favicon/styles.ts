import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { component } from '../../terrazzo/build/stand';
import type { DeepPartial, Prettify } from '../../util/types';
import { convertTypographyToCssString } from '../../utils';

export type FaviconTheme = Prettify<(typeof component)['favicon']>;
export type PartialFaviconTheme = Prettify<DeepPartial<FaviconTheme>>;
export const defaultFaviconTheme: FaviconTheme = component.favicon;

export const faviconStyles = (theme: FaviconTheme): SerializedStyles => {
	return css`
		background-color: ${theme.color.background};
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: ${theme.size};
		height: ${theme.size};
		user-select: none;
	`;
};

export const faviconTypographyStyles = (
	theme: FaviconTheme,
): SerializedStyles => {
	return css`
		color: ${theme.color.text};
		${convertTypographyToCssString(theme.typography)}
	`;
};

export const faviconImageStyles = css`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
