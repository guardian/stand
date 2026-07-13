import { mergeDeep } from '../../util/mergeDeep';
import { badgeStyles, defaultBadgeTheme } from './styles';
import type { BadgeProps } from './types';

export const Badge = ({ theme, cssOverrides, children }: BadgeProps) => {
	const mergedTheme = mergeDeep(defaultBadgeTheme, theme ?? {});

	return <div css={[badgeStyles(mergedTheme), cssOverrides]}>{children}</div>;
};
