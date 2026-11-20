import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import {
	componentTopBar,
	type ComponentTopBar,
} from '../../../styleD/build/typescript/component/topBar';
import type { DeepPartial, Prettify } from '../../../util/types';
import {
	convertCSSTypographyToEmotionStringStyle,
	until,
} from '../../../utils';
import type { TopBarToolNameProps } from './types';

export type TopBarToolNameTheme = Prettify<ComponentTopBar['toolName']>;
export type PartialTopBarToolNameTheme = Prettify<
	DeepPartial<TopBarToolNameTheme>
>;
export const defaultToolNameTheme: TopBarToolNameTheme =
	componentTopBar.toolName;

export const toolNameHoverLinkStyles = ({
	collapseBelow,
}: Required<Pick<TopBarToolNameProps, 'collapseBelow'>>): SerializedStyles => {
	return css`
		${convertCSSTypographyToEmotionStringStyle(`--component-top-bar-tool-name-hover-link`)}
		background-color: var(
			--component-top-bar-tool-name-hover-link-background-color
		);
		color: var(--component-top-bar-tool-name-hover-link-color);
		align-items: center;
		padding-left: var(--component-top-bar-tool-name-hover-link-padding-left);
		padding-right: var(--component-top-bar-tool-name-hover-link-padding-right);
		display: flex;
		opacity: var(--component-top-bar-tool-name-hover-link-opacity);

		position: absolute;
		width: var(--component-top-bar-tool-name-hover-link-width);
		height: var(--component-top-bar-tool-name-hover-link-height);

		${until[collapseBelow]} {
			padding-left: var(
				--component-top-bar-tool-name-hover-link-collapsed-padding-left
			);
			padding-right: var(
				--component-top-bar-tool-name-hover-link-collapsed-padding-right
			);
			justify-content: center;
		}
	`;
};

export const toolNameHoverLinkTextExpandedStyles = ({
	collapseBelow,
}: Required<Pick<TopBarToolNameProps, 'collapseBelow'>>): SerializedStyles => {
	return css`
		${until[collapseBelow]} {
			display: none;
		}
	`;
};

export const toolNameHoverLinkTextCollapsedStyles = ({
	collapseBelow,
}: Required<Pick<TopBarToolNameProps, 'collapseBelow'>>): SerializedStyles => {
	return css`
		display: none;

		${until[collapseBelow]} {
			display: block;
		}
	`;
};

export const toolNameLinkStyles = (): SerializedStyles => {
	return css`
		text-decoration: none;
		color: var(--component-top-bar-tool-name-link-color);
		position: relative;

		/* Show the first element - the hover text */
		&[data-hovered] :first-of-type {
			opacity: var(--component-top-bar-tool-name-hover-link-hover-opacity);
		}

		&[data-pressed] :first-of-type {
			background-color: var(
				--component-top-bar-tool-name-hover-link-pressed-background-color
			);
		}

		&[data-focus-visible] {
			outline: var(--component-top-bar-tool-name-hover-link-focused-outline);
			outline-offset: var(
				--component-top-bar-tool-name-hover-link-focused-outline-offset
			);
		}
	`;
};

export const toolNameStyles = (): SerializedStyles => {
	return css`
		display: flex;
		align-items: center;
		gap: var(--component-top-bar-tool-name-gap);
		color: var(--component-top-bar-tool-name-color);
	`;
};

export const toolNameTypography = ({
	collapseBelow,
}: Required<Pick<TopBarToolNameProps, 'collapseBelow'>>): SerializedStyles => {
	return css`
		${convertCSSTypographyToEmotionStringStyle(`--component-top-bar-tool-name`)}
		${until[collapseBelow]} {
			display: none;
		}
	`;
};

export const dividerStyles = ({
	collapseBelow,
}: Required<Pick<TopBarToolNameProps, 'collapseBelow'>>): SerializedStyles => {
	return css`
		border-right: var(--component-top-bar-tool-name-divider-border);
		height: var(--component-top-bar-tool-name-divider-height);
		${until[collapseBelow]} {
			display: none;
		}
	`;
};

export const subsectionStyles = ({
	collapseBelow,
}: Required<Pick<TopBarToolNameProps, 'collapseBelow'>>): SerializedStyles => {
	return css`
		display: flex;
		align-items: center;
		gap: var(--component-top-bar-tool-name-subsection-gap);
		${until[collapseBelow]} {
			display: none;
		}
	`;
};

export const subsectionTypography = (): SerializedStyles => {
	return css`
		${convertCSSTypographyToEmotionStringStyle(`--component-top-bar-tool-name-subsection`)}
	`;
};
