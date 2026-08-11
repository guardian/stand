import type { DefaultProps } from '../../util/types';
import type { TextListInputTheme } from './styles';

export type TextListInputProps = DefaultProps<TextListInputTheme> & {
	message?: string;
};
