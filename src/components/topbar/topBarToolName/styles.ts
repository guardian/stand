import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import {
	componentTopBar,
	type ComponentTopBar,
} from '../../..//styleD/build/typescript/component/TopBar';
import type { DeepPartial, Prettify } from '../../../util/types';
import { convertTypographyToEmotionStringStyle, until } from '../../../utils';
import type { TopBarToolNameProps } from './types';

export type TopBarToolNameTheme = Prettify<ComponentTopBar['ToolName']>;
export type PartialTopBarToolNameTheme = Prettify<
	DeepPartial<TopBarToolNameTheme>
>;
export const defaultToolNameTheme: TopBarToolNameTheme =
	componentTopBar.ToolName;

export const toolNameHoverLinkStyles = (
	theme: TopBarToolNameTheme,
	{ collapseBelow }: Required<Pick<TopBarToolNameProps, 'collapseBelow'>>,
): SerializedStyles => {
	return css`
		${convertTypographyToEmotionStringStyle(theme.hoverLink.typography)}
		background-color: ${theme.hoverLink.backgroundColor};
		color: ${theme.hoverLink.color};
		align-items: ${theme['align-items']};
		padding-left: ${theme.hoverLink.paddingLeft};
		padding-right: ${theme.hoverLink.paddingRight};
		display: ${theme.display};
		opacity: ${theme.hoverLink.opacity};

		position: ${theme.hoverLink.position};
		width: ${theme.hoverLink.width};
		height: ${theme.hoverLink.height};

		${until[collapseBelow]} {
			padding-left: ${theme.hoverLink.collapsed.paddingLeft};
			padding-right: ${theme.hoverLink.collapsed.paddingRight};
			justify-content: ${theme.hoverLink.collapsed['justify-content']};
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
		text-decoration: ${theme.link.textDecoration};
		color: ${theme.link.color};
		position: ${theme.link.position};

		/* Show the first element - the hover text */
		&[data-hovered] :first-of-type {
			opacity: ${theme.hoverLink.hover.opacity};
		}

		&[data-pressed] :first-of-type {
			background-color: ${theme.hoverLink.pressed.backgroundColor};
		}

		&[data-focus-visible] {
			outline: ${theme.hoverLink.focused.outline};
			outline-offset: ${theme.hoverLink.focused['outline-offset']};
		}
	`;
};

export const toolNameStyles = (
	theme: TopBarToolNameTheme,
): SerializedStyles => {
	return css`
		display: ${theme.display};
		align-items: ${theme['align-items']};
		gap: ${theme.gap};
		color: ${theme.color};
	`;
};

export const toolNameTypography = (
	theme: TopBarToolNameTheme,
	{ collapseBelow }: Required<Pick<TopBarToolNameProps, 'collapseBelow'>>,
): SerializedStyles => {
	return css`
		${convertTypographyToEmotionStringStyle(theme.typography)}
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
		display: ${theme.display};
		align-items: ${theme['align-items']};
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
		${convertTypographyToEmotionStringStyle(theme.subsection.typography)}
	`;
};
