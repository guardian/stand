import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import {
	componentUserFeedbackSummary,
	type ComponentUserFeedbackSummary,
} from '../../styleD/build/typescript/component/userFeedbackSummary';
import type { DeepPartial, Prettify } from '../../util/types';

export type UserFeedbackSummaryTheme = Prettify<ComponentUserFeedbackSummary>;
export type PartialUserFeedbackSummaryTheme = Prettify<
	DeepPartial<UserFeedbackSummaryTheme>
>;
export const defaultUserFeedbackSummaryTheme: UserFeedbackSummaryTheme =
	componentUserFeedbackSummary;

export const userFeedbackSummaryStyles = (
	theme: UserFeedbackSummaryTheme,
): SerializedStyles => {
	return css`
		background-color: ${theme.color.background};
		color: ${theme.color.text};
	`;
};
