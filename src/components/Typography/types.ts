import type { JSX } from 'react';
import type { TextProps as ReactAriaTextProps } from 'react-aria-components';
import type { semantic } from '../../terrazzo/build/stand';
import type { DefaultProps } from '../../util/types';
import type { TypographyTheme } from './styles';

export type TypographyVariant = keyof typeof semantic.typography;
export type TypographyElement = keyof JSX.IntrinsicElements | (string & {});

export interface TypographyProps
	extends
		DefaultProps<TypographyTheme, ReactAriaTextProps['className']>,
		Omit<ReactAriaTextProps, 'elementType' | 'className'> {
	/**
	 * HTML element to render with font applied to
	 */
	element?: TypographyElement;
	/**
	 * Font variant to apply as a CSS style to the element
	 */
	variant?: TypographyVariant;
}
