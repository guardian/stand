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
import { FormInputContainer } from '../Form/Form';
import { Icon } from '../Icon/Icon';
import {
	buttonStyles,
	defaultSelectTheme,
	listBoxItemStyles,
	listBoxStyles,
	popoverStyles,
} from './styles';
import type { ListBoxProps, OptionProps, SelectProps } from './types';

export function Option({ children, theme = {}, id, ...props }: OptionProps) {
	const mergedTheme = mergeDeep(defaultSelectTheme, theme);
	const resolvedId = id ?? children;
	return (
		<ReactAriaListBoxItem
			css={listBoxItemStyles(mergedTheme)}
			id={resolvedId}
			{...props}
		>
			{children}
		</ReactAriaListBoxItem>
	);
}

function ListBox({ children, theme = {} }: ListBoxProps) {
	const mergedTheme = mergeDeep(defaultSelectTheme, theme);
	const items: React.ReactElement[] = [];

	React.Children.forEach(children, (child, index) => {
		if (!React.isValidElement(child)) {
			return;
		}

		if (child.type === Option) {
			const optionChild = child as React.ReactElement<OptionProps>;
			const key = `${optionChild.props.id ?? optionChild.props.children}-${index}`;
			items.push(React.cloneElement(optionChild, { key }));
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
			<Popover
				css={popoverStyles()}
				offset={mergedTheme.shared.offset}
				containerPadding={mergedTheme.shared.containerPadding}
			>
				<ListBox>{children}</ListBox>
			</Popover>
		</FormInputContainer>
	);
}
