import { css } from '@emotion/react';
import { ToggleButton, ToggleButtonGroup } from 'react-aria-components';
import type { Components } from 'src/styleD/build/typescript/components';
import type { DeepPartial } from '../util';
import type { Option } from './model';
import {
	toggleButtonRowsGroupStyles,
	toggleButtonStackedGroupStyles,
	toggleButtonStyles,
} from './styles';

interface PreferenceRadioGroupProps {
	theme?: DeepPartial<Components['userMenu']>;
	options: Option[];
	name: string;
	currentValue: string;
	changeValue: { (value: string): void };
	format?: 'stack' | 'rows';
}

export function PreferenceRadioGroup({
	name,
	options,
	currentValue,
	changeValue,
	theme,
	format = 'stack',
}: PreferenceRadioGroupProps) {
	const groupCss =
		format === 'stack'
			? toggleButtonStackedGroupStyles()
			: toggleButtonRowsGroupStyles();

	const buttonCss =
		format === 'stack'
			? toggleButtonStyles(theme)
			: [toggleButtonStyles(theme), css({ flexBasis: '30%' })];

	return (
		<label>
			<h3>{name}</h3>
			<ToggleButtonGroup
				css={groupCss}
				selectionMode="single"
				orientation={format === 'stack' ? 'vertical' : 'horizontal'}
				selectedKeys={[currentValue]}
				onSelectionChange={(e) => {
					const newValue = Array.from(e).pop() ?? currentValue;
					if (typeof newValue === 'string') {
						changeValue(newValue);
					}
				}}
			>
				{options.map((option, index) => (
					<ToggleButton
						key={index}
						id={option.label}
						css={[buttonCss, option.buttonCss]}
					>
						<div css={option.labelCss}>{option.label}</div>
						<div>{option.description}</div>
					</ToggleButton>
				))}
			</ToggleButtonGroup>
		</label>
	);
}
