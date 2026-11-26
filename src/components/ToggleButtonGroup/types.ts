import type {
	Key,
	ToggleButtonGroupProps as RACToggleButtonGroupProps,
	ToggleButtonProps as RACToggleButtonProps,
} from 'react-aria-components';
import type { DefaultProps } from '../../util/types';
import type { ToggleButtonGroupTheme } from './styles';

export interface ToggleButtonGroupProps
	extends
		DefaultProps<
			ToggleButtonGroupTheme,
			RACToggleButtonGroupProps['className']
		>,
		Omit<RACToggleButtonGroupProps, 'selectionMode' | 'orientation'> {}

export interface ToggleButtonProps
	extends
		DefaultProps<ToggleButtonGroupTheme, RACToggleButtonProps['className']>,
		Omit<
			RACToggleButtonProps,
			'id' | 'isSelected' | 'defaultSelected' | 'onChange'
		> {
	/** Identifier matched by the group's selectedKeys or defaultSelectedKeys. */
	id: Key;
}
