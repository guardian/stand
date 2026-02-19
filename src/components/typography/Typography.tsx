import { jsx } from '@emotion/react';
import { mergeDeep } from '../../util/mergeDeep';
import { defaultTypographyTheme, typographyStyles } from './styles';
import type { TypographyProps } from './types';

export const Typography = ({
	element = 'span',
	variant = 'body-md',
	children,
	cssOverrides,
	theme = {},
	...props
}: TypographyProps) => {
	const mergedTheme = mergeDeep(defaultTypographyTheme, theme);

	return jsx(
		element,
		{
			css: [typographyStyles(mergedTheme, { variant }), cssOverrides],
			...props,
		},
		children,
	);
};
