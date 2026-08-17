import { useState } from 'react';
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
	type TextListInputTheme,
} from './styles';
import type { TextListInputProps } from './types';

const textInputTheme: PartialTextInputTheme = {
	shared: {
		marginTop: '0',
	},
};

export const TextListInput = ({
	label,
	theme = {},
	cssOverrides,
}: TextListInputProps) => {
	const mergedTheme = mergeDeep(defaultTextListInputTheme, theme);

	const [textListItems, setTextListItems] = useState<string[]>([]);

	const addItem = () => setTextListItems([...textListItems, 'new']);

	return (
		<fieldset css={cssOverrides}>
			<legend css={labelStyles(mergedTheme)}>
				{label}
				{textListItems.length > 0 && (
					<Badge color="grey" size="xs">
						{textListItems.length} item{textListItems.length === 1 ? '' : 's'}
					</Badge>
				)}
			</legend>
			<div css={columnStyles(mergedTheme)}>
				{textListItems.map((_, index) => (
					<TextListItem theme={mergedTheme} key={index} />
				))}
				<div>
					<Button variant="tertiary" size="xs" icon="add" onClick={addItem}>
						Add new item
					</Button>
				</div>
			</div>
		</fieldset>
	);
};

const TextListItem = ({ theme }: { theme: TextListInputTheme }) => (
	<div css={rowStyles(theme)}>
		<TextInput theme={textInputTheme} />
		<IconButton variant="tertiary" size="md" ariaLabel="Remove item">
			remove_circle_outline
		</IconButton>
	</div>
);
