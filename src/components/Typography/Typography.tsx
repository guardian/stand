import { Text as ReactAriaText } from 'react-aria-components';
import { mergeDeep } from '../../util/mergeDeep';
import { defaultTypographyTheme, typographyStyles } from './styles';
import type { TypographyProps } from './types';

export const Typography = ({
	element = 'span',
	variant = 'bodyMd',
	children,
	cssOverrides,
	theme = {},
	...props
}: TypographyProps) => {
	const mergedTheme = mergeDeep(defaultTypographyTheme, theme);

	return (
		<ReactAriaText
			elementType={element}
			css={[typographyStyles(mergedTheme, { variant }), cssOverrides]}
			{...props}
		>
			{children}
		</ReactAriaText>
	);
};
