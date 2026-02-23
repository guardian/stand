import { useEffect, useRef } from 'react';
import {
	composeRenderProps,
	Link as ReactAriaLink,
} from 'react-aria-components';
import { mergeDeep } from '../../util/mergeDeep';
import { Icon } from '../icon/Icon';
import { defaultIconLinkButtonTheme, iconLinkButtonStyles } from './styles';
import type { IconLinkButtonProps } from './types';

export function IconLinkButton({
	variant = 'emphasised-primary',
	size = 'md',
	symbol,
	ariaLabel,
	theme = {},
	cssOverrides,
	...props
}: IconLinkButtonProps) {
	const mergedTheme = mergeDeep(defaultIconLinkButtonTheme, theme);
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
				iconLinkButtonStyles(mergedTheme, { variant, size }, false, true),
				cssOverrides,
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
