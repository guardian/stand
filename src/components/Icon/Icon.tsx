import { mergeDeep } from '../../util/mergeDeep';
import { defaultIconTheme, iconStyles } from './styles';
import type { IconProps } from './types';

export function Icon({
	children,
	size = 'md',
	fill,
	alt,
	symbol,
	theme = {},
	cssOverrides,
	className,
}: IconProps) {
	const mergedTheme = mergeDeep(defaultIconTheme, theme);

	if (symbol || typeof children === 'string') {
		return (
			<span
				className={`material-symbols ${className ?? ''}`}
				css={[
					iconStyles(mergedTheme, { size, fill, mode: 'text' }),
					cssOverrides,
				]}
				{...(alt
					? { role: 'img', 'aria-label': alt }
					: { 'aria-hidden': true })}
			>
				{symbol ?? children}
			</span>
		);
	}

	return (
		<span
			className={className}
			css={[iconStyles(mergedTheme, { size, fill, mode: 'svg' }), cssOverrides]}
			{...(alt ? { role: 'img', 'aria-label': alt } : { 'aria-hidden': true })}
		>
			{children}
		</span>
	);
}
