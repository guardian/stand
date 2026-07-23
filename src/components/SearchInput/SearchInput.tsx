import { mergeDeep } from '../../util/mergeDeep';
import { defaultSearchInputTheme, searchInputStyles } from './styles';
import type { SearchInputProps } from './types';

export const SearchInput = (props: SearchInputProps) => {
	const mergedTheme = mergeDeep(defaultSearchInputTheme, props.theme ?? {});

	return (
		<div css={[searchInputStyles(mergedTheme), props.cssOverrides]}>
			<p>template component</p>
			<p>{props.message ?? 'hello world'}</p>
		</div>
	);
};
