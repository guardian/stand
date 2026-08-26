import type { TextInputTheme } from '../../TextInput';
import type { DefaultProps } from '../../util/types';
import type { TextListInputTheme } from './styles';

export type TextListInputProps = DefaultProps<TextListInputTheme> & {
	/**
	 * Label text for text list group
	 */
	label: string;
	/**
	 * Size of text inputs in the group
	 */
	size?: keyof Omit<TextInputTheme, 'shared'>;
	/**
	 * Temporary text that occupies the text input when it is empty
	 */
	placeholder?: string;
	/**
	 * Initial data to populate text list with (optional)
	 */
	initialData?: string[];
	/**
	 * Error message to display below text list (optional)
	 */
	errorMessage?: string;
	/**
	 * Function called when values of text inputs changes
	 */
	onChange: (values: string[]) => void;
};
