import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentLayout } from '../../styleD/build/typescript/component/layout';
import { componentLayout } from '../../styleD/build/typescript/component/layout';
import { from } from '../../styleD/utils/semantic/mq';
import type { DeepPartial, Prettify } from '../../util/types';
import type { LayoutProps, SidebarProps } from './types';

export type LayoutTheme = Prettify<ComponentLayout['layout']>;
export type PartialLayoutTheme = Prettify<DeepPartial<LayoutTheme>>;
export const defaultLayoutTheme: LayoutTheme = componentLayout['layout'];

export type SidebarTheme = Prettify<ComponentLayout['sidebar']>;
export type PartialSidebarTheme = Prettify<DeepPartial<SidebarTheme>>;
export const defaultSidebarTheme: SidebarTheme = componentLayout['sidebar'];

export const alertBannerLayoutStyles = (): SerializedStyles => {
	return css`
		grid-area: alertbanner;
	`;
};

export const topBarLayoutStyles = (): SerializedStyles => {
	return css`
		grid-area: topbar;
	`;
};

export const sidebarLayoutStyles = (): SerializedStyles => {
	return css`
		grid-area: sidebar;
	`;
};

export const mainLayoutStyles = (
	theme: LayoutTheme,
	{ fluid }: Required<Pick<LayoutProps, 'fluid'>>,
): SerializedStyles => {
	return css`
		grid-area: main;
		${fluid
			? ''
			: css`
					max-width: ${theme.shared['max-width']};
					margin-left: ${theme.shared['margin-left']};
					margin-right: ${theme.shared['margin-right']};
				`}
	`;
};

export const layoutStyles = (theme: LayoutTheme): SerializedStyles => {
	return css`
		display: ${theme.shared.display};
		min-height: ${theme.shared.minHeight};
		width: ${theme.shared.width};

		grid-template-areas: ${theme.sm.gridTemplateAreas};
		grid-template-columns: ${theme.sm.gridTemplateColumns};
		grid-template-rows: ${theme.sm.gridTemplateRows};

		${from.md} {
			grid-template-areas: ${theme.md.gridTemplateAreas};
			grid-template-columns: ${theme.md.gridTemplateColumns};
			grid-template-rows: ${theme.md.gridTemplateRows};
		}

		${from.lg} {
			grid-template-areas: ${theme.lg.gridTemplateAreas};
			grid-template-columns: ${theme.lg.gridTemplateColumns};
			grid-template-rows: ${theme.lg.gridTemplateRows};
		}
	`;
};

export const sidebarStyles = (
	theme: SidebarTheme,
	{ layoutSmBreakpoint }: Required<Pick<SidebarProps, 'layoutSmBreakpoint'>>,
): SerializedStyles => {
	return css`
		${from.sm} {
			${(() => {
				switch (layoutSmBreakpoint) {
					case 'above-grid':
						return css`
							display: ${theme.sm.aboveGrid.display};
						`;
					case 'hidden':
						return css`
							display: ${theme.sm.hidden.display};
						`;
				}
			})()}
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
