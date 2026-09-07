import {
	Button as ReactAriaButton,
	Link as ReactAriaLink,
} from 'react-aria-components';
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
import type { TileTheme } from './styles';
import type {
	ClickableTileProps,
	MultiSelectTileProps,
	SelectableTileProps,
	TileInteractionMode,
	TileProps,
} from './types';

type TileContentProps = Pick<
	TileProps,
	| 'children'
	| 'description'
	| 'descriptionTypography'
	| 'icon'
	| 'size'
	| 'typography'
> & {
	interactionMode: TileInteractionMode;
	isSelected?: boolean;
	theme: TileTheme;
};

function getTileIndicator(
	interactionMode: TileInteractionMode,
	isSelected?: boolean,
) {
	switch (interactionMode) {
		case 'clickable':
			return 'arrow_forward';
		case 'selectable':
			return isSelected ? 'radio_button_checked' : 'radio_button_unchecked';
		case 'multi-select':
			return isSelected ? 'check_box' : 'check_box_outline_blank';
		default:
			return 'arrow_forward';
	}
}

function TileContent({
	children,
	description,
	typography = 'bodyBoldSm',
	descriptionTypography = 'bodySm',
	icon = 'account_balance',
	size = 'md',
	interactionMode,
	isSelected,
	theme,
}: TileContentProps) {
	const indicator = getTileIndicator(interactionMode, isSelected);
	const hasDescription = Boolean(description);

	return (
		<>
			<div css={tileContentStyles(theme, { size })}>
				<div css={tileTextStyles(theme)}>
					{icon && (
						<Icon size={size} cssOverrides={tileIconStyles(theme)}>
							{icon}
						</Icon>
					)}
					<Typography
						variant={typography}
						theme={{ color: theme.shared.color }}
						cssOverrides={tileTitleStyles(theme)}
					>
						{children}
					</Typography>
				</div>
				{interactionMode !== 'clickable' && (
					<Icon
						symbol={indicator}
						size={size}
						cssOverrides={tileArrowStyles(theme)}
					/>
				)}
			</div>

			{(hasDescription || interactionMode === 'clickable') && (
				<div css={tileBottomRowStyles()}>
					{description && (
						<Typography
							variant={descriptionTypography}
							theme={{ color: theme.shared.descriptionColor }}
							cssOverrides={tileDescriptionStyles(theme)}
						>
							{description}
						</Typography>
					)}
					{interactionMode === 'clickable' && (
						<Icon
							symbol={indicator}
							size={size}
							cssOverrides={tileArrowStyles(theme)}
						/>
					)}
				</div>
			)}
		</>
	);
}

function ClickableLinkTile({
	interactionMode: _interactionMode,
	theme = {},
	cssOverrides,
	children,
	description,
	typography,
	descriptionTypography,
	icon,
	size = 'md',
	...props
}: ClickableTileProps) {
	void _interactionMode;
	const mergedTheme = mergeDeep(defaultTileTheme, theme);

	return (
		<ReactAriaLink
			{...props}
			css={[tileStyles(mergedTheme, { size }), cssOverrides]}
		>
			<TileContent
				{...{
					children,
					description,
					typography,
					descriptionTypography,
					icon,
					size,
				}}
				interactionMode="clickable"
				theme={mergedTheme}
			/>
		</ReactAriaLink>
	);
}

function SelectionTile(props: SelectableTileProps | MultiSelectTileProps) {
	const {
		interactionMode,
		value,
		isSelected,
		onSelectionChange,
		theme = {},
		cssOverrides,
		children,
		description,
		typography,
		descriptionTypography,
		icon,
		size = 'md',
		...buttonProps
	} = props;
	const mergedTheme = mergeDeep(defaultTileTheme, theme);
	const handlePress = () => {
		if (interactionMode === 'selectable') {
			if (!isSelected) {
				onSelectionChange(value);
			}
		} else {
			onSelectionChange(value, !isSelected);
		}
	};

	return (
		<ReactAriaButton
			{...buttonProps}
			aria-pressed={isSelected}
			data-selected={isSelected || undefined}
			onPress={handlePress}
			css={[tileStyles(mergedTheme, { size }), cssOverrides]}
		>
			<TileContent
				{...{
					children,
					description,
					typography,
					descriptionTypography,
					icon,
					size,
				}}
				interactionMode={interactionMode}
				isSelected={isSelected}
				theme={mergedTheme}
			/>
		</ReactAriaButton>
	);
}

export function Tile(props: TileProps) {
	if (
		props.interactionMode === 'selectable' ||
		props.interactionMode === 'multi-select'
	) {
		return <SelectionTile {...props} />;
	}

	return <ClickableLinkTile {...props} />;
}
