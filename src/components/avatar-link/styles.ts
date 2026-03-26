import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { AvatarTheme, PartialAvatarTheme } from '../avatar/styles';
import { defaultAvatarTheme } from '../avatar/styles';

export type AvatarLinkTheme = AvatarTheme;
export type PartialAvatarLinkTheme = PartialAvatarTheme;

export const defaultAvatarLinkTheme: AvatarTheme = defaultAvatarTheme;

export const avatarLinkStyles = (theme: AvatarLinkTheme): SerializedStyles => {
	return css`
		display: ${theme.shared.display};
		width: ${theme.shared.link.width};

		&[data-focus-visible],
		&:focus-visible {
			outline: ${theme.shared.link[':focus-visible'].outline};
			outline-offset: ${theme.shared.link[':focus-visible']['outline-offset']};
			border-radius: ${theme.shared['border-radius']};
		}

		text-decoration: ${theme.shared.link['text-decoration']};
	`;
};
