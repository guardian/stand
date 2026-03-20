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

export const toolNameStyles = (
	theme: TopBarToolNameTheme,
): SerializedStyles => {
	return css`
		display: ${theme.display};
		align-items: ${theme['align-items']};
		gap: ${theme.gap};
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
