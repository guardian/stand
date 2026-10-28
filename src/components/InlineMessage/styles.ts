import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ComponentInlineMessage } from '../../styleD/build/typescript/component/inlineMessage';
import { componentInlineMessage } from '../../styleD/build/typescript/component/inlineMessage';
import type { DeepPartial, Prettify } from '../../util/types';
import type { InlineMessageProps } from './types';

export type InlineMessageTheme = Prettify<ComponentInlineMessage>;
export type PartialInlineMessageTheme = DeepPartial<InlineMessageTheme>;

export const defaultInlineMessageTheme: InlineMessageTheme =
	componentInlineMessage;

export const inlineMessageStyles = (
	theme: InlineMessageTheme,
	{ level }: Required<Pick<InlineMessageProps, 'level'>>,
): SerializedStyles => {
	return css`
		display: inline-flex;
		align-items: center;
		gap: ${theme.shared.gap};
		color: ${theme[level].color};
	`;
};

export const inlineMessageIconStyles = (): SerializedStyles => {
	return css`
		align-self: flex-start;
	`;
};
