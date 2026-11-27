import type {
	Key,
	ToggleButtonGroupProps as RACToggleButtonGroupProps,
	ToggleButtonProps as RACToggleButtonProps,
} from 'react-aria-components';
import type { DefaultProps } from '../../util/types';
import type { SegmentedControlTheme } from './styles';

export interface SegmentedControlProps
	extends
		DefaultProps<SegmentedControlTheme, RACToggleButtonGroupProps['className']>,
		Omit<RACToggleButtonGroupProps, 'selectionMode' | 'orientation'> {}

export interface SegmentedControlItemProps
	extends
		DefaultProps<SegmentedControlTheme, RACToggleButtonProps['className']>,
		Omit<
			RACToggleButtonProps,
			'id' | 'isSelected' | 'defaultSelected' | 'onChange'
		> {
	/** Identifier matched by the group's selectedKeys or defaultSelectedKeys. */
	id: Key;
}
