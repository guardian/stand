import { mergeDeep } from '../../util/mergeDeep';
import { Icon } from '../Icon/Icon';
import { Typography } from '../Typography/Typography';
import {
	defaultUserFeedbackSummaryTheme,
	messageStyles,
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
			<Icon symbol="warning" size="md" />
			<div css={messageStyles(mergedTheme)}>
				<Typography element="p" variant="bodyBoldSm">
					User feedback summary title
				</Typography>
				<Typography element="p" variant="bodySm">
					Problem description
				</Typography>
			</div>
		</div>
	);
};
