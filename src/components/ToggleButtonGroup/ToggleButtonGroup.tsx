import { createContext, useContext } from 'react';
import {
	ToggleButton as RACToggleButton,
	ToggleButtonGroup as RACToggleButtonGroup,
} from 'react-aria-components';
import { mergeDeep } from '../../util/mergeDeep';
import {
	defaultToggleButtonGroupTheme,
	toggleButtonGroupStyles,
	toggleButtonStyles,
} from './styles';
import type { ToggleButtonGroupTheme } from './styles';
import type { ToggleButtonGroupProps, ToggleButtonProps } from './types';

const ThemeContext = createContext(defaultToggleButtonGroupTheme);

export function ToggleButtonGroup({
	theme = {},
	cssOverrides,
	...props
}: ToggleButtonGroupProps) {
	const mergedTheme: ToggleButtonGroupTheme = mergeDeep(
		defaultToggleButtonGroupTheme,
		theme,
	);

	return (
		<ThemeContext.Provider value={mergedTheme}>
			<RACToggleButtonGroup
				{...props}
				selectionMode="single"
				orientation="horizontal"
				css={[toggleButtonGroupStyles(mergedTheme), cssOverrides]}
			/>
		</ThemeContext.Provider>
	);
}

export function ToggleButton({
	theme = {},
	cssOverrides,
	...props
}: ToggleButtonProps) {
	const mergedTheme = mergeDeep(useContext(ThemeContext), theme);

	return (
		<RACToggleButton
			{...props}
			css={[toggleButtonStyles(mergedTheme), cssOverrides]}
		/>
	);
}
