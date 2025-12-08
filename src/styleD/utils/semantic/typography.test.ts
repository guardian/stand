import { semanticTypography } from '../../build/typescript/semantic/typography';
import { convertTypographyToEmotion } from './typography';

const replaceNewLines = (str: string) => str.replace(/[\n\r\t]/g, '');

describe('Typography Tokens', () => {
	describe('convertTypographyToEmotion', () => {
		it('should convert semantic typography to emotion styles', () => {
			const titleSmToken = semanticTypography['title-sm'];
			const headingXlToken = semanticTypography['heading-xl'];
			const bodyCompactLgToken = semanticTypography['body-compact-lg'];

			const titleSmStyles = convertTypographyToEmotion(titleSmToken);
			const headingXlStyles = convertTypographyToEmotion(headingXlToken);
			const bodyCompactLgStyles =
				convertTypographyToEmotion(bodyCompactLgToken);

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
});
