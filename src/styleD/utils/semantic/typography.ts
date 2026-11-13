import type { CSSObject, SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';

type SemanticTypography = {
	font: string;
	letterSpacing: string;
	fontWidth: number;
};

export const convertTypographyToEmotionStringStyle = (
	typography: SemanticTypography,
): SerializedStyles => {
	return css`
		font: ${typography.font};
		letter-spacing: ${typography.letterSpacing};
		font-variation-settings: \"wdth\" ${typography.fontWidth};
	`;
};

export const convertTypographyToEmotionObjectStyle = (
	typography: SemanticTypography,
): CSSObject => {
	return {
		font: typography.font,
		letterSpacing: typography.letterSpacing,
		fontVariationSettings: `"wdth" ${typography.fontWidth}`,
	};
};

/**
 * TODO: Update when generated CSS is in the correct shape. Typography tokens
 * should include a `-typography-font` token which avoids having to manually
 * construct the value from the individual properties as below. Font style
 * should also be included.
 */
export const convertCSSTypographyToEmotionStringStyle = (
	prefix: string,
): SerializedStyles => {
	return css`
		font: normal var(${prefix}-typography-font-font-weight)
			var(${prefix}-typography-font-font-size)/var(
				${prefix}-typography-font-line-height
			)
			var(${prefix}-typography-font-font-family);
		letter-spacing: var(${prefix}-typography-font-letter-spacing);
		font-variation-settings: \"wdth\" var(${prefix}-typography-font-width);
	`;
};
