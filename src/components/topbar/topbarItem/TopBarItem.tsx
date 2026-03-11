import { mergeDeep } from '../../../util/mergeDeep';
import { defaultTopBarItemTheme, topBarItemStyles } from './styles';
import type { TopBarItemProps } from './types';

export function TopBarItem({
	children,
	alignment = 'left',
	theme = {},
	cssOverrides,
	className,
	...props
}: TopBarItemProps) {
	const mergedTheme = mergeDeep(defaultTopBarItemTheme, theme);

	return (
		<div
			css={[topBarItemStyles(mergedTheme, alignment), cssOverrides]}
			className={className}
			{...props}
		>
			{children}
		</div>
	);
}
