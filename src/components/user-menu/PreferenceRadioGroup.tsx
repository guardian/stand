import { ToggleButton, ToggleButtonGroup } from 'react-aria-components';
import type { Components } from 'src/styleD/build/typescript/components';
import type { DeepPartial } from '../util';
import type { Option } from './model';
import { toggleButtonGroupStyles } from './styles';

interface PreferenceRadioGroupProps {
	theme?: DeepPartial<Components['userMenu']>;
	options: Option[];
	name: string;
	currentValue: string;
	changeValue: { (value: string): void };
}

export function PreferenceRadioGroup({
	name,
	options,
	currentValue,
	changeValue,
	theme,
}: PreferenceRadioGroupProps) {
	return (
		<label>
			<h3>{name}</h3>
			<ToggleButtonGroup
				css={toggleButtonGroupStyles(theme)}
				selectionMode="single"
				orientation="vertical"
				selectedKeys={[currentValue]}
				onSelectionChange={(e) => {
					const newValue = Array.from(e).pop() ?? currentValue;
					if (typeof newValue === 'string') {
						changeValue(newValue);
					}
				}}
			>
				{options.map((option, index) => (
					<ToggleButton key={index} id={option.label}>
						<div css={option.labelCss}>{option.label}</div>
						<div>{option.description}</div>
					</ToggleButton>
				))}
			</ToggleButtonGroup>
		</label>
	);
}
