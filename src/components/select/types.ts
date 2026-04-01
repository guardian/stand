import type {
	ListBoxItemProps as RACListBoxItemProps,
	ListBoxProps as RACListBoxProps,
	SelectProps as RACSelectProps,
} from 'react-aria-components';
import type { DefaultPropsWithChildren } from '../../util/types';
import type { FormInputContainerDefaultProps } from '../form/types';
import type { SelectTheme } from './styles';

export interface OptionProps
	extends
		DefaultPropsWithChildren<SelectTheme, RACListBoxItemProps['className']>,
		Omit<RACListBoxItemProps, 'children'> {}

export interface ListBoxProps
	extends
		DefaultPropsWithChildren<SelectTheme, RACListBoxProps<object>['className']>,
		Omit<RACListBoxProps<object>, 'children'> {}

export type SelectProps = FormInputContainerDefaultProps<
	RACSelectProps<object, 'single' | 'multiple'>,
	SelectTheme
>;
