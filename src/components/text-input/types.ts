import type { TextFieldProps as RACTextInputProps } from 'react-aria-components';
import type { FormInputContainerDefaultProps } from '../form/types';
import type { TextInputTheme } from './styles';

export type TextInputProps = FormInputContainerDefaultProps<
	RACTextInputProps,
	TextInputTheme
>;
