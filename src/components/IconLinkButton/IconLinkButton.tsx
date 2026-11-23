import { useEffect, useRef } from 'react';
import {
	composeRenderProps,
	Link as ReactAriaLink,
} from 'react-aria-components';
import { Icon } from '../Icon/Icon';
import { iconLinkButtonStyles } from './styles';
import type { IconLinkButtonProps } from './types';

export function IconLinkButton({
	variant = 'primary',
	size = 'md',
	symbol,
	ariaLabel,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars -- theming support is being reworked
	theme = {},
	dangerouslyOverrideCss,
	...props
}: IconLinkButtonProps) {
	const linkRef = useRef<HTMLAnchorElement>(null);

	// Set the title attribute for accessibility and tooltip support
	useEffect(() => {
		if (linkRef.current) {
			linkRef.current.title = ariaLabel;
		}
	}, [ariaLabel]);

	const iconSize = size === 'xs' ? 'sm' : size; // icon size is sm for xs buttons, otherwise same as button size

	return (
		<ReactAriaLink
			{...props}
			ref={linkRef}
			aria-label={ariaLabel}
			css={[
				iconLinkButtonStyles({ variant, size }, false, true),
				dangerouslyOverrideCss,
			]}
		>
			{composeRenderProps(props.children, (children) => (
				<Icon size={iconSize} symbol={symbol}>
					{children}
				</Icon>
			))}
		</ReactAriaLink>
	);
}
