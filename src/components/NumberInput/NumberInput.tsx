import { Button, Group, Input, NumberField, Text } from 'react-aria-components';
import { mergeDeep } from '../../util/mergeDeep';
import { FormInputContainer } from '../Form/Form';
import {
	defaultFormInputContainerTheme,
	formInputDescriptionStyles,
} from '../Form/styles';
import { Icon } from '../Icon/Icon';
import { defaultNumberInputTheme, numberInputStyles } from './styles';
import type { NumberInputProps } from './types';

export function NumberInput({
	size = 'md',
	isDisabled = false,
	theme = {},
	placeholder,
	description,
	formInputContainerTheme,
	...props
}: NumberInputProps) {
	const mergedTheme = mergeDeep(defaultNumberInputTheme, theme);
	const containerTheme = mergeDeep(
		defaultFormInputContainerTheme,
		formInputContainerTheme ?? {},
	);

	return (
		<FormInputContainer
			as={NumberField}
			size={size}
			isDisabled={isDisabled}
			formInputContainerTheme={formInputContainerTheme}
			{...props}
		>
			{description && (
				<Text
					slot="description"
					css={formInputDescriptionStyles(containerTheme, { isDisabled })}
				>
					{description}
				</Text>
			)}
			<Group css={numberInputStyles(mergedTheme, { size })}>
				<Input placeholder={placeholder} />
				<Button slot="decrement">
					<Icon symbol="remove" size={size === 'sm' ? 'sm' : 'md'} />
				</Button>
				<span className="number-input-divider" aria-hidden="true" />
				<Button slot="increment">
					<Icon symbol="add" size={size === 'sm' ? 'sm' : 'md'} />
				</Button>
			</Group>
		</FormInputContainer>
	);
}
