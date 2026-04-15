import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import {
	componentTopBar,
	type ComponentTopBar,
} from '../../..//styleD/build/typescript/component/TopBar';
import type { DeepPartial, Prettify } from '../../../util/types';
import { convertTypographyToEmotionStringStyle } from '../../../utils';

export type TopBarToolNameTheme = Prettify<ComponentTopBar['ToolName']>;
export type PartialTopBarToolNameTheme = DeepPartial<TopBarToolNameTheme>;
export const defaultToolNameTheme: TopBarToolNameTheme =
	componentTopBar.ToolName;

export const toolNameHoverLinkStyles = (
	theme: TopBarToolNameTheme,
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
): SerializedStyles => {
	return css`
		${convertTypographyToEmotionStringStyle(theme.typography)}
	`;
};

export const dividerStyles = (theme: TopBarToolNameTheme): SerializedStyles => {
	return css`
		border-right: ${theme.divider.border};
		height: ${theme.divider.height};
	`;
};

export const subsectionStyles = (
	theme: TopBarToolNameTheme,
): SerializedStyles => {
	return css`
		display: ${theme.display};
		align-items: ${theme['align-items']};
		gap: ${theme.subsection.gap};
	`;
};

export const subsectionTypography = (
	theme: TopBarToolNameTheme,
): SerializedStyles => {
	return css`
		${convertTypographyToEmotionStringStyle(theme.subsection.typography)}
	`;
};
