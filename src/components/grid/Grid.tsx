import { mergeDeep } from '../../util/mergeDeep';
import { defaultGridTheme, gridStyles, itemStyles } from './styles';
import type { GridProps, ItemProps } from './types';

export function Grid({
	children,
	theme = {},
	cssOverrides,
	...props
}: GridProps) {
	const mergedTheme = mergeDeep(defaultGridTheme, theme);

	return (
		<div css={[gridStyles(mergedTheme), cssOverrides]} {...props}>
			{children}
		</div>
	);
}

export function Item({
	children,
	theme = {},
	cssOverrides,
	size,
	offset,
	...props
}: ItemProps) {
	const mergedTheme = mergeDeep(defaultGridTheme, theme);

	return (
		<div
			css={[itemStyles(mergedTheme, { size, offset }), cssOverrides]}
			{...props}
		>
			{children}
		</div>
	);
}
