/* eslint-disable @typescript-eslint/no-unused-vars -- component under development, theme not yet defined */
import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { baseSizing } from '../../styleD/build/typescript/base/sizing';
import { baseSpacing } from '../../styleD/build/typescript/base/spacing';
import {
	componentUserFeedbackSummary,
	type ComponentUserFeedbackSummary,
} from '../../styleD/build/typescript/component/userFeedbackSummary';
import { semanticColors } from '../../styleD/build/typescript/semantic/colors';
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
		display: flex;
		gap: ${baseSpacing['4Rem']};
		color: ${semanticColors.text.error};
		border: 1px solid ${semanticColors.border.error};
		padding: ${baseSpacing['12Rem']} ${baseSpacing['16Rem']}
			${baseSpacing['12Rem']} ${baseSpacing['8Rem']};
		max-width: 46ch;
	`;
};

export const messageStyles = (
	theme: UserFeedbackSummaryTheme,
): SerializedStyles => {
	return css`
		display: flex;
		flex-direction: column;
		gap: ${baseSpacing['4Rem']};
		margin-top: ${baseSizing['size1Rem']};
	`;
};
