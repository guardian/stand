import { Link as ReactAriaLink } from 'react-aria-components';
import { mergeDeep } from '../../util/mergeDeep';
import { Icon } from '../Icon/Icon';
import { Typography } from '../Typography/Typography';
import {
	defaultTileTheme,
	tileArrowStyles,
	tileBottomRowStyles,
	tileContentStyles,
	tileDescriptionStyles,
	tileIconStyles,
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
				<div css={tileTextStyles(mergedTheme)}>
					{icon && (
						<Icon size={size} cssOverrides={tileIconStyles(mergedTheme)}>
							{icon}
						</Icon>
					)}
					<Typography
						variant={typography}
						theme={{ color: mergedTheme.shared.color }}
						cssOverrides={tileTitleStyles(mergedTheme)}
					>
						{children}
					</Typography>
				</div>
			</div>

			<div css={tileBottomRowStyles()}>
				{description && (
					<Typography
						variant={descriptionTypography}
						theme={{ color: mergedTheme.shared.descriptionColor }}
						cssOverrides={tileDescriptionStyles(mergedTheme)}
					>
						{description}
					</Typography>
				)}
				<Icon
					symbol="arrow_forward"
					size={size}
					cssOverrides={tileArrowStyles(mergedTheme)}
				/>
			</div>
		</ReactAriaLink>
	);
}
