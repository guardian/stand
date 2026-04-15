import {
	TextField as RACTextField,
	TextArea as ReactTextArea,
} from 'react-aria-components';
import { mergeDeep } from '../../util/mergeDeep';
import { FormInputContainer } from '../form/Form';
import { defaultTextAreaTheme, textAreaStyles } from './styles';
import type { TextAreaProps } from './types';

export function TextArea({
	size = 'md',
	isInvalid = false,
	theme = {},
	placeholder,
	...props
}: TextAreaProps) {
	const mergedTheme = mergeDeep(defaultTextAreaTheme, theme);

	return (
		<FormInputContainer
			as={RACTextField}
			size={size}
			isInvalid={isInvalid}
			{...props}
		>
			<ReactTextArea
				placeholder={placeholder}
				css={textAreaStyles(mergedTheme, { size, isInvalid })}
			/>
		</FormInputContainer>
	);
}
