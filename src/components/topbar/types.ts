import type { DefaultProps } from '../../util/types';
import type { TopBarTheme } from './styles';

export interface TopBarProps extends DefaultProps<TopBarTheme> {
	children?: React.ReactNode;
}
