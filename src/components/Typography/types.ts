import type { TextProps as ReactAriaTextProps } from 'react-aria-components';
import type { SemanticTypography } from '../../styleD/build/typescript/semantic/typography';
import type { DefaultProps } from '../../util/types';
import type { TypographyTheme } from './styles';

export type TypographyVariant = keyof SemanticTypography;

export interface TypographyProps
	extends
		DefaultProps<TypographyTheme, ReactAriaTextProps['className']>,
		Omit<ReactAriaTextProps, 'elementType' | 'className'> {
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
	variant?: TypographyVariant;
}
