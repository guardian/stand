import { mergeDeep } from '../../util/mergeDeep';
import { Button } from '../Button/Button';
import { IconButton } from '../IconButton/IconButton';
import { TextInput } from '../TextInput/TextInput';
import { defaultTextListInputTheme, textListInputStyles } from './styles';
import type { TextListInputProps } from './types';

export const TextListInput = (props: TextListInputProps) => {
	const mergedTheme = mergeDeep(defaultTextListInputTheme, props.theme ?? {});

	return (
		<div css={[textListInputStyles(mergedTheme), props.cssOverrides]}>
			<label>
				Text input list <span>2 items</span>
			</label>
			<TextInput />
			<IconButton variant="tertiary" size="md" ariaLabel="Remove item">
				remove_circle_outline
			</IconButton>
			<TextInput />
			<IconButton variant="tertiary" size="md" ariaLabel="Add item">
				remove_circle_outline
			</IconButton>
			<Button variant="tertiary" size="xs" icon="add">
				Add new item
			</Button>
		</div>
	);
};
