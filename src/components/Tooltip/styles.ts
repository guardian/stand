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

export const tooltipStyles = (theme: TooltipTheme): SerializedStyles => {
	return css`
		background-color: ${theme.color.background};
		color: ${theme.color.text};
	`;
};
