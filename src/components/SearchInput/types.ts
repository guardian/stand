import type { SearchFieldProps as RACSearchInputProps } from 'react-aria-components';
import type { FormInputContainerDefaultProps } from '../Form/types';
import type { SearchInputTheme } from './styles';

export interface SearchInputProps extends FormInputContainerDefaultProps<
	RACSearchInputProps,
	SearchInputTheme
> {
	/** Temporary text that occupies the text input when it is empty */
	placeholder?: string;
}
