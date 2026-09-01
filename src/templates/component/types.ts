import type { DefaultProps } from '../../util/types';
import type { PartialTemplateComponentTheme } from './styles';

export type TemplateComponentProps =
	DefaultProps<PartialTemplateComponentTheme> & {
		message?: string;
	};
