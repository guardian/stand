import {
	composeRenderProps,
	Button as ReactAriaButton,
} from 'react-aria-components';
import { mergeDeep } from '../../util/mergeDeep';
import { buttonStyles, defaultButtonTheme } from './styles';
import type { ButtonProps } from './types';

export function Button({
	variant = 'emphasised-primary',
	size = 'md',
	theme = {},
	cssOverrides,
	...props
}: ButtonProps) {
	const mergedTheme = mergeDeep(defaultButtonTheme, theme);

	return (
		<ReactAriaButton
			{...props}
			css={[buttonStyles(mergedTheme, { variant, size }), cssOverrides]}
		>
			{composeRenderProps(props.children, (children) => (
				// TODO: isPending (loading) state - see https://react-aria.adobe.com/Button
				<>{children}</>
			))}
		</ReactAriaButton>
	);
}
