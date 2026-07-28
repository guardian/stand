import { mergeDeep } from '../../util/mergeDeep';
import {
	defaultUserFeedbackSummaryTheme,
	userFeedbackSummaryStyles,
} from './styles';
import type { UserFeedbackSummaryProps } from './types';

export const UserFeedbackSummary = (props: UserFeedbackSummaryProps) => {
	const mergedTheme = mergeDeep(
		defaultUserFeedbackSummaryTheme,
		props.theme ?? {},
	);

	return (
		<div css={[userFeedbackSummaryStyles(mergedTheme), props.cssOverrides]}>
			<p>template component</p>
			<p>{props.message ?? 'hello world'}</p>
		</div>
	);
};
