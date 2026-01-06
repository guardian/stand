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
				'font-family: GH Guardian Headline;font-weight: 700;font-size: 18px;font-style: normal;line-height: 1.15;letter-spacing: 0px;font-variation-settings: "wdth" 100;',
			);
			expect(replaceNewLines(headingXlStyles.styles)).toBe(
				'font-family: Open Sans;font-weight: 700;font-size: 20px;font-style: normal;line-height: 1.15;letter-spacing: -0.5px;font-variation-settings: "wdth" 95;',
			);
			expect(replaceNewLines(bodyCompactLgStyles.styles)).toBe(
				'font-family: Open Sans;font-weight: 460;font-size: 18px;font-style: normal;line-height: 1.3;letter-spacing: 0px;font-variation-settings: "wdth" 88;',
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
				fontFamily: 'GH Guardian Headline',
				fontWeight: 700,
				fontSize: '18px',
				fontStyle: 'normal',
				lineHeight: 1.15,
				letterSpacing: '0px',
				fontVariationSettings: '"wdth" 100',
			});
			expect(headingXlStyles).toEqual({
				fontFamily: 'Open Sans',
				fontWeight: 700,
				fontSize: '20px',
				fontStyle: 'normal',
				lineHeight: 1.15,
				letterSpacing: '-0.5px',
				fontVariationSettings: '"wdth" 95',
			});
			expect(bodyCompactLgStyles).toEqual({
				fontFamily: 'Open Sans',
				fontWeight: 460,
				fontSize: '18px',
				fontStyle: 'normal',
				lineHeight: 1.3,
				letterSpacing: '0px',
				fontVariationSettings: '"wdth" 88',
			});
		});
	});
});
