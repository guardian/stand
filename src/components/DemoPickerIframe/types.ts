import type { DefaultProps } from '../../util/types';
import type { DemoPickerIframeTheme } from './styles';

export type DemoPickerIframeProps = DefaultProps<DemoPickerIframeTheme> & {
	message?: string;
};
