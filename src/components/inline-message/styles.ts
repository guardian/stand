import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentInlineMessage } from '../../styleD/build/typescript/component/inlineMessage';
import { componentInlineMessage } from '../../styleD/build/typescript/component/inlineMessage';
import type { Prettify } from '../../util/types';
import type { InlineMessageProps } from './types';

export type InlineMessageTheme = Prettify<ComponentInlineMessage>;

export const defaultInlineMessageTheme: InlineMessageTheme =
	componentInlineMessage;

export const inlineMessageStyles = (
	theme: InlineMessageTheme,
	{ level }: Required<Pick<InlineMessageProps, 'level'>>,
): SerializedStyles => {
	return css`
		display: ${theme.shared.display};
		align-items: ${theme.shared['align-items']};
		gap: ${theme.shared.gap};
		color: ${theme[level].color};
	`;
};
