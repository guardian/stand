import React from 'react';
import {
	composeRenderProps,
	Radio as RACRadio,
	RadioGroup as RACRadioGroup,
} from 'react-aria-components';
import { mergeDeep } from '../../util/mergeDeep';
import { FormInputContainer } from '../form/Form';
import {
	defaultRadioGroupTheme,
	radioGroupStyles,
	radioIndicatorStyles,
	radioStyles,
} from './styles';
import type { RadioGroupProps, RadioProps } from './types';

export function RadioGroup({
	size = 'md',
	isInvalid = false,
	theme = {},
	children,
	...props
}: RadioGroupProps) {
	const mergedTheme = mergeDeep(defaultRadioGroupTheme, theme);
	const radios: React.ReactElement[] = [];

	// only allow Radio components as children of RadioGroup and apply theme, size and isInvalid props to them
	React.Children.forEach(children, (child) => {
		if (!React.isValidElement(child) || child.type !== Radio) {
			return;
		}

		radios.push(
			React.cloneElement(child as React.ReactElement<RadioProps>, {
				theme,
				size,
				isInvalid,
			}),
		);
	});

	return (
		<FormInputContainer
			as={RACRadioGroup}
			size={size}
			isInvalid={isInvalid}
			{...props}
		>
			<div css={radioGroupStyles(mergedTheme, { size })}>{radios}</div>
		</FormInputContainer>
	);
}

export function Radio({
	theme = {},
	size = 'md',
	children,
	isInvalid = false,
	...props
}: RadioProps) {
	const mergedTheme = mergeDeep(defaultRadioGroupTheme, theme);

	return (
		<RACRadio {...props} css={radioStyles(mergedTheme, { size, isInvalid })}>
			{composeRenderProps(children, (children) => (
				<>
					<div
						css={radioIndicatorStyles(mergedTheme, {
							size,
							isInvalid,
						})}
					/>
					{children}
				</>
			))}
		</RACRadio>
	);
}
