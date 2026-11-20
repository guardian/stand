import {
	composeRenderProps,
	Link as ReactAriaLink,
} from 'react-aria-components';
import { Icon } from '../Icon/Icon';
import { linkButtonStyles } from './Styles';
import type { LinkButtonProps } from './types';

export function LinkButton({
	variant = 'primary',
	size = 'md',
	// eslint-disable-next-line @typescript-eslint/no-unused-vars -- theming support is being reworked
	theme = {},
	dangerouslyOverrideCss,
	icon,
	...props
}: LinkButtonProps) {
	const iconSize = size === 'xs' ? 'sm' : size; // icon size is sm for xs buttons, otherwise same as button size

	return (
		<ReactAriaLink
			{...props}
			css={[
				linkButtonStyles({ variant, size }, !!icon),
				dangerouslyOverrideCss,
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
