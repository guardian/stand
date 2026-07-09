import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentTabs } from '../../styleD/build/typescript/component/tabs';
import { componentTabs } from '../../styleD/build/typescript/component/tabs';
import type { DeepPartial, Prettify } from '../../util/types';
import { convertTypographyToEmotionStringStyle } from '../../utils';
import type { TabProps } from './types';

export type TabsTheme = Prettify<ComponentTabs['tabs']>;
export type PartialTabsTheme = DeepPartial<TabsTheme>;

export const defaultTabsTheme: TabsTheme = componentTabs.tabs;

export const tabsStyles = (theme: TabsTheme): SerializedStyles => {
	return css`
		display: ${theme.shared.display};
		max-width: ${theme.shared.maxWidth};

		&[data-orientation='vertical'] {
			flex-direction: ${theme.shared.orientation.vertical.flexDirection};
			width: ${theme.shared.orientation.vertical.width};
		}

		&[data-orientation='horizontal'] {
			flex-direction: ${theme.shared.orientation.horizontal.flexDirection};
		}
	`;
};

export type TabTheme = Prettify<ComponentTabs['tab']>;
export type PartialTabTheme = DeepPartial<TabTheme>;

export const defaultTabTheme: TabTheme = componentTabs.tab;

export const tabStyles = (
	theme: TabTheme,
	{
		orientation,
		size,
		icon,
	}: Required<Pick<TabProps, 'orientation' | 'size'>> & Pick<TabProps, 'icon'>,
): SerializedStyles => {
	const hasIcon = !!icon;

	return css`
		position: ${theme.shared.position};
		display: ${theme.shared.display};
		gap: ${theme.shared.gap};
		height: ${theme[size].height};
		cursor: ${theme.shared.cursor};
		flex-direction: ${theme.shared.flexDirection};
		justify-content: ${theme.shared.justifyContent};
		align-items: ${theme.shared.alignItems};
		padding: ${theme.shared.padding.top} ${theme.shared.padding.right}
			${theme.shared.padding.bottom} ${theme.shared.padding.left};
		${hasIcon &&
		css`
			padding-right: ${theme.shared.padding.withIcon.right};
		`}
		color: ${theme.shared.color};
		${convertTypographyToEmotionStringStyle(theme[size].typography)}

		&[data-disabled] {
			cursor: ${theme.shared.disabled.cursor};
			color: ${theme.shared.disabled.color};
		}

		/* Override default browser focus behaviour */
		&:focus-visible {
			outline: none;
		}

		&[data-focus-visible] {
			outline: ${theme.shared.focusVisible.outline};
			outline-offset: ${theme.shared.focusVisible.outlineOffset};
		}

		&[data-selected] {
			background: ${theme.shared.selected.background};
		}

		&[data-hovered]::after,
		&[data-selected]::after {
			background: ${theme.shared.selected.border.background};
		}

		${orientation === 'horizontal' &&
		css`
			border-right: ${theme.shared.border};

			&:first-child {
				border-left: ${theme.shared.border};
			}

			&::after {
				content: '';
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				height: ${theme.shared.selected.border.size};
				background: transparent;
			}
		`}

		${orientation === 'vertical' &&
		css`
			border-bottom: ${theme.shared.border};
			padding-right: ${theme.shared.padding.verticalRight};
			${hasIcon &&
			css`
				padding-right: ${theme.shared.padding.withIcon.verticalRight};
			`}

			&:first-child {
				border-top: ${theme.shared.border};
			}

			&::after {
				content: '';
				position: absolute;
				top: 0;
				bottom: 0;
				right: 0;
				width: ${theme.shared.selected.border.size};
				background: transparent;
			}
		`}
	`;
};

export type TabListTheme = Prettify<ComponentTabs['tabList']>;
export type PartialTabListTheme = DeepPartial<TabListTheme>;

export const defaultTabListTheme: TabListTheme = componentTabs.tabList;

export const tabListStyles = (theme: TabListTheme): SerializedStyles => {
	return css`
		display: ${theme.shared.display};

		&[data-orientation='horizontal'] {
			flex-direction: ${theme.shared.orientation.horizontal.flexDirection};
		}

		&[data-orientation='vertical'] {
			flex-direction: ${theme.shared.orientation.vertical.flexDirection};
		}
	`;
};

export type TabPanelsTheme = Prettify<ComponentTabs['tabPanels']>;
export type PartialTabPanelsTheme = DeepPartial<TabPanelsTheme>;

export const defaultTabPanelsTheme: TabPanelsTheme = componentTabs.tabPanels;

export const tabPanelsStyles = (theme: TabPanelsTheme): SerializedStyles => {
	return css`
		position: ${theme.shared.position};
		height: var(--tab-panel-height, auto);
		width: var(--tab-panel-width, auto);
		overflow: ${theme.shared.overflow};
	`;
};

export type TabPanelTheme = Prettify<ComponentTabs['tabPanel']>;
export type PartialTabPanelTheme = DeepPartial<TabPanelTheme>;

export const defaultTabPanelTheme: TabPanelTheme = componentTabs.tabPanel;

export const tabPanelStyles = (theme: TabPanelTheme): SerializedStyles => {
	return css`
		/* TODO: Designs to be provided for tab panel */
		position: ${theme.shared.position};
	`;
};
