import type { ReactNode } from 'react';
import {
	CheckboxGroup as RACCheckboxGroup,
	DatePicker as RACDatePicker,
	RadioGroup as RACRadioGroup,
	SearchField as RACSearchField,
	Select as RACSelect,
	TextField as RACTextField,
} from 'react-aria-components';
import type { DeepPartial, DefaultProps } from '../../util/types';
import type { FormInputContainerTheme } from './styles';

export type FormInputContainerDefaultProps<
	ReactAriaInput extends { className?: unknown },
	ComponentTheme = FormInputContainerTheme,
> = DefaultProps<ComponentTheme, ReactAriaInput['className']> &
	Omit<ReactAriaInput, 'children' | 'className'> & {
		/**
		 * The size of the form input, 'md' (default) or 'sm'.
		 */
		size?: keyof Omit<ComponentTheme, 'shared'>;
		/**
		 * Whether the form input should take up the full width of its container. Defaults to false, which applies a max-width to the input for better readability.
		 */
		fluid?: boolean;
		/**
		 * The label text for the form field.
		 */
		label?: string;
		/**
		 * Custom render function for the label. Receives the `label` string and returns a ReactNode.
		 * Use this to add icons, badges, or other visual enhancements alongside the label text.
		 * Ensure the returned node still includes the label text so the field remains accessible.
		 */
		renderLabel?: (label: string) => ReactNode;
		/**
		 * The description text for the form field
		 */
		description?: string;
		/**
		 * Validation error message
		 */
		error?: string;
		/**
		 * Theme overrides for the FormInputContainer container, label, and description styles.
		 * Use this when the component has its own `theme` prop for component-specific styles.
		 */
		formInputContainerTheme?: DeepPartial<FormInputContainerTheme>;
		/**
		 * The content of the form field (e.g. Input, Button, Popover) should always be plain React nodes.
		 * RAC render-prop children (present on Select etc.) are intentionally excluded to
		 * preserve React 18/19 compatibility where functions are not assignable to ReactNode.
		 */
		children?: ReactNode;
	};

/**
 * The React Aria form container components FormInputContainer supports.
 * Add new components here
 */
export const ALLOWED_FORM_CONTAINERS = [
	RACTextField,
	RACSearchField,
	RACSelect,
	RACRadioGroup,
	RACCheckboxGroup,
	RACDatePicker,
] as const;
export type AllowedContainer = (typeof ALLOWED_FORM_CONTAINERS)[number];
