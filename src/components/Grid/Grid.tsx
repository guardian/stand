import { mergeDeep } from '../../util/mergeDeep';
import { defaultGridTheme, gridStyles, itemStyles } from './styles';
import type { GridProps, ItemProps } from './types';

export function Grid({
	children,
	theme = {},
	dangerouslyOverrideCss,
	as: Component = 'div',
	...props
}: GridProps) {
	const mergedTheme = mergeDeep(defaultGridTheme, theme);

	return (
		<Component
			css={[gridStyles(mergedTheme), dangerouslyOverrideCss]}
			{...props}
		>
			{children}
		</Component>
	);
}

export function Item({
	children,
	theme = {},
	dangerouslyOverrideCss,
	size,
	offset,
	...props
}: ItemProps) {
	const mergedTheme = mergeDeep(defaultGridTheme, theme);

	return (
		<div
			css={[itemStyles(mergedTheme, { size, offset }), dangerouslyOverrideCss]}
			{...props}
		>
			{children}
		</div>
	);
}
