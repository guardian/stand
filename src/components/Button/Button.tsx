import {
	composeRenderProps,
	Button as ReactAriaButton,
} from 'react-aria-components';
import { Icon } from '../Icon/Icon';
import { buttonStyles } from './styles';
import type { ButtonProps } from './types';

export function Button({
	variant = 'primary',
	size = 'md',
	// eslint-disable-next-line @typescript-eslint/no-unused-vars -- theming support is being reworked
	theme = {},
	dangerouslyOverrideCss,
	icon,
	...props
}: ButtonProps) {
	const iconSize = size === 'xs' ? 'sm' : size; // icon size is sm for xs buttons, otherwise same as button size

	return (
		<ReactAriaButton
			{...props}
			css={[buttonStyles({ variant, size }, !!icon), dangerouslyOverrideCss]}
		>
			{composeRenderProps(props.children, (children) => (
				// TODO: isPending (loading) state - see https://react-aria.adobe.com/Button
				<>
					{icon && <Icon size={iconSize}>{icon}</Icon>}
					{children}
				</>
			))}
		</ReactAriaButton>
	);
}
