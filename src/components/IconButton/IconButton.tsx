import { useEffect, useRef } from 'react';
import {
	composeRenderProps,
	Button as ReactAriaButton,
} from 'react-aria-components';
import { Icon } from '../Icon/Icon';
import { iconButtonStyles } from './styles';
import type { IconButtonProps } from './types';

export function IconButton({
	variant = 'primary',
	size = 'md',
	symbol,
	ariaLabel,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars -- theming support is being reworked
	theme = {},
	dangerouslyOverrideCss,
	...props
}: IconButtonProps) {
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
				iconButtonStyles({ variant, size }, false, true),
				dangerouslyOverrideCss,
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
