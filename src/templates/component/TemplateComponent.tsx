import { mergeDeep } from '../../util/mergeDeep';
import {
	defaultTemplateComponentTheme,
	templateComponentStyles,
} from './styles';
import type { TemplateComponentProps } from './types';

export const TemplateComponent = (props: TemplateComponentProps) => {
	const mergedTheme = mergeDeep(
		defaultTemplateComponentTheme,
		props.theme ?? {},
	);

	return (
		<div css={[templateComponentStyles(mergedTheme), props.cssOverrides]}>
			<p>template component</p>
			<p>{props.message ?? 'hello world'}</p>
		</div>
	);
};
