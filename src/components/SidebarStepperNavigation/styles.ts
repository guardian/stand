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

export const mobileToggleStyles = (): SerializedStyles => css`
	border-bottom: var(
		--component-sidebar-stepper-navigation-mobile-toggle-shared-border
	);
	display: var(
		--component-sidebar-stepper-navigation-mobile-toggle-shared-display
	);
	align-items: center;
	justify-content: space-between;
	height: var(
		--component-sidebar-stepper-navigation-mobile-toggle-shared-height
	);
	padding: 0
		var(
			--component-sidebar-stepper-navigation-mobile-toggle-shared-padding-inline
		);
	width: var(--component-sidebar-stepper-navigation-mobile-toggle-shared-width);
	background-color: var(
		--component-sidebar-stepper-navigation-mobile-toggle-shared-background-color
	);

	${from.md} {
		display: none;
	}

	&[data-hovered] {
		background-color: var(
			--component-sidebar-stepper-navigation-mobile-toggle-shared-hovered-background-color
		);
	}

	&[data-pressed] {
		background-color: var(
			--component-sidebar-stepper-navigation-mobile-toggle-shared-pressed-background-color
		);
	}
`;

export const navigationStyles = (isOpen: boolean): SerializedStyles => css`
	border-right: var(--component-sidebar-stepper-navigation-shared-border);
	display: ${isOpen ? 'flex' : 'none'};
	flex-direction: column;
	height: var(--component-sidebar-stepper-navigation-shared-height);

	${from.md} {
		display: flex;
	}
`;

export const listStyles = css`
	list-style: none;
	padding: 0;
	margin: 0;
`;

export const statusRowStyles = () => css`
	display: var(
		--component-sidebar-stepper-navigation-status-row-shared-display
	);
	gap: var(--component-sidebar-stepper-navigation-status-row-shared-gap);
	align-items: center;
`;

export const stepNumberStyles = (isHovered: boolean, isCurrent: boolean) => css`
	width: var(
		--component-sidebar-stepper-navigation-step-shared-number-column-width
	);
	height: var(--component-sidebar-stepper-navigation-step-number-shared-height);
	background-color: ${
		isCurrent || isHovered
			? 'var(--component-sidebar-stepper-navigation-step-number-shared-background-color)'
			: 'transparent'
	};
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const stepButtonStyles = (
	isCurrent: boolean,
	isDisabled: boolean,
) => css`
	background-color: ${
		isCurrent
			? 'var(--component-sidebar-stepper-navigation-step-shared-current-background-color)'
			: 'var(--component-sidebar-stepper-navigation-step-shared-background-color)'
	};
	height: var(--component-sidebar-stepper-navigation-step-shared-height);
	cursor: ${isDisabled ? 'default' : 'pointer'};
	border-bottom: var(--component-sidebar-stepper-navigation-step-shared-border);
	display: grid;
	grid-template-columns:
		var(--component-sidebar-stepper-navigation-step-shared-number-column-width)
		1fr;
	text-align: left;
	width: 100%;

	&[data-pressed] {
		background-color: var(
			--component-sidebar-stepper-navigation-step-shared-current-background-color
		);
	}
`;

export const stepContentStyles = () => css`
	gap: var(--component-sidebar-stepper-navigation-step-content-shared-gap);
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-left: var(
		--component-sidebar-stepper-navigation-step-content-shared-margin-left
	);
`;
