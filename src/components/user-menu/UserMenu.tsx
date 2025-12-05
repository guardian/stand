import { useState } from 'react';
import type { Components } from 'src/styleD/build/typescript/components';
import type { DeepPartial } from '../util';
import { PreferenceRadioGroup } from './PreferenceRadioGroup';
import { userMenuHeadingStyles, userMenuStyles } from './styles';
import { colorSchemes, fontFamilies, textSizes } from './values';

interface UserMenuProps {
	theme?: DeepPartial<Components['userMenu']>;
	feedBacklink?: string;
}

export function UserMenu({ theme, feedBacklink }: UserMenuProps) {
	const [textSizePreference, setTextSizePreference] = useState(
		textSizes[0]?.label ?? '',
	);
	const [fontFamilyPreference, setFontFamilyPreference] = useState(
		fontFamilies[0]?.label ?? '',
	);
	const [colorSchemePreference, setColorSchemePreference] = useState(
		colorSchemes[0]?.label ?? '',
	);

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
			<PreferenceRadioGroup
				theme={theme}
				options={textSizes}
				name="Text Size"
				currentValue={textSizePreference}
				changeValue={setTextSizePreference}
			/>

			<PreferenceRadioGroup
				theme={theme}
				options={fontFamilies}
				name="Font Family"
				currentValue={fontFamilyPreference}
				changeValue={setFontFamilyPreference}
			/>

			<PreferenceRadioGroup
				theme={theme}
				format="rows"
				options={colorSchemes}
				name="Color scheme"
				currentValue={colorSchemePreference}
				changeValue={setColorSchemePreference}
			/>
		</aside>
	);
}
