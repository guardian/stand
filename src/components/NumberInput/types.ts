import type { NumberFieldProps } from 'react-aria-components';
import type { FormInputContainerDefaultProps } from '../Form/types';
import type { NumberInputTheme } from './styles';

export interface NumberInputProps extends FormInputContainerDefaultProps<
	NumberFieldProps,
	NumberInputTheme
> {
	/** Temporary text displayed when the numeric input is empty. */
	placeholder?: string;
}
