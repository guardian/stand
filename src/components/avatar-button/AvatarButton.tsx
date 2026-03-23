import { Button as ReactAriaButton } from 'react-aria-components';
import { mergeDeep } from '../../util/mergeDeep';
import { Avatar } from '../avatar/Avatar';
import { avatarButtonStyles, defaultAvatarButtonTheme } from './styles';
import { type AvatarButtonProps } from './types';

export function AvatarButton(props: AvatarButtonProps) {
	const mergedTheme = mergeDeep(defaultAvatarButtonTheme, props.theme ?? {});

	return (
		<ReactAriaButton css={avatarButtonStyles(mergedTheme)} {...props}>
			<Avatar {...props} />
		</ReactAriaButton>
	);
}
