import type { TextFieldProps as RACTextAreaProps } from 'react-aria-components';
import type { FormInputContainerDefaultProps } from '../form/types';
import type { TextAreaTheme } from './styles';

export type TextAreaProps = FormInputContainerDefaultProps<
	RACTextAreaProps,
	TextAreaTheme
>;
