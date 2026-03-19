import { Link, Pressable } from 'react-aria-components';
import { mergeDeep } from '../../../util/mergeDeep';
import { Icon } from '../../icon/Icon';
import type { MaterialSymbol } from '../../icon/types';
import { Menu, MenuToggle } from '../../menu/Menu';
import {
	defaultTopBarNavigationTheme,
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
	theme = {},
	cssOverrides,
	className,
	...props
}: TopBarNavigationProps) {
	const mergedTheme = mergeDeep(defaultTopBarNavigationTheme, theme);
	const iconSize = size === 'md' ? 'lg' : 'sm';

	return (
		<div css={topBarNavigationDividerStyles(mergedTheme, { alignment })}>
			{menuChildren ? (
				<Menu>
					<MenuToggle>
						<Pressable isDisabled={isDisabled}>
							<span
								role="button"
								data-disabled={isDisabled ? true : undefined}
								css={[
									topBarNavigationStyles(mergedTheme, isSelected),
									topBarNavigationTypographyStyles(mergedTheme, size),
									cssOverrides,
								]}
								className={className}
								{...props}
							>
								<Icon size={iconSize}>{icon}</Icon>
								<span css={topBarNavigationTextStyles(mergedTheme)}>
									{text}
								</span>
								<div css={topBarMenuIndicatorStyles(mergedTheme)}>
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
						topBarNavigationStyles(mergedTheme, isSelected),
						topBarNavigationTypographyStyles(mergedTheme, size),
						cssOverrides,
					]}
					href={href}
					onPress={onPress}
					className={className}
					isDisabled={isDisabled}
					{...props}
				>
					<Icon size={iconSize}>{icon}</Icon>
					<span css={topBarNavigationTextStyles(mergedTheme)}>{text}</span>
				</Link>
			)}
		</div>
	);
}
