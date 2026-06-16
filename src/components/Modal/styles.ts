import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import {
	componentModal,
	type ComponentModal,
} from '../../styleD/build/typescript/component/modal';
import { semanticTypography } from '../../styleD/build/typescript/semantic/typography';
import { from } from '../../styleD/utils/semantic/mq';
import { convertTypographyToEmotionStringStyle } from '../../styleD/utils/semantic/typography';
import type { DeepPartial, Prettify } from '../../util/types';

export type ModalTheme = Prettify<Pick<ComponentModal, 'modal' | 'overlay'>>;
export type PartialModalTheme = Prettify<DeepPartial<ModalTheme>>;
export const defaultModalTheme: ModalTheme = {
	modal: componentModal.modal,
	overlay: componentModal.overlay,
};

export const modalOverlayStyles = (theme: ModalTheme): SerializedStyles => {
	return css`
		position: ${theme.overlay.position};
		top: ${theme.overlay.top};
		left: ${theme.overlay.left};
		width: ${theme.overlay.width};
		height: ${theme.overlay.height};
		background: ${theme.overlay.backgroundColor};
		overflow: ${theme.overlay.overflow};
		z-index: ${theme.overlay.zIndex};
	`;
};

export const modalStyles = (theme: ModalTheme): SerializedStyles => {
	return css`
		position: ${theme.modal.position};
		max-height: calc(var(--visual-viewport-height, 100svh) * 0.9);
		top: calc(var(--visual-viewport-height, 100svh) / 2);
		margin-left: ${theme.modal.marginLeft};
		translate: ${theme.modal.translate};
		box-shadow: ${theme.modal.boxShadow};
		border-radius: ${theme.modal.borderRadius};
		width: ${theme.modal.width};
		max-width: ${theme.modal.maxWidth};
		background-color: ${theme.modal.backgroundColor};
		padding-top: ${theme.modal.padding.top};
		padding-bottom: ${theme.modal.padding.bottom};
		padding-left: ${theme.modal.padding.left};
		padding-right: ${theme.modal.padding.right};
	`;
};

export type DialogTheme = Prettify<ComponentModal['dialog']>;
export type PartialDialogTheme = Prettify<DeepPartial<DialogTheme>>;
export const defaultDialogTheme: DialogTheme = componentModal.dialog;

export const dialogStyles = (
	theme: DialogTheme['container'],
): SerializedStyles => {
	return css`
		display: ${theme.display};
		grid-template-areas: ${theme.gridTemplateAreas};
		grid-template-columns: ${theme.gridTemplateColumns};
		grid-template-rows: ${theme.gridTemplateRows};
	`;
};

export const dialogDismissStyles = (
	theme: DialogTheme['dismiss'],
): SerializedStyles => {
	return css`
		grid-area: ${theme.gridArea};
		margin-left: ${theme.marginLeft};
		margin-bottom: ${theme.marginBottom};
		border: ${theme.border};
		height: ${theme.height};
		width: ${theme.width};

		&[data-hovered] {
			background: ${theme.hovered.background};
			border: ${theme.hovered.border};
		}
	`;
};

export const dialogHeadingStyles = (
	theme: DialogTheme['title'],
): SerializedStyles => {
	return css`
		grid-area: ${theme.gridArea};
		margin-bottom: ${theme.marginBottom};
	`;
};

export const dialogContentStyles = (
	theme: DialogTheme['children'],
): SerializedStyles => {
	return css`
		grid-area: ${theme.gridArea};
		margin-bottom: ${theme.marginBottom};
		${convertTypographyToEmotionStringStyle(semanticTypography.bodyMd)}
	`;
};

export const dialogButtonsStyles = (
	theme: DialogTheme['ctas'],
): SerializedStyles => {
	return css`
		grid-area: ${theme.gridArea};
		display: ${theme.display};
		flex-direction: ${theme.flexDirection};
		gap: ${theme.gap};
		justify-content: ${theme.justifyContent};

		${from.md} {
			flex-direction: ${theme.md.flexDirection};
		}
	`;
};
