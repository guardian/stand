import { Link, Pressable } from 'react-aria-components';
import { Icon } from '../../Icon/Icon';
import type { MaterialSymbol } from '../../Icon/types';
import { Menu, MenuToggle } from '../../Menu/Menu';
import {
	topBarMenuIndicatorStyles,
	topBarNavigationDividerStyles,
	topBarNavigationStyles,
	topBarNavigationTextStyles,
	topBarNavigationTypographyStyles,
} from './styles';
import type { TopBarNavigationProps } from './types';

const menuIndicator: MaterialSymbol = 'keyboard_arrow_down';

export function TopBarNavigation({
	text,
	size = 'md',
	isSelected = false,
	icon,
	menuChildren,
	href,
	onPress,
	isDisabled,
	alignment = 'left',
	// eslint-disable-next-line @typescript-eslint/no-unused-vars -- theming support is being reworked
	theme = {},
	dangerouslyOverrideCss,
	className,
	_menuOpen,
	...props
}: TopBarNavigationProps) {
	const iconSize = size === 'md' ? 'lg' : 'sm';

	return (
		<div css={topBarNavigationDividerStyles({ alignment }, _menuOpen)}>
			{menuChildren ? (
				<Menu
					popoverProps={{
						placement: _menuOpen ? 'end' : undefined,
					}}
					size={_menuOpen ? 'sm' : undefined}
				>
					<MenuToggle>
						<Pressable isDisabled={isDisabled}>
							<span
								role="button"
								data-disabled={isDisabled ? true : undefined}
								css={[
									topBarNavigationStyles(isSelected, _menuOpen),
									topBarNavigationTypographyStyles(size),
									dangerouslyOverrideCss,
								]}
								className={className}
								{...props}
							>
								<Icon size={iconSize}>{icon}</Icon>
								<span
									css={topBarNavigationTextStyles({
										hasIcon: !!icon,
									})}
								>
									{text}
								</span>
								<div css={topBarMenuIndicatorStyles()}>
									<Icon size={iconSize}>{menuIndicator}</Icon>
								</div>
							</span>
						</Pressable>
					</MenuToggle>
					{menuChildren}
				</Menu>
			) : (
				<Link
					css={[
						topBarNavigationStyles(isSelected, _menuOpen),
						topBarNavigationTypographyStyles(size),
						dangerouslyOverrideCss,
					]}
					href={href}
					onPress={onPress}
					className={className}
					isDisabled={isDisabled}
					{...props}
				>
					<Icon size={iconSize}>{icon}</Icon>
					<span css={topBarNavigationTextStyles({ hasIcon: !!icon })}>
						{text}
					</span>
				</Link>
			)}
		</div>
	);
}
