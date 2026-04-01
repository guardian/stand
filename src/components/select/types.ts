import type {
	ListBoxItemProps as RACListBoxItemProps,
	ListBoxProps as RACListBoxProps,
	SelectProps as RACSelectProps,
} from 'react-aria-components';
import type { DefaultPropsWithChildren } from '../../util/types';
import type { SelectTheme } from './styles';

export interface OptionProps
	extends
		DefaultPropsWithChildren<SelectTheme, RACListBoxItemProps['className']>,
		Omit<RACListBoxItemProps, 'children'> {}

export interface ListBoxProps
	extends
		DefaultPropsWithChildren<SelectTheme, RACListBoxProps<object>['className']>,
		Omit<RACListBoxProps<object>, 'children'> {}

export interface SelectProps
	extends
		DefaultPropsWithChildren<SelectTheme, RACSelectProps<object>['className']>,
		Omit<RACSelectProps<object>, 'children'> {
	/**
	 * The label text of the select box
	 */
	label: string;
	/**
	 * Validation error message
	 */
	errorMessage?: string;
	/**
	 * Optional contextual help text
	 */
	contextualHelpText?: string;
}
