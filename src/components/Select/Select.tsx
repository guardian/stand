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

function ListBox({ children, size, theme = {} }: ListBoxProps) {
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
		<ReactAriaListBox css={listBoxStyles(mergedTheme, { size })}>
			{items}
		</ReactAriaListBox>
	);
}

export function Select({
	size = 'md',
	isInvalid = false,
	theme = {},
	placement,
	shouldFlip,
	children,
	...props
}: SelectProps) {
	const mergedTheme = mergeDeep(defaultSelectTheme, theme);

	return (
		<FormInputContainer
			as={ReactAriaSelect}
			size={size}
			isInvalid={isInvalid}
			{...props}
		>
			<Button css={buttonStyles(mergedTheme, { size, isInvalid })}>
				<SelectValue />
				<Icon size="lg">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
					</svg>
				</Icon>
			</Button>
			<Popover
				css={popoverStyles()}
				placement={placement}
				shouldFlip={shouldFlip}
				offset={mergedTheme.shared.offset}
				containerPadding={mergedTheme.shared.containerPadding}
			>
				<ListBox size={size} theme={mergedTheme}>
					{children}
				</ListBox>
			</Popover>
		</FormInputContainer>
	);
}
