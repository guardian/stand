import { Link, Pressable } from 'react-aria-components';
import { mergeDeep } from '../../../util/mergeDeep';
import { Icon } from '../../icon/Icon';
import type { MaterialSymbol } from '../../icon/types';
import { Menu, MenuToggle } from '../../menu/Menu';
import { defaultTopBarItemTheme, topBarItemStyles } from '../topbarItem/styles';
import {
	defaultTopBarNavigationTheme,
	isSelectedStyles,
	topBarMenuIndicatorStyles,
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
	theme = {},
	cssOverrides,
	className,
	topBarItemProps,
	...props
}: TopBarNavigationProps) {
	const mergedTheme = mergeDeep(defaultTopBarNavigationTheme, theme);
	const mergedTopBarItemTheme = mergeDeep(
		defaultTopBarItemTheme,
		topBarItemProps?.theme ?? {},
	);
	const iconSize = size === 'md' ? 'lg' : 'sm';

	return (
		<>
			{menuChildren ? (
				<Menu>
					<MenuToggle>
						<Pressable isDisabled={isDisabled}>
							<span
								role="button"
								data-disabled={isDisabled ? true : undefined}
								css={[
									topBarNavigationStyles(mergedTheme, isSelected),
									topBarItemStyles(
										mergedTopBarItemTheme,
										topBarItemProps?.alignment ?? 'left',
										{ size: 'md' },
									),
									topBarNavigationTypographyStyles(mergedTheme, size),
									isSelected && isSelectedStyles(mergedTheme),
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
						topBarItemStyles(
							mergedTopBarItemTheme,
							topBarItemProps?.alignment ?? 'left',
							{ size: 'md' },
						),
						topBarNavigationTypographyStyles(mergedTheme, size),
						isSelected && isSelectedStyles(mergedTheme),
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
		</>
	);
}
