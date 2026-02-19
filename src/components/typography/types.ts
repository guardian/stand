import type { SemanticTypography } from '../..';
import type { DefaultPropsWithChildren } from '../../util/types';
import type { TypographyTheme } from './styles';

export interface TypographyProps extends DefaultPropsWithChildren<TypographyTheme> {
	/**
	 * HTML element to render with font applied to
	 */
	element?:
		| 'div'
		| 'span'
		| 'p'
		| 'b'
		| 'i'
		| 'h1'
		| 'h2'
		| 'h3'
		| 'h4'
		| 'h5'
		| 'h6';
	/**
	 * Font variant to apply as a CSS style to the element
	 */
	variant?: keyof SemanticTypography;
}
