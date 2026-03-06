import { useState } from 'react';
import { Link } from 'react-aria-components';
import { mergeDeep } from '../../../util/mergeDeep';
import { Icon } from '../../icon/Icon';
import type { MaterialSymbol } from '../../icon/types';
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
	expandsMore,
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

	const [menuExpanded, setMenuExpanded] = useState(false);

	return (
		<>
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
				{expandsMore && (
					<div
						css={topBarExpandMoreStyles(mergedTheme)}
						onClick={() => setMenuExpanded(!menuExpanded)}
					>
						<Icon size={iconSize}>{expandMoreSymbol}</Icon>
					</div>
				)}
			</Link>
			{menuExpanded && <div>Menu TODO</div>}
		</>
	);
}
