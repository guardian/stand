import { mergeDeep } from '../../../util/mergeDeep';
import { defaultTopBarItemTheme, topBarItemStyles } from './styles';
import type { TopBarItemProps } from './types';

export function TopBarItem({
	children,
	alignment = 'left',
	theme = {},
	cssOverrides,
	className,
	size = 'md',
	...props
}: TopBarItemProps) {
	const mergedTheme = mergeDeep(defaultTopBarItemTheme, theme);

	return (
		<div
			css={[topBarItemStyles(mergedTheme, alignment, { size }), cssOverrides]}
			className={className}
			{...props}
		>
			{children}
		</div>
	);
}
