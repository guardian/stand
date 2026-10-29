import { Link as ReactAriaLink } from 'react-aria-components';
import { semanticColors } from '../../styleD/build/typescript/semantic/colors';
import { mergeDeep } from '../../util/mergeDeep';
import { typographyStyles } from '../Typography/styles';
import { defaultLinkTheme, linkStyles } from './styles';
import type { LinkProps } from './types';

export function Link({
	children,
	typography = 'bodySm',
	theme = {},
	dangerouslyOverrideCss,
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
				dangerouslyOverrideCss,
			]}
			className={className}
			{...props}
		>
			{children}
		</ReactAriaLink>
	);
}
