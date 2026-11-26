import { semantic } from '../../terrazzo/build/stand';
import {
	convertTypographyToCssString,
	convertTypographyToObject,
} from './typography';

const replaceNewLines = (str: string) => str.replace(/[\n\r\t]/g, '');

describe('Typography Tokens', () => {
	describe('convertTypographyToCssString', () => {
		it('should convert semantic typography to css string', () => {
			const titleSmToken = semantic.typography.titleSm;
			const headingXlToken = semantic.typography.headingXl;
			const bodyCompactLgToken = semantic.typography.bodyCompactLg;

			const titleSmStyles = convertTypographyToCssString(titleSmToken);
			const headingXlStyles = convertTypographyToCssString(headingXlToken);
			const bodyCompactLgStyles =
				convertTypographyToCssString(bodyCompactLgToken);

			expect(replaceNewLines(titleSmStyles.styles)).toBe(
				'font-family: var(--semantic-typography-title-sm-font-font-family);font-size: var(--semantic-typography-title-sm-font-font-size);font-style: var(--semantic-typography-title-sm-font-font-style);font-weight: var(--semantic-typography-title-sm-font-font-weight);line-height: var(--semantic-typography-title-sm-font-line-height);letter-spacing: var(--semantic-typography-title-sm-letter-spacing);font-variation-settings: "wdth" var(--semantic-typography-title-sm-font-width);',
			);
			expect(replaceNewLines(headingXlStyles.styles)).toBe(
				'font-family: var(--semantic-typography-heading-xl-font-font-family);font-size: var(--semantic-typography-heading-xl-font-font-size);font-style: var(--semantic-typography-heading-xl-font-font-style);font-weight: var(--semantic-typography-heading-xl-font-font-weight);line-height: var(--semantic-typography-heading-xl-font-line-height);letter-spacing: var(--semantic-typography-heading-xl-letter-spacing);font-variation-settings: "wdth" var(--semantic-typography-heading-xl-font-width);',
			);
			expect(replaceNewLines(bodyCompactLgStyles.styles)).toBe(
				'font-family: var(--semantic-typography-body-compact-lg-font-font-family);font-size: var(--semantic-typography-body-compact-lg-font-font-size);font-style: var(--semantic-typography-body-compact-lg-font-font-style);font-weight: var(--semantic-typography-body-compact-lg-font-font-weight);line-height: var(--semantic-typography-body-compact-lg-font-line-height);letter-spacing: var(--semantic-typography-body-compact-lg-letter-spacing);font-variation-settings: "wdth" var(--semantic-typography-body-compact-lg-font-width);',
			);
		});
	});

	describe('convertTypographyToObject', () => {
		it('should convert semantic typography to emotion object styles', () => {
			const titleSmToken = semantic.typography.titleSm;
			const headingXlToken = semantic.typography.headingXl;
			const bodyCompactLgToken = semantic.typography.bodyCompactLg;

			const titleSmStyles = convertTypographyToObject(titleSmToken);
			const headingXlStyles = convertTypographyToObject(headingXlToken);
			const bodyCompactLgStyles = convertTypographyToObject(bodyCompactLgToken);

			expect(titleSmStyles).toEqual({
				fontFamily: 'var(--semantic-typography-title-sm-font-font-family)',
				fontSize: 'var(--semantic-typography-title-sm-font-font-size)',
				fontStyle: 'var(--semantic-typography-title-sm-font-font-style)',
				fontWeight: 'var(--semantic-typography-title-sm-font-font-weight)',
				lineHeight: 'var(--semantic-typography-title-sm-font-line-height)',
				letterSpacing: 'var(--semantic-typography-title-sm-letter-spacing)',
				fontVariationSettings:
					'"wdth" var(--semantic-typography-title-sm-font-width)',
			});
			expect(headingXlStyles).toEqual({
				fontFamily: 'var(--semantic-typography-heading-xl-font-font-family)',
				fontSize: 'var(--semantic-typography-heading-xl-font-font-size)',
				fontStyle: 'var(--semantic-typography-heading-xl-font-font-style)',
				fontWeight: 'var(--semantic-typography-heading-xl-font-font-weight)',
				lineHeight: 'var(--semantic-typography-heading-xl-font-line-height)',
				letterSpacing: 'var(--semantic-typography-heading-xl-letter-spacing)',
				fontVariationSettings:
					'"wdth" var(--semantic-typography-heading-xl-font-width)',
			});
			expect(bodyCompactLgStyles).toEqual({
				fontFamily:
					'var(--semantic-typography-body-compact-lg-font-font-family)',
				fontSize: 'var(--semantic-typography-body-compact-lg-font-font-size)',
				fontStyle: 'var(--semantic-typography-body-compact-lg-font-font-style)',
				fontWeight:
					'var(--semantic-typography-body-compact-lg-font-font-weight)',
				lineHeight:
					'var(--semantic-typography-body-compact-lg-font-line-height)',
				letterSpacing:
					'var(--semantic-typography-body-compact-lg-letter-spacing)',
				fontVariationSettings:
					'"wdth" var(--semantic-typography-body-compact-lg-font-width)',
			});
		});
	});
});
