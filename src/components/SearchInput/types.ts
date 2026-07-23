import type { DefaultProps } from '../../util/types';
import type { SearchInputTheme } from './styles';

export type SearchInputProps = DefaultProps<SearchInputTheme> & {
	message?: string;
};
