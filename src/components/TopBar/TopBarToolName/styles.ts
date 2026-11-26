import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { component } from '../../../terrazzo/build/stand';
import type { DeepPartial, Prettify } from '../../../util/types';
import { convertTypographyToCssString, until } from '../../../utils';
import type { TopBarToolNameProps } from './types';

export type TopBarToolNameTheme = Prettify<
	(typeof component.topBar)['toolName']
>;
export type PartialTopBarToolNameTheme = Prettify<
	DeepPartial<TopBarToolNameTheme>
>;
export const defaultToolNameTheme: TopBarToolNameTheme =
	component.topBar.toolName;

export const toolNameHoverLinkStyles = (
	theme: TopBarToolNameTheme,
	{ collapseBelow }: Required<Pick<TopBarToolNameProps, 'collapseBelow'>>,
): SerializedStyles => {
	return css`
		${convertTypographyToCssString(theme.hoverLink.typography)}
		background-color: ${theme.hoverLink.backgroundColor};
		color: ${theme.hoverLink.color};
		align-items: center;
		padding-left: ${theme.hoverLink.paddingLeft};
		padding-right: ${theme.hoverLink.paddingRight};
		display: flex;
		opacity: ${theme.hoverLink.opacity};

		position: absolute;
		width: ${theme.hoverLink.width};
		height: ${theme.hoverLink.height};

		${until[collapseBelow]} {
			padding-left: ${theme.hoverLink.collapsed.paddingLeft};
			padding-right: ${theme.hoverLink.collapsed.paddingRight};
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

export const toolNameLinkStyles = (
	theme: TopBarToolNameTheme,
): SerializedStyles => {
	return css`
		text-decoration: none;
		color: ${theme.link.color};
		position: relative;

		/* Show the first element - the hover text */
		&[data-hovered] :first-of-type {
			opacity: ${theme.hoverLink.hover.opacity};
		}

		&[data-pressed] :first-of-type {
			background-color: ${theme.hoverLink.pressed.backgroundColor};
		}

		&[data-focus-visible] {
			outline: ${theme.hoverLink.focused.outline};
			outline-offset: ${theme.hoverLink.focused.outlineOffset};
		}
	`;
};

export const toolNameStyles = (
	theme: TopBarToolNameTheme,
): SerializedStyles => {
	return css`
		display: flex;
		align-items: center;
		gap: ${theme.gap};
		color: ${theme.color};
	`;
};

export const toolNameTypography = (
	theme: TopBarToolNameTheme,
	{ collapseBelow }: Required<Pick<TopBarToolNameProps, 'collapseBelow'>>,
): SerializedStyles => {
	return css`
		${convertTypographyToCssString(theme.typography)}
		${until[collapseBelow]} {
			display: none;
		}
	`;
};

export const dividerStyles = (
	theme: TopBarToolNameTheme,
	{ collapseBelow }: Required<Pick<TopBarToolNameProps, 'collapseBelow'>>,
): SerializedStyles => {
	return css`
		border-right: ${theme.divider.border};
		height: ${theme.divider.height};
		${until[collapseBelow]} {
			display: none;
		}
	`;
};

export const subsectionStyles = (
	theme: TopBarToolNameTheme,
	{ collapseBelow }: Required<Pick<TopBarToolNameProps, 'collapseBelow'>>,
): SerializedStyles => {
	return css`
		display: flex;
		align-items: center;
		gap: ${theme.subsection.gap};
		${until[collapseBelow]} {
			display: none;
		}
	`;
};

export const subsectionTypography = (
	theme: TopBarToolNameTheme,
): SerializedStyles => {
	return css`
		${convertTypographyToCssString(theme.subsection.typography)}
	`;
};
