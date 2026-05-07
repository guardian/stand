import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentLayout } from '../../styleD/build/typescript/component/layout';
import { componentLayout } from '../../styleD/build/typescript/component/layout';
import { from } from '../../styleD/utils/semantic/mq';
import type { DeepPartial, Prettify } from '../../util/types';

export type LayoutTheme = Prettify<ComponentLayout['layout']>;
export type PartialLayoutTheme = Prettify<DeepPartial<LayoutTheme>>;
export const defaultLayoutTheme: LayoutTheme = componentLayout['layout'];

export type SidebarTheme = Prettify<ComponentLayout['sidebar']>;
export type PartialSidebarTheme = Prettify<DeepPartial<SidebarTheme>>;
export const defaultSidebarTheme: SidebarTheme = componentLayout['sidebar'];

export const layoutStyles = (theme: LayoutTheme): SerializedStyles => {
	return css`
		display: ${theme.shared.display};
		min-height: ${theme.shared.minHeight};
		width: ${theme.shared.width};

		grid-template-areas: ${theme.shared.gridTemplateAreas};

		grid-template-columns: ${theme.shared.gridTemplateColumns};
		grid-template-rows: ${theme.shared.gridTemplateRows};
	`;
};

export const sidebarStyles = (theme: SidebarTheme): SerializedStyles => {
	return css`
		${from.sm} {
			display: ${theme.sm.display};
		}

		${from.md} {
			display: ${theme.md.display};
			width: ${theme.md.width};
		}

		${from.lg} {
			width: ${theme.lg.width};
		}
	`;
};
