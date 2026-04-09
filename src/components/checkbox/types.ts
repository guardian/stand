import type {
	CheckboxGroupProps as RACCheckboxGroupProps,
	CheckboxProps as RACCheckboxProps,
} from 'react-aria-components';
import type { DefaultPropsWithChildren } from '../../util/types';
import type { FormInputContainerDefaultProps } from '../form/types';
import type { CheckboxTheme } from './styles';

export interface CheckboxProps
	extends
		DefaultPropsWithChildren<CheckboxTheme, RACCheckboxProps['className']>,
		Omit<RACCheckboxProps, 'children'> {
	/**
	 * Size variant of the Checkbox - TODO: replace with CheckboxProps['size'] when we add size variants to the Checkbox component in the future
	 */
	size?: 'sm' | 'md';
}

export type CheckboxGroupProps = FormInputContainerDefaultProps<
	RACCheckboxGroupProps,
	CheckboxTheme
>;
