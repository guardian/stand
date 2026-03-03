import { mergeDeep } from '../../util/mergeDeep';
import { defaultMenuTheme, menuStyles } from './styles';
import type { MenuProps } from './types';

export function Menu({
	children,
	theme = {},
	cssOverrides,
	className,
	...props
}: MenuProps) {
	const mergedTheme = mergeDeep(defaultMenuTheme, theme);

	return (
		<div
			css={[menuStyles(mergedTheme), cssOverrides]}
			className={className}
			{...props}
		>
			{children}
		</div>
	);
}
