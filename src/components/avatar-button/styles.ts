import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { AvatarTheme, PartialAvatarTheme } from '../avatar/styles';
import { defaultAvatarTheme } from '../avatar/styles';

export type AvatarButtonTheme = AvatarTheme;
export type PartialAvatarButtonTheme = PartialAvatarTheme;

export const defaultAvatarButtonTheme: AvatarButtonTheme = defaultAvatarTheme;

export const avatarButtonStyles = (
	theme: AvatarButtonTheme,
): SerializedStyles => {
	return css`
		display: ${theme.shared.display};
		width: ${theme.shared.link.width};
		background: ${theme.shared.button.background};
		border: ${theme.shared.button.border};
		padding: ${theme.shared.button.padding};
		cursor: ${theme.shared.button.cursor};
		&[data-focus-visible],
		&:focus-visible {
			outline: ${theme.shared.link[':focus-visible'].outline};
			outline-offset: ${theme.shared.link[':focus-visible']['outline-offset']};
			border-radius: ${theme.shared['border-radius']};
		}
		&[data-disabled],
		&:disabled {
			cursor: ${theme.shared.button[':disabled'].cursor};
		}
	`;
};
