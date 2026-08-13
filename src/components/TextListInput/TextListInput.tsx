import { mergeDeep } from '../../util/mergeDeep';
import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';
import { IconButton } from '../IconButton/IconButton';
import type { PartialTextInputTheme } from '../TextInput/styles';
import { TextInput } from '../TextInput/TextInput';
import {
	defaultTextListInputTheme,
	inputStyles,
	labelStyles,
	layoutStyles,
	textListInputStyles,
} from './styles';
import type { TextListInputProps } from './types';

const textInputTheme: PartialTextInputTheme = {
	shared: {
		marginTop: '0',
	},
};

export const TextListInput = (props: TextListInputProps) => {
	const mergedTheme = mergeDeep(defaultTextListInputTheme, props.theme ?? {});

	return (
		<fieldset css={[textListInputStyles(mergedTheme), props.cssOverrides]}>
			<legend css={labelStyles}>
				Text input list{' '}
				<Badge color="grey" size="xs">
					2 items
				</Badge>
			</legend>
			<div css={layoutStyles}>
				<div css={inputStyles}>
					<TextInput theme={textInputTheme} />
					<IconButton variant="tertiary" size="md" ariaLabel="Remove item">
						remove_circle_outline
					</IconButton>
				</div>
				<div css={inputStyles}>
					<TextInput theme={textInputTheme} />
					<IconButton variant="tertiary" size="md" ariaLabel="Remove item">
						remove_circle_outline
					</IconButton>
				</div>
				<div>
					<Button variant="tertiary" size="xs" icon="add">
						Add new item
					</Button>
				</div>
			</div>
		</fieldset>
	);
};
