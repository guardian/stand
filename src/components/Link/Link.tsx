import { Link as ReactAriaLink } from 'react-aria-components';
import { semantic } from '../../terrazzo/build/stand';
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
					{ color: semantic.colors.text.strong },
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
