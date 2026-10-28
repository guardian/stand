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
		position: absolute;
		top: 0;
		left: 0;
		width: ${theme.overlay.width};
		height: ${theme.overlay.height};
		background: ${theme.overlay.backgroundColor};
		overflow: clip;
		z-index: 100;
	`;
};

export const modalStyles = (theme: ModalTheme): SerializedStyles => {
	return css`
		position: absolute;
		max-height: calc(var(--visual-viewport-height, 100svh) * 0.9);
		top: calc(var(--visual-viewport-height, 100svh) / 2);
		margin-left: 50svw;
		translate: -50% -50%;
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

export const dialogStyles = (): SerializedStyles => {
	return css`
		display: grid;
		grid-template-areas: 'dismiss' 'title' 'children' 'ctas';
		grid-template-columns: 1fr;
		grid-template-rows: auto auto 1fr auto;
	`;
};

export const dialogDismissStyles = (
	theme: DialogTheme['dismiss'],
): SerializedStyles => {
	return css`
		grid-area: dismiss;
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
		grid-area: title;
		margin-bottom: ${theme.marginBottom};
	`;
};

export const dialogContentStyles = (
	theme: DialogTheme['children'],
): SerializedStyles => {
	return css`
		grid-area: children;
		margin-bottom: ${theme.marginBottom};
		${convertTypographyToEmotionStringStyle(semanticTypography.bodyMd)}
	`;
};

export const dialogButtonsStyles = (
	theme: DialogTheme['ctas'],
): SerializedStyles => {
	return css`
		grid-area: ctas;
		display: flex;
		flex-direction: column;
		gap: ${theme.gap};
		justify-content: flex-end;

		${from.md} {
			flex-direction: row;
		}
	`;
};
