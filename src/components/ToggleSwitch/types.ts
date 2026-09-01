import type { SwitchProps as RACSwitchProps } from 'react-aria-components';
import type { DefaultPropsWithChildren } from '../../util/types';
import type { ToggleSwitchTheme } from './styles';

export interface ToggleSwitchProps
	extends
		DefaultPropsWithChildren<ToggleSwitchTheme, RACSwitchProps['className']>,
		Omit<RACSwitchProps, 'children'> {
	/**
	 * Size variant of the ToggleSwitch.
	 * @default 'md'
	 */
	size?: keyof Omit<ToggleSwitchTheme, 'shared'>;
	/**
	 * Supporting text rendered below the switch label.
	 */
	description?: React.ReactNode;
}
