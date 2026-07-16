import {
	Button as ReactAriaButton,
	OverlayArrow as ReactAriaOverlayArrow,
	Tooltip as ReactAriaTooltip,
	TooltipTrigger as ReactAriaTooltipTrigger,
} from 'react-aria-components';
import { semanticColors } from '../../styleD/build/typescript/semantic/colors';
import { mergeDeep } from '../../util/mergeDeep';
import { Icon } from '../Icon/Icon';
import { Typography } from '../Typography/Typography';
import {
	defaultTooltipTheme,
	tooltipArrowStyles,
	tooltipStyles,
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
				<ReactAriaOverlayArrow>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="9"
						height="14"
						css={tooltipArrowStyles(mergedTheme)}
					>
						<path d="M0 6.928 9 0v13.856z" />
					</svg>
				</ReactAriaOverlayArrow>
				<Typography
					variant="metaMd"
					theme={{ color: semanticColors.text.strong }}
				>
					{children}
				</Typography>
			</ReactAriaTooltip>
		</ReactAriaTooltipTrigger>
	);
};
