import {
	SearchField as RACSearchField,
	Input as ReactAriaInput,
} from 'react-aria-components';
import { mergeDeep } from '../../util/mergeDeep';
import { FormInputContainer } from '../Form/Form';
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
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					<path d="m21 21-4.34-4.34"></path>
					<circle cx="11" cy="11" r="8"></circle>
				</svg>
				<ReactAriaInput placeholder={placeholder} />
			</div>
		</FormInputContainer>
	);
}
