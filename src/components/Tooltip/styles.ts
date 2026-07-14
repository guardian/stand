import { css } from '@emotion/react';
import { baseSpacing } from '../../styleD/build/typescript/base/spacing';
import {
	componentTooltip,
	type ComponentTooltip,
} from '../../styleD/build/typescript/component/tooltip';
import { semanticColors } from '../../styleD/build/typescript/semantic/colors';
import { semanticRadius } from '../../styleD/build/typescript/semantic/radius';
import { semanticSpacing } from '../../styleD/build/typescript/semantic/spacing';
import { semanticTypography } from '../../styleD/build/typescript/semantic/typography';
import type { DeepPartial, Prettify } from '../../util/types';

export type TooltipTheme = Prettify<ComponentTooltip>;
export type PartialTooltipTheme = Prettify<DeepPartial<TooltipTheme>>;
export const defaultTooltipTheme: TooltipTheme = componentTooltip;

export const tooltipTriggerStyles = css`
	display: inline-flex;
	appearance: none;
	border: none;
	padding: 0;
	width: 20px;
	height: 20px;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	color: ${semanticColors.text.strong};
	background-color: ${semanticColors.fill.informationWeak};
	> span {
		font-size: 0.875rem;
	}
`;

export const tooltipStyles = css`
	padding: ${semanticSpacing.stackSm};
	color: ${semanticColors.text.strong};
	background-color: ${semanticColors.fill.informationWeak};
	box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.15);
	border-radius: ${semanticRadius.cornerSm};
	font: ${semanticTypography.bodyXs.font};
	letter-spacing: ${semanticTypography.bodyXs.letterSpacing};
	font-variation-settings: 'wdth' ${semanticTypography.bodyXs.fontWidth};

	&[data-placement='top'] {
		margin-bottom: ${baseSpacing['6Rem']};
	}

	&[data-placement='bottom'] {
		margin-top: ${baseSpacing['6Rem']};
	}

	&[data-placement='right'] {
		margin-left: ${baseSpacing['6Rem']};
	}

	&[data-placement='left'] {
		margin-right: ${baseSpacing['6Rem']};
	}
`;
