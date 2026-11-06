import { Switch as RACSwitch } from 'react-aria-components';
import { mergeDeep } from '../../util/mergeDeep';
import { Icon } from '../Icon/Icon';
import {
	defaultToggleSwitchTheme,
	toggleSwitchDescriptionStyles,
	toggleSwitchIconStyles,
	toggleSwitchLabelStyles,
	toggleSwitchStyles,
	toggleSwitchThumbStyles,
	toggleSwitchTrackStyles,
} from './styles';
import type { ToggleSwitchProps } from './types';

export function ToggleSwitch({
	children,
	description,
	size = 'md',
	theme = {},
	dangerouslyOverrideCss,
	...props
}: ToggleSwitchProps) {
	const mergedTheme = mergeDeep(defaultToggleSwitchTheme, theme);

	return (
		<RACSwitch
			css={[toggleSwitchStyles(mergedTheme, { size }), dangerouslyOverrideCss]}
			{...props}
		>
			{({ isSelected, isDisabled, isFocusVisible }) => (
				<>
					<div
						css={toggleSwitchTrackStyles(mergedTheme, {
							size,
							isSelected,
							isDisabled,
							isFocusVisible,
						})}
					>
						<div
							css={toggleSwitchThumbStyles(mergedTheme, {
								size,
								isSelected,
								isDisabled,
							})}
						>
							<Icon
								symbol="check"
								size={size === 'sm' ? 'sm' : 'md'}
								dangerouslyOverrideCss={toggleSwitchIconStyles(isSelected)}
							/>
						</div>
					</div>
					{children && (
						<span css={toggleSwitchLabelStyles(mergedTheme)}>
							<span>{children}</span>
							{description && (
								<span css={toggleSwitchDescriptionStyles(mergedTheme)}>
									{description}
								</span>
							)}
						</span>
					)}
				</>
			)}
		</RACSwitch>
	);
}
