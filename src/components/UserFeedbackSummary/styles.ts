import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { baseSizing } from '../../styleD/build/typescript/base/sizing';
import { baseSpacing } from '../../styleD/build/typescript/base/spacing';
import {
	componentUserFeedbackSummary,
	type ComponentUserFeedbackSummary,
} from '../../styleD/build/typescript/component/userFeedbackSummary';
import type { DeepPartial, Prettify } from '../../util/types';
import type { UserFeedbackSummaryProps } from './types';

export type UserFeedbackSummaryTheme = Prettify<ComponentUserFeedbackSummary>;
export type PartialUserFeedbackSummaryTheme = Prettify<
	DeepPartial<UserFeedbackSummaryTheme>
>;
export const defaultUserFeedbackSummaryTheme: UserFeedbackSummaryTheme =
	componentUserFeedbackSummary;

export const userFeedbackSummaryStyles = (
	theme: UserFeedbackSummaryTheme,
	{ level }: Required<Pick<UserFeedbackSummaryProps, 'level'>>,
): SerializedStyles => {
	return css`
		display: flex;
		gap: ${theme.shared.gap};
		border-width: ${theme.shared.borderWidth};
		border-style: ${theme.shared.borderStyle};
		border-color: ${theme[level].borderColor};
		padding-top: ${theme.shared.paddingTop};
		padding-right: ${theme.shared.paddingRight};
		padding-bottom: ${theme.shared.paddingBottom};
		padding-left: ${theme.shared.paddingLeft};
		max-width: ${theme.shared.maxWidth};
	`;
};

export const textLayoutStyles = css`
	display: flex;
	flex-direction: column;
	gap: ${baseSpacing['4Rem']};
	margin-top: ${baseSizing['size1Rem']};
`;
