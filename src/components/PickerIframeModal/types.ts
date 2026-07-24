import type { ReactNode } from 'react';
import type { DefaultProps } from '../../util/types';
import type { PickerIframeModalTheme } from './styles';

export type PickerIframeModalProps<DataType> =
	DefaultProps<PickerIframeModalTheme> & {
		title: ReactNode;
		href?: string;
		validate: { (messageData: unknown): { data?: DataType } };
		handleData: { (data: DataType): void };
	};
