import {
	Button as ReactAriaButton,
	OverlayArrow as ReactAriaOverlayArrow,
	Tooltip as ReactAriaTooltip,
	TooltipTrigger as ReactAriaTooltipTrigger,
} from 'react-aria-components';
import { mergeDeep } from '../../util/mergeDeep';
import { Icon } from '../Icon/Icon';
import { Typography } from '../Typography/Typography';
import {
	defaultTooltipTheme,
	tooltipArrowStyles,
	tooltipStyles,
	type TooltipTheme,
	tooltipTriggerStyles,
} from './styles';
import type { TooltipProps } from './types';

export const Tooltip = ({
	children,
	placement = 'end',
	theme = {},
	cssOverrides,
	className,
	...props
}: TooltipProps) => {
	const mergedTheme = mergeDeep(defaultTooltipTheme, theme);
	return (
		<ReactAriaTooltipTrigger delay={0} closeDelay={0} {...props}>
			<ReactAriaButton css={tooltipTriggerStyles(mergedTheme)}>
				<Icon size="xs" symbol="question_mark" />
			</ReactAriaButton>
			<ReactAriaTooltip
				css={[tooltipStyles(mergedTheme), cssOverrides]}
				placement={placement}
				className={className}
			>
				<TooltipArrow theme={mergedTheme} />
				<Typography
					variant="metaMd"
					theme={{ color: mergedTheme.shared.color.text }}
				>
					{children}
				</Typography>
			</ReactAriaTooltip>
		</ReactAriaTooltipTrigger>
	);
};

const TooltipArrow = ({ theme }: { theme: TooltipTheme }) => (
	<ReactAriaOverlayArrow>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="9"
			height="14"
			css={tooltipArrowStyles(theme)}
		>
			<path d="M0 6.928 9 0v13.856z" />
		</svg>
	</ReactAriaOverlayArrow>
);
