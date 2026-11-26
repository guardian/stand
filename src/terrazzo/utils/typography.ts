import type { CSSObject, SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';

type SemanticTypography = {
	font: {
		fontFamily: string;
		fontSize: string;
		fontStyle: string;
		fontWeight: string;
		lineHeight: string;
	};
	letterSpacing: string;
	fontWidth: string;
};

export const convertTypographyToCssString = (
	typography: SemanticTypography,
): SerializedStyles => {
	return css`
		font-family: ${typography.font.fontFamily};
		font-size: ${typography.font.fontSize};
		font-style: ${typography.font.fontStyle};
		font-weight: ${typography.font.fontWeight};
		line-height: ${typography.font.lineHeight};
		letter-spacing: ${typography.letterSpacing};
		font-variation-settings: \"wdth\" ${typography.fontWidth};
	`;
};

export const convertTypographyToObject = (
	typography: SemanticTypography,
): CSSObject => {
	return {
		fontFamily: typography.font.fontFamily,
		fontSize: typography.font.fontSize,
		fontStyle: typography.font.fontStyle,
		fontWeight: typography.font.fontWeight,
		lineHeight: typography.font.lineHeight,
		letterSpacing: typography.letterSpacing,
		fontVariationSettings: `"wdth" ${typography.fontWidth}`,
	};
};
