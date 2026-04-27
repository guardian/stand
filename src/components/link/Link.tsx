import { Link as ReactAriaLink } from 'react-aria-components';
import { semanticColors } from '../../styleD/build/typescript/semantic/colors';
import { mergeDeep } from '../../util/mergeDeep';
import { typographyStyles } from '../typography/styles';
import { defaultLinkTheme, linkStyles } from './styles';
import type { LinkProps } from './types';

export function Link({
	children,
	typography = 'body-sm',
	theme = {},
	cssOverrides,
	className,
	...props
}: LinkProps) {
	const mergedTheme = mergeDeep(defaultLinkTheme, theme);
	return (
		<ReactAriaLink
			css={[
				typographyStyles(
					{ color: semanticColors.text.strong },
					{ variant: typography },
				),
				linkStyles(mergedTheme),
				cssOverrides,
			]}
			className={className}
			{...props}
		>
			{children}
		</ReactAriaLink>
	);
}
