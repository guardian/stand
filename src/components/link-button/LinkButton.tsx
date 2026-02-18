import {
	composeRenderProps,
	Link as ReactAriaLink,
} from 'react-aria-components';
import { mergeDeep } from '../../util/mergeDeep';
import { Icon } from '../icon/Icon';
import { defaultLinkButtonTheme, linkButtonStyles } from './styles';
import type { LinkButtonProps } from './types';

export function LinkButton({
	variant = 'emphasised-primary',
	size = 'md',
	theme = {},
	cssOverrides,
	icon,
	...props
}: LinkButtonProps) {
	const mergedTheme = mergeDeep(defaultLinkButtonTheme, theme);

	const iconSize = size === 'xs' ? 'sm' : size; // icon size is sm for xs buttons, otherwise same as button size

	return (
		<ReactAriaLink
			{...props}
			css={[
				linkButtonStyles(mergedTheme, { variant, size }, !!icon),
				cssOverrides,
			]}
		>
			{composeRenderProps(props.children, (children) => (
				<>
					{icon && <Icon size={iconSize}>{icon}</Icon>}
					{children}
				</>
			))}
		</ReactAriaLink>
	);
}
