import { css } from '@emotion/react';
import { ToggleButton, ToggleButtonGroup } from 'react-aria-components';
import type { ComponentUserMenu } from '../../styleD/build/typescript/component/userMenu';
import type { DeepPartial } from '../../util/types';
import type { Option } from './model';
import {
	radioGroupLabelStyles,
	toggleButtonRowsGroupStyles,
	toggleButtonStackedGroupStyles,
	toggleButtonStyles,
} from './styles';

interface PreferenceRadioGroupProps {
	theme?: DeepPartial<ComponentUserMenu>;
	options: Option[];
	name: string;
	currentValue?: string;
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
			? toggleButtonStackedGroupStyles(theme)
			: toggleButtonRowsGroupStyles(theme);

	const buttonStyle =
		format === 'stack'
			? toggleButtonStyles(theme)
			: [toggleButtonStyles(theme), css({ flexBasis: '30%' })];

	const defaultOptionId = options.find((option) => option.isDefault)?.id;

	const selectedKeys: string[] = currentValue
		? [currentValue]
		: defaultOptionId
			? [defaultOptionId]
			: [];

	return (
		<label>
			<div css={radioGroupLabelStyles(theme)}>{name}</div>
			<ToggleButtonGroup
				css={groupCss}
				selectionMode="single"
				orientation={format === 'stack' ? 'vertical' : 'horizontal'}
				selectedKeys={selectedKeys}
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
						id={option.id}
						css={buttonStyle}
						style={option.buttonStyle}
					>
						<div style={option.labelStyle}>
							{option.label ?? option.id}
						</div>
						<div>{option.description}</div>
					</ToggleButton>
				))}
			</ToggleButtonGroup>
		</label>
	);
}
