import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { SwitchRenderProps } from 'react-aria-components';
import type { ComponentToggleSwitch } from '../../styleD/build/typescript/component/toggleSwitch';
import { componentToggleSwitch } from '../../styleD/build/typescript/component/toggleSwitch';
import type { DeepPartial, Prettify } from '../../util/types';
import { convertTypographyToEmotionStringStyle } from '../../utils';
import type { ToggleSwitchProps } from './types';

export type ToggleSwitchTheme = Prettify<ComponentToggleSwitch>;
export type PartialToggleSwitchTheme = Prettify<DeepPartial<ToggleSwitchTheme>>;

export const defaultToggleSwitchTheme: ToggleSwitchTheme =
	componentToggleSwitch;

type ToggleSwitchTrackState = Pick<
	SwitchRenderProps,
	'isSelected' | 'isDisabled' | 'isFocusVisible'
>;

type ToggleSwitchThumbState = Pick<
	SwitchRenderProps,
	'isSelected' | 'isDisabled'
>;

export const toggleSwitchStyles = (
	theme: ToggleSwitchTheme,
	{ size }: Required<Pick<ToggleSwitchProps, 'size'>>,
): SerializedStyles => css`
	display: ${theme.shared.display};
	align-items: ${theme.shared.alignItems};
	gap: ${theme.shared.gap};
	cursor: ${theme.shared.cursor};
	${convertTypographyToEmotionStringStyle(theme[size].typography)}
	color: ${theme.shared.color};

	&[data-disabled] {
		color: ${theme.shared.disabled.color};
		cursor: ${theme.shared.disabled.cursor};
	}
`;

export const toggleSwitchLabelStyles = (
	theme: ToggleSwitchTheme,
): SerializedStyles => css`
	display: ${theme.shared.label.display};
	flex-direction: ${theme.shared.label.flexDirection};
	align-items: ${theme.shared.label.alignItems};
	padding-block: ${theme.shared.label.paddingBlock};
`;

export const toggleSwitchDescriptionStyles = (
	theme: ToggleSwitchTheme,
): SerializedStyles => css`
	${convertTypographyToEmotionStringStyle(theme.shared.description.typography)}
	color: ${theme.shared.description.color};
`;

export const toggleSwitchTrackStyles = (
	theme: ToggleSwitchTheme,
	{
		size,
		isSelected,
		isDisabled,
		isFocusVisible,
	}: Required<Pick<ToggleSwitchProps, 'size'>> & ToggleSwitchTrackState,
): SerializedStyles => {
	let backgroundColor = theme.shared.track.backgroundColor;

	if (isSelected) {
		backgroundColor = theme.shared.track.selected.backgroundColor;
	}

	if (isDisabled) {
		backgroundColor = theme.shared.track.disabled.backgroundColor;
	}

	return css`
		display: ${theme.shared.track.display};
		align-items: ${theme.shared.track.alignItems};
		width: ${theme[size].track.width};
		height: ${theme[size].track.height};
		padding: ${theme.shared.track.padding};
		border-radius: ${theme.shared.track.borderRadius};
		background-color: ${backgroundColor};
		transition: ${theme.shared.track.transition};
		${
			isFocusVisible &&
			css`
				outline: ${theme.shared.track.focusVisible.outline};
				outline-offset: ${theme.shared.track.focusVisible.outlineOffset};
			`
		}
	`;
};

export const toggleSwitchThumbStyles = (
	theme: ToggleSwitchTheme,
	{
		size,
		isSelected,
		isDisabled,
	}: Required<Pick<ToggleSwitchProps, 'size'>> & ToggleSwitchThumbState,
): SerializedStyles => css`
	display: flex;
	align-items: center;
	justify-content: center;
	width: ${theme[size].thumb.size};
	height: ${theme[size].thumb.size};
	border-radius: ${theme.shared.thumb.borderRadius};
	background-color: ${theme.shared.thumb.backgroundColor};
	color: ${
		isDisabled ? theme.shared.thumb.disabled.color : theme.shared.thumb.color
	};
	transform: ${
		isSelected ? `translateX(${theme[size].thumb.translateX})` : 'none'
	};
	transition: ${theme.shared.thumb.transition};
`;

export const toggleSwitchIconStyles = (
	isSelected: SwitchRenderProps['isSelected'],
): SerializedStyles => css`
	opacity: ${isSelected ? 1 : 0};
`;
