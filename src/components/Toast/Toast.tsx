import {
	Text as ReactAriaText,
	UNSTABLE_Toast as ReactAriaToast,
	UNSTABLE_ToastContent as ReactAriaToastContent,
	UNSTABLE_ToastQueue as ReactAriaToastQueue,
	UNSTABLE_ToastRegion as ReactAriaToastRegion,
} from 'react-aria-components';
import { Icon } from '../../Icon';
import { IconButton } from '../../IconButton';
import { mergeDeep } from '../../util/mergeDeep';
import {
	defaultToastTheme,
	toastAdditionalInfoStyles,
	toastContentStyles,
	toastDescriptionStyles,
	toastDismissStyles,
	toastIconStyles,
	toastMediaStyles,
	toastRegionStyles,
	toastStyles,
	toastSubjectStyles,
	toastTitleStyles,
} from './styles';
import type {
	ToastContent,
	ToastLevel,
	ToastProps,
	ToastRegionProps,
} from './types';

export const ToastQueue = ReactAriaToastQueue;
export const toastQueue = new ToastQueue<ToastContent>();

const defaultIcons: Record<ToastLevel, NonNullable<ToastContent['icon']>> = {
	error: 'warning',
	warning: 'flag',
	success: 'sentiment_satisfied',
	information: 'info',
};

export function ToastRegion({
	queue = toastQueue,
	toastProps,
	className,
	...props
}: ToastRegionProps) {
	const mergedTheme = mergeDeep(defaultToastTheme, toastProps?.theme ?? {});

	return (
		<ReactAriaToastRegion
			queue={queue}
			css={toastRegionStyles(mergedTheme)}
			className={className}
			{...props}
		>
			{({ toast }) => <Toast toast={toast} {...toastProps} />}
		</ReactAriaToastRegion>
	);
}

export function Toast({
	toast,
	theme = {},
	cssOverrides,
	className,
	...props
}: ToastProps) {
	const mergedTheme = mergeDeep(defaultToastTheme, theme);
	const {
		level,
		title,
		subject,
		additionalInfo,
		thumbnail,
		showIcon = false,
		icon = defaultIcons[level],
		dismissButtonProps,
	} = toast.content;
	const hasIcon = showIcon && !thumbnail;
	const hasLeadingVisual = Boolean(thumbnail) || hasIcon;
	const { cssOverrides: dismissCssOverrides, ...remainingDismissButtonProps } =
		dismissButtonProps ?? {};

	return (
		<ReactAriaToast
			toast={toast}
			css={[
				toastStyles(mergedTheme, {
					hasLeadingVisual,
					level,
				}),
				cssOverrides,
			]}
			className={className}
			{...props}
		>
			{thumbnail ? (
				<div css={toastMediaStyles(mergedTheme)}>{thumbnail}</div>
			) : hasIcon ? (
				<Icon size="md" cssOverrides={toastIconStyles(mergedTheme, { level })}>
					{icon}
				</Icon>
			) : null}
			<ReactAriaToastContent css={toastContentStyles(mergedTheme)}>
				<ReactAriaText slot="title" css={toastTitleStyles(mergedTheme)}>
					{title}
				</ReactAriaText>
				<ReactAriaText
					slot="description"
					css={toastDescriptionStyles(mergedTheme)}
				>
					<span css={toastSubjectStyles(mergedTheme)}>{subject}</span>
					{additionalInfo !== undefined && additionalInfo !== null ? (
						<span css={toastAdditionalInfoStyles(mergedTheme)}>
							{additionalInfo}
						</span>
					) : null}
				</ReactAriaText>
			</ReactAriaToastContent>
			<IconButton
				slot="close"
				variant="tertiary"
				size="xs"
				symbol="close"
				ariaLabel="Dismiss notification"
				{...remainingDismissButtonProps}
				cssOverrides={
					dismissCssOverrides
						? [
								toastDismissStyles(),
								...(Array.isArray(dismissCssOverrides)
									? dismissCssOverrides
									: [dismissCssOverrides]),
							]
						: toastDismissStyles()
				}
			/>
		</ReactAriaToast>
	);
}
