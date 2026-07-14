import {
	Button as ReactAriaButton,
	Tooltip as ReactAriaTooltip,
	TooltipTrigger as ReactAriaTooltipTrigger,
} from 'react-aria-components';
// import { mergeDeep } from '../../util/mergeDeep';
import { Icon } from '../Icon/Icon';
import {
	// defaultTooltipTheme,
	tooltipStyles,
	tooltipTriggerStyles,
} from './styles';
// import type { TooltipProps } from './types';

export const Tooltip = () => {
	// const mergedTheme = mergeDeep(defaultTooltipTheme, props.theme ?? {});

	return (
		<ReactAriaTooltipTrigger delay={0}>
			<ReactAriaButton css={tooltipTriggerStyles}>
				<Icon size="sm" symbol="question_mark" />
			</ReactAriaButton>
			<ReactAriaTooltip css={tooltipStyles} placement="end">
				Tooltip text
			</ReactAriaTooltip>
		</ReactAriaTooltipTrigger>
	);
};
