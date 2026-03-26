import React from 'react';
import {
	Button,
	FieldError,
	Label,
	Popover,
	ListBox as ReactAriaListBox,
	ListBoxItem as ReactAriaListBoxItem,
	Select as ReactAriaSelect,
	SelectValue,
} from 'react-aria-components';
import { mergeDeep } from '../../util/mergeDeep';
import { Icon } from '../icon/Icon';
import { InlineMessage } from '../inline-message/InlineMessage';
import {
	buttonStyles,
	defaultSelectTheme,
	helpTextStyles,
	labelStyles,
	listBoxItemStyles,
	listBoxStyles,
	popoverStyles,
	selectStyles,
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
	children,
	label,
	contextualHelpText,
	theme = {},
	cssOverrides,
	className,
	isInvalid,
	errorMessage,
	...props
}: SelectProps) {
	const mergedTheme = mergeDeep(defaultSelectTheme, theme);
	return (
		<ReactAriaSelect
			css={[selectStyles(mergedTheme), cssOverrides]}
			className={className}
			isInvalid={isInvalid}
			{...props}
		>
			{label && <Label css={labelStyles(mergedTheme)}>{label}</Label>}{' '}
			{contextualHelpText && (
				<div css={helpTextStyles(mergedTheme)}>{contextualHelpText}</div>
			)}
			<Button css={buttonStyles(mergedTheme, isInvalid)}>
				<SelectValue />
				<Icon symbol="keyboard_arrow_down" size="lg" />
			</Button>
			<FieldError>
				<InlineMessage level={'error'}>{errorMessage}</InlineMessage>
			</FieldError>
			<Popover css={popoverStyles(mergedTheme)}>
				<ListBox>{children}</ListBox>
			</Popover>
		</ReactAriaSelect>
	);
}
