import type { DefaultProps } from '../../util/types';
import type { UserFeedbackSummaryTheme } from './styles';

export type UserFeedbackSummaryProps =
	DefaultProps<UserFeedbackSummaryTheme> & {
		message?: string;
	};
