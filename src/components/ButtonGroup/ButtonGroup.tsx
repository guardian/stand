import React from 'react';
import { mergeDeep } from '../../util/mergeDeep';
import { Button } from '../Button/Button';
import type { ButtonProps } from '../Button/types';
import { buttonGroupStyles, defaultButtonGroupTheme } from './styles';
import type { ButtonGroupProps } from './types';

export const ButtonGroup = ({
	size = 'md',
	theme = {},
	children,
	cssOverrides,
}: ButtonGroupProps) => {
	const mergedTheme = mergeDeep(defaultButtonGroupTheme, theme);

	const buttons: React.ReactElement[] = [];

	// only allow Button components as children of ButtonGroup and apply size prop to them
	React.Children.forEach(children, (child, index) => {
		if (!React.isValidElement(child) || child.type !== Button) {
			return;
		}

		buttons.push(
			React.cloneElement(child as React.ReactElement<ButtonProps>, {
				key: child.key ?? index, // ensure key is set for each child
				size,
			}),
		);
	});

	return (
		<div css={[buttonGroupStyles(mergedTheme), cssOverrides]}>{buttons}</div>
	);
};
