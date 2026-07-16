import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import {
	componentTooltip,
	type ComponentTooltip,
} from '../../styleD/build/typescript/component/tooltip';
import type { DeepPartial, Prettify } from '../../util/types';

export type TooltipTheme = Prettify<ComponentTooltip>;
export type PartialTooltipTheme = Prettify<DeepPartial<TooltipTheme>>;
export const defaultTooltipTheme: TooltipTheme = componentTooltip;

export const tooltipTriggerStyles = (
	theme: TooltipTheme,
): SerializedStyles => css`
	display: inline-flex;
	appearance: none;
	border: none;
	padding: 0;
	width: ${theme.trigger.size};
	height: ${theme.trigger.size};
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	color: ${theme.shared.color};
	background-color: ${theme.shared.backgroundColor};
`;

export const tooltipStyles = (theme: TooltipTheme): SerializedStyles => css`
	padding: ${theme.tooltip.padding};
	max-width: ${theme.tooltip.maxWidth};
	background-color: ${theme.shared.backgroundColor};
	border-radius: ${theme.tooltip.borderRadius};
	filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.15));

	&[data-placement='top'] {
		margin-bottom: ${theme.tooltip.offset};
		svg {
			transform: rotate(-90deg) translateX(3px);
		}
	}

	&[data-placement='bottom'] {
		margin-top: ${theme.tooltip.offset};
		svg {
			transform: rotate(90deg) translateX(3px);
		}
	}

	&[data-placement='right'] {
		margin-left: ${theme.tooltip.offset};
	}

	&[data-placement='left'] {
		margin-right: ${theme.tooltip.offset};
		svg {
			transform: rotate(180deg);
		}
	}
`;

export const tooltipArrowStyles = (
	theme: TooltipTheme,
): SerializedStyles => css`
	display: block;
	fill: ${theme.shared.backgroundColor};
`;
