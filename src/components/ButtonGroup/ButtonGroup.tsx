import { mergeDeep } from '../../util/mergeDeep';
import { buttonGroupStyles, defaultButtonGroupTheme } from './styles';
import type { ButtonGroupProps } from './types';

export const ButtonGroup = ({
	theme = {},
	children,
	cssOverrides,
}: ButtonGroupProps) => {
	const mergedTheme = mergeDeep(defaultButtonGroupTheme, theme);

	return (
		<div css={[buttonGroupStyles(mergedTheme), cssOverrides]}>{children}</div>
	);
};
