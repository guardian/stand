import { Link as ReactAriaLink } from 'react-aria-components';
import { Typography } from '../../typography';
import { mergeDeep } from '../../util/mergeDeep';
import { defaultLinkTheme, linkStyles } from './styles';
import type { LinkProps } from './types';

export function Link({
	children,
	theme = {},
	cssOverrides,
	className,
	...props
}: LinkProps) {
	const mergedTheme = mergeDeep(defaultLinkTheme, theme);
	return (
		<ReactAriaLink
			css={[linkStyles(mergedTheme), cssOverrides]}
			className={className}
			{...props}
		>
			<Typography className="linkTypography">{children}</Typography>
		</ReactAriaLink>
	);
}
