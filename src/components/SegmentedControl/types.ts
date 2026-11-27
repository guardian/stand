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
		Omit<
			RACToggleButtonGroupProps,
			| 'selectionMode'
			| 'orientation'
			| 'selectedKeys'
			| 'defaultSelectedKeys'
			| 'onSelectionChange'
			| 'disallowEmptySelection'
			| 'isDisabled'
		> {
	/** The id of the selected item (controlled). */
	selectedKey?: Key;
	/** The id of the initially selected item (uncontrolled). */
	defaultSelectedKey?: Key;
	/** Called with the id of the newly selected item. */
	onSelectionChange?: (key: Key) => void;
}

export interface SegmentedControlItemProps
	extends
		DefaultProps<SegmentedControlTheme, RACToggleButtonProps['className']>,
		Omit<
			RACToggleButtonProps,
			'id' | 'isSelected' | 'defaultSelected' | 'onChange' | 'isDisabled'
		> {
	/** Identifier matched by the group's selectedKey or defaultSelectedKey. */
	id: Key;
}
