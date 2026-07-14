import type {
	RadioGroupProps as RACRadioGroupProps,
	RadioProps as RACRadioProps,
} from 'react-aria-components';
import type { DefaultProps } from '../../util/types';
import type { FormInputContainerDefaultProps } from '../Form/types';
import type { RadioGroupTheme } from './styles';

export type RadioGroupProps = FormInputContainerDefaultProps<
	RACRadioGroupProps,
	RadioGroupTheme
>;

export interface RadioProps
	extends
		DefaultProps<RadioGroupTheme, RACRadioProps['className']>,
		RACRadioProps {
	size?: keyof Omit<RadioGroupTheme, 'shared'>;
	/**
	 * Orientation of the radio buttons. Can be either 'horizontal' or 'vertical'.
	 * @default 'vertical'
	 */
	orientation?: 'horizontal' | 'vertical';
	/** Whether the input value is invalid. */
	isInvalid?: boolean;
}
