import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import {
	componentSegmentedControl,
	type ComponentSegmentedControl,
} from '../../styleD/build/typescript/component/segmentedControl';
import { convertTypographyToEmotionStringStyle } from '../../styleD/utils/semantic/typography';
import type { DeepPartial, Prettify } from '../../util/types';

export type SegmentedControlTheme = Prettify<ComponentSegmentedControl>;
export type PartialSegmentedControlTheme = Prettify<
	DeepPartial<ComponentSegmentedControl>
>;
export const defaultSegmentedControlTheme: SegmentedControlTheme =
	componentSegmentedControl;

export const segmentedControlStyles = (
	theme: SegmentedControlTheme,
): SerializedStyles => css`
	display: inline-flex;
	align-items: stretch;
	border-radius: ${theme.group.borderRadius};
	background-color: ${theme.group.backgroundColor};
`;

export const segmentedControlItemStyles = (
	theme: SegmentedControlTheme,
): SerializedStyles => css`
	appearance: none;
	box-sizing: border-box;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	position: relative;
	margin: 0;
	height: ${theme.item.height};
	padding: 0 calc(${theme.item.paddingInline} - ${theme.item.borderWidth});
	border: ${theme.item.borderWidth} solid ${theme.item.borderColor};
	border-inline-color: transparent;
	border-radius: 0;
	background-color: ${theme.group.backgroundColor};
	color: ${theme.item.color};
	${convertTypographyToEmotionStringStyle(theme.item.typography)}
	line-height: ${theme.item.lineHeight};
	white-space: nowrap;
	cursor: pointer;

	&:first-child {
		border-inline-start-color: ${theme.item.borderColor};
		border-start-start-radius: ${theme.group.borderRadius};
		border-end-start-radius: ${theme.group.borderRadius};
	}

	&:last-child {
		border-inline-end-color: ${theme.item.borderColor};
		border-start-end-radius: ${theme.group.borderRadius};
		border-end-end-radius: ${theme.group.borderRadius};
	}

	&:not(:last-child)::after {
		content: '';
		position: absolute;
		inset-block: calc(${theme.item.separatorInset} - ${theme.item.borderWidth});
		inset-inline-end: 0;
		border-inline-end: ${theme.item.borderWidth} solid ${theme.item.borderColor};
		pointer-events: none;
	}

	&[data-selected]::after,
	&:has(+ [data-selected])::after {
		display: none;
	}

	&[data-hovered] {
		background-color: ${theme.item.hover.backgroundColor};
	}

	&[data-pressed] {
		background-color: ${theme.item.pressed.backgroundColor};
	}

	&[data-selected] {
		z-index: 1;
		background-color: ${theme.item.selected.backgroundColor};
		border-color: ${theme.item.selected.borderColor};
		color: ${theme.item.selected.color};
		${convertTypographyToEmotionStringStyle(theme.item.selected.typography)}
		line-height: ${theme.item.lineHeight};
	}

	&[data-selected][data-hovered] {
		background-color: ${theme.item.selected.hover.backgroundColor};
	}

	&[data-selected][data-pressed] {
		background-color: ${theme.item.selected.pressed.backgroundColor};
	}

	&[data-focus-visible] {
		z-index: 2;
		outline: ${theme.item.focusVisible.outlineWidth} solid
			${theme.item.focusVisible.outlineColor};
		outline-offset: ${theme.item.focusVisible.outlineOffset};
	}

	&[data-disabled] {
		background-color: ${theme.item.disabled.backgroundColor};
		border-color: ${theme.item.disabled.borderColor};
		color: ${theme.item.disabled.color};
		cursor: not-allowed;
	}

	@media (forced-colors: active) {
		&[data-selected] {
			border-color: Highlight;
			color: Highlight;
		}

		&[data-disabled] {
			border-color: GrayText;
			color: GrayText;
		}

		&[data-focus-visible] {
			outline-color: Highlight;
		}
	}
`;
