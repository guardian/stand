import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentMenu } from '../../styleD/build/typescript/component/menu';
import { componentMenu } from '../../styleD/build/typescript/component/menu';
import type { Prettify } from '../../util/types';

export type MenuTheme = Prettify<ComponentMenu>;

export const defaultMenuTheme: MenuTheme = componentMenu;

export const menuStyles = (theme: MenuTheme): SerializedStyles => {
	return css`
		display: ${theme.shared.display};
		align-items: ${theme.shared['align-items']};
		justify-content: ${theme.shared['justify-content']};
		user-select: ${theme.shared['user-select']};
	`;
};
