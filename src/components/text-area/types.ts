import type { TextFieldProps as RACTextAreaProps } from 'react-aria-components';
import type { FormInputContainerDefaultProps } from '../form/types';
import type { TextAreaTheme } from './styles';

export interface TextAreaProps extends FormInputContainerDefaultProps<
	RACTextAreaProps,
	TextAreaTheme
> {
	/** Temporary text that occupies the text area when it is empty */
	placeholder?: string;
}
