import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { AvatarTheme, PartialAvatarTheme } from '../Avatar/styles';
import { defaultAvatarTheme } from '../Avatar/styles';

export type AvatarLinkTheme = AvatarTheme;
export type PartialAvatarLinkTheme = PartialAvatarTheme;

export const defaultAvatarLinkTheme: AvatarTheme = defaultAvatarTheme;

export const avatarLinkStyles = (theme: AvatarLinkTheme): SerializedStyles => {
	return css`
		display: ${theme.shared.display};
		width: ${theme.shared.link.width};

		&[data-focus-visible],
		&:focus-visible {
			outline: ${theme.shared.link.focusVisible.outline};
			outline-offset: ${theme.shared.link.focusVisible.outlineOffset};
			border-radius: ${theme.shared.borderRadius};
		}

		text-decoration: ${theme.shared.link.textDecoration};
	`;
};
