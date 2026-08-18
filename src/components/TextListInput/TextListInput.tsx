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
} from './styles';
import type { TextListInputProps } from './types';

const textInputTheme: PartialTextInputTheme = {
	shared: {
		marginTop: '0',
	},
};

type TextListItem = {
	id: string;
};

export const TextListInput = ({
	label,
	theme = {},
	cssOverrides,
}: TextListInputProps) => {
	const [textListItems, setTextListItems] = useState<TextListItem[]>([]);

	const addItem = () =>
		setTextListItems([...textListItems, { id: crypto.randomUUID() }]);
	const removeItem = (id: string) => {
		setTextListItems((prevTextListItems) =>
			prevTextListItems.filter((item) => {
				return item.id !== id;
			}),
		);
	};

	const mergedTheme = mergeDeep(defaultTextListInputTheme, theme);

	return (
		<fieldset css={cssOverrides}>
			<legend css={labelStyles(mergedTheme)}>
				{label}
				{textListItems.length > 0 && (
					<Badge color="grey" size="xs">
						{textListItems.length} item{textListItems.length > 1 ? 's' : ''}
					</Badge>
				)}
			</legend>
			<div css={columnStyles(mergedTheme)}>
				{textListItems.map((item) => (
					<div css={rowStyles(mergedTheme)} key={item.id}>
						<TextInput theme={textInputTheme} />
						<IconButton
							variant="tertiary"
							size="md"
							ariaLabel="Remove item"
							onClick={() => removeItem(item.id)}
						>
							remove_circle_outline
						</IconButton>
					</div>
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
