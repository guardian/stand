import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { base, component } from '../../terrazzo/build/stand';
import type { DeepPartial, Prettify } from '../../util/types';
import type { UserFeedbackSummaryProps } from './types';

export type UserFeedbackSummaryTheme = Prettify<
	typeof component.userFeedbackSummary
>;
export type PartialUserFeedbackSummaryTheme = Prettify<
	DeepPartial<UserFeedbackSummaryTheme>
>;
export const defaultUserFeedbackSummaryTheme: UserFeedbackSummaryTheme =
	component.userFeedbackSummary;

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
	gap: ${base.spacing['4Rem']};
	margin-top: ${base.sizing['size1Rem']};
`;
