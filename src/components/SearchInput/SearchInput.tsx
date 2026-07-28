import {
	SearchField as RACSearchField,
	Input as ReactAriaInput,
} from 'react-aria-components';
import { mergeDeep } from '../../util/mergeDeep';
import { FormInputContainer } from '../Form/Form';
import { Icon } from '../Icon/Icon';
import { defaultSearchInputTheme, searchInputStyles } from './styles';
import type { SearchInputProps } from './types';

export function SearchInput({
	size = 'md',
	isInvalid = false,
	theme = {},
	placeholder,
	...props
}: SearchInputProps) {
	const mergedTheme = mergeDeep(defaultSearchInputTheme, theme);

	return (
		<FormInputContainer
			as={RACSearchField}
			size={size}
			isInvalid={isInvalid}
			{...props}
		>
			<div css={searchInputStyles(mergedTheme, { size, isInvalid })}>
				<Icon size={size} symbol="search" className="search-icon"></Icon>
				<ReactAriaInput placeholder={placeholder} />
			</div>
		</FormInputContainer>
	);
}
