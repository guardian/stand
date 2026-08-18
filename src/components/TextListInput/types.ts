import type { DefaultProps } from '../../util/types';
import type { TextListInputTheme } from './styles';

export type TextListInputProps = DefaultProps<TextListInputTheme> & {
	/**
	 * Label text for text list group
	 */
	label: string;
	/**
	 * Function called when values of text inputs changes
	 */
	onChange: (values: string[]) => void;
};
