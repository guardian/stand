import { mergeDeep } from '../../util/mergeDeep';
import { badgeStyles, defaultBadgeTheme } from './styles';
import type { BadgeProps } from './types';

export const Badge = ({
	size = 'md',
	color = 'green',
	weight = 'strong',
	theme = {},
	cssOverrides,
	children,
	...props
}: BadgeProps) => {
	const mergedTheme = mergeDeep(defaultBadgeTheme, theme);

	return (
		<span
			css={[badgeStyles(mergedTheme, { color, size, weight }), cssOverrides]}
			{...props}
		>
			{children}
		</span>
	);
};
