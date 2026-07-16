import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { baseSpacing } from '../../styleD/build/typescript/base/spacing';
import {
	componentTooltip,
	type ComponentTooltip,
} from '../../styleD/build/typescript/component/tooltip';
import { semanticRadius } from '../../styleD/build/typescript/semantic/radius';
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
	width: 20px;
	height: 20px;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	color: ${theme.color.text};
	background-color: ${theme.color.background};
`;

export const tooltipStyles = (theme: TooltipTheme): SerializedStyles => css`
	padding: ${baseSpacing['12Rem']};
	max-width: 26ch;
	background-color: ${theme.color.background};
	border-radius: ${semanticRadius.cornerSm};
	filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.15));

	&[data-placement='top'] {
		margin-bottom: ${baseSpacing['16Rem']};
		svg {
			transform: rotate(-90deg) translateX(3px);
		}
	}

	&[data-placement='bottom'] {
		margin-top: ${baseSpacing['16Rem']};
		svg {
			transform: rotate(90deg) translateX(3px);
		}
	}

	&[data-placement='right'] {
		margin-left: ${baseSpacing['16Rem']};
	}

	&[data-placement='left'] {
		margin-right: ${baseSpacing['16Rem']};
		svg {
			transform: rotate(180deg);
		}
	}
`;

export const tooltipArrowStyles = (
	theme: TooltipTheme,
): SerializedStyles => css`
	display: block;
	fill: ${theme.color.background};
`;
