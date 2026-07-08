import { mergeDeep } from '../../util/mergeDeep';
import { badgeStyles, defaultBadgeTheme } from './styles';
import type { BadgeProps } from './types';

export const Badge = (props: BadgeProps) => {
	const mergedTheme = mergeDeep(defaultBadgeTheme, props.theme ?? {});

	return (
		<div css={[badgeStyles(mergedTheme), props.cssOverrides]}>
			<p>template component</p>
			<p>{props.message ?? 'hello world'}</p>
		</div>
	);
};
