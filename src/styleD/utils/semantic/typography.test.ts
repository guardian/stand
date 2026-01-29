import { semanticTypography } from '../../build/typescript/semantic/typography';
import {
	convertTypographyToEmotionObjectStyle,
	convertTypographyToEmotionStringStyle,
} from './typography';

const replaceNewLines = (str: string) => str.replace(/[\n\r\t]/g, '');

describe('Typography Tokens', () => {
	describe('convertTypographyToEmotionStringStyle', () => {
		it('should convert semantic typography to emotion styles', () => {
			const titleSmToken = semanticTypography['title-sm'];
			const headingXlToken = semanticTypography['heading-xl'];
			const bodyCompactLgToken = semanticTypography['body-compact-lg'];

			const titleSmStyles =
				convertTypographyToEmotionStringStyle(titleSmToken);
			const headingXlStyles =
				convertTypographyToEmotionStringStyle(headingXlToken);
			const bodyCompactLgStyles =
				convertTypographyToEmotionStringStyle(bodyCompactLgToken);

			expect(replaceNewLines(titleSmStyles.styles)).toBe(
				'font: normal 700 1.125rem/1.15 GH Guardian Headline;letter-spacing: 0rem;font-variation-settings: "wdth" 100;',
			);
			expect(replaceNewLines(headingXlStyles.styles)).toBe(
				'font: normal 700 1.25rem/1.15 Open Sans;letter-spacing: -0.03125rem;font-variation-settings: "wdth" 95;',
			);
			expect(replaceNewLines(bodyCompactLgStyles.styles)).toBe(
				'font: normal 460 1.125rem/1.3 Open Sans;letter-spacing: 0rem;font-variation-settings: "wdth" 88;',
			);
		});
	});

	describe('convertTypographyToEmotionObjectStyle', () => {
		it('should convert semantic typography to emotion object styles', () => {
			const titleSmToken = semanticTypography['title-sm'];
			const headingXlToken = semanticTypography['heading-xl'];
			const bodyCompactLgToken = semanticTypography['body-compact-lg'];

			const titleSmStyles =
				convertTypographyToEmotionObjectStyle(titleSmToken);
			const headingXlStyles =
				convertTypographyToEmotionObjectStyle(headingXlToken);
			const bodyCompactLgStyles =
				convertTypographyToEmotionObjectStyle(bodyCompactLgToken);

			expect(titleSmStyles).toEqual({
				font: 'normal 700 1.125rem/1.15 GH Guardian Headline',
				letterSpacing: '0rem',
				fontVariationSettings: '"wdth" 100',
			});
			expect(headingXlStyles).toEqual({
				font: 'normal 700 1.25rem/1.15 Open Sans',
				letterSpacing: '-0.03125rem',
				fontVariationSettings: '"wdth" 95',
			});
			expect(bodyCompactLgStyles).toEqual({
				font: 'normal 460 1.125rem/1.3 Open Sans',
				letterSpacing: '0rem',
				fontVariationSettings: '"wdth" 88',
			});
		});
	});
});
