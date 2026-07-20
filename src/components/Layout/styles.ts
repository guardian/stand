import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentLayout } from '../../styleD/build/typescript/component/layout';
import { componentLayout } from '../../styleD/build/typescript/component/layout';
import { from } from '../../styleD/utils/semantic/mq';
import type { DeepPartial, Prettify } from '../../util/types';
import type { MainProps, SidebarProps } from './types';

export type LayoutTheme = Prettify<ComponentLayout['layout']>;
export type PartialLayoutTheme = Prettify<DeepPartial<LayoutTheme>>;
export const defaultLayoutTheme: LayoutTheme = componentLayout['layout'];

export type SidebarTheme = Prettify<ComponentLayout['sidebar']>;
export type PartialSidebarTheme = Prettify<DeepPartial<SidebarTheme>>;
export const defaultSidebarTheme: SidebarTheme = componentLayout['sidebar'];

export type MainTheme = Prettify<ComponentLayout['main']>;
export type PartialMainTheme = Prettify<DeepPartial<MainTheme>>;
export const defaultMainTheme: MainTheme = componentLayout['main'];

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
	theme: MainTheme,
	{
		fluid,
		paddingTop,
		paddingBottom,
	}: Required<Pick<MainProps, 'fluid' | 'paddingTop' | 'paddingBottom'>>,
): SerializedStyles => {
	return css`
		grid-area: main;
		${
			fluid
				? ''
				: css`
						max-width: ${theme.maxWidth};
						margin-left: ${theme.marginLeft};
						margin-right: ${theme.marginRight};
					`
		}
		${
			paddingTop
				? css`
						${from.sm} {
							padding-top: ${theme.sm.padding.top};
						}

						${from.md} {
							padding-top: ${theme.md.padding.top};
						}

						${from.lg} {
							padding-top: ${theme.lg.padding.top};
						}
					`
				: ''
		}
		${
			paddingBottom
				? css`
						${from.sm} {
							padding-bottom: ${theme.sm.padding.bottom};
						}

						${from.md} {
							padding-bottom: ${theme.md.padding.bottom};
						}

						${from.lg} {
							padding-bottom: ${theme.lg.padding.bottom};
						}
					`
				: ''
		}
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
