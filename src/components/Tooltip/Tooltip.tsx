import { mergeDeep } from '../../util/mergeDeep';
import { defaultTooltipTheme, tooltipStyles } from './styles';
import type { TooltipProps } from './types';

export const Tooltip = (props: TooltipProps) => {
	const mergedTheme = mergeDeep(defaultTooltipTheme, props.theme ?? {});

	return (
		<div css={[tooltipStyles(mergedTheme), props.cssOverrides]}>
			<p>template component</p>
			<p>{props.message ?? 'hello world'}</p>
		</div>
	);
};
