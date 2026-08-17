import { mergeDeep } from '../../util/mergeDeep';
import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';
import { IconButton } from '../IconButton/IconButton';
import type { PartialTextInputTheme } from '../TextInput/styles';
import { TextInput } from '../TextInput/TextInput';
import {
	columnStyles,
	defaultTextListInputTheme,
	labelStyles,
	rowStyles,
} from './styles';
import type { TextListInputProps } from './types';

const textInputTheme: PartialTextInputTheme = {
	shared: {
		marginTop: '0',
	},
};

export const TextListInput = ({
	theme = {},
	cssOverrides,
}: TextListInputProps) => {
	const mergedTheme = mergeDeep(defaultTextListInputTheme, theme);

	return (
		<fieldset css={cssOverrides}>
			<legend css={labelStyles(mergedTheme)}>
				Text input list{' '}
				<Badge color="grey" size="xs">
					2 items
				</Badge>
			</legend>
			<div css={columnStyles(mergedTheme)}>
				<div css={rowStyles(mergedTheme)}>
					<TextInput theme={textInputTheme} />
					<IconButton variant="tertiary" size="md" ariaLabel="Remove item">
						remove_circle_outline
					</IconButton>
				</div>
				<div css={rowStyles(mergedTheme)}>
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
