import { Link as ReactAriaLink } from 'react-aria-components';
import { mergeDeep } from '../../util/mergeDeep';
import { Avatar } from '../avatar/Avatar';
import { avatarLinkStyles, defaultAvatarLinkTheme } from './styles';
import { type AvatarLinkProps } from './types';

export function AvatarLink(props: AvatarLinkProps) {
	const mergedTheme = mergeDeep(defaultAvatarLinkTheme, props.theme ?? {});

	return (
		<ReactAriaLink css={avatarLinkStyles(mergedTheme)} {...props}>
			<Avatar {...props} />
		</ReactAriaLink>
	);
}
