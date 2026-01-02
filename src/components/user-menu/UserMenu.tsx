import type { ComponentUserMenu } from '../../styleD/build/typescript/component/userMenu';
import { TitleText } from '../TitleText';
import type { DeepPartial } from '../util';
import type { Option } from './model';
import { PreferenceRadioGroup } from './PreferenceRadioGroup';
import { userMenuHeadingStyles, userMenuStyles } from './styles';
import type { UserPreferences } from './types';
import {
	colorSchemes as defaultColorSchemes,
	fontFamilies as defaultFontFamilies,
	textSizes as defaultTextSizes,
} from './values';

export interface UserMenuProps {
	theme?: DeepPartial<ComponentUserMenu>;
	feedBacklink?: string;
	preferences: UserPreferences;
	updatePreferences: { (mod: Partial<UserPreferences>): void };
	textSizeOptions?: Option[];
	fontFamilyOptions?: Option[];
	colorSchemeOptions?: Option[];
	headingLevel?: 2 | 3 | 4 | 5 | 6;
}

export function UserMenu({
	theme,
	feedBacklink,
	preferences,
	updatePreferences,
	textSizeOptions,
	fontFamilyOptions,
	colorSchemeOptions,
	headingLevel,
}: UserMenuProps) {
	return (
		<aside css={userMenuStyles(theme)}>
			<TitleText
				headingLevel={headingLevel}
				css={userMenuHeadingStyles(theme)}
			>
				Accessibility Settings
			</TitleText>
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
					options={textSizeOptions ?? defaultTextSizes}
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
					options={fontFamilyOptions ?? defaultFontFamilies}
					name="Font Family"
					currentValue={preferences.fontType}
					changeValue={(fontType) => updatePreferences({ fontType })}
				/>
			)}

			{(!colorSchemeOptions || colorSchemeOptions.length > 0) && (
				<PreferenceRadioGroup
					theme={theme}
					format="rows"
					options={colorSchemeOptions ?? defaultColorSchemes}
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
