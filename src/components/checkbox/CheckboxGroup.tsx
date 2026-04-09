import React from 'react';
import { CheckboxGroup as RACCheckboxGroup } from 'react-aria-components';
import { mergeDeep } from '../../util/mergeDeep';
import { FormInputContainer } from '../form/Form';
import { Checkbox } from './Checkbox';
import { checkboxGroupStyles, defaultCheckboxTheme } from './styles';
import type { CheckboxGroupProps, CheckboxProps } from './types';

export function CheckboxGroup({
	size = 'md',
	theme = {},
	...props
}: CheckboxGroupProps) {
	const mergedTheme = mergeDeep(defaultCheckboxTheme, theme);

	const checkboxes: React.ReactElement[] = [];
	let hasError = props.isInvalid;

	// only allow Checkbox components as children of CheckboxGroup and apply theme and size props to them
	React.Children.forEach(props.children, (child, index) => {
		if (!React.isValidElement(child) || child.type !== Checkbox) {
			return;
		}

		if ((child.props as CheckboxProps).isInvalid) {
			hasError = true;
		}

		checkboxes.push(
			React.cloneElement(child as React.ReactElement<CheckboxProps>, {
				key: child.key ?? index, // ensure key is set for each child
				size,
			}),
		);
	});

	return (
		<FormInputContainer as={RACCheckboxGroup} size={size} {...props}>
			<div css={checkboxGroupStyles(mergedTheme, { size }, hasError)}>
				{checkboxes}
			</div>
		</FormInputContainer>
	);
}
