import type { TextFieldProps as RACTextInputProps } from 'react-aria-components';
import type { FormInputContainerDefaultProps } from '../form/types';
import type { TextInputTheme } from './styles';

export interface TextInputProps extends FormInputContainerDefaultProps<
	RACTextInputProps,
	TextInputTheme
> {
	/** Temporary text that occupies the text input when it is empty */
	placeholder?: string;
}
