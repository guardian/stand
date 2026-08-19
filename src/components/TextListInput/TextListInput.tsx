import { useState } from 'react';
import { mergeDeep } from '../../util/mergeDeep';
import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';
import { IconButton } from '../IconButton/IconButton';
import { InlineMessage } from '../InlineMessage/InlineMessage';
import { TextInput } from '../TextInput/TextInput';
import {
	columnStyles,
	defaultTextListInputTheme,
	labelStyles,
	rowStyles,
} from './styles';
import type { TextListInputProps } from './types';

export const TextListInput = ({
	label,
	initialData = [],
	errorMessage,
	onChange,
	theme = {},
	cssOverrides,
}: TextListInputProps) => {
	const [textListItems, setTextListItems] = useState<string[]>(initialData);

	const addItem = () => {
		const newItems = [...textListItems, ''];
		setTextListItems(newItems);
		onChange(newItems);
	};

	const removeItem = (index: number) => {
		const newItems = [...textListItems];
		newItems.splice(index, 1);
		setTextListItems(newItems);
		onChange(newItems);
	};

	const updateValue = (index: number, value: string) => {
		const newItems = [...textListItems];
		newItems[index] = value;
		setTextListItems(newItems);
		onChange(newItems);
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
				{textListItems.map((item, index) => (
					<div css={rowStyles(mergedTheme)} key={index}>
						<TextInput
							value={item}
							aria-label={`${label} item`}
							onChange={(value) => updateValue(index, value)}
							theme={{
								shared: {
									marginTop: '0',
								},
							}}
						/>
						<IconButton
							variant="tertiary"
							size="md"
							ariaLabel="Remove item"
							onClick={() => removeItem(index)}
						>
							remove_circle_outline
						</IconButton>
					</div>
				))}
				{errorMessage && (
					<InlineMessage level="error">{errorMessage}</InlineMessage>
				)}
				<div>
					<Button variant="tertiary" size="xs" icon="add" onClick={addItem}>
						Add new item
					</Button>
				</div>
			</div>
		</fieldset>
	);
};
