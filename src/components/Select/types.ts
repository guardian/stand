import type {
	ListBoxItemProps as RACListBoxItemProps,
	ListBoxProps as RACListBoxProps,
	PopoverProps as RACPopoverProps,
	SelectProps as RACSelectProps,
} from 'react-aria-components';
import type { DefaultPropsWithChildren } from '../../util/types';
import type { FormInputContainerDefaultProps } from '../Form/types';
import type { SelectTheme } from './styles';

export interface OptionProps
	extends
		DefaultPropsWithChildren<
			SelectTheme,
			RACListBoxItemProps['className'],
			string
		>,
		Omit<RACListBoxItemProps, 'children'> {}

export interface ListBoxProps
	extends
		DefaultPropsWithChildren<SelectTheme, RACListBoxProps<object>['className']>,
		Omit<RACListBoxProps<object>, 'children'> {}

export type SelectProps = FormInputContainerDefaultProps<
	RACSelectProps<object, 'single' | 'multiple'> & {
		/**x
		 * The placement of the options container element with respect to select input.
		 * @default
		 * 'bottom'
		 */
		placement?: RACPopoverProps['placement'];
		/**
		 * Whether the element options container element flip its orientation (e.g. top to bottom or left to right) when there is insufficient room for it to render completely.
		 * @default
		 * true
		 * */
		shouldFlip?: RACPopoverProps['shouldFlip'];
	},
	SelectTheme
>;
