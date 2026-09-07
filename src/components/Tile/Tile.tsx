import { Link as ReactAriaLink } from 'react-aria-components';
import { mergeDeep } from '../../util/mergeDeep';
import { Icon } from '../Icon/Icon';
import { Typography } from '../Typography/Typography';
import {
	defaultTileTheme,
	tileArrowStyles,
	tileContentStyles,
	tileDescriptionStyles,
	tileStyles,
	tileTextStyles,
	tileTitleStyles,
} from './styles';
import type { TileProps } from './types';

export function Tile({
	children,
	description,
	typography = 'bodyBoldSm',
	descriptionTypography = 'bodySm',
	icon = 'account_balance',
	size = 'md',
	theme = {},
	cssOverrides,
	className,
	...props
}: TileProps) {
	const mergedTheme = mergeDeep(defaultTileTheme, theme);
	return (
		<ReactAriaLink
			{...props}
			className={className}
			css={[tileStyles(mergedTheme, { size }), cssOverrides]}
		>
			<div css={tileContentStyles(mergedTheme, { size })}>
				<div css={tileTextStyles()}>
					{icon && <Icon size={size}>{icon}</Icon>}
					<Typography variant={typography} cssOverrides={tileTitleStyles()}>
						{children}
					</Typography>
				</div>

				<Icon
					symbol="arrow_forward"
					size={size}
					cssOverrides={tileArrowStyles(mergedTheme)}
				/>
			</div>

			{description && (
				<Typography
					variant={descriptionTypography}
					theme={{ color: mergedTheme.shared.descriptionColor }}
					cssOverrides={tileDescriptionStyles(mergedTheme)}
				>
					{description}
				</Typography>
			)}
		</ReactAriaLink>
	);
}
