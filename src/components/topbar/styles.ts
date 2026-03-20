import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentTopBar } from '../../styleD/build/typescript/component/TopBar';
import { componentTopBar } from '../../styleD/build/typescript/component/TopBar';
import type { DeepPartial, Prettify } from '../../util/types';

export type TopBarTheme = Prettify<ComponentTopBar>;
export type PartialTopBarTheme = DeepPartial<TopBarTheme>;
export const defaultTopBarTheme: TopBarTheme = componentTopBar;

export const topBarStyles = (theme: TopBarTheme): SerializedStyles => {
	return css`
		height: ${theme.height};
		border: ${theme.border};
		display: ${theme.display};
		justify-content: ${theme['justify-content']};
	`;
};

export const topBarLHSStyles = (theme: TopBarTheme): SerializedStyles => {
	return css`
		display: ${theme.display};
	`;
};

export const topBarRHSStyles = (theme: TopBarTheme): SerializedStyles => {
	return css`
		display: ${theme.display};
	`;
};
