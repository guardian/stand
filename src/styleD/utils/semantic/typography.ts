import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';

type SemanticTypography = {
	font: {
		fontFamily: string;
		fontWeight: number;
		fontSize: string;
		fontStyle: string;
		lineHeight: number;
		letterSpacing: string;
	};
	letterSpacing: string;
	fontWidth: number;
};

export const convertTypographyToEmotion = (
	typography: SemanticTypography,
): SerializedStyles => {
	return css`
		font-family: ${typography.font.fontFamily};
		font-weight: ${typography.font.fontWeight};
		font-size: ${typography.font.fontSize};
		font-style: ${typography.font.fontStyle};
		line-height: ${typography.font.lineHeight};
		letter-spacing: ${typography.letterSpacing};
		font-variation-settings: \"wdth\" ${typography.fontWidth};
	`;
};
