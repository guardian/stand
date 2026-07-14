import { mergeDeep } from '../../util/mergeDeep';
import { badgeStyles, defaultBadgeTheme } from './styles';
import type { BadgeProps } from './types';

export const Badge = ({
	size = 'md',
	color = 'green',
	theme = {},
	cssOverrides,
	children,
	// ...props
}: BadgeProps) => {
	const mergedTheme = mergeDeep(defaultBadgeTheme, theme);

	return (
		<div css={[badgeStyles(mergedTheme, { color, size }), cssOverrides]}>
			{children}
		</div>
	);
};
