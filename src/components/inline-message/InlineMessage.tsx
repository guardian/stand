import { useMemo } from 'react';
import { mergeDeep } from '../../util/mergeDeep';
import { Icon } from '../icon/Icon';
import { Typography } from '../typography/Typography';
import {
	defaultInlineMessageTheme,
	inlineMessageIconStyles,
	inlineMessageStyles,
} from './styles';
import type { InlineMessageProps } from './types';

export function InlineMessage({
	children,
	level,
	hideIcon = false,
	icon,
	theme = {},
	cssOverrides,
	className,
	...props
}: InlineMessageProps) {
	const mergedTheme = mergeDeep(defaultInlineMessageTheme, theme);

	const determinedIcon = useMemo(() => {
		if (icon) {
			return icon;
		}

		switch (level) {
			case 'error':
				return 'warning';
			case 'success':
				return 'check_circle';
			case 'information':
			default:
				return 'info';
		}
	}, [icon, level]);

	return (
		<div
			css={[inlineMessageStyles(mergedTheme, { level }), cssOverrides]}
			className={className}
			{...props}
		>
			{!hideIcon && (
				<Icon
					fill={mergedTheme[level].color}
					cssOverrides={inlineMessageIconStyles(mergedTheme)}
					size="md"
				>
					{determinedIcon}
				</Icon>
			)}
			<Typography
				variant="help-text-form-md"
				theme={{ color: mergedTheme[level].color }}
			>
				{children}
			</Typography>
		</div>
	);
}
