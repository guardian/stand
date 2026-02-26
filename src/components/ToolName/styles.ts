import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import {
	componentToolName,
	type ComponentToolName,
} from '../../styleD/build/typescript/component/toolName';
import type { Prettify } from '../../util/types';
import { convertTypographyToEmotionStringStyle } from '../../utils';

export type ToolNameTheme = Prettify<ComponentToolName>;
export const defaultToolNameTheme: ToolNameTheme = componentToolName;

export const toolNameStyles = (theme: ToolNameTheme): SerializedStyles => {
	return css`
		display: ${theme.display};
		align-items: ${theme['align-items']};
		gap: ${theme.gap};
	`;
};

export const toolNameTypography = (theme: ToolNameTheme): SerializedStyles => {
	return css`
		${convertTypographyToEmotionStringStyle(theme.typography)}
	`;
};

export const dividerStyles = (theme: ToolNameTheme): SerializedStyles => {
	return css`
		border-right: ${theme.divider.border};
		height: ${theme.divider.height};
	`;
};

export const contentTypeStyles = (theme: ToolNameTheme): SerializedStyles => {
	return css`
		display: ${theme.display};
		align-items: ${theme['align-items']};
		gap: ${theme.contentType.gap};
	`;
};

export const contentTypeTypography = (
	theme: ToolNameTheme,
): SerializedStyles => {
	return css`
		${convertTypographyToEmotionStringStyle(theme.contentType.typography)}
	`;
};
