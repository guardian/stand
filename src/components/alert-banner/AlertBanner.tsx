import type { ReactFragment } from 'react';
import { useMemo } from 'react';
import type { IconProps } from '../../icon';
import { Icon } from '../../icon';
import { IconButton } from '../../icon-button';
import { mergeDeep } from '../../util/mergeDeep';
import {
	alertBannerContentStyles,
	alertBannerStyles,
	defaultAlertBannerTheme,
} from './styles';
import type { AlertBannerProps } from './types';

export function AlertBanner({
	level,
	showIcon = false,
	icon,
	closeButtonProps,
	children,
	theme = {},
	cssOverrides,
	className,
	...props
}: AlertBannerProps) {
	const mergedTheme = mergeDeep(defaultAlertBannerTheme, theme);

	const determinedIcon = useMemo((): ReactFragment | IconProps['symbol'] => {
		if (icon) {
			return icon;
		}

		switch (level) {
			case 'error':
				return 'warning';
			case 'success':
				return 'sentiment_satisfied';
			case 'warning':
				return 'flag';
			case 'information':
			default:
				return 'info';
		}
	}, [icon, level]);

	return (
		<div
			css={[alertBannerStyles(mergedTheme, { level }), cssOverrides]}
			className={className}
			{...props}
		>
			<div css={alertBannerContentStyles(mergedTheme)}>
				{showIcon && (
					<Icon size="md" fill={mergedTheme.shared.content.icon.color}>
						{determinedIcon}
					</Icon>
				)}
				{children}
			</div>
			{closeButtonProps && (
				<IconButton
					variant="tertiary"
					size="xs"
					symbol="close"
					ariaLabel="Close alert banner"
					{...closeButtonProps}
				/>
			)}
		</div>
	);
}
