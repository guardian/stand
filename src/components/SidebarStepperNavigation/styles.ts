import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import {
	componentSidebarStepperNavigation,
	type ComponentSidebarStepperNavigation,
} from '../../styleD/build/typescript/component/sidebarStepperNavigation';
import type { DeepPartial, Prettify } from '../../util/types';
import { from } from '../../utils';

export type SidebarStepperNavigationTheme =
	Prettify<ComponentSidebarStepperNavigation>;
export type PartialSidebarStepperNavigationTheme = Prettify<
	DeepPartial<SidebarStepperNavigationTheme>
>;

export const defaultSidebarStepperNavigationTheme: SidebarStepperNavigationTheme =
	componentSidebarStepperNavigation;

export const buttonStyleReset = css`
	appearance: none;
	-webkit-appearance: none;
	background-color: transparent;
	font: inherit;
	color: inherit;
	border: none;
	padding: 0;
	margin: 0;
`;

export const mobileToggleStyles = (
	theme: SidebarStepperNavigationTheme,
): SerializedStyles => css`
	border-bottom: ${theme.mobileToggle.shared.border};
	display: ${theme.mobileToggle.shared.display};
	align-items: center;
	justify-content: space-between;
	height: ${theme.mobileToggle.shared.height};
	padding: 0 ${theme.mobileToggle.shared.paddingInline};
	width: ${theme.mobileToggle.shared.width};
	background-color: ${theme.mobileToggle.shared.backgroundColor};

	${from.md} {
		display: none;
	}

	&[data-hovered] {
		background-color: ${theme.mobileToggle.shared.hovered.backgroundColor};
	}

	&[data-pressed] {
		background-color: ${theme.mobileToggle.shared.pressed.backgroundColor};
	}
`;

export const navigationStyles = (
	theme: SidebarStepperNavigationTheme,
	isOpen: boolean,
): SerializedStyles => css`
	border-right: ${theme.navigation.shared.border};
	display: ${isOpen ? 'flex' : 'none'};
	flex-direction: column;
	height: ${theme.navigation.shared.height};

	${from.md} {
		display: flex;
	}
`;

export const listStyles = css`
	list-style: none;
	padding: 0;
	margin: 0;
`;

export const statusRowStyles = (theme: SidebarStepperNavigationTheme) => css`
	display: ${theme.statusRow.shared.display};
	gap: ${theme.statusRow.shared.gap};
	align-items: center;
`;

export const stepNumberStyles = (
	theme: SidebarStepperNavigationTheme,
	isHovered: boolean,
	isCurrent: boolean,
) => css`
	width: ${theme.step.shared.numberColumnWidth};
	height: ${theme.stepNumber.shared.height};
	background-color: ${
		isCurrent || isHovered
			? theme.stepNumber.shared.backgroundColor
			: 'transparent'
	};
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const stepButtonStyles = (
	theme: SidebarStepperNavigationTheme,
	isCurrent: boolean,
	isDisabled: boolean,
) => css`
	background-color: ${
		isCurrent
			? theme.step.shared.currentBackgroundColor
			: theme.step.shared.backgroundColor
	};
	height: ${theme.step.shared.height};
	cursor: ${isDisabled ? 'default' : 'pointer'};
	border-bottom: ${theme.step.shared.border};
	display: grid;
	grid-template-columns: ${theme.step.shared.numberColumnWidth} 1fr;
	text-align: left;
	width: 100%;

	&[data-pressed] {
		background-color: ${theme.step.shared.currentBackgroundColor};
	}
`;

export const stepContentStyles = (theme: SidebarStepperNavigationTheme) => css`
	gap: ${theme.stepContent.shared.gap};
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-left: ${theme.stepContent.shared.marginLeft};
`;
