import { css, type SerializedStyles } from '@emotion/react';

export const convertCSSTypographyToEmotionStringStyle = (
	prefix: string,
): SerializedStyles => {
	return css`
		font: var(${prefix}-typography-font);
		letter-spacing: var(${prefix}-typography-font-letter-spacing);
		font-variation-settings: \"wdth\" var(${prefix}-typography-font-width);
	`;
};
