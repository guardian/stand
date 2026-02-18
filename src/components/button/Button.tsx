import {
	composeRenderProps,
	Button as ReactAriaButton,
} from 'react-aria-components';
import { mergeDeep } from '../../util/mergeDeep';
import { Icon } from '../icon/Icon';
import { buttonStyles, defaultButtonTheme } from './styles';
import type { ButtonProps } from './types';

export function Button({
	variant = 'emphasised-primary',
	size = 'md',
	theme = {},
	cssOverrides,
	icon,
	...props
}: ButtonProps) {
	const mergedTheme = mergeDeep(defaultButtonTheme, theme);

	const iconSize = size === 'xs' ? 'sm' : size; // icon size is sm for xs buttons, otherwise same as button size

	return (
		<ReactAriaButton
			{...props}
			css={[
				buttonStyles(mergedTheme, { variant, size }, !!icon),
				cssOverrides,
			]}
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
