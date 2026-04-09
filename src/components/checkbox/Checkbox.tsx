import React from 'react';
import {
	Checkbox as RACCheckbox,
	CheckboxGroup as RACCheckboxGroup,
} from 'react-aria-components';
import { mergeDeep } from '../../util/mergeDeep';
import { FormInputContainer } from '../form/Form';
import { checkboxStyles, defaultCheckboxTheme } from './styles';
import type { CheckboxGroupProps, CheckboxProps } from './types';

export function Checkbox({
	children,
	size = 'md',
	isIndeterminate = false,
	theme = {},
	...props
}: CheckboxProps) {
	const mergedTheme = mergeDeep(defaultCheckboxTheme, theme);

	return (
		<RACCheckbox
			css={checkboxStyles(mergedTheme, {
				size,
				isIndeterminate,
			})}
			{...props}
		>
			<>
				<div className="checkbox-indicator">
					{isIndeterminate ? (
						<svg
							viewBox="0 0 12 2"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							key="indeterminate"
						>
							<path d="M12 2H0V0H12V2Z" />
						</svg>
					) : (
						<svg
							viewBox="0 0 20 20"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							key="check"
						>
							<path d="M7.32923 13.2291L3.85423 9.75414L2.6709 10.9291L7.32923 15.5875L17.3292 5.58748L16.1542 4.41248L7.32923 13.2291Z" />
						</svg>
					)}
				</div>
			</>
			{children}
		</RACCheckbox>
	);
}

export function CheckboxGroup({
	size = 'md',
	theme = {},
	...props
}: CheckboxGroupProps) {
	const checkboxes: React.ReactElement[] = [];

	// only allow Checkbox components as children of CheckboxGroup and apply theme and size props to them
	React.Children.forEach(props.children, (child) => {
		if (!React.isValidElement(child) || child.type !== Checkbox) {
			return;
		}

		checkboxes.push(
			React.cloneElement(child as React.ReactElement<CheckboxProps>, {
				theme: mergeDeep(defaultCheckboxTheme, theme),
				size,
			}),
		);
	});

	return (
		<FormInputContainer as={RACCheckboxGroup} size={size} {...props}>
			<div>{checkboxes}</div>
		</FormInputContainer>
	);
}
