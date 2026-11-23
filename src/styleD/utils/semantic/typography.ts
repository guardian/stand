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
