import type { ReactNode } from 'react';
import type { DeepPartial, DefaultProps } from '../../util/types';
import type { DialogTheme, ModalTheme } from '../Modal/styles';
import type { PickerIframeModalTheme } from './styles';

export type PickerIframeModalProps<DataType> =
	DefaultProps<PickerIframeModalTheme> & {
		title: ReactNode;
		closeModal: { (): void };
		href?: string;
		validate: { (messageData: unknown): { data?: DataType } };
		handleData: { (data: DataType): void };
		closeAfterHandling?: boolean;
		modalTheme?: DeepPartial<ModalTheme>;
		dialogTheme?: DeepPartial<DialogTheme>;
		showOpenInNewTabButton?: boolean;
	};
