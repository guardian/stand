import { useEffect, useRef } from 'react';
import {
	composeRenderProps,
	Button as ReactAriaButton,
} from 'react-aria-components';
import { mergeDeep } from '../../util/mergeDeep';
import { Icon } from '../icon/Icon';
import { defaultIconButtonTheme, iconButtonStyles } from './styles';
import type { IconButtonProps } from './types';

export function IconButton({
	variant = 'emphasised-primary',
	size = 'md',
	symbol,
	ariaLabel,
	theme = {},
	cssOverrides,
	...props
}: IconButtonProps) {
	const mergedTheme = mergeDeep(defaultIconButtonTheme, theme);
	const buttonRef = useRef<HTMLButtonElement>(null);

	// Set the title attribute for accessibility and tooltip support
	useEffect(() => {
		if (buttonRef.current) {
			buttonRef.current.title = ariaLabel;
		}
	}, [ariaLabel]);

	const iconSize = size === 'xs' ? 'sm' : size; // icon size is sm for xs buttons, otherwise same as button size

	return (
		<ReactAriaButton
			{...props}
			ref={buttonRef}
			aria-label={ariaLabel}
			css={[
				iconButtonStyles(mergedTheme, { variant, size }, false, true),
				cssOverrides,
			]}
		>
			{composeRenderProps(props.children, (children) => (
				// TODO: isPending (loading) state - see https://react-aria.adobe.com/Button
				<Icon size={iconSize} symbol={symbol}>
					{children}
				</Icon>
			))}
		</ReactAriaButton>
	);
}
