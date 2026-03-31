import {
	TextField as RACTextField,
	Input as ReactAriaInput,
} from 'react-aria-components';
import { mergeDeep } from '../../util/mergeDeep';
import { FormInputContainer } from '../form/Form';
import { defaultTextInputTheme, textInputStyles } from './styles';
import type { TextInputProps } from './types';

export function TextInput({
	size = 'md',
	isInvalid = false,
	theme = {},
	...props
}: TextInputProps) {
	const mergedTheme = mergeDeep(defaultTextInputTheme, theme);

	return (
		<FormInputContainer
			as={RACTextField}
			size={size}
			isInvalid={isInvalid}
			{...props}
		>
			<ReactAriaInput css={textInputStyles(mergedTheme, { size, isInvalid })} />
		</FormInputContainer>
	);
}
