import { useMemo } from 'react';
import { mergeDeep } from '../../util/mergeDeep';
import { Icon } from '../Icon/Icon';
import { Typography } from '../Typography/Typography';
import {
	defaultUserFeedbackSummaryTheme,
	messageStyles,
	userFeedbackSummaryStyles,
} from './styles';
import type { UserFeedbackSummaryProps } from './types';

export const UserFeedbackSummary = ({
	children,
	level,
	title,
	hideIcon = false,
	icon,
	theme = {},
	cssOverrides,
	className,
	...props
}: UserFeedbackSummaryProps) => {
	const mergedTheme = mergeDeep(defaultUserFeedbackSummaryTheme, theme);

	const determinedIcon = useMemo(() => {
		if (icon) {
			return icon;
		}

		switch (level) {
			case 'error':
				return 'warning';
			case 'warning':
				return 'flag';
			case 'success':
				return 'sentiment_satisfied_alt';
			case 'information':
				return 'info';
		}
	}, [icon, level]);

	return (
		<div
			css={[userFeedbackSummaryStyles(mergedTheme), cssOverrides]}
			className={className}
			{...props}
		>
			{!hideIcon && <Icon size="md">{determinedIcon}</Icon>}
			<div css={messageStyles(mergedTheme)}>
				<Typography variant="bodyBoldSm">{title}</Typography>
				{children && <Typography variant="bodySm">{children}</Typography>}
			</div>
		</div>
	);
};
