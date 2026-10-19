import { Global } from '@emotion/react';
import React from 'react';
import { CheckboxGroup as RACCheckboxGroup } from 'react-aria-components';
import checkboxCss from '../../styleD/build/css/component/checkbox.css?inline';
import { FormInputContainer } from '../Form/Form';
import { Checkbox } from './Checkbox';
import { checkboxGroupStyles } from './styles';
import type { CheckboxGroupProps, CheckboxProps } from './types';

export function CheckboxGroup({
	size = 'md',
	// eslint-disable-next-line @typescript-eslint/no-unused-vars -- theming support is being reworked
	theme = {},
	...props
}: CheckboxGroupProps) {
	const checkboxes: React.ReactElement[] = [];

	// only allow Checkbox components as children of CheckboxGroup and apply theme and size props to them
	React.Children.forEach(props.children, (child, index) => {
		if (!React.isValidElement(child) || child.type !== Checkbox) {
			return;
		}

		checkboxes.push(
			React.cloneElement(child as React.ReactElement<CheckboxProps>, {
				key: child.key ?? index, // ensure key is set for each child
				size,
			}),
		);
	});

	return (
		<>
			<Global styles={checkboxCss} />
			<FormInputContainer as={RACCheckboxGroup} size={size} {...props}>
				<div css={checkboxGroupStyles({ size }, props.isInvalid)}>
					{checkboxes}
				</div>
			</FormInputContainer>
		</>
	);
}
