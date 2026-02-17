import { Link as ReactAriaLink } from 'react-aria-components';
import { mergeDeep } from '../../util/mergeDeep';
import { defaultLinkButtonTheme, linkButtonStyles } from './styles';
import type { LinkButtonProps } from './types';

export function LinkButton({
	variant = 'emphasised-primary',
	size = 'md',
	theme = {},
	cssOverrides,
	...props
}: LinkButtonProps) {
	const mergedTheme = mergeDeep(defaultLinkButtonTheme, theme);

	return (
		<ReactAriaLink
			{...props}
			css={[
				linkButtonStyles(mergedTheme, { variant, size }),
				cssOverrides,
			]}
		>
			{props.children}
		</ReactAriaLink>
	);
}
