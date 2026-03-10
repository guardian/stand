import { Link, Pressable } from 'react-aria-components';
import { mergeDeep } from '../../../util/mergeDeep';
import { Icon } from '../../icon/Icon';
import type { MaterialSymbol } from '../../icon/types';
import { Menu, MenuToggle } from '../../menu/Menu';
import {
	defaultTopBarNavigationTheme,
	isSelectedStyles,
	topBarExpandMoreStyles,
	topBarNavigationStyles,
	topBarNavigationTextStyles,
	topBarNavigationTypographyStyles,
} from './styles';
import type { TopBarNavigationProps } from './types';

const expandMoreSymbol: MaterialSymbol = 'keyboard_arrow_down';

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
	...props
}: TopBarNavigationProps) {
	const mergedTheme = mergeDeep(defaultTopBarNavigationTheme, theme);

	const iconSize = size === 'md' ? 'lg' : 'sm';

	return (
		<>
			{menuChildren ? (
				<Menu
					popoverProps={{
						offset: 8,
					}}
				>
					<MenuToggle>
						<Pressable isDisabled={isDisabled}>
							<span
								role="button"
								data-disabled={isDisabled ? true : undefined}
								css={[
									topBarNavigationStyles(mergedTheme, isSelected),
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
								<div css={topBarExpandMoreStyles(mergedTheme)}>
									<Icon size={iconSize}>{expandMoreSymbol}</Icon>
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
