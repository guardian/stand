import { createContext, useContext } from 'react';
import {
	ToggleButton as RACToggleButton,
	ToggleButtonGroup as RACToggleButtonGroup,
} from 'react-aria-components';
import { mergeDeep } from '../../util/mergeDeep';
import {
	defaultSegmentedControlTheme,
	segmentedControlItemStyles,
	segmentedControlStyles,
} from './styles';
import type { SegmentedControlTheme } from './styles';
import type { SegmentedControlItemProps, SegmentedControlProps } from './types';

const ThemeContext = createContext(defaultSegmentedControlTheme);

export function SegmentedControl({
	theme = {},
	cssOverrides,
	...props
}: SegmentedControlProps) {
	const mergedTheme: SegmentedControlTheme = mergeDeep(
		defaultSegmentedControlTheme,
		theme,
	);

	return (
		<ThemeContext.Provider value={mergedTheme}>
			<RACToggleButtonGroup
				{...props}
				selectionMode="single"
				orientation="horizontal"
				css={[segmentedControlStyles(mergedTheme), cssOverrides]}
			/>
		</ThemeContext.Provider>
	);
}

export function SegmentedControlItem({
	theme = {},
	cssOverrides,
	...props
}: SegmentedControlItemProps) {
	const mergedTheme = mergeDeep(useContext(ThemeContext), theme);

	return (
		<RACToggleButton
			{...props}
			css={[segmentedControlItemStyles(mergedTheme), cssOverrides]}
		/>
	);
}
