import { topBarItemStyles } from './styles';
import type { TopBarItemProps } from './types';

export function TopBarItem({
	children,
	alignment = 'left',
	// eslint-disable-next-line @typescript-eslint/no-unused-vars -- theming support is being reworked
	theme = {},
	dangerouslyOverrideCss,
	className,
	size = 'md',
	_menuOpen,
	...props
}: TopBarItemProps) {
	return (
		<div
			css={[
				topBarItemStyles(alignment, { size }, _menuOpen),
				dangerouslyOverrideCss,
			]}
			className={className}
			{...props}
		>
			{children}
		</div>
	);
}
