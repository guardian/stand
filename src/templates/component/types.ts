import type { DefaultProps } from '../../util/types';
import type { TemplateComponentTheme } from './styles';

export type TemplateComponentProps = DefaultProps<TemplateComponentTheme> & {
	message?: string;
};
