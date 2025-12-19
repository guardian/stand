import type { ComponentUserMenu } from '../../styleD/build/typescript/component/userMenu';
import type { DeepPartial } from '../util';
import type { Option } from './model';
import { PreferenceRadioGroup } from './PreferenceRadioGroup';
import { userMenuHeadingStyles, userMenuStyles } from './styles';
import type { UserPreferences } from './types';
import { colorSchemes, fontFamilies, textSizes } from './values';

export interface UserMenuProps {
	theme?: DeepPartial<ComponentUserMenu>;
	feedBacklink?: string;
	preferences: UserPreferences;
	updatePreferences: { (mod: Partial<UserPreferences>): void };
	textSizeOptions?: Option[];
	fontFamilyOptions?: Option[];
	colorSchemeOptions?: Option[];
}

export function UserMenu({
	theme,
	feedBacklink,
	preferences,
	updatePreferences,
	textSizeOptions,
	fontFamilyOptions,
	colorSchemeOptions,
}: UserMenuProps) {
	return (
		<aside css={userMenuStyles(theme)}>
			<header css={userMenuHeadingStyles(theme)}>
				<h2>Accessibilty Settings</h2>
			</header>
			<div>
				<p>
					Customise your reeading & writing experience.
					{feedBacklink && (
						<a href={feedBacklink} target="_blank" rel="noreferrer">
							Send feedback
						</a>
					)}
				</p>
			</div>

			{(!textSizeOptions || textSizeOptions.length > 0) && (
				<PreferenceRadioGroup
					theme={theme}
					options={textSizeOptions ?? textSizes}
					name="Text Size"
					currentValue={preferences.fontpreferences}
					changeValue={(fontpreferences) =>
						updatePreferences({ fontpreferences })
					}
				/>
			)}

			{(!fontFamilyOptions || fontFamilyOptions.length > 0) && (
				<PreferenceRadioGroup
					theme={theme}
					options={fontFamilyOptions ?? fontFamilies}
					name="Font Family"
					currentValue={preferences.fontType}
					changeValue={(fontType) => updatePreferences({ fontType })}
				/>
			)}

			{(!colorSchemeOptions || colorSchemeOptions.length > 0) && (
				<PreferenceRadioGroup
					theme={theme}
					format="rows"
					options={colorSchemeOptions ?? colorSchemes}
					name="Color scheme"
					currentValue={preferences.colorScheme}
					changeValue={(colorScheme) =>
						updatePreferences({ colorScheme })
					}
				/>
			)}
		</aside>
	);
}
