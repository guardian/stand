import React from 'react';
import {
	Button,
	Popover,
	ListBox as ReactAriaListBox,
	ListBoxItem as ReactAriaListBoxItem,
	Select as ReactAriaSelect,
	SelectValue,
} from 'react-aria-components';
import { mergeDeep } from '../../util/mergeDeep';
import { FormInputContainer } from '../form/Form';
import { Icon } from '../icon/Icon';
import {
	buttonStyles,
	defaultSelectTheme,
	listBoxItemStyles,
	listBoxStyles,
	popoverStyles,
} from './styles';
import type { ListBoxProps, OptionProps, SelectProps } from './types';

export function Option({ children, theme = {} }: OptionProps) {
	const mergedTheme = mergeDeep(defaultSelectTheme, theme);
	return (
		<ReactAriaListBoxItem css={listBoxItemStyles(mergedTheme)}>
			{children}
		</ReactAriaListBoxItem>
	);
}

function ListBox({ children, theme = {} }: ListBoxProps) {
	const mergedTheme = mergeDeep(defaultSelectTheme, theme);
	const items: React.ReactElement[] = [];

	React.Children.forEach(children, (child, i) => {
		if (!React.isValidElement(child)) {
			return;
		}

		if (child.type === Option) {
			items.push(
				React.cloneElement(child as React.ReactElement<OptionProps>, {
					key: `${child.key}-${i}`,
				}),
			);
		}
	});

	return (
		<ReactAriaListBox css={listBoxStyles(mergedTheme)}>
			{items}
		</ReactAriaListBox>
	);
}

export function Select({
	isInvalid,
	theme = {},
	children,
	...props
}: SelectProps) {
	const mergedTheme = mergeDeep(defaultSelectTheme, theme);

	return (
		<FormInputContainer
			as={ReactAriaSelect}
			isInvalid={isInvalid}
			{...props}
			size="md" // Select doesn't support size prop, so we set it to a default value to avoid passing it down
		>
			<Button css={buttonStyles(mergedTheme, isInvalid)}>
				<SelectValue />
				<Icon symbol="keyboard_arrow_down" size="lg" />
			</Button>
			<Popover css={popoverStyles(mergedTheme)}>
				<ListBox>{children}</ListBox>
			</Popover>
		</FormInputContainer>
	);
}
